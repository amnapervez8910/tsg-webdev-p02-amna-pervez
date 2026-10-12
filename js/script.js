// Read viewport media flags before changing DOM content.
// Avoid a synchronous full layout from reading innerWidth after menu/stat writes.
const angaarMobile=matchMedia('(max-width:768px)').matches;
const angaarDesktop=matchMedia('(min-width:901px)').matches;
const angaarReducedMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
const angaarHover=matchMedia('(hover:hover)').matches;

// Lightweight embers: static on phones, capped at 30fps on larger screens
(()=>{
 if(angaarMobile||angaarReducedMotion)return;
 const c=document.getElementById('embers'),ctx=c.getContext('2d');
 let w=0,h=0;const resize=()=>{w=c.width=innerWidth;h=c.height=innerHeight};resize();
 addEventListener('resize',resize,{passive:true});
 const make=(fromBottom=false)=>({x:Math.random()*w,y:fromBottom?h+6:Math.random()*h,r:Math.random()*1.8+.6,v:Math.random()*.55+.25,a:Math.random()*.55+.25,d:Math.random()*6.28});
 const paint=p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.29);ctx.fillStyle=`rgba(255,${130+(p.r*35|0)},45,${p.a})`;ctx.fill()};
 if(angaarMobile||angaarReducedMotion){
  Array.from({length:18},()=>make()).forEach(paint);return;
 }
 let mx=-999,my=-999,last=0,running=true;const particles=Array.from({length:42},()=>make());
 c.parentElement.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top},{passive:true});
 document.addEventListener('visibilitychange',()=>running=!document.hidden);
 function loop(ts){requestAnimationFrame(loop);if(!running||ts-last<33)return;last=ts;ctx.clearRect(0,0,w,h);
  particles.forEach((p,i)=>{p.y-=p.v;p.d+=.025;p.x+=Math.sin(p.d)*.3;const dx=p.x-mx,dy=p.y-my,ds=dx*dx+dy*dy;if(ds<9000&&ds>1){p.x+=dx*.02;p.y+=dy*.02}p.a-=.0015;if(p.y<-8||p.a<=0)particles[i]=make(true);paint(p)});
 }
 requestAnimationFrame(loop);
})();

// Active nav link
const links=[...document.querySelectorAll('.nav-link')],secs=links.map(l=>document.querySelector(l.getAttribute('href')));
let navTick=false;addEventListener('scroll',()=>{if(navTick)return;navTick=true;requestAnimationFrame(()=>{const y=scrollY+130;let cur=0;secs.forEach((section,index)=>{if(section.offsetTop<=y)cur=index});links.forEach((link,index)=>link.classList.toggle('active',index===cur));navTick=false})},{passive:true});
// Lightweight accessible menu; Bootstrap CSS still provides the layout.
const navToggle=document.querySelector('.navbar-toggler'),navMenu=document.getElementById('menu');
navToggle.setAttribute('aria-expanded','false');
navToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('show');navToggle.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{navMenu.classList.remove('show');navToggle.setAttribute('aria-expanded','false')}));

// Slider
const track=document.getElementById('track'),n=track.children.length,dots=document.getElementById('dots');
let i=0,timer,reviewVisible=false;
// Legacy-HTML fallback permits updating script.js before index.html.
if(!dots.children.length){for(let k=0;k<n;k++){const button=document.createElement('button');button.type='button';button.setAttribute('aria-label','Review '+(k+1));if(k===0)button.classList.add('on');dots.appendChild(button)}}
// Dot markup is already rendered in HTML; only bind interactions.
[...dots.children].forEach((button,index)=>button.addEventListener('click',()=>go(index)));
function go(k){
 i=(k+n)%n;track.style.transform=`translateX(-${i*100}%)`;
 [...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));
 clearInterval(timer);if(reviewVisible&&!document.hidden)timer=setInterval(()=>go(i+1),6500);
}
prev.onclick=()=>go(i-1);next.onclick=()=>go(i+1);
const reviewObserver=new IntersectionObserver(entries=>{reviewVisible=entries[0].isIntersecting;clearInterval(timer);if(reviewVisible&&!document.hidden)timer=setInterval(()=>go(i+1),6500)},{threshold:.1});
reviewObserver.observe(document.getElementById('reviews'));
document.addEventListener('visibilitychange',()=>{clearInterval(timer);if(reviewVisible&&!document.hidden)timer=setInterval(()=>go(i+1),6500)});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{
 const item=btn.parentElement,a=item.querySelector('.faq-a'),was=item.classList.contains('open');
 document.querySelectorAll('.faq-item').forEach(f=>{f.classList.remove('open');f.querySelector('.faq-a').style.maxHeight=0;f.querySelector('.faq-q').setAttribute('aria-expanded','false')});
 if(!was){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';btn.setAttribute('aria-expanded','true')}
}));

// Loader
const hideLoader=()=>{const loader=document.getElementById('loader');if(!loader)return;loader.classList.add('done');if(angaarReducedMotion){loader.style.display='none';return}loader.addEventListener('transitionend',e=>{if(e.target===loader&&e.propertyName==='opacity')loader.style.display='none'},{once:true})};
// Brief brand introduction, independent of map/images/font downloads.
setTimeout(hideLoader,250);
// Keep the hidden fixed overlay in place to avoid a second document-wide style invalidation.

// Scroll reveal + counters
const animateReveals=!angaarMobile&&!angaarReducedMotion;
if(animateReveals)document.querySelectorAll('.dish,.slip,h2,.stat,.mi,.slider').forEach(el=>el.classList.add('rv'));
// Only old HTML needs this fallback; new HTML has complete mobile stats.
else document.querySelectorAll('.stat b[data-n]').forEach(b=>{if(b.textContent.trim()!=='0')return;b.textContent=(+b.dataset.n).toLocaleString('en',{minimumFractionDigits:+(b.dataset.d||0),maximumFractionDigits:+(b.dataset.d||0)})+(b.hasAttribute('data-plus')?'+':'')});
const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 const b=e.target.querySelector('b[data-n]');if(b)count(b);
}),{threshold:.2});
const observe=()=>document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
function count(b){
 if(angaarMobile||angaarReducedMotion){b.textContent=(+b.dataset.n).toLocaleString('en',{minimumFractionDigits:+(b.dataset.d||0),maximumFractionDigits:+(b.dataset.d||0)})+(b.hasAttribute('data-plus')?'+':'');return}

 const t=+b.dataset.n,d=+(b.dataset.d||0),pl=b.hasAttribute('data-plus')?'+':'';let st=null;
 (function f(ts){st=st||ts;const p=Math.min((ts-st)/1600,1);
  b.textContent=(t*(1-Math.pow(1-p,3))).toLocaleString('en',{minimumFractionDigits:d,maximumFractionDigits:d})+(p===1?pl:'');
  if(p<1)requestAnimationFrame(f)})(performance.now());
}

// Menu tabs
const MENU={
 'BBQ':[['Chicken Malai Boti','Creamy, charred, melts in the mouth','Rs 1,150'],['Beef Seekh Kabab','Hand-minced, ginger and green chili','Rs 1,050'],['Chicken Tikka Leg','Smoky, spicy, bone-in','Rs 650']],
 'Karahi':[['Chicken Karahi (full)','Tomato, ginger, green chili','Rs 2,400'],['Mutton Karahi (full)','Slow-cooked, bold and rich','Rs 3,900'],['Namkeen Gosht','Salt, pepper and nothing else','Rs 3,600']],
 'Breads & Sides':[['Tandoori Naan','Fresh from the tandoor wall','Rs 70'],['Garlic Naan','Butter and roasted garlic','Rs 130'],['Raita and Salad','Cool and crunchy','Rs 150']],
 'Drinks':[['Kashmiri Chai','Pink, creamy and nutty','Rs 280'],['Mint Margarita','Lemon, mint and soda','Rs 320'],['Lassi (sweet/salty)','Thick and cold','Rs 300']]
};
const tabs=document.getElementById('tabs'),items=document.getElementById('items');
function show(k){
 [...tabs.children].forEach(b=>{const selected=b.textContent===k;b.classList.toggle('on',selected);b.setAttribute('aria-pressed',String(selected))});
 items.innerHTML=MENU[k].map(([n,d,p])=>`<div class="mi rv in"><div><h3>${n}</h3><p>${d}</p></div><span class="dots-l"></span><span class="pr">${p}</span><button class="add" data-n="${n}" data-p="${p}" aria-label="Add ${n} to order">+</button></div>`).join('');
}
// Legacy-HTML fallback; new HTML avoids both initial DOM construction steps.
if(!tabs.children.length){Object.keys(MENU).forEach(k=>{const button=document.createElement('button');button.type='button';button.textContent=k;tabs.appendChild(button)})}
if(!items.children.length)show('BBQ');
// Initial buttons/menu are HTML. Update rows only after a visitor changes category.
[...tabs.children].forEach(button=>button.addEventListener('click',()=>show(button.textContent)));
observe();

// Validate booking request and show confirmation
document.getElementById('form').addEventListener('submit',e=>{
 e.preventDefault();const statusEl=document.getElementById('status');
 const nameInput=document.getElementById('name'),emailInput=document.getElementById('email'),dateInput=document.getElementById('date'),timeInput=document.getElementById('time');
 const nm=nameInput.value.trim(),em=emailInput.value.trim(),dateOk=/^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/20\d{2}$/.test(dateInput.value);
 if(!nm||!/^\S+@\S+\.\S+$/.test(em)||!dateOk||!timeInput.value){statusEl.style.color='#ff9a7a';statusEl.textContent='Enter your name, valid email, date in DD/MM/YYYY format, and preferred time.';return}
 const dateValue=dateInput.value,timeValue=timeInput.value;
 document.getElementById('bookingSuccessText').textContent=`Thanks, ${nm}. Your booking request for ${dateValue} at ${timeValue} has been received.`;
 e.currentTarget.hidden=true;document.getElementById('bookingSuccess').hidden=false;
 e.currentTarget.reset();
});
document.getElementById('anotherBooking').addEventListener('click',()=>{document.getElementById('bookingSuccess').hidden=true;const f=document.getElementById('form');f.hidden=false;document.getElementById('status').textContent='';f.querySelector('input').focus()});

// Auto-format booking date as DD/MM/YYYY
const bookingDate=document.getElementById('date');bookingDate.addEventListener('input',()=>{let v=bookingDate.value.replace(/\D/g,'').slice(0,8);if(v.length>4)v=v.slice(0,2)+'/'+v.slice(2,4)+'/'+v.slice(4);else if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);bookingDate.value=v});

// ---- Order builder ----
const cart={},rs=n=>'Rs '+n.toLocaleString('en');
items.addEventListener('click',e=>{
 const b=e.target.closest('.add');if(!b)return;
 const n=b.dataset.n;(cart[n]=cart[n]||{q:0,p:+b.dataset.p.replace(/\D/g,'')}).q++;drawCart();
});
document.getElementById('cl').addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 const n=b.dataset.n;cart[n].q+=b.dataset.a==='+'?1:-1;if(cart[n].q<1)delete cart[n];drawCart();
});
function drawCart(){
 const k=Object.keys(cart),box=document.getElementById('cart');box.hidden=!k.length;
 document.getElementById('cl').innerHTML=k.map(n=>`<div class="cl"><span>${n}</span><button data-a="-" data-n="${n}" aria-label="Less">-</button><b>${cart[n].q}</b><button data-a="+" data-n="${n}" aria-label="More">+</button><span>${rs(cart[n].p*cart[n].q)}</span></div>`).join('');
 document.getElementById('tot').textContent=rs(k.reduce((t,n)=>t+cart[n].p*cart[n].q,0));
}
document.getElementById('clr').onclick=()=>{for(const n in cart)delete cart[n];drawCart()};
document.getElementById('send').onclick=e=>{
 const k=Object.keys(cart);if(!k.length)return;
 const b=e.currentTarget,old=b.textContent;b.textContent='Order summary ready ✓';
 setTimeout(()=>b.textContent=old,2200);
};

// ---- Lightweight desktop-only parallax and cursor glow ----
if(angaarDesktop&&!angaarReducedMotion){
 const pc=document.querySelector('.hero .container');let parallaxTick=false;
 addEventListener('scroll',()=>{if(parallaxTick||scrollY>=innerHeight)return;parallaxTick=true;requestAnimationFrame(()=>{pc.style.transform=`translateY(${scrollY*.16}px)`;pc.style.opacity=1-scrollY/(innerHeight*.9);parallaxTick=false})},{passive:true});
 if(angaarHover){const g=document.getElementById('glow');addEventListener('pointermove',e=>{g.style.opacity=1;g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`},{passive:true})}
}

// Load the map only when a visitor approaches it, not during initial page load.
const locationMap=document.querySelector('iframe[data-src]');
if(locationMap){
 const loadMap=()=>{locationMap.src=locationMap.dataset.src;delete locationMap.dataset.src};
 if('IntersectionObserver' in window){
  const mapObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){loadMap();mapObserver.disconnect()}},{rootMargin:'300px'});
  mapObserver.observe(document.getElementById('contact'));
 }else loadMap();
}

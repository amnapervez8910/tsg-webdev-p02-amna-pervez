// Embers canvas: rising sparks that drift away from the cursor
(()=>{
 const c=document.getElementById('embers'),x=c.getContext('2d');
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 let w,h,mx=-999,my=-999,P=[];
 const size=()=>{w=c.width=c.offsetWidth;h=c.height=c.offsetHeight};size();addEventListener('resize',size);
 const mk=(f)=>({x:Math.random()*w,y:f?Math.random()*h:h+10,r:Math.random()*2.6+.6,v:Math.random()*.9+.4,d:Math.random()*Math.PI*2,a:Math.random()*.6+.4});
 for(let i=0;i<(innerWidth<700?45:110);i++)P.push(mk(true));
 c.parentElement.addEventListener('pointermove',e=>{const b=c.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top});
 (function loop(){
  x.clearRect(0,0,w,h);
  P.forEach((p,i)=>{
   p.y-=p.v*(1+(window.HEAT||2)*.3);p.d+=.03;p.x+=Math.sin(p.d)*.5;
   const dx=p.x-mx,dy=p.y-my,dist=Math.hypot(dx,dy);
   if(dist<110){p.x+=dx/dist*3;p.y+=dy/dist*3}
   p.a-=.0025;
   if(p.y<-10||p.a<=0)P[i]=mk(false);
   x.beginPath();x.arc(p.x,p.y,p.r,0,7);
   x.fillStyle=`rgba(255,${120+p.r*30|0},40,${p.a})`;x.shadowColor='#ff6a1f';x.shadowBlur=10;x.fill();
  });
  requestAnimationFrame(loop);
 })();
})();

// Active nav link
const links=[...document.querySelectorAll('.nav-link')],secs=links.map(l=>document.querySelector(l.getAttribute('href')));
addEventListener('scroll',()=>{
 const y=scrollY+130;let cur=0;secs.forEach((s,i)=>{if(s.offsetTop<=y)cur=i});
 links.forEach((l,i)=>l.classList.toggle('active',i===cur));
});
// Close mobile menu on link tap
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{
 const m=document.getElementById('menu');if(m.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(m).hide();
}));

// Slider
const track=document.getElementById('track'),n=track.children.length,dots=document.getElementById('dots');
let i=0,timer;
for(let k=0;k<n;k++){const b=document.createElement('button');b.setAttribute('aria-label','Review '+(k+1));b.onclick=()=>go(k);dots.appendChild(b)}
function go(k){
 i=(k+n)%n;track.style.transform=`translateX(-${i*100}%)`;
 [...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));
 clearInterval(timer);timer=setInterval(()=>go(i+1),6500);
}
prev.onclick=()=>go(i-1);next.onclick=()=>go(i+1);go(0);

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>btn.addEventListener('click',()=>{
 const item=btn.parentElement,a=item.querySelector('.faq-a'),was=item.classList.contains('open');
 document.querySelectorAll('.faq-item').forEach(f=>{f.classList.remove('open');f.querySelector('.faq-a').style.maxHeight=0;f.querySelector('.faq-q').setAttribute('aria-expanded','false')});
 if(!was){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';btn.setAttribute('aria-expanded','true')}
}));

// Loader
addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('done'),1200));

// Scroll reveal + counters
document.querySelectorAll('.dish,.slip,h2,.stat,.mi,.slider').forEach(el=>el.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{
 if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
 const b=e.target.querySelector('b[data-n]');if(b)count(b);
}),{threshold:.2});
const observe=()=>document.querySelectorAll('.rv:not(.in)').forEach(el=>io.observe(el));
function count(b){
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
 [...tabs.children].forEach(b=>b.classList.toggle('on',b.textContent===k));
 items.innerHTML=MENU[k].map(([n,d,p])=>`<div class="mi rv in"><div><h3>${n}</h3><p>${d}</p></div><span class="dots-l"></span><span class="pr">${p}</span><button class="add" data-n="${n}" data-p="${p}" aria-label="Add ${n} to order">+</button></div>`).join('');
}
Object.keys(MENU).forEach(k=>{const b=document.createElement('button');b.textContent=k;b.onclick=()=>show(k);tabs.appendChild(b)});
show('BBQ');observe();

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

// ---- Parallax + cursor glow ----
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
 const pc=document.querySelector('.hero .container');
 addEventListener('scroll',()=>{if(scrollY<innerHeight){pc.style.transform=`translateY(${scrollY*.2}px)`;pc.style.opacity=1-scrollY/(innerHeight*.85)}},{passive:true});
 if(matchMedia('(hover:hover)').matches){
  const g=document.getElementById('glow');let x=0,y=0,tx=0,ty=0;
  addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;g.style.opacity=1});
  (function f(){x+=(tx-x)*.12;y+=(ty-y)*.12;g.style.transform=`translate(${x}px,${y}px)`;requestAnimationFrame(f)})();
 }
}

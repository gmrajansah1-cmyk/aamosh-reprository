const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
addEventListener("scroll",()=>{let h=document.documentElement.scrollHeight-innerHeight;$(".progress").style.width=(scrollY/h*100)+"%"});
$(".hamb").onclick=()=>{$("nav").classList.toggle("nav-open")};$$("nav a").forEach(a=>a.onclick=()=>$("nav").classList.remove("nav-open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});$$(".reveal").forEach(e=>io.observe(e));
$$(".project").forEach(c=>{c.onpointermove=e=>{if(innerWidth<801)return;let r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-8px)`};c.onpointerleave=()=>c.style.transform=""});

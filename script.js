const r=document.documentElement,t=document.getElementById("theme"),n=document.getElementById("nav"),m=document.getElementById("menu");
const set=v=>{r.dataset.theme=v;t.textContent=v==="dark"?"☀":"☾";try{localStorage.setItem("theme",v)}catch(e){}};
let s=null;try{s=localStorage.getItem("theme")}catch(e){}
set(s||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"));
t.onclick=()=>set(r.dataset.theme==="dark"?"light":"dark");
m.onclick=()=>{const o=n.classList.toggle("open");m.setAttribute("aria-expanded",o)};
document.getElementById("y").textContent=new Date().getFullYear();

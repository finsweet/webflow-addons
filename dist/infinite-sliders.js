(()=>{var y=class{static activateAlerts(){this.alertsActivated=!0}static alert(o,b){if(this.alertsActivated&&window.alert(o),b==="error")throw new Error(o)}};y.alertsActivated=!1;var h=y;var S=(f,o=!0)=>f.cloneNode(o),c=S;function q({querySelector:f,currentScript:o}){let b=f||(o==null?void 0:o.getAttribute("fs-selector"))||".w-slider";document.querySelectorAll(b).forEach(r=>{let e=0,n=r.querySelector(".w-slider-mask"),u=r.querySelectorAll(".w-slide"),a=u.length,g=r.querySelector(".w-slider-arrow-right"),E=r.querySelector(".w-slider-arrow-left");r.querySelectorAll(".w-slider-dot").forEach((s,t)=>{let i=t+1;s.addEventListener("click",()=>{r.querySelectorAll('[fs-appended-slide-element = "true"]').forEach(d=>{d.remove()}),e=i;let p=e-1,v=n.clientWidth*p,m=0;for(;m<p;){let d=c(u[m]);d.setAttribute("fs-appended-slide-element","true"),n.appendChild(d),m=m+1}r.querySelectorAll('[fs-appended-slide-element = "true"]').forEach(d=>{d.style.transform="translateX(-"+v+"px)"})})}),g.addEventListener("click",()=>{if(e=e+1,e===a)return e=0,r.querySelectorAll('[fs-appended-slide-element = "true"]').forEach(p=>{p.remove()}),0;let s=c(u[e-1]);s.setAttribute("fs-appended-slide-element","true"),n.appendChild(s);let t=n.clientWidth*e;r.querySelectorAll('[fs-appended-slide-element = "true"]').forEach(l=>{l.style.transform="translateX(-"+t+"px)"})}),E.addEventListener("click",()=>{e=e-1;let s=r.querySelectorAll(".w-slide");if(e===a-1&&s.forEach((t,i)=>{t.getAttribute("fs-appended-slide-element")&&i>a&&t.remove()}),e<1){e=a;let t=1;for(;t<e;){let i=c(u[t-1]),l=n.clientWidth*(e-1);i.setAttribute("fs-appended-slide-element","true"),n.appendChild(i),i.style.transform="translateX(-"+l+"px)",t=t+1}return 0}s.forEach((t,i)=>{if(t.getAttribute("fs-appended-slide-element")){i>a+1&&t.remove(),e<a-2&&t.remove();let l=n.clientWidth*(e-1);t.style.transform="translateX(-"+l+"px)"}})})})}var T=q;var{currentScript:M}=document;window.Webflow=window.Webflow||[];window.Webflow.push(()=>T({currentScript:M}));})();

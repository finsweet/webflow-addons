(()=>{var c=class{static activateAlerts(){this.alertsActivated=!0}static alert(r,u){if(this.alertsActivated&&window.alert(r),u==="error")throw new Error(r)}};c.alertsActivated=!1;var m=c;var v=(d,r=!0)=>d.cloneNode(r),f=v;function F({querySelector:d,currentScript:r}){let u=d||(r==null?void 0:r.getAttribute("fs-selector"))||".w-slider";document.querySelectorAll(u).forEach(o=>{let e=0,l=o.querySelector(".w-slider-mask"),p=o.querySelectorAll(".w-slide"),n=p.length,h=o.querySelector(".w-slider-arrow-right"),x=o.querySelector(".w-slider-arrow-left");h.addEventListener("click",()=>{if(e=e+1,e===n)return e=0,o.querySelectorAll('[fs-appended-slide-element = "true"]').forEach(T=>{T.remove()}),0;let a=f(p[e-1]);a.setAttribute("fs-appended-slide-element","true"),l.appendChild(a);let t=l.clientWidth*e;o.querySelectorAll('[fs-appended-slide-element = "true"]').forEach(s=>{s.style.transform="translateX(-"+t+"px)"})}),x.addEventListener("click",()=>{e=e-1;let a=o.querySelectorAll(".w-slide");if(e===n-1&&a.forEach((t,i)=>{t.getAttribute("fs-appended-slide-element")&&i>n&&t.remove()}),e<1){e=n;let t=1;for(;t<e;){let i=f(p[t-1]),s=l.clientWidth*(e-1);i.setAttribute("fs-appended-slide-element","true"),l.appendChild(i),i.style.transform="translateX(-"+s+"px)",t=t+1}return 0}a.forEach((t,i)=>{if(t.getAttribute("fs-appended-slide-element")){i>n+1&&t.remove(),e<n-2&&t.remove();let s=l.clientWidth*(e-1);t.style.transform="translateX(-"+s+"px)"}})})})}var b=F;var{currentScript:H}=document;window.Webflow=window.Webflow||[];window.Webflow.push(()=>b({currentScript:H}));})();

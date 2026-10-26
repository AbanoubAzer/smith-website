import"./hoisted.xUernSFG.js";const n=document.getElementById("quote-form"),o=document.getElementById("submit-quote-btn"),l=document.getElementById("files"),t=document.getElementById("file-upload-label"),s=document.getElementById("form-success-message"),i=document.getElementById("form-header-area"),E=document.getElementById("reset-form-btn");l?.addEventListener("change",()=>{if(l.files&&l.files.length>0){const c=Array.from(l.files).map(e=>e.name).join(", ");t&&(t.textContent=`✓ Selected: ${c}`,t.style.color="var(--green-700)",t.style.fontWeight="600")}});n?.addEventListener("submit",c=>{if(c.preventDefault(),!n.checkValidity()){n.reportValidity();return}o&&(o.disabled=!0,o.innerHTML="Submitting Request... ⏳");const e=new FormData(n),a=e.get("fullName")||"",d=e.get("email")||"",u=e.get("phone")||"",y=e.get("country")||"",f=e.get("productService")||"",g=e.get("quantity")||"",p=e.get("message")||"",b=`https://wa.me/8617132060963?text=${encodeURIComponent(`Hello SMITH Co. LTD,

I just submitted a quote request on your website:
• Name: ${a}
• Email: ${d}
• Phone: ${u}
• Country: ${y}
• Product/Service: ${f}
• Estimated Quantity: ${g||"N/A"}
• Message: ${p}`)}`;setTimeout(()=>{if(n.style.display="none",i&&(i.style.display="none"),s){s.style.display="block";const m=document.getElementById("success-wa-btn");m&&(m.href=b);const r=document.getElementById("success-user-name");r&&(r.textContent=a),s.scrollIntoView({behavior:"smooth",block:"center"})}},400)});E?.addEventListener("click",()=>{n.reset(),t&&(t.textContent="Click to upload or drag & drop",t.style.color="",t.style.fontWeight=""),o&&(o.disabled=!1,o.innerHTML="Submit My Request →"),s&&(s.style.display="none"),i&&(i.style.display="block"),n.style.display="flex"});

import"./hoisted.DwxMXx-7.js";const d=document.getElementById("send-wa-inquiry-btn"),s=document.getElementById("send-email-inquiry-btn"),y=new URLSearchParams(window.location.search),a=y.get("product");if(a){const e=document.getElementById("product-service"),n=document.getElementById("message");if(e){let o=!1;for(let t=0;t<e.options.length;t++){const c=e.options[t].text.toLowerCase(),l=a.toLowerCase();if(l.includes(c)||c.includes(l)){e.selectedIndex=t,o=!0;break}}if(!o){const t=document.createElement("option");t.value=a,t.text=`Model: ${a}`,t.selected=!0,e.appendChild(t)}}n&&!n.value&&(n.value=`Hello, I would like to inquire about specifications, available dimensions, and pricing for: ${a}.`)}function u(){const e=document.getElementById("full-name")?.value.trim()||"",n=document.getElementById("company-name")?.value.trim()||"",o=document.getElementById("email")?.value.trim()||"",t=document.getElementById("phone")?.value.trim()||"",c=document.getElementById("country")?.value.trim()||"",l=document.getElementById("product-service")?.value||"",r=document.getElementById("quantity")?.value.trim()||"",m=document.getElementById("project-location")?.value.trim()||"",i=document.getElementById("message")?.value.trim()||"";return e?!t&&!o?(alert("Please enter your phone number or email address."),document.getElementById("phone")?.focus(),null):i?{fullName:e,companyName:n,email:o,phone:t,country:c,productService:l,quantity:r,projectLocation:m,message:i}:(alert("Please enter your product specifications or message."),document.getElementById("message")?.focus(),null):(alert("Please enter your full name."),document.getElementById("full-name")?.focus(),null)}d?.addEventListener("click",()=>{const e=u();if(!e)return;const n=encodeURIComponent(`Hello EITCO Ltd (Elena International Trading Co., Limited),

I have an inquiry from your website:
• Name: ${e.fullName}
• Company: ${e.companyName||"N/A"}
• Email: ${e.email||"N/A"}
• Phone: ${e.phone}
• Country: ${e.country||"N/A"}
• Product/Service: ${e.productService||"N/A"}
• Quantity: ${e.quantity||"N/A"}
• Project Location: ${e.projectLocation||"N/A"}
• Message: ${e.message}`);window.open(`https://wa.me/8618616232842?text=${n}`,"_blank")});s?.addEventListener("click",()=>{const e=u();if(!e)return;const n=encodeURIComponent(`Project Inquiry from ${e.fullName} — EITCO Ltd`),o=encodeURIComponent(`Hello EITCO Ltd,

I would like to inquire about your architectural products and services:

• Full Name: ${e.fullName}
• Company: ${e.companyName||"N/A"}
• Email: ${e.email||"N/A"}
• Phone: ${e.phone}
• Country: ${e.country||"N/A"}
• Product/Service: ${e.productService||"N/A"}
• Quantity: ${e.quantity||"N/A"}
• Location: ${e.projectLocation||"N/A"}

Project Specifications / Message:
${e.message}

Thank you!`);window.location.href=`mailto:eliagadallah@eit-co.com?subject=${n}&body=${o}`});

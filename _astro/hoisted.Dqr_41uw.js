import"./hoisted.DgmOKa3u.js";const i=document.getElementById("send-wa-inquiry-btn"),d=document.getElementById("send-email-inquiry-btn");function c(){const e=document.getElementById("full-name")?.value.trim()||"",t=document.getElementById("company-name")?.value.trim()||"",n=document.getElementById("email")?.value.trim()||"",o=document.getElementById("phone")?.value.trim()||"",u=document.getElementById("country")?.value.trim()||"",m=document.getElementById("product-service")?.value||"",r=document.getElementById("quantity")?.value.trim()||"",l=document.getElementById("project-location")?.value.trim()||"",a=document.getElementById("message")?.value.trim()||"";return e?!o&&!n?(alert("Please enter your phone number or email address."),document.getElementById("phone")?.focus(),null):a?{fullName:e,companyName:t,email:n,phone:o,country:u,productService:m,quantity:r,projectLocation:l,message:a}:(alert("Please enter your product specifications or message."),document.getElementById("message")?.focus(),null):(alert("Please enter your full name."),document.getElementById("full-name")?.focus(),null)}i?.addEventListener("click",()=>{const e=c();if(!e)return;const t=encodeURIComponent(`Hello SMITH Co. LTD,

I have an inquiry from your website:
• Name: ${e.fullName}
• Company: ${e.companyName||"N/A"}
• Email: ${e.email||"N/A"}
• Phone: ${e.phone}
• Country: ${e.country||"N/A"}
• Product/Service: ${e.productService||"N/A"}
• Quantity: ${e.quantity||"N/A"}
• Location: ${e.projectLocation||"N/A"}
• Message: ${e.message}`);window.open(`https://wa.me/8617132060963?text=${t}`,"_blank")});d?.addEventListener("click",()=>{const e=c();if(!e)return;const t=encodeURIComponent(`Project Inquiry from ${e.fullName} — SMITH Co. LTD`),n=encodeURIComponent(`Hello SMITH Co. LTD,

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

Thank you!`);window.location.href=`mailto:info@smithcoltd.com?subject=${t}&body=${n}`});

import"./hoisted.DwxMXx-7.js";const i=document.getElementById("inquiry-form"),d=document.getElementById("send-wa-inquiry-btn"),l=document.getElementById("send-email-inquiry-btn"),s=new URLSearchParams(window.location.search),o=s.get("product");if(o){const e=document.getElementById("product-service"),n=document.getElementById("message");if(e){let c=!1;for(let t=0;t<e.options.length;t++){const a=e.options[t].text.toLowerCase(),r=o.toLowerCase();if(r.includes(a)||a.includes(r)){e.selectedIndex=t,c=!0;break}}if(!c){const t=document.createElement("option");t.value=o,t.text=`الموديل المطلوب: ${o}`,t.selected=!0,e.appendChild(t)}}n&&!n.value&&(n.value=`مرحباً، أود الاستفسار عن المواصفات الهندسية، المقاسات المتاحة، وعرض الأسعار للموديل: ${o}.`)}function m(){if(!i)return null;const e=new FormData(i);return{fullName:e.get("fullName")||"",companyName:e.get("companyName")||"",email:e.get("email")||"",phone:e.get("phone")||"",country:e.get("country")||"",productService:e.get("productService")||"",quantity:e.get("quantity")||"",projectLocation:e.get("projectLocation")||"",message:e.get("message")||""}}function u(e){return e?!e.fullName.trim()||!e.phone.trim()||!e.country.trim()||!e.productService||!e.message.trim()?(alert("يرجى ملء كافة الحقول الإلزامية (*) قبل الإرسال."),!1):!0:!1}d?.addEventListener("click",()=>{const e=m();if(!u(e)||!e)return;const n=`*طلب عرض سعر واستشارة جديدة (EITCO Ltd)*%0A%0A*الاسم:* ${encodeURIComponent(e.fullName)}%0A`+(e.companyName?`*الشركة:* ${encodeURIComponent(e.companyName)}%0A`:"")+(e.email?`*البريد:* ${encodeURIComponent(e.email)}%0A`:"")+`*الهاتف:* ${encodeURIComponent(e.phone)}%0A*الدولة:* ${encodeURIComponent(e.country)}%0A*المنتج/الخدمة:* ${encodeURIComponent(e.productService)}%0A`+(e.quantity?`*الكمية التقديرية:* ${encodeURIComponent(e.quantity)}%0A`:"")+(e.projectLocation?`*موقع المشروع:* ${encodeURIComponent(e.projectLocation)}%0A`:"")+`*المواصفات والرسالة:*%0A${encodeURIComponent(e.message)}`;window.open(`https://wa.me/8618616232842?text=${n}`,"_blank")});l?.addEventListener("click",()=>{const e=m();if(!u(e)||!e)return;const n=encodeURIComponent(`طلب استفسار: ${e.productService} - ${e.fullName}`),c=encodeURIComponent(`طلب عرض سعر جديد (EITCO Ltd):

الاسم: ${e.fullName}
الشركة: ${e.companyName||"N/A"}
البريد: ${e.email||"N/A"}
الهاتف: ${e.phone}
الدولة: ${e.country}
المنتج / الخدمة: ${e.productService}
الكمية: ${e.quantity||"N/A"}
الموقع: ${e.projectLocation||"N/A"}

الرسالة والمواصفات:
${e.message}`);window.location.href=`mailto:eliagadallah@eit-co.com?subject=${n}&body=${c}`});

import"./hoisted.DwxMXx-7.js";const n=document.getElementById("inquiry-form"),r=document.getElementById("send-wa-inquiry-btn"),m=document.getElementById("send-email-inquiry-btn");function o(){if(!n)return null;const e=new FormData(n);return{fullName:e.get("fullName")||"",companyName:e.get("companyName")||"",email:e.get("email")||"",phone:e.get("phone")||"",country:e.get("country")||"",productService:e.get("productService")||"",quantity:e.get("quantity")||"",projectLocation:e.get("projectLocation")||"",message:e.get("message")||""}}function c(e){return e?!e.fullName.trim()||!e.phone.trim()||!e.country.trim()||!e.productService||!e.message.trim()?(alert("يرجى ملء كافة الحقول الإلزامية (*) قبل الإرسال."),!1):!0:!1}r?.addEventListener("click",()=>{const e=o();if(!c(e)||!e)return;const t=`*طلب عرض سعر واستشارة جديدة (EITCO Ltd)*%0A%0A*الاسم:* ${encodeURIComponent(e.fullName)}%0A`+(e.companyName?`*الشركة:* ${encodeURIComponent(e.companyName)}%0A`:"")+(e.email?`*البريد:* ${encodeURIComponent(e.email)}%0A`:"")+`*الهاتف:* ${encodeURIComponent(e.phone)}%0A*الدولة:* ${encodeURIComponent(e.country)}%0A*المنتج/الخدمة:* ${encodeURIComponent(e.productService)}%0A`+(e.quantity?`*الكمية التقديرية:* ${encodeURIComponent(e.quantity)}%0A`:"")+(e.projectLocation?`*موقع المشروع:* ${encodeURIComponent(e.projectLocation)}%0A`:"")+`*المواصفات والرسالة:*%0A${encodeURIComponent(e.message)}`;window.open(`https://wa.me/8618616232842?text=${t}`,"_blank")});m?.addEventListener("click",()=>{const e=o();if(!c(e)||!e)return;const t=encodeURIComponent(`طلب استفسار: ${e.productService} - ${e.fullName}`),a=encodeURIComponent(`طلب عرض سعر جديد (EITCO Ltd):

الاسم: ${e.fullName}
الشركة: ${e.companyName||"N/A"}
البريد: ${e.email||"N/A"}
الهاتف: ${e.phone}
الدولة: ${e.country}
المنتج / الخدمة: ${e.productService}
الكمية: ${e.quantity||"N/A"}
الموقع: ${e.projectLocation||"N/A"}

الرسالة والمواصفات:
${e.message}`);window.location.href=`mailto:eliagadallah@eit-co.com?subject=${t}&body=${a}`});

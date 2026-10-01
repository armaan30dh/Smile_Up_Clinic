const menuToggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav");
if(menuToggle)menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();

function data(){
 const d={name:document.getElementById("name").value.trim(),phone:document.getElementById("phone").value.trim(),date:document.getElementById("date").value,time:document.getElementById("time").value,service:document.getElementById("service").value,message:document.getElementById("message").value.trim()};
 if(!d.name||!d.phone||!d.date||!d.time||!d.service||!document.getElementById("consent").checked){alert("Please complete the required fields and consent checkbox.");return null}return d;
}
document.getElementById("emailBtn").addEventListener("click",()=>{const d=data();if(!d)return;const subject=encodeURIComponent(`Appointment Request - ${d.name}`),body=encodeURIComponent(`Hello Smile Up Clinic,\n\nI would like to request an appointment.\n\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service}\nPreferred date: ${d.date}\nPreferred time: ${d.time}\nMessage: ${d.message||"N/A"}\n\nPlease contact me to confirm availability.\n\nThank you.`);location.href=`mailto:smileupdentalclinic16@gmail.com?subject=${subject}&body=${body}`});
document.getElementById("whatsappBtn").addEventListener("click",()=>{const d=data();if(!d)return;const m=encodeURIComponent(`Hello Smile Up Clinic,\n\nI would like to request an appointment.\n\nName: ${d.name}\nPhone: ${d.phone}\nService: ${d.service}\nPreferred date: ${d.date}\nPreferred time: ${d.time}\nMessage: ${d.message||"N/A"}\n\nPlease contact me to confirm availability.`);window.open(`https://wa.me/919068634000?text=${m}`,"_blank","noopener")});

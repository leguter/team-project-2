import{A as y,S as L,N as b,K as k,M,a as A,i as S,b as u}from"./assets/vendor-b93c9635.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const j=document.querySelector(".name-list-menu"),x=document.querySelector(".backdrop-for-btn-menu");j.addEventListener("click",I);function I(){x.classList.toggle("is-open-for-btn-menu")}(()=>{const e=document.querySelector(".backdrop"),o=document.querySelector(".btn-open-burger"),n=document.querySelector("#menu-modal-close"),c=document.querySelector("#js-close-menu-1"),t=document.querySelector("#js-close-menu-3"),s=document.querySelector("#js-close-menu-2"),l=document.querySelector("#js-close-menu-4"),a=()=>{const p=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!p),e.classList.toggle("is-open")};o.addEventListener("click",a),n.addEventListener("click",a),c.addEventListener("click",a),s.addEventListener("click",a),t.addEventListener("click",a),l.addEventListener("click",a),window.matchMedia("(min-width: 375px)").addEventListener("change",p=>{p.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1))})})();new y(".accord-container",{openOnInit:[0]});new L(".slider",{modules:[b,k,M],navigation:{nextEl:".button-next"},centeredSlides:!1,loop:!0,spaceBetween:0,slidesPerView:2,width:260,breakpoints:{768:{slidesPerView:3,width:600},1440:{slidesPerView:6,width:1200}}});new A(".swiper-container",{navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"},slidesPerView:1});new y(".faq-accordion-container");const B=document.querySelector(".feedback-list");async function O(){u.defaults.baseURL="https://portfolio-js.b.goit.study";try{return(await u.get("/api/reviews")).data}catch(e){console.log(e)}}O().then(e=>{e.length===0?S.error({message:"Not found"}):(P(e),new L(".swiper",{modules:[b],navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"},height:324,width:344,direction:"horizontal",slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:2,width:704},1440:{slidesPerView:4,width:1376,height:302}}}))});function P(e){const o=e.map(n=>`<li class="reviews-list swiper-slide">
            
                <img class="reviews-img" 
                    src="${n.avatar_url}" alt="Natalia" width="48" height="48">
                <h3 class="reviews-list-title">
                    ${n.author}
                </h3>
                <p class="reviews-list-text">
                    ${n.review}
                </p>
                </li>`).join("");B.insertAdjacentHTML("beforeend",o)}const h=document.querySelector(".marquee");window.matchMedia("(prefers-reduced-motion: reduce)").matches||N();function N(){h.setAttribute("data-animated",!0);const e=h.querySelectorAll(".marquee-inner");Array.from(e).forEach(n=>{Array.from(n.children).forEach(t=>{const s=t.cloneNode(!0);s.setAttribute("aria-hidden",!0),n.classList.add("duplicated"),n.appendChild(s)})})}const r=document.querySelector("#work-together-input-email"),F=document.querySelector("#work-together-input-comments"),f=document.querySelector(".email-succes"),v=document.querySelector(".email-invalid"),w=document.querySelector(".footer-form"),d=document.querySelector(".modal-backdrop-footer"),D=document.querySelector(".modal-footer"),m="work-together";let i={email:"",comments:""};u.defaults.baseURL="https://portfolio-js.b.goit.study";if(localStorage.getItem(m)){const e=localStorage.getItem(m);i=JSON.parse(e),F.value=i.comments,r.value=i.email}r.addEventListener("input",E);r.addEventListener("focus",E);w.addEventListener("input",V);w.addEventListener("submit",$);r.addEventListener("blur",e=>{e.preventDefault(),f.classList.add("visually-hidden"),v.classList.add("visually-hidden"),r.classList.remove("input-succes-js"),r.classList.remove("input-invalid-js")});function E(e){e.preventDefault(),f.classList.add("visually-hidden"),v.classList.add("visually-hidden"),r.classList.remove("input-succes-js"),r.classList.remove("input-invalid-js"),e.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/)?(f.classList.remove("visually-hidden"),r.classList.add("input-succes-js")):(v.classList.remove("visually-hidden"),r.classList.add("input-invalid-js"))}function V(e){e.preventDefault(),e.target.name==="client-email"?i.email=e.target.value.trim():e.target.name==="client-comments"&&(i.comments=e.target.value.trim()),localStorage.setItem(m,JSON.stringify(i))}async function $(e){e.preventDefault(),await u.post("/api/requests",{email:i.email,comment:i.comments}).then(function(o){localStorage.removeItem(m),w.reset(),i={email:"",comments:""};const n=document.querySelector(".modal-footer-title"),c=document.querySelector(".modal-footer-text");n.remove(),c.remove();const t=`
        <p class="modal-footer-title">${o.data.title}</p>
            <p class="modal-footer-text">${o.data.message}</p>
        `;D.insertAdjacentHTML("beforeend",t),d.classList.remove("modal-backdrop-footer-closed"),d.addEventListener("click",T),document.addEventListener("keydown",s=>{s.key==="Escape"&&d.classList.add("modal-backdrop-footer-closed")})}).catch(function(o){console.log(o),S.error({title:"Error",message:"Something went wrong",position:"center"})})}function T(e){e.preventDefault(),d.classList.add("modal-backdrop-footer-closed")}const g=document.querySelector(".go-top");window.addEventListener("scroll",z);g.addEventListener("click",q);function z(){const e=window.pageYOffset,o=document.documentElement.clientHeight;e>o?g.classList.add("go-top--show"):g.classList.remove("go-top--show")}function q(){window.pageYOffset>0&&(window.scrollBy(0,-50),setTimeout(q,0))}
//# sourceMappingURL=commonHelpers.js.map

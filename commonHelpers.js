import{A as L,S as b,i as h,a as S,N as E,b as u}from"./assets/vendor-4967009f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const q=document.querySelector(".name-list-menu"),k=document.querySelector(".backdrop-for-btn-menu");q.addEventListener("click",M);function M(){k.classList.toggle("is-open-for-btn-menu")}(()=>{const e=document.querySelector(".backdrop"),s=document.querySelector(".btn-open-burger"),n=document.querySelector("#menu-modal-close"),c=document.querySelector("#js-close-menu-1"),t=document.querySelector("#js-close-menu-3"),o=document.querySelector("#js-close-menu-2"),l=document.querySelector("#js-close-menu-4"),a=()=>{const p=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!p),e.classList.toggle("is-open")};s.addEventListener("click",a),n.addEventListener("click",a),c.addEventListener("click",a),o.addEventListener("click",a),t.addEventListener("click",a),l.addEventListener("click",a),window.matchMedia("(min-width: 375px)").addEventListener("change",p=>{p.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();new L(".accord-container",{openOnInit:[0]});new b(".swiper",{navigation:{nextEl:".swiper-button-next"},loop:!0,slidesPerView:2,breakpoints:{344:{slidesPerView:3},705:{slidesPerView:6}}});new L(".faq-accordion-container");const A=document.querySelector(".feedback-list");async function j(){u.defaults.baseURL="https://portfolio-js.b.goit.study";try{return(await u.get("/api/reviews")).data}catch(e){console.log(e)}}j().then(e=>{e.length===0?h.error({message:"Not found"}):(I(e),new S(".swiper",{modules:[E],navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"},centerInsufficientSlides:!0,direction:"horizontal",slidesPerView:1,spaceBetween:16,breakpoints:{344:{slidesPerView:2},705:{slidesPerView:4}}}))});function I(e){const s=e.map(n=>`<li class="reviews-list swiper-slide">
            
                <img class="reviews-img" 
                    src="${n.avatar_url}" alt="Natalia" width="48" height="48">
                <h3 class="reviews-list-title">
                    ${n.author}
                </h3>
                <p class="reviews-list-text">
                    ${n.review}
                </p>
                </li>`).join("");A.insertAdjacentHTML("beforeend",s)}const y=document.querySelector(".marquee");window.matchMedia("(prefers-reduced-motion: reduce)").matches||x();function x(){y.setAttribute("data-animated",!0);const e=y.querySelectorAll(".marquee-inner");Array.from(e).forEach(n=>{Array.from(n.children).forEach(t=>{const o=t.cloneNode(!0);o.setAttribute("aria-hidden",!0),n.classList.add("duplicated"),n.appendChild(o)})})}const r=document.querySelector("#work-together-input-email"),N=document.querySelector("#work-together-input-comments"),f=document.querySelector(".email-succes"),v=document.querySelector(".email-invalid"),g=document.querySelector(".footer-form"),d=document.querySelector(".modal-backdrop-footer"),O=document.querySelector(".modal-footer"),m="work-together";let i={email:"",comments:""};u.defaults.baseURL="https://portfolio-js.b.goit.study";if(localStorage.getItem(m)){const e=localStorage.getItem(m);i=JSON.parse(e),N.value=i.comments,r.value=i.email}r.addEventListener("input",w);r.addEventListener("focus",w);g.addEventListener("input",P);g.addEventListener("submit",B);r.addEventListener("blur",e=>{e.preventDefault(),f.classList.add("visually-hidden"),v.classList.add("visually-hidden"),r.classList.remove("input-succes-js"),r.classList.remove("input-invalid-js")});function w(e){e.preventDefault(),f.classList.add("visually-hidden"),v.classList.add("visually-hidden"),r.classList.remove("input-succes-js"),r.classList.remove("input-invalid-js"),e.target.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/)?(f.classList.remove("visually-hidden"),r.classList.add("input-succes-js")):(v.classList.remove("visually-hidden"),r.classList.add("input-invalid-js"))}function P(e){e.preventDefault(),e.target.name==="client-email"?i.email=e.target.value.trim():e.target.name==="client-comments"&&(i.comments=e.target.value.trim()),localStorage.setItem(m,JSON.stringify(i))}async function B(e){e.preventDefault(),await u.post("/api/requests",{email:i.email,comment:i.comments}).then(function(s){localStorage.removeItem(m),g.reset(),i={email:"",comments:""};const n=document.querySelector(".modal-footer-title"),c=document.querySelector(".modal-footer-text");n.remove(),c.remove();const t=`
        <p class="modal-footer-title">${s.data.title}</p>
            <p class="modal-footer-text">${s.data.message}</p>
        `;O.insertAdjacentHTML("beforeend",t),d.classList.remove("modal-backdrop-footer-closed"),d.addEventListener("click",F),document.addEventListener("keydown",o=>{o.key==="Escape"&&d.classList.add("modal-backdrop-footer-closed")})}).catch(function(s){console.log(s),h.error({title:"Error",message:"Something went wrong",position:"center"})})}function F(e){e.preventDefault(),d.classList.add("modal-backdrop-footer-closed")}
//# sourceMappingURL=commonHelpers.js.map

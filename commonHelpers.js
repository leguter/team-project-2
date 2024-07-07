import{A as u,S as d,N as p,P as m,i as f,a as l}from"./assets/vendor-70682666.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=document.querySelector(".name-list-menu"),w=document.querySelector(".backdrop-for-btn-menu");g.addEventListener("click",v);function v(){w.classList.toggle(".is-open-for-btn-menu")}(()=>{const n=document.querySelector(".backdrop"),s=document.querySelector(".btn-open-burger"),o=document.querySelector("#menu-modal-close"),c=document.querySelector("#js-close-menu-1"),e=document.querySelector("#js-close-menu-3"),t=document.querySelector("#js-close-menu-2"),i=document.querySelector("#js-close-menu-4"),r=()=>{const a=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!a),n.classList.toggle("is-open")};s.addEventListener("click",r),o.addEventListener("click",r),c.addEventListener("click",r),t.addEventListener("click",r),e.addEventListener("click",r),i.addEventListener("click",r),window.matchMedia("(min-width: 375px)").addEventListener("change",a=>{a.matches&&(n.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))})})();new u(".accord-container",{openOnInit:[0]});new d(".swiper",{modules:[p,m]});new u(".faq-accordion-container");const y=document.querySelector(".feedback-list");async function b(){l.defaults.baseURL="https://portfolio-js.b.goit.study";try{return(await l.get("/api/reviews")).data}catch(n){console.log(n)}}b().then(n=>{n.length===0?f.error({message:"Not found"}):(console.log(n),h(n))});function h(n){const s=n.map(o=>`<li class="reviews-list"><div class="swiper-reviews">
            <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img class="reviews-img" 
                    src="${o.avatar_url}" alt="Natalia" width="48" height="48">
                <h3 class="reviews-list-title">
                    ${o.author}
                </h3>
                <p class="reviews-list-text">
                    ${o.review}
                </p>
                </div>
                </div>
                </div>
                </li>`).join("");y.insertAdjacentHTML("beforeend",s)}new d(".swiper-reviews",{direction:"vertical",loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-btn-last",prevEl:".swiper-btn-next"},breakpointsBase:"window"});
//# sourceMappingURL=commonHelpers.js.map

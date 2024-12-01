import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),c=document.querySelector(".input"),d=document.querySelector(".gallery");document.querySelector(".loading");const g="https://pixabay.com/api/?";let n="",o=[];c.addEventListener("input",a=>{n=a.target.value});function y(){if(n=c.value.trim(),!n){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p();let a={key:"47340779-69736f13d332e70374a06741a",q:n,image_tpye:"photo",orientation:"horizontal",safesearch:!0};const s=new URLSearchParams(a);fetch(`${g}${s.toString()}`).then(r=>r.json()).then(r=>{o=r.hits,o.length===0?(u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),p()):h()}).catch(r=>console.error(r)).finally(()=>{document.querySelector(".loading").remove()})}f.addEventListener("submit",a=>{a.preventDefault(),y(),c.value=""});function p(){d.innerHTML='<span class="loading"></span>'}function h(){let a="";o.forEach(s=>{const r=` 
      <li class="image">
            <a class="image-link" href="${s.largeImageURL}"><img class="img" src="${s.webformatURL}" alt="${s.tags}"></a>
            <div class="image-info">
              <p class="image-desc">
               <span class="desc title">Likes</span> 
               <span class="desc value">${s.likes}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Views</span> 
               <span class="desc value">${s.views}</span> 
              </p>
              <p class="image-desc">
               <span class="desc title">Comments</span> 
               <span class="desc value">${s.comments}</span>
              </p>
              <p class="image-desc">
               <span class="desc title">Downloads</span> 
               <span class="desc value">${s.downloads}</span>
              </p>
            </div>
        </li>
    `;a+=r}),d.innerHTML=a,new m(".image-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}
//# sourceMappingURL=index.js.map

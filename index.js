import{i as p,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const f=document.querySelector(".form"),c=document.querySelector(".input"),d=document.querySelector(".gallery"),g="https://pixabay.com/api/?";let n="",o=[];c.addEventListener("input",r=>{n=r.target.value});function y(){if(n=c.value.trim(),!n){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}u();let r={key:"47340779-69736f13d332e70374a06741a",q:n,image_tpye:"photo",orientation:"horizontal",safesearch:!0};const s=new URLSearchParams(r);fetch(`${g}${s.toString()}`).then(t=>t.json()).then(t=>{o=t.hits,o.length===0?(p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u()):h()}).catch(t=>console.error(t)).finally(()=>{const t=document.querySelector(".loading");t&&t.remove()})}f.addEventListener("submit",r=>{r.preventDefault(),y(),c.value=""});function u(){d.innerHTML='<span class="loading"></span>'}function h(){let r="";o.forEach(s=>{const t=` 
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
    `;r+=t}),d.innerHTML=r,new m(".image-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"})}
//# sourceMappingURL=index.js.map

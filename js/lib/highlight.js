mixins.highlight={data:()=>({copying:!1}),created(){hljs.configure({ignoreUnescapedHTML:!0}),this.renderers.push(this.highlight)},methods:{sleep:e=>new Promise((t=>setTimeout(t,e))),highlight(){let e=document.querySelectorAll("pre");for(let t of e){let e=[...t.classList,...t.firstChild.classList][0]||"plaintext";const i=t.textContent;if("mermaid"==e){const e=document.createElement("div");e.classList.add("mermaid"),e.textContent=i,t.replaceWith(e)}else{if(e.startsWith("language-")?e=e.substring(9):(t.classList.remove(e),t.classList.add("language-"+e)),t.parentElement&&"DIV"===t.parentElement.tagName&&t.parentElement.classList.contains("spoiler-content")&&1===t.parentElement.childElementCount){const e=document.createElement("div");e.classList=t.classList,t.replaceWith(e),t=e}let s;s=hljs.getLanguage(e)?hljs.highlight(i,{language:e}).value:t.firstChild.innerHTML,t.innerHTML=`\n                    <div class="code-content hljs">${s}</div>\n                    <div class="language">${e}</div>\n                    <div class="copycode">\n                        <i class="fa-solid fa-copy fa-fw"></i>\n                        <i class="fa-solid fa-check fa-fw"></i>\n                    </div>\n                    `;let n=t.querySelector(".code-content");hljs.lineNumbersBlock(n,{singleLine:!0});let l=t.querySelector(".copycode");l.addEventListener("click",(async()=>{this.copying||(this.copying=!0,l.classList.add("copied"),await navigator.clipboard.writeText(i),await this.sleep(1e3),l.classList.remove("copied"),this.copying=!1)}))}}}}};
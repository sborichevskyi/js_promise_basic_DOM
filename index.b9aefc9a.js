var e=new Promise(function(e,n){document.querySelector(".logo").addEventListener("click",function(n){e()})}),n=new Promise(function(e,n){setTimeout(function(){n("Time is over")},3e3)});function t(e){var n=document.createElement("div");n.className=e?"message":"message error-message",n.textContent=e?"Promise was resolved!":"Promise was rejected!",document.body.appendChild(n)}e.then(function(){t(!0)}).catch(function(){t(!1)}),n.then(function(){t(!0)}).catch(function(){t(!1)});
//# sourceMappingURL=index.b9aefc9a.js.map

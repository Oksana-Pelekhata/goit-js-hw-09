!function(){document.querySelector("button");function e(e,t){return new Promise((function(n,o){var a=Math.random()>.3;setTimeout((function(){a?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var n=parseInt(t.target.elements.delay.value),o=parseInt(t.target.elements.step.value),a=parseInt(t.target.elements.amount.value),r=0,c=0;c<a;c+=1)e(r,n+r*o).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),r+=1;event.target.reset()}))}();
//# sourceMappingURL=03-promises.0bdcd99d.js.map

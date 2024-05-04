/*Task 5: Implementing Throttle Function*/

function throttle(func, interval){
    let lastTime = 0;
    return function(...args){
        let now = new Date().getTime();

        if(now - lastTime >= interval){
            func.apply(this, args);
            lastTime = now;
        }
    }
}

function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);
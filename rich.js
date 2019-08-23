function rich(selector){
    self = {
        class: {
            get: ()=>{},
            set: ()=>{},
            add: ()=>{},
            remove: ()=>{},
        }
        element: document.querySelector(selector),
        style: (style, to)=>{
            self.element.style[style] = to;
        },
        transition: (style, to, transitionTimeInSec, waitInSec = 0)=>{
            self.element.style.transition = `all ${transitionTimeInSec}s`;
            setTimeout(()=>{
                self.element.style[style] = to;
            }, waitInSec * 1000);
        },
    };

    return self;
}
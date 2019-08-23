function rich(selector){
    self = {
        class: {
            add: (className)=>{
                let classString = self.element.className;
                let classArray = classString.split(' ');
                let isIn = false;
                classArray.forEach((oldClassName)=>{
                    if (oldClassName == className){
                        isIn = true;
                        return;
                    }
                });
                if (isIn) return;
                classArray.push(className);
                let newClassString = classArray.join(' ');
                self.element.className = newClassString;
            },
            get: ()=>{
                return self.element.className;
            },
            remove: (classNameTotDelete)=>{
                let classString = self.element.className;
                let classArray = classString.split(' ');
                classArray.forEach((className, index)=>{
                    if (className == classNameTotDelete){
                        classArray.splice(index, 1);
                        return;
                    }
                });
                let newClassString = classArray.join(' ');
                self.element.className = newClassString;
            },
            set: (className)=>{
                self.element.className = className;
            },
        },
        element: document.querySelector(selector),
        style: (style, to)=>{
            self.element.style[style] = to;
        },
        transition: (style, to, transitionTimeInSec, delay = 0, mode = 'ease-in-out')=>{
            if (self.element.style.transition)
                self.element.style.transition += `, ${style} ${transitionTimeInSec}s ${mode} ${delay}s`;
            else
                self.element.style.transition += `${style} ${transitionTimeInSec}s ${mode} ${delay}s`;

            self.element.style[camelCase(style)] = to;
        },
        transitions: ()=>{
            self.element.style.transition = `${style} ${transitionTimeInSec}s ${mode} ${delay}s`;
            self.element.style[camelCase(style)] = to;
        },
    };

    return self;
}

function camelCase(dashString){
    return dashString.replace('/*-([a-z])/', fcamelCase);
}

function fcamelCase( _all, letter ) {
    return letter.toUpperCase();
}
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

class Button {
    constructor(color, keyCode){
        this.element = document.getElementById(keyCode);
        this.elementColor = color;
        this.keyCode = keyCode;
        this.setButtonColorInHTML();
        this.removeTransition();
    }

    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.elementColor;
    }

    removeTransition = () => {
        this.element.addEventListener('transitionend', this.deselect);
    }

    select = () => {
        this.element.style.backgroundColor = this.elementColor;
        this.element.style.boxShadow = `0px 0px 17px 1px ${this.elementColor}`;
    }

    deselect = () => {
        this.element.style.backgroundColor = 'transparent';
        this.element.style.boxShadow = 'none';
    }
}
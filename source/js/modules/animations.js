class AnimationText {
  constructor(element, duration) {
    this.element = element;
    this.duration = duration;
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    this._timeOffset += 20;
    span.style.transform = `translate3d(0, 100%, 0)`;
    span.style.transition = `transform 400ms ease-out`;
    span.style.opacity = `0`;
    setTimeout(() => {
      span.style.transform = `translate3d(0, 0, 0)`;
      span.style.opacity = `1`;
      const delay = (3 - index % 3) * 50;
      span.style.transitionDelay = delay + `ms`;
    }, 10);
    return span;
  }

  init() {
    if (!this.element) {
      return;
    }
    const text = this.element.textContent.trim().split(` `).filter((latter)=>latter !== ``);
    const content = text.reduce((fragmentParent, word) => {

      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());
    this.element.innerHTML = ``;
    this.element.appendChild(content);
  }
}

export default AnimationText;

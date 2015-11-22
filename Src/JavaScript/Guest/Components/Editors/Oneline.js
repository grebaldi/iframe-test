import AbstractEditor from './AbstractEditor';

export default class Oneline extends AbstractEditor {

    thaw(el, value) {
        const input = document.createElement('input');

        input.value = value;
        input.style.cssText = window.getComputedStyle(el, "").cssText;

        return input;
    }

    editorDidMount() {
        this.el.focus();
    }

    commit() {
        return this.el.value;
    }

    freeze(el) {
        el.innerHTML = this.owner.getProperty(this.property);

        return el;
    }

}

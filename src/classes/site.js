export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector) //$ обозначаю dom элемент
    }

    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML())
        })
    }
}

import {block} from "../utils";
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from "./blocks";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML("afterbegin", this.template)
        this.$el.addEventListener("submit", this.add.bind(this) )
    }

    get template() {
        return [
            block('text'),
            block('title'),
            block('image'),
            block('columns'),
            ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const valueColumns = event.target.value.value.split(':')
        const styles = event.target.styles.value

        let newBlock;
        checkTypeBlock();

        function checkTypeBlock() {

            switch (type) {
                case 'title':
                    return newBlock = new TitleBlock(value, {styles});
                case 'image':
                    return newBlock = new ImageBlock(value, {styles});
                case 'columns':
                    return newBlock = new ColumnsBlock(valueColumns, {styles});
                default:
                    return newBlock = new TextBlock(value, {styles});
            }

        }

        this.update(newBlock)
        event.target.value.value = ''
        event.target.styles.value = ''
    }
}



import {row, col, css} from "./utils"


function title(block) {
    const {tag = 'h1', styles} = block.options //используем десруктуризация
    return row(col(`<${tag}>${block.value}</${tag}>`),css(styles))
}

function text(block) {
    const tag = block.options.tag ?? 'p'
    return row(col(`<${tag}>${block.value}</${tag}>`))
}

function columns(block) {
    const  {styles} = block.options
    return row(block.value.map(col).join(''),css(styles))

}

function image(block) {
    const  {styles} = block.options
    return row(`<img src="${block.value}" >`, css(styles))
}


export const templates = {
    title,
    text,
    image,
    columns
}
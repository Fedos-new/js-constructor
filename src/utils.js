export function row(content, styles='') {
    return ` <div class="row" style="${styles}"> ${content}</div>`
}

export function col(content) {
    return ` <div class="col-sm"> ${content}</div>`
}

export function css(styles={}) {
    // const keys = Object.keys(styles)
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`
    // })
    // return array.join(';')
    if(typeof styles == 'string') {
        return styles
    } else {
        const toString = key => `${key}: ${styles[key]}`
        return Object.keys(styles).map(toString).join(';')
    }

}

export function block(type) {

    function typesCheck (type) {
        switch (type) {
            case 'image':
                return 'url картинки'
            case 'columns':
                return `столбцы через :`
            default:
                return 'Введи текст'
        }
    }

    return `
    <form name="${type}">
      <h5>Добавление ${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="${typesCheck(type)}">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="Введи свойсва CSS c ;">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
    `
}
import image from './assets/photo.png'

export const model = [
    {type: 'title', value: "Конструктор сайтов на чистом JS", options: {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center',

        }

        }},
    {type: 'text', value: 'here we go with some text', options: {
        tag: "p"
        }},
    {type: 'columns', value: [
            "1 Столбец",
            "2 Столбец",
            "3 Столбец",
            "4 Столбец",
            "5 Столбец",
            "6 Столбец",
            "7 Столбец",
            "8 Столбец"
        ], options: {
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'font-weight': 'bold'
        }
        }},
    {type:'image', value: image, options: {
        styles: {
            'justify-content': 'center',
            'border': '2px solid #682a4f',
            'box-shadow': '0px 0px 15px 5px #4f3042',
            'display' : 'flex',
            'margin-top': '20px'
        }
        }}
]
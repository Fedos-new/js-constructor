import image from './assets/pic.png'
import {ColumnsBlock, ImageBlock, TextBlock, TitleBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JS', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to top, #7ecdee, #fff)',
            color: '#192B59',
            padding: '1.5rem',
            'text-align': 'center',
        }
    }),
    new ImageBlock( image, {
        styles: {
            'justify-content': 'center',
            'display': 'flex',
            background: '#7ecdee'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'картинка'
    }),
    new TextBlock( 'Сделай набросок сайта сам прямо здесь', {
        tag: "p",
        styles: {
            'font-size': '20px',
            'padding': '20px',
            'font-weight': 'bold',
        }

    }),
    new ColumnsBlock( [
            "Ты можешь добавить заголовок",
            "Ты можешь добавить текст",
            "Ты можешь добавить картинку",
            "И другие блоки"
        ], {
            styles: {
                color: '#192B59',
                padding: '1.5rem',
                'font-style': 'italic'
            }
        })
]
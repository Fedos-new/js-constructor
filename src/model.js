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
    new TextBlock( 'C помощью конструктора сайта ты сам, прямо здесь, сможешь:', {
        tag: "p",
        styles: {
            'font-size': '20px',
            'padding': '20px',
            'font-weight': 'bold',
            color: '#192B59'
        }

    }),
    new ColumnsBlock( [
            "добавить заголовок",
            "добавить текст",
            "добавить картинку",
            "другие блоки"
        ], {
            styles: {
                color: '#192B59',
                padding: '1.5rem',
                'font-style': 'italic'
            }
        })
]
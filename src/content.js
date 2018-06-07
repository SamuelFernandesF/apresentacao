import Slide1 from './ImagesAssets/logo.png'
import Components from './ImagesAssets/components.png'
import Component from './ImagesAssets/Component.png'
import Slide2 from './ImagesAssets/facebook.png'
import Slide2Instragram from './ImagesAssets/instagram.png'
import Slide2Github from './ImagesAssets/githuub.png'
import Slide3 from './ImagesAssets/npmChart.png'
import Slide4 from './ImagesAssets/airbnb.png'
import Slide4Twitter from './ImagesAssets/twitter.png'
import Slide4Amazon from './ImagesAssets/amazon.png'
import Slide4Apple from './ImagesAssets/apple.png'
import Slide4Microsoft from './ImagesAssets/microsoft.png'
import Slide5 from './ImagesAssets/stack.png'
import Slide6 from './ImagesAssets/jsx.png'
import Lifecycle from './ImagesAssets/lifecycle.jpeg'


const abc =' s'

export default 
[
    {
        id: '0',
        size : 'col-md-4 col-12',
        header : 'React',
        subtext : 'O que é ?',
        content : 'É uma biblioteca JavaScript declarativa, desenvolvida para criar interfaces visuais. Por se tratar de uma biblioteca, ele é mais flexível e menos complexo do que um framework. Sua única e principal função é a criação de interfaces de usuário, que organiza o que será mostrado para o usuário final na tela sem se preocupar em saber sobre o resto. O React é uma linguagem declarativa, ela se preocupa com o que o programador quer fazer. Ele se propõe em separar todo o código em pequenas partes que podem ser reutilizáveis como pequenos componentes.',
        list : [],
        style: {
            background: 'rgb(69, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '125px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-top',
                imageClass : 'visible center',
                src : Slide1,
                animate : 'true',
                alt: 'react logo'
            }
        ]
    },
    {
        id: '1',
        size : 'col-md-4 col-12',
        header : 'Divisão',
        subtext : '',
        content : 'O React propõe uma separação dos seus elementos de UI. Para fazer isso ele estrutura sua aplicação através de componentes.',
        list : [
            {
                header : '',
                link : 'BarraNewsletter (1)'
            },
            {
                header : '',
                link : 'MenuSuperior (2)'
            },
            {
                header : '',
                link : 'BotaoMenu (3)'
            },
            {
                header : '',
                link : 'BotaoChamada (4)'
            },
            {
                header : '',
                link : 'PainelPrincipal (5)'
            },
            {
                header : '',
                link : 'PainelLateral (6)'
            },
            {
                header : '',
                link : 'Patrocinadores (7)'
            },
        ],
        style: {
            background: 'rgb(69, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '625px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-bottom',
                imageClass : 'visible center',
                src : Components,
                animate : 'true',
                alt: 'react logo'
            }
        ]
    },
    {
        id: '2',
        size : 'col-md-4 col-12',
        header : 'Criador',
        subtext : 'Jordan Walke',
        content : 'Ela foi desenvolvida pelo Facebook em 2011, e foi utilizada na interface de do mural de notícias da rede social. No ano seguinte começou a ser utilizada no Instagram e em 2013 o código foi aberto para comunidade, o que colaborou para sua grande popularização. ',
        list : [],
        style: {
            background: 'rgb(35, 88, 155)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '125px',
                    borderRadius : '10px',
                    marginTop : '20px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-left',
                imageClass : 'visible loose-left ',
                src : Slide2,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '125px',
                    borderRadius : '10px',
                    marginTop : '145px',
                    marginLeft : '1px',
                    transition: 'all 1.2s ease',
                },
                animationStyle : 'image-animate-left',
                imageClass : 'visible loose-left ',
                src : Slide2Instragram,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '75px',
                    borderRadius : '10px',
                    marginTop : '270px',
                    marginLeft : '28px',
                    transition: 'all 1.3s ease',
                },
                animationStyle : 'image-animate-left',
                imageClass : 'visible loose-left ',
                src : Slide2Github,
                animate : 'true',
                alt: 'ota coisa'
            },
        ]
    },
    {
        id: '3',
        size : 'col-md-6 col-12',
        header : 'Popularidade',
        subtext : 'da biblioteca',
        content : 'npm i react',
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-6',
        images : [
            {
                style: {
                    width : '680px',
                    height: '615px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-bottom',
                imageClass : 'visible center',
                src : Slide3,
                animate : 'true',
                alt: 'ota coisa'
            }
        ]
    },
    {
        id: '4',
        size : 'col-md-4 col-12',
        header : 'Empresas',
        subtext : 'que utilzam react',
        content : `Facebook, Instagram, Airbnb, Twitter, Amazon, Apple, Microsoft`,
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '125px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    marginTop: '10px',
                    right : '725px',

                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right',
                src : Slide4,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '125px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    marginTop: '10px',
                    right : '400px',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right',
                src : Slide2,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '170px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    right: '100px',
                    marginTop: '-14px',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right',
                src : Slide2Instragram,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '170px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    marginTop: '180px',
                    right : '698px',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right',
                src : Slide4Twitter,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '125px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    marginTop: '230px',
                    height: '80px',
                    right : '400px',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right',
                src : Slide4Amazon,
                animate : 'true',
                alt: 'ota coisa'
            },
            {
                style: {
                    width : '108px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    marginTop: '190px',
                    right : '128px',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right',
                src : Slide4Apple,
                animate : 'true',
                alt: 'ota coisa'
            },
        ]
    },
    {
        id: '5',
        size : 'col-md-4 col-12',
        header : 'Benefícios',
        subtext : 'de se usar react',
        content : 'É simples de configurar e aprender. O React utiliza a virtual DOM para renderizar a árvore HTML antes de inserir no DOM(uma multi-plataforma que representa como as marcações em HTML, XHTML e XML são organizadas e lidas pelo navegador que você usa)',
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [],
    },
    {
        id: '5',
        size : 'col-md-4 col-12',
        header : 'Mercado',
        subtext : 'De trabalho',
        content : 'O gráfico ao lado mostra o crescimento das buscas por profissionais que tenham conhecimento de React.',
        list : [
            {
                header : 'Indeed',
                link : 'https://www.indeed.com/q-React-Js-jobs.html'
            },
            {
                header : 'Indeed (Br)',
                link : 'https://www.indeed.com.br/empregos-de-React-em-S%C3%A3o-Paulo,-SP'
            },
        ],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '625px',
                    height: '575px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible center',
                src : Slide5,
                animate : 'true',
                alt: 'ota coisa'
            }
        ]
    },
    {
        id: '6',
        size : 'col-md-12 col-12',
        header : 'Por onde começar ?',
        subtext : '',
        content : '',
        list : [
            {
                header : 'Palestra introdutória',
                link : 'https://www.youtube.com/watch?v=_ZTT9kw3PIE&t=3916s',
            },
            {
                header : 'React + Redux',
                link : 'https://www.udemy.com/react-redux-pt/',
            },
            {
                header : 'Cursos em geral',
                link : 'https://egghead.io',
            },
        ],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-6',
        images : []
    },
    {
        id: '7',
        size : 'col-md-4 col-12',
        header : 'JSX',
        subtext : 'O que é ?',
        content : 'O Jsx é uma extensão da sintaxe do javascript, ele permite que você escreva pedaços de código usando as tags do Html mas é puramente js.',
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '425px',
                    height: '375px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                    zIndex : '1000',
                    marginTop : '-30px'
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right loose-bottom',
                src : Slide6,
                animate : 'true',
                alt: 'Jsx'
            }
        ]
    },
    {
        id: '8',
        size : 'col-md-5 col-12',
        header : 'Componentes',
        subtext : '',
        content : 'Componentes permitem que você quebre a UI em diferentes pedaços de código. Existem 2 tipos de componentes ( Funcionais e Classes ) e apesar dos códigos serem diferentes ambos são iguais aos olhos do react. ',
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-7',
        images : [
            {
                style: {
                    width : '425px',
                    height: '375px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right loose-bottom',
                src : Slide6,
                animate : 'true',
                alt: 'Jsx'
            }
        ]
    },
    {
        id: '9',
        size : 'col-md-6 col-12',
        header : 'Propriedades e Estados',
        subtext : '',
        content : 'O React utiliza essas tipos de "varíaveis" para controlar as informações dos componentes. Propriedades ou props são imutáveis e passadas de componentes pais filhos. Já os estados ou states são mutáveis e são referentes apenas ao componente em sí.',
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-6',
        images : [
            {
                style: {
                    width : '425px',
                    height: '375px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible center',
                src : Component,
                animate : 'true',
                alt: 'Jsx'
            }
        ]
    },
    {
        id: '10',
        size : 'col-md-4 col-12',
        header : 'Ciclo de vida',
        subtext : '',
        content : 'O React utiliza o ciclo de vida para controlar seus componentes. Esses métodos são importantes para que você consiga controlar o recebimento ou não de propriedades ou estados na sua aplicação e também para controlar quando o componente deve ou não ser renderizado.',
        list : [],
        style: {
            background: 'rgb(29, 91, 109)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '625px',
                    height: '575px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-bottom',
                imageClass : 'visible center',
                src : Lifecycle,
                animate : 'true',
                alt: 'Jsx'
            }
        ]
    },  
    {
        id: '11',
        size : 'col-md-12 col-12',
        header : 'APLICAÇÃO',
        headerStyles : {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        },
        subtext : '',
        content : '',
        list : [],
        style: {
            background: 'rgb(0, 0, 0)',
            color : 'white',
            height : '100%',
        },
        imageColumn : 'col-8',
        images : [
            {
                style: {
                    width : '425px',
                    height: '375px',
                    borderRadius : '10px',
                    transition: 'all 1s ease',
                },
                animationStyle : 'image-animate-right',
                imageClass : 'visible loose-right loose-bottom',
                src : Slide6,
                animate : 'true',
                alt: 'Jsx'
            }
        ]
    },  
]
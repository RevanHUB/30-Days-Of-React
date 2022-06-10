
const rootElement = document.getElementById('root');
let isOnline = true;
const menu = [
    {   
        id: 1,
        title: 'Home',
        path: '../../index.html',
        description: 'You pressed Home'
    },
    {   
        id: 2,
        title: 'Exercise 1-3',
        path: 'exercises/exercise-1-3/index.html',
        description: 'You pressed About'
    },
    {
        id: 3,
        title: 'Exercise 4',
        path: 'exercises/exercise-4/index.html',
        description: 'You pressed Contact'
    }

]



const preguntas = [
'What is React?',
'What is a library?',
'What is a single page application?',
'What is a component ?',
'What is the latest version of React?',
'What is DOM?',
'What is React Virtual DOM?',
'What does a web application or a website(composed of) have?'
]

const preguntasEj2 =  [
    'Why did you chose to use react?',
    'What measures do you use to know popularity ?',
    'What is more popular, React or Vue ?'
]
const preguntasEj3 = [
    'What is an HTML element?',
    'How to write a self closing HTML element?',
    'What is an HTML attribute? Write some of them',
    'What is JSX?',
    'What is babel?',
    'What is a transpiler?'
]

const preguntasEj4 =  [
    'What is a JSX element?'
]

// 'Write your name in a JSX element and store it in a name variable',

const creator = 'David Martín'

// 'Write a JSX element which displays your full name, country, title, gender, email, phone number.
//  Use h1 for the name and p for the rest of the information and store it in a user variable',
const info = [
    {
        fullName: 'David Martín',
        country: 'Spain',
        title: 'Developer',
        gender: 'Male',
        phoneNumber: '+55678432234'
    }
]

// const buttons = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'MongoDB'];
const showButtons = menu.map((element) => <a 
    key={element.id}
    href={element.path}
    onClick={() => {
        console.log(element.description);
    }}> {element.title} </a> );

const header = (
    <header className="container__header">
        <h1>30 Days of React</h1>
        {showButtons}
        <a key="online__Check" id = "online__Check"  onClick={() => {
           isOnline === false ? isOnline = true : isOnline = false ;
           if (isOnline === true) {
               document.getElementById('online__Check').innerHTML = 'Online';
               console.log(isOnline)
           } else {
                document.getElementById('online__Check').innerHTML = 'Offline';
                console.log(isOnline)
           }
            
           }}>{isOnline === false ? rootElement.innerHTML = 'Offline' : rootElement.innerHTML = 'Online'}</a>
            <input id="input__Search" onChange={() => {
                let array = []
                console.log(document.getElementById('input__Search').value);
                array.push(document.getElementById('input__Search').value);
                console.log(array);
            }} placeholder ="Enter your value "></input>
          
    </header>
);

const main = (
    <main className="container__main">
        <h2>Exercise 1-3</h2>
            <p>{preguntas[0]}</p>
                <p> React es una librería de Javascript que te permite generar código reutilizable aplicado para interfaces de usuario componetizadas.</p>
            <p>{preguntas[1]}</p>
                <p>Una librería es una colección de funciones que te permiten realizar tareas repetitivas y que te permiten reutilizar código.</p>
            <p>{preguntas[2]}</p>
                <p>Una aplicación de páginas únicas es una aplicación que se puede ver en una sola página.</p>
            <p>{preguntas[3]}</p>
                <p>Un componente es una función que retorna un elemento de HTML.</p>
            <p>{preguntas[4]}</p>
                <p>18.1.0</p>
            <p>{preguntas[5]}</p>
                <p>El DOM es una estructura de datos que representa una página web.</p>
            <p>{preguntas[6]}</p>
                <p>React Virtual DOM es una estructura de datos que representa una página web.</p>
            <p>{preguntas[7]}</p>
                <p>Una aplicación web o un sitio web es una colección de páginas web.</p>
            <p>{preguntasEj2[0]}</p>
                <p>Porque es la principal librería que se requiere para el entorno de trabajo, es intuitiva e interesante.</p>
            <p>{preguntasEj2[1]}</p>
                <p>Empleo ingeniería social, hablando claro, compruebo cuales son las mas utilizadas por las personas y las mas mencionadas, además empleo portal de packages para comprobar cual de ellas es la mas descargada.</p>
            <p>{preguntasEj2[2]}</p>
                <p>React es más popular que Vue, debido a lo explicado anteriormente, mayor número de usuarios aportan su trabajo e ideas para desarrollarlo en GitHub.</p>
            <p>{preguntasEj3[0]}</p>
                <p>Un elemento de HTML es una etiqueta que se utiliza para crear un elemento de una página web.</p>
            <p>{preguntasEj3[1]}</p>
                <p>Para crear un elemento de HTML que no tenga contenido, se utiliza la etiqueta de cierre.</p>
            <p>{preguntasEj3[2]}</p>
                <p>Un atributo de HTML es una propiedad que se asigna a un elemento de HTML.</p>
            <p>{preguntasEj3[3]}</p>
                <p>JSX es una extensión de JavaScript que permite crear elementos de HTML en JavaScript.</p>
            <p>{preguntasEj3[4]}</p>
                <p>Babel es una herramienta de desarrollo de JavaScript que permite convertir el código de JavaScript antiguo en código de JavaScript moderno.</p>
            <p>{preguntasEj3[5]}</p>
                <p>Un transpilador es una herramienta que permite convertir el código de JavaScript antiguo en código de JavaScript moderno y permita unificar varios lenguajes en uno.</p>
            <p>{preguntasEj4[0]}</p>
                <p>Un elemento de JSX es una etiqueta que se utiliza para crear un elemento de una página web.</p>
            <p>Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable</p>
               
        </main>
        
);




const retrieveInfo = info.map((each) => {
return <div key="my__info" className="container__info"><h1>{each.fullName} </h1> <p>{each.country}</p> <p>{each.title}</p> <p>{each.gender}</p><p>{each.phoneNumber}</p> </div>
} )

// 'Write a footer JSX element'
const footer = (
    <footer>
        <p>Realizado por {creator}</p>
    </footer>
);


const userInfo = (
    {retrieveInfo}
)

const app = (
    <div>
        {header}
        {main}
        {retrieveInfo}
        {footer}
        
    </div>
)

// Create a style object for the main JSX
// Create a style object for the footer and app JSX
// Add more styles to the JSX elements
// Apply different styles to your JSX elements
// Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)

rootElement.innerHTML = header;

ReactDOM.render(app, rootElement);

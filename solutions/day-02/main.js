// import { config } from 'config.js'; no funciona, no hay transpilador

const rootElement = document.getElementById('root');
const menu = [
    {   
        id: 1,
        title: 'Home',
        path: 'index.html',
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
    </header>
);

const footer = (
    <footer></footer>
);

const app = (
    <div>
        {header}
    </div>
)


rootElement.innerHTML = header;

ReactDOM.render(app, rootElement)


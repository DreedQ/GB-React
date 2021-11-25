import './App.css';
import Message from './Message';

const greeting ="Hello world, from my first react app!";

function App(props) {
    return (
        <div className="App">
        < header className="App-header">
        My First React App
       <h3>Hello {props.name}!</h3>
       <Message message={greeting} />
        </header> 
        </div >
    );
}

export default App;
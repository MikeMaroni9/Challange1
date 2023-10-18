import logo from './logo.svg';
import './App.css';
import NavBarSimple from './components/NavBarSimple.js';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';

function App() {
  return (
    <div className="App">
        <ConditionalRenderingFunctional connected={true}/>
    </div>
  );
}

export default App;

import './App.css';
import Forms from './Forms/Forms';
import Material from './Material/Material';
import Medots from './Medots/Medots';
import State from './State/State';
import ApiKey from './ApiKey/ApiKey';
import Counter from './Counter/Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
        <Forms/>
        <State/>
        <Material/>
        <Medots/>
        <ApiKey/>
      </header>
    </div>
  );
}

export default App;

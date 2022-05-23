
import './App.css';
import Bebras from './components/home_work_1/Bebras';
import Pora from './components/home_work_1/Pora';
import Sho from './components/home_work_1/Sho';
import Trys from './components/home_work_1/Trys';
import Zuikis from './components/home_work_1/Zuikis';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Zuikis></Zuikis>
        <Sho tekstas="Darbo rinka"></Sho>
        <Bebras skaicius={1}></Bebras>
        <Pora pirmas="Bet koks tekstas" antras="Dar koks kitoks tekstas"></Pora>
        <Trys vardas="Paulius" pavarde="Rasamavicius" spalva="skyblue"></Trys>
      </header>
    </div>
  );
}

export default App;

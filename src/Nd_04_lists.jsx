
import './App.css';
import Bala from './components/home_work_react_list/Bala';
import Jura from './components/home_work_react_list/Jura';
import Pasaulis from './components/home_work_react_list/list_5_uzdavinys/Pasaulis';
import Tvenkinys from './components/home_work_react_list/Tvenkinys';
import Vandenynas from './components/home_work_react_list/Vandenynas';


 export const seaPlaners = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
    ];


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
    <h1>Testas</h1>
    <Bala />
    <Tvenkinys/>
    <h1>Trecias uzdavinys</h1>
    <Jura/>
    <Vandenynas/>
    <h1>Penktas uzdavinys</h1>
    <Pasaulis/>
      </header>
      
    </div>
  );
}

export default App;

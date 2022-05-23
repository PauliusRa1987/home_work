
import { useState } from 'react';
import './App.css';


function App() {
    const [forma, setForma] = useState('round');
    const changeForm = () => {(setForma)(oldShape => oldShape === 'round' ? 'squer': 'round')}
    const [nr, setNr] =useState(10);
    const rand = () => {
        setNr(n => n = Math.floor(Math.random() * (25 - 5 + 1) ) + 5);
    }
    const [nr1, setNr1] =useState(0);
    const plius = () => {
        setNr1(n => n +1);
    }
    const minus = () => {
        setNr1(k => k - 3);
    }
    const [kvadr, setKvadr] = useState([]);
    const addBig = () => {setKvadr(masyvas => [...masyvas, 1])
    }
    const [kva, setKva] = useState([]);
    const addRed = () => {setKva(masyvas => [...masyvas, 'red'])
    }
    const addBlue = () => {setKva(masyvas => [...masyvas, 'blue'])
    }
    const removeAll = () => {setKva(masyvas => masyvas.slice(masyvas.length))
    }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Check</h1>
      <div className="conteris">
      {
       <div  className={forma}></div>
      }
      </div>
      <div className="conteris">
      {
       <div  className={forma}>{nr}</div>
      }
      </div>
      <div>{nr1}</div>
      <div className="conteris">
      {
       kvadr.map((k, i)=><div key={i} className='squer' style={{background: 'blue'}}></div>)
      }
      </div>
      <button onClick={changeForm}>Change</button>
      <button onClick={rand}>Random</button>
      <button onClick={plius}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={addBig}>ADD</button>
      <div className="conteris">
      {
       kva.map((k, i)=><div key={i} className='squer' style={{background: k}}></div>)
      }
      </div>
      <button onClick={addRed}>ADD Red</button>
      <button onClick={addBlue}>ADD Blue</button>
      <button onClick={removeAll}>Resetss</button>
      </header>
    </div>
  );
}

export default App;

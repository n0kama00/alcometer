import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

function App() {

  const [paino, setPaino] = useState(0);
  const [pullot, setPullot] = useState(0);
  const [aika, setAika] = useState(0);
  const [gender, setGender] = useState('male');
  const [abl, setAbl] = useState(0);

  function calculate(e){
    e.preventDefault();
    const litra = pullot * 0.33;
    const gramma = litra * 8 * 4.5;
    const poltto = paino / 10;
    const leftover = gramma - (poltto * aika);

    let abl = 0;
    if (gender === 'male'){
      abl = leftover / (paino * 0.7)
    } else {
      abl = leftover / (paino * 0.6)
    } 
    if (abl < 0){
      abl = 0;
    }
    setAbl(abl);
  }

  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight</label>
        </div>
        <input type="number" value={paino}
        onChange={e=> setPaino(e.target.value)}/>

        <div>
          <label>Bottles </label>
        </div>
        <select value={pullot}
        onChange={e=> setPullot(e.target.value)}>
          <FillOptions />
        </select>

        <div>
          <label>Time (h) </label>
        </div>
        <select value={aika}
        onChange={e=> setAika(e.target.value)}>
          <FillOptions />
        </select>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" 
          defaultChecked onChange={e => setGender(e.target.value)}/>
          <label>Male</label>
          <input type="radio" name="gender" value="female" 
          onChange={e => setGender(e.target.value)}/>
          <label>Female</label>
        </div>
        
        <div>
          <label></label>
          <output id="alcohol">{abl.toFixed(2)}</output>
        </div>
        <button>Calculate</button>
        </form>
      </div>
    );
}

export default App;

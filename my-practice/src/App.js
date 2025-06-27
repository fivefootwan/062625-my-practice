import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [bgcolor, setBgcolor] = useState('');
  const [savedCards, setSavedCards] = useState([]);

  const saveCard = () => {
    const newCard = {name, job, location, bgcolor};
    setSavedCards(prev => [newCard, ...prev]);
    setName('');
    setJob('');
    setLocation('');
    setBgcolor('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Namecard Generator</h1>
      </header>

      <div className='Page-content'>
        <div className="Namecard-generator">
          <form className="Input-form" onSubmit={(e) => { e.preventDefault(); saveCard(); }}>
            <div className='Input-field'> 
              <p>Enter your name:</p>
              <input placeholder='e.g. John Smith' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div className='Input-field'> 
              <p>Enter your job</p>
              <input placeholder='e.g. Founder' value={job} onChange={(e) => setJob(e.target.value)}></input>
            </div>

            <div className='Input-field'> 
              <p>Choose your location</p>
              <select placeholder='Choose a location' value={location} onChange={(e) => setLocation(e.target.value)} >
                <option>Select a city</option>
                <option value="city 1">city 1</option>
                <option value="city 2">city 2</option>
              </select>
            </div>

            <div className='Input-field'>
              <p>Customise a background color</p>
              <input placeholder="e.g. #fffaf4" value={bgcolor} onChange={(e) => setBgcolor(e.target.value)}></input>

            </div>
            <button type='submit'>Save Namecard</button>


          </form>

          <div className="Namecard-preview" style={{ backgroundColor: bgcolor === '' ? '#ffeadd' : bgcolor }}>
            <div className='Profile-pic'></div>
            <p id="Namecard-name">{name === '' ? 'type in name' : name}</p>
            <p id="Namecard-job">{job === '' ? 'type in job on the form on the left' : job}</p>
            <p id="Namecard-location">{location === '' ? 'select in location on the form on the left' : location}</p>

          </div>


        </div>

        <div className='Saved-cards'>
            {savedCards.map((card, index) => (
              <div key={index} className="Saved-card"style={{ backgroundColor: card.bgcolor }}>
                <div className='Profile-pic'></div>
                <p>{card.name}</p>
                <p>{card.job}</p>
                <p>{card.location}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

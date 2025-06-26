import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>this is header</h1>
      </header>

      <div className="Namecard-generator">
        <form className="Input-form">
          <div className='Input-field'> 
            <p>your name</p>
            <input placeholder='enter name' value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>

          <div className='Input-field'> 
            <p>your job</p>
            <input placeholder='enter job' value={job} onChange={(e) => setJob(e.target.value)}></input>
          </div>

          <div className='Input-field'> 
            <p>your location</p>
            <select placeholder='enter location' value={location} onChange={(e) => setLocation(e.target.value)} >
              <option>select an option</option>
              <option value="city 1">city 1</option>
              <option value="city 2">city 2</option>
            </select>
          </div>


        </form>

        <div className="Namecard">
          <div className='Profile-pic'></div>
          <h3>{name === '' ? 'type in name' : name}</h3>
          <h3>{job === '' ? 'type in job on the form on the left' : job}</h3>
          <h3>{location === '' ? 'select in location on the form on the left' : location}</h3>

        </div>


      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>this is header</h1>
      </header>

      <div className="Namecard-generator">
        <form className="Input-form">
          <div className='Input-field'> 
            <p>your name</p>
            <input placeholder='enter name'></input>
          </div>
          <div className='Input-field'> 
            <p>your job</p>
            <input placeholder='enter job'></input>
          </div>
          <div className='Input-field'> 
            <p>your location</p>
            <input placeholder='enter location'></input>
          </div>


        </form>

        <div className="Namecard">
          <img />
          <h3>name</h3>

        </div>


      </div>
    </div>
  );
}

export default App;

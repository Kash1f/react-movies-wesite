import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Movie from './components/Moviee/Movie'

function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <div className='main'>
      <Movie/>
      <Movie/>
      <Movie/>
      <Movie/>
      </div>
      </div>
    </>
  );
}

export default App;

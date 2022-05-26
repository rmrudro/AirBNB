import logo from './logo.svg';
import './App.css';
import airlogo from './images/logo.png'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import Card from './Components/Card'

function App() {
  return (
    <div className="App">

      <NavBar></NavBar> 
       {/* <Intro></Intro>  */}
       <Card></Card> 
    </div>
  );
}

export default App;

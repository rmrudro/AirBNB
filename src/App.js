import logo from './logo.svg';
import './App.css';
import airlogo from './images/logo.png'
import NavBar from './Components/NavBar'
import Intro from './Components/Intro'
import Card from './Components/Card'
import data from './data'

function App() {
  // console.log(data)
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
      // img={item.coverImg}
      //   rating={item.stats.rating}
      //   reviewCount={item.stats.reviewCount}
      //   location={item.location}
      //   title={item.title}
      //   price={item.price}
      //   openSpot={item.openSpots}
    )
  })
  return (

    <div className="App">

      <NavBar></NavBar>
      <Intro></Intro>
      <section className='cards-list'>
        {cards}
      </section>

    </div>
  );
}

export default App;

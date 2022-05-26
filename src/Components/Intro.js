import HotelGrid from '../images/hotelgrid.png'

export default function Intro(props){
    console.log(props)
   // const hotelgrid='../images/'+{props.img}
    return (
        <section className="section-intro">
            <img src={HotelGrid} className="intro-hotelgrid"></img>
            <h1 className="hotel--header">Online Experiences</h1>
            <p className='hotel-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}
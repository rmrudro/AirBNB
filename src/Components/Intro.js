import HotelGrid from '../images/hotelgrid.png'

export default function Intro(){
    return (
        <section>
            <img src={HotelGrid} className="intro-hotelgrid"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}
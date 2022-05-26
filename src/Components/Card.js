import katie from '../images/katie.png'
import star from '../images/star.png'

export default function Card(props) {
    console.log(props)
   // const img_cardItem='../images/'
    return (
        <div className="card">
            {/* <img src={`../images/${props.img}`} className="card--image" /> */}
             <img src={katie} className="card--image" /> 
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.rating}</span>
                <span className='gray'>({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
           
                <p className='p-main'>{props.title}</p>
                <p><span className='bold'>From ${props.price}</span> / person</p>
            
        </div>
    );
}
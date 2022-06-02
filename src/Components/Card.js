import katie from '../images/katie.png'
import star from '../images/star.png'

export default function Card(props) {

    const img_cardItem = 'images/' + props.item.coverImg
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText &&<div className='card--badge'>{badgeText}</div>}
            <img src={img_cardItem} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className='gray'>({props.item.stats.reviewCount}) • </span>
                <span className='gray'>{props.item.location}</span>
            </div>

            <p className='p-main'>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price}</span> / person</p>

        </div>
    );
}
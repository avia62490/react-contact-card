import emptyStar from './images/empty-star.png'
import filledStar from './images/filled-star.png'

export default function Star(props) {
    const starIcon = props.isFilled ? filledStar : emptyStar
    return(
        <img 
            src={starIcon}
            className="card--favorite"
            alt=''
            onClick={props.handleClick}
        />
    )
}
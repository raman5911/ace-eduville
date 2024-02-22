// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardComponentStyle.css';

function CardComponent({img, type, title, text, rating, halfStar}) {
    
    let stars = [];

    const returnStar = () => {
        for(let i = 1; i <= rating; i++) {
            stars.push('*');
        }        
    };


    const printStars = () => {
        returnStar();
        return stars.map(() => {
            return (<span><i className="fa fa-star star"></i></span>);
        })
    }

  return (
    <Card style={{ width: '18rem' }} className='card-box'>
      <div className="img-box">
        <Card.Img variant="top" className='img-fluid' src={img} />
      </div>

      {/* <div className="img-box" style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}></div> */}

      <span className='tag'>{type}</span>
      <Card.Body className='class-body'>
        <Card.Title className='card-title'>{title}</Card.Title>

        <Card.Text className='card-text-box'>
            {/* <p className='text-muted caption'><span>Course Duration:</span> {text}</p> */}
            <div className="stars">
                {printStars()}
                {halfStar && <span><i className="fa fa-star-half star"></i></span>}

                <p><span>({rating})</span> Rating</p>
            </div>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
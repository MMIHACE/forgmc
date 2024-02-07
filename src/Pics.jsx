import './Mmih.css'
// const Baba =({img, details})=> {
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import{info} from './Data';

function  Pics() {
  const  settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
        slidesToScroll: 1
            }
          }
        ]
      };

      
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  

  return (
    <div  className='Og'>
    <Slider {...settings}>
    {info.map(item=>(
        <div className='card'>
        <div className='card-top'>
        <img src={item.img} alt={item.details}/>
        <h1>{item.details}</h1>
        </div>
        <div className='card-bottom'>
        <h3>{item.price}</h3>
        <p className="location">{item.location}</p>
        </div>
        </div>
    ))}
    </Slider>
</div>
  )
}

export default  Pics;
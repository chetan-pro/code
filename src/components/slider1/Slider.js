import React from "react";
import makeStyles from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from '../../Data/data1.jsx';

function Slider1() {
  const classes = makeStyles();
  var settings = {
    cssEase: 'linear',
    centerMode:true,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    variableWidth:true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
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
  const Sdata = Data.map((d)=>{
    return(
      <div>
          <div className={classes.card}>
            <img src={d.logo} alt="Logo" />
            <img src={d.prfl}  />
            <h1 className={classes.h1}>
              {d.name}
              <br />
              <h5 className={classes.h5}>{d.title}</h5>
            </h1>
          </div>
        </div>
    )
  })
  return (
    <div className={classes.container}>
      <h1 className={classes.head}>Join 500 Chief People Officers from:</h1>
      <div className={classes.slider}>
      <Slider {...settings}>
        {Sdata}
      </Slider>
    </div>
    </div>
  );
}

export default Slider1;


/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
import InfiniteCarousel from 'react-leaf-carousel';
import { data } from './CarouselData';
import classes from './Services.module.css';

const Rahbariyat = ({ props, fontSize }) => {
  return (
    <div className={classes.caruselContainer}>
      <h1
        align="center"
        style={{
          color: '#4f5665',
          marginTop: '40px',
          marginBottom: '40px',
          fontSize: 32 + fontSize
        }}
      >
        {props.title}
      </h1>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={0.3}
        sideSize={0.1}
        slidesToScroll={1}
        slidesToShow={5}
        scrollOnDevice={true}
      >
        {data.map((item) => {
          return (
            <div key={item.id} className={classes.eachSlideStyle}>
              <img src={item.img} alt="" />
              <div>
                <h4 style={{ fontSize: 16 + fontSize }}>{item.name}</h4>
              </div>
              <p style={{ fontSize: 16 + fontSize }}>{item.job}</p>
            </div>
          );
        })}
      </InfiniteCarousel>
    </div>
  );
};

export default Rahbariyat;

/* eslint-disable react/jsx-boolean-value */
import { Carousel } from '3d-react-carousal';
import classes from './Carousel.module.css';

const slides = [
  <img src="https://yuz.uz/file/news/2243732a31327228ac54fed818d1f713.png" alt="" key="14" />,
  <img src="https://yuz.uz/file/news/2243732a31327228ac54fed818d1f713.png" alt="" key="15" />,
  <img src="https://yuz.uz/file/news/2243732a31327228ac54fed818d1f713.png" alt="" key="16" />,
  <img src="https://yuz.uz/file/news/2243732a31327228ac54fed818d1f713.png" alt="" key="17" />
];
const callback = (index) => {
  console.log('callback', index);
};
export default function MyCarousel() {
  return (
    <div className={classes.bgImage}>
      <div style={{ width: '100%' }}>
        <Carousel slides={slides} autoplay={true} interval={2000} onSlideChange={callback} />
      </div>
    </div>
  );
}

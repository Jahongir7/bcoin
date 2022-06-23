/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import { CardData } from './CategoriesData';
import 'aos/dist/aos.css';
import classes from './Categories.module.css';

const Categories = ({ data, lang }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={classes.categories} id="categories">
      <h3>{data.title}</h3>
      <p className={classes.categories_p}>{data.titleP}</p>
      <div className={classes.cards}>
        {CardData.map((item, index) => {
          return (
            <div
              className={`${index === 1 ? classes.card2 : classes.card}`}
              key={item.id}
              data-aos="fade-up"
              style={{ background: `${item.divColor}` }}
            >
              <h4>{item.title}</h4>
              <p>
                <i className="fas fa-check"></i> {data.text2}{' '}
                <b>{lang === 'uz' ? item.text2 : item.text2ru}</b>
              </p>
              <p>
                <i className="fas fa-check"></i> {data.text3}{' '}
                <b>{lang === 'uz' ? item.text3 : item.text4}</b>
              </p>

              <div className={classes.card_h4}>
                <h4>{item.text1} </h4> <p> / {data.oyiga}</p>
              </div>
              <div className={classes.card_btn}>
                <Link to={item.path} style={{ textDecoration: 'none' }}>
                  <button className={classes.button}>{data.tanlash}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;

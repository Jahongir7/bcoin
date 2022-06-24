/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Aos from 'aos';
import img1 from '../../img/y1.png';
import img2 from '../../img/y2.png';
import img3 from '../../img/y3.png';
import img4 from '../../img/y4.png';
import img5 from '../../img/y5.png';
import img6 from '../../img/y6.png';
import 'aos/dist/aos.css';
import classes from './News.module.css';
import { getNews } from '../../redux/actions/adminActions';

const News = ({ data, fontSize }) => {
  const cCompanies = [
    {
      _id: 1,
      img: img1,
      name: "Kitobxon tanlovida birinchi o'rinni egallab faxrli birinchi o'ringa ega bo'ldi",
      date: '22-04-2022'
    },
    {
      _id: 2,
      img: img2,
      name: "Shaxmat bo'yicha O'zbekiston online musobaqasi bo'lib o'tdi",
      date: '22-04-2022'
    },
    {
      _id: 122,
      img: img3,
      name: 'Yosh aktyorlar teatrda foal qatnashgani uchun taqdirlanishdi',
      date: '22-04-2022'
    },
    {
      _id: 12,
      img: img4,
      name: 'Prezident tomonidan Cobalt avtomobili bilan taqdirlandi',
      date: '22-04-2022'
    },
    {
      _id: 23,
      img: img5,
      name: "Kurash milliy sport turini rivojlantirish va unning xalqaro nufuzini yanada oshirish maqsadida Respublika kurash musobaqasi o'tkazildi",
      date: '22-04-2022'
    },
    {
      _id: 41,
      img: img6,
      name: "Zamonaviy ta'lim tizimini rivojlantirish va unga qaratilgan kreativ g'oyalar, takliflar va yechimlar mavzusida koptarmoqli 8-sonli respublika ilmiy onlayn konferensiyasi ",
      date: '22-04-2022'
    }
  ];

  return (
    <div className={classes.newsHeight} id="news">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Yangiliklar</h2>

      <div className={classes.newsWrap}>
        {cCompanies.reverse().map((item) => {
          return (
            <div className={classes.eachNews} key={item._id} style={{ textDecoration: 'none' }}>
              <div className={classes.newsPic}>
                <img src={item.img} alt="News" />
              </div>
              <div className={classes.myPadding}>
                <h4 style={{ marginLeft: '10px', fontSize: 16 + fontSize }}>{item.name}</h4>
                <h3 className={classes.postLink}>
                  {data.batafsil} <i className="fas fa-angle-double-right" />
                </h3>
              </div>
              <p>
                <i className="fas fa-calendar-alt" /> {item.date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;

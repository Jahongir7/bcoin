/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getNews } from '../redux/actions/adminActions';
import 'aos/dist/aos.css';
import classes from './landingpage/News.module.css';

const AdminNews = () => {
  const cCompanies = [
    {
      _id: 1,
      img: 'https://storage.kun.uz/source/6/webpJ-SHzIr0dagl1wRY6zEQFY4NFLYY.jpg',
      name: "Ta'lim tizimi: 2021 yilda qanday yangiliklar kutilyapti?",
      date: '22-04-2022'
    }
  ];

  return (
    <div>
      <div className={classes.newsWrap}>
        {cCompanies.reverse().map((item) => {
          return (
            <div className={classes.eachNews} key={item._id}>
              <div className={classes.newsPic}>
                <img src={item.img} alt="News" />
              </div>
              <div className={classes.myPadding}>
                <h4>{item.name}</h4>
                <Link to={`/dashboard/admin-post/${item._id}`} className={classes.postLink}>
                  <h3 className={classes.postLink}>
                    Batafsil <i className="fas fa-angle-double-right" />
                  </h3>
                </Link>
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

export default AdminNews;

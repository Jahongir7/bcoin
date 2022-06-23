/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Aos from 'aos';
import 'aos/dist/aos.css';
import classes from './News.module.css';
import { getNews } from '../../redux/actions/adminActions';

const News = ({ data, fontSize }) => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.adminReducer.news);
  let cCompanies = [];

  if (news && news.length > 0) {
    cCompanies = [...news];
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div className={classes.newsHeight} id="news">
      <h1 align="center" style={{ color: '#4f5665', fontSize: 32 + fontSize }}>
        <span className={classes.edu}>RIO</span> ва
        <span className={classes.bitrix}> RIATM</span> {data.main}{' '}
        <i className="fas fa-newspaper" />
      </h1>
      <div className={classes.newsWrap}>
        {cCompanies
          .reverse()
          .slice(0, 3)
          .map((item) => {
            return (
              <Link
                to={`/landing-page/post/${item._id}`}
                className={classes.eachNews}
                key={item._id}
                data-aos="fade-up"
                style={{ textDecoration: 'none' }}
              >
                <div className={classes.newsPic}>
                    <img src={item.avatar ? item.avatar : item.images[0] && item.images[0].secure_url} alt="News" />
                  </div>
                <div className={classes.myPadding}>
                  <h4 style={{ marginLeft: '10px', fontSize: 16 + fontSize }}>
                    <Link to={`/landing-page/post/${item._id}`} className={classes.postLink}>
                      {item.name}
                    </Link>
                  </h4>
                  <Link to={`/landing-page/post/${item._id}`} className={classes.postLink}>
                    <h3 className={classes.postLink}>
                      {data.batafsil} <i className="fas fa-angle-double-right" />
                    </h3>
                  </Link>
                </div>
                <p>
                  <i className="fas fa-calendar-alt" /> {item.date}
                </p>
              </Link>
            );
          })}
      </div>
      <div style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: 28 + fontSize }}>
        <ul>
          <li>
            <Link to="/posts" className={classes.animated_arrow}>
              <span className={`${classes.the_arrow} ${classes._left}`}>
                <span className={classes.shaft} />
              </span>
              <span className={classes.main}>
                <span className={classes.text}>{data.allNews}</span>
                <span className={`${classes.the_arrow} ${classes._right}`}>
                  <span className={classes.shaft} />
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;

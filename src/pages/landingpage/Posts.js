/* eslint-disable arrow-body-style */
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from '../../redux/actions/adminActions';
import 'aos/dist/aos.css';
import classes from './News.module.css';

const Posts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.adminReducer.news);
  let cCompanies = [];

  if (news && news.length > 0) {
    cCompanies = [...news];
  }
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <div>
      <button
        className={classes.button}
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fas fa-angle-double-left" /> Ortga
      </button>
      <h1 align="center" style={{ color: '#4f5665' }}>
        <span className={classes.edu}>RIO</span> va
        <span className={classes.bitrix}> RIATM</span> Xorazm filialida bo'layotgan yangiliklar{' '}
        <i className="fas fa-newspaper" />
      </h1>
      <div className={classes.newsWrap}>
        {cCompanies.length > 0
          ? cCompanies.reverse().map((item) => {
              return (
                <div className={classes.eachNews} key={item._id}>
                  <div className={classes.newsPic}>
                    <img src={item.avatar ? item.avatar : item.images[0] && item.images[0].secure_url} alt="News" />
                  </div>
                  <div className={classes.myPadding}>
                    <h4>
                      <Link to={`/landing-page/post/${item._id}`} className={classes.postLink}>
                        {item.name}
                      </Link>
                    </h4>
                    <Link to={`/landing-page/post/${item._id}`} className={classes.postLink}>
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
            })
          : "Hozircha yangiliklar yo'q"}
      </div>
    </div>
  );
};

export default Posts;

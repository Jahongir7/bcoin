/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch, useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import { LoadingButton } from '@mui/lab';
import { deleteNews, getNews } from '../redux/actions/adminActions';
import 'aos/dist/aos.css';
import classes from './landingpage/News.module.css';

const AdminNews = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.adminReducer.news);
  let cCompanies = [];

  if (news && news.length > 0) {
    cCompanies = [...news];
  }
  function myFunction1(id) {
    swal("Haqiqatdan ham ushbu postni o'chirasizmi?", {
      buttons: ["Yo'q", 'Ha']
    }).then((value) => {
      if (value) {
        dispatch(deleteNews(id));
        dispatch(getNews());
      }
    });
  }
  useEffect(() => {
    dispatch(getNews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1 align="center" style={{ color: '#4f5665' }}>
        <span className={classes.edu}>RIO</span> va
        <span className={classes.bitrix}> RIATM</span> XF yangiliklar{' '}
        <i className="fas fa-newspaper" />
      </h1>
      <div className={classes.newsWrap}>
        {cCompanies.reverse().map((item) => {
          return (
            <div className={classes.eachNews} key={item._id}>
              <div className={classes.newsPic}>
                    <img src={item.avatar ? item.avatar : item.images[0] && item.images[0].secure_url} alt="News" />
                  </div>
              <div className={classes.myPadding}>
                <h4>
                  <Link to={`/dashboard/admin-post/${item._id}`} className={classes.postLink}>
                    {item.name}
                  </Link>
                </h4>
                <Link to={`/dashboard/admin-post/${item._id}`} className={classes.postLink}>
                  <h3 className={classes.postLink}>
                    Batafsil <i className="fas fa-angle-double-right" />
                  </h3>
                </Link>
              </div>
              <p>
                <i className="fas fa-calendar-alt" /> {item.date}
              </p>
              <LoadingButton
                onClick={() => myFunction1(item._id)}
                style={{ marginTop: '20px', color: 'white' }}
              >
                <Icon icon="bi:trash" width={24} height={24} />
              </LoadingButton>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminNews;

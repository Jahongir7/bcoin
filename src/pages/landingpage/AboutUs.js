/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import aboutImg from '../../img/1-861.png';
import classes from './AboutUs.module.css';

const AboutUs = ({ data, fontSize }) => {
  return (
    <div>
      <div className={classes.about_us} id="aboutus">
        <div className={classes.about_left}>
          <h2 style={{ fontSize: 23 + fontSize }}>
            <span className={classes.edu}>RIO</span> ва
            <span className={classes.bitrix}> RIATM</span> - {data.main}
          </h2>
          <p style={{ fontSize: 23 + fontSize }}>{data.mainP}</p>
          <div className={classes.btn}>
            <Link to="/posts">
              <button className={classes.button} style={{ fontSize: 16 + fontSize }}>
                {data.startBtn}
                <i className="fas fa-rss-square" style={{ color: 'green-yellow' }} />
              </button>
            </Link>
          </div>
        </div>
        <div className={classes.about_right}>
          <Tilt>
            <div className={classes.myEffect}>
              <img src={aboutImg} alt="" width="611px" height="382px" />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/iframe-has-title */
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NewLandingDataRu, NewLandingDataUz, landingDataRu, landingDataUz } from './LandingData';
import useWindowDimensions from './ScreenSize';
import classes from './LandingInfo.module.css';

const LeadInfo = ({ data }) => {
  const { width } = useWindowDimensions();
  const lang = useSelector((state) => state.langReducer.language);
  let lanData = [];
  if (lang === 'uz') {
    lanData = [...landingDataUz];
  } else {
    lanData = [...landingDataRu];
  }

  let NewLanData = [];
  if (lang === 'uz') {
    NewLanData = [...NewLandingDataUz];
  } else {
    NewLanData = [...NewLandingDataRu];
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={classes.demo_lead}>
        <h1>
          <span>{data.demo}</span> {data.demoP}
        </h1>
        <div className={classes.lead}>
          {lanData.map((item) => {
            return (
              <div className={classes.lead_item} key={item.id}>
                <div className={classes.lead_icon} key={item.id}>
                  {item.svg}
                </div>
                <div className={classes.lead_right}>
                  <h3>{item.num}</h3>
                  <p>{item.title}</p>
                  <p>{item.password}</p>
                  <div className={classes.demo_button}>
                    <Link to="/login">
                      <button>
                        {data.login} <i className="fas fa-sign-in-alt"></i>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={classes.down_info} id="ustunligimiz">
        <div className={classes.down_info_left} style={{ margin: ' 0px auto' }}>
          <iframe
            width={width > 880 ? 560 : '100%'}
            height="315"
            src="https://www.youtube.com/embed/GpyEjnATU4k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={classes.text}>
          {NewLanData.map((item) => {
            return (
              <div className={classes.newinfos} key={item.id}>
                <div className={classes.new_icon} style={{ backgroundColor: `${item.color}` }}>
                  {item.icon}
                </div>
                <div className={classes.newinfosText}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LeadInfo;

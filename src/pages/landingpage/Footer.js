/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import { SocialButtons } from './FooterSocialButtons';
import CalendarFooter from './Calendar';
import classes from './Footer.module.css';

const Footer = ({ data, fontSize }) => {
  return (
    <div className={classes.footer} id="footer">
      <div className={classes.footer_left} style={{ fontSize: 16 + fontSize }}>
        <p style={{ marginTop: '20px' }}>Bizni ijtimoiy tarmoqlarda kuzatib boring</p>
        <div className={classes.social_icons}>
          {SocialButtons.map((item) => {
            return (
              <div className={classes.footerBtn} key={item.id}>
                <button>
                  <a href={item.link}>{item.icon}</a>
                </button>
              </div>
            );
          })}
        </div>
        <p className={classes.footer_left_p} style={{ marginTop: '20px' }}>
          <b>
            <i className="fas fa-map-marker-alt" style={{ color: 'red', marginRight: '10px' }} />
            {data.manzil}:
          </b>{' '}
          Al-Xorazmiy ko'cha, 110-uy
        </p>
      </div>
      <div className={classes.footer_center}>
        <CalendarFooter />
      </div>
      <div className={classes.footer_right} style={{ fontSize: 16 + fontSize }}>
        <h3>
          <i className="fas fa-headset" style={{ color: 'white' }} /> Biz bilan bog'lanish
        </h3>
        <ul>
          <li>
            <a href="tel: +998622288291">
              <i className="fas fa-phone-alt" /> +998 (62) 228-82-91
            </a>
          </li>
          <li>
            <a href="tel:+998622288292">
              <i className="fas fa-phone-alt" /> +998 (62) 228-82-92
            </a>
          </li>
          <li>
            <a href="tel:+998712462525">
              <i className="fas fa-phone-alt" /> +998(71) 246-98-40
            </a>
          </li>
          <li>
            <a href="https://t.me_ubtuit_official">
              <i className="fab fa-telegram-plane" />
              UBTUIT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

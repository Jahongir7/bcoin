/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
import { Link as MyUrl } from 'react-router-dom';
import classes from './Navbar.module.css';
import img1 from '../../img/bb.png';

const TopBar = () => {
  return (
    <div className={classes.nt}>
      <div>
        <img src={img1} alt="" />
      </div>
      <div className={classes.nt_text}>
        Oliy ta'limda sifatli bilim olishda talabalarning manfaatdorligini oshirish uchun foydali
        "B-Coin" dasturi
      </div>
      <div className={classes.navbar_right}>
        <MyUrl to="/login">
          <button type="button" className={classes.button} style={{ marginTop: 0 }}>
            Kirish
          </button>
        </MyUrl>
      </div>
    </div>
  );
};

export default TopBar;

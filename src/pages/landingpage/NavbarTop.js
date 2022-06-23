/* eslint-disable arrow-body-style */
import classes from './NavbarTop.module.css';
import img from '../../img/LOGO.png';

const NavbarTop = () => {
  return (
    <div className={classes.navtop}>
      <div className={classes.wrap}>
        <div className={classes.mainLogo}>
          <img src={img} alt="logo" width="300px" />
        </div>
        <div className={classes.socials}>a</div>
        <div className={classes.phoneNumbers}>a</div>
      </div>
    </div>
  );
};

export default NavbarTop;

/* eslint-disable no-unused-vars */
/* eslint-disable object-shorthand */
/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-scroll';
import { Link as MyUrl } from 'react-router-dom';
import Select from 'react-select';
import useWindowDimensions from './ScreenSize';
import classes from './Navbar.module.css';

const Navbar = ({ data, fontSize }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { width } = useWindowDimensions();

  const lang = localStorage.getItem('lang') || 'uz';
  const shrift = localStorage.getItem('shrift') || 'orta';

  const closeMobileMenu = () => {
    setClick(false);
  };

  const handleChange = (event) => {
    dispatch({ type: 'LANG_CHANGED', payload: event.value });
    localStorage.setItem('lang', event.value);
  };
  const handleChangeShrift = (event) => {
    dispatch({ type: 'SHRIFT_CHANGED', payload: event.value });
    localStorage.setItem('shrift', event.value);
  };

  const options = [
    {
      value: 'uz',
      label: `Ўзбекча`
    },
    {
      value: 'ru',
      label: `Русский`
    },
    {
      value: 'en',
      label: `English`
    }
  ];
  const shriftOptions = [
    {
      value: 'kichik',
      label: data.kichik
    },
    {
      value: 'orta',
      label: data.orta
    },
    {
      value: 'katta',
      label: data.katta
    }
  ];
  return (
    <div className={`${classes.navbar}`}>
      <div className={classes.menu_icon} onClick={handleClick}>
        {click ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>
      <div className={click ? `${classes.nav_center_mobile}` : `${classes.nav_center}`}>
        <ul className={classes.nav_ul_item} style={{ margin: '10px auto' }}>
          <Link to="aboutus" onClick={closeMobileMenu} duration={1000} smooth="true">
            <li style={{ fontSize: 16 + fontSize }}>{data.aboutUs}</li>
          </Link>
          <Link to="news" onClick={closeMobileMenu} duration={1000} smooth="true">
            <li style={{ fontSize: 16 + fontSize }}>Reyting</li>
          </Link>
          <Link to="news" onClick={closeMobileMenu} duration={1000} smooth="true">
            <li style={{ fontSize: 16 + fontSize }}>{data.ustunligimiz}</li>
          </Link>
          <MyUrl to="/services" onClick={closeMobileMenu} style={{ textDecoration: 'none' }}>
            <li style={{ fontSize: 16 + fontSize }}>{data.tariflar}</li>
          </MyUrl>
          <Link to="questions" onClick={closeMobileMenu} duration={1000} smooth="true">
            <li style={{ fontSize: 16 + fontSize }}>{data.savollar}</li>
          </Link>
          <Link to="map" onClick={closeMobileMenu} duration={1000} smooth="true">
            <li style={{ fontSize: 16 + fontSize }}>{data.fikrlar}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

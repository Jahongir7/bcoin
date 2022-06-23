/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable arrow-body-style */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ModalImage from "react-modal-image";
import { getEachNews } from '../../redux/actions/adminActions';
import 'aos/dist/aos.css';
import classes from './News.module.css';
import Loader from './Loader';

const Post = () => {
  const dispatch = useDispatch();
  const id = window.location.pathname.split('/')[3];
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getEachNews(id));
  }, [dispatch]);
  const { post } = useSelector((state) => state.adminReducer);
const shrift = useSelector((state) => state.shriftReducer.shrift);
  let shriftData = {};
switch (shrift) {
    case 'kichik':
      shriftData = -5;
      break;
    case 'orta':
      shriftData = 0;
      break;
    case 'katta':
      shriftData = 8;
      break;
    default:
      shriftData = 0;
      break;
  }
  let arr= [];
  
 post && post.images &&  post.images.map((item) => {
    return arr.push(item.secure_url);
  })
  return (
    <div style={{ margin: '30px' }}>
      {post ? (
        <>
          <button className={classes.button} type="button" onClick={() => navigate(-1)}>
            <i className="fas fa-angle-double-left" /> Ortga
          </button>
          <h1 align="center" style={{ color: '#4f5665' }}>
            <span className={classes.edu}>RIO</span> va
            <span className={classes.bitrix}> RIATM</span> Xorazm filialida bo'layotgan yangiliklar{' '}
            <i className="fas fa-newspaper" />
          </h1>
          <div className={classes.postContainer}>
          {arr.length>0 ? arr.map((item) => {
            return(
              <div  key={item} style={{margin:"10px auto"}}>
              <ModalImage small={item} large={item} alt=""/>
              </div> )
          }): <img src={post.avatar} alt="" />}
            <h2 align="center" style={{fontSize: shriftData+20}}>{post.name}</h2>
            <h4 style={{ marginTop: '30px', fontSize: shriftData+18}}>{post.description}</h4>
            <p style={{fontSize: shriftData+16}}>
              <i className="fas fa-calendar-alt" /> {post.date}
            </p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Post;

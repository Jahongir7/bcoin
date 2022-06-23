/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unknown-property */
import './prof.css';
import img from '../img/ff.png';

const Prof = () => {
  return (
    <div className="wr">
      <div class="wrapper">
        <div class="img-area">
          <div class="inner-area">
            <img src={img} alt="twitter" />
          </div>
        </div>
        <div class="name">Atajanov Bobur</div>
        <div class="career">Talaba</div>
        <hr class="horizon" />
        <button class="about">Men haqimda</button>
        <div class="info">
          <p>Ism: Botir</p>
          <p>Yosh: 23</p>
          <p></p>
          <p></p>
          <p>Email:</p>
          <p></p>
        </div>
        <p class="flow">Follow Me</p>
        <div class="social-icons">
          <a href="??" target="_blank" class="fb">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="??" target="_blank" class="messenger">
            <i class="fab fa-facebook-messenger"></i>
          </a>
          <a href="??" target="_blank" class="insta">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="??" target="_blank" class="telegram">
            <i class="fab fa-telegram-plane"></i>
          </a>
          <a href="??" target="_blank" class="email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prof;

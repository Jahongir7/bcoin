/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './SignIn.css';

export default function Signup() {
  return (
    <div className="sign-in-wrapper">
      <section>
        <div className="box">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>

          <div className="container">
            <div className="form1">
              <h2>Ro'yhatdan o'tish</h2>
              <form action="">
                <div className="inputBx">
                  <input
                    type="text"
                    required="required"
                    placeholder="Telefon Raqam"
                    value="+998943127774"
                  />
                </div>
                <div className="inputBx password">
                  <input
                    id="password-input"
                    type="password"
                    name="password"
                    required="required"
                    placeholder="Parol"
                    value="943127774"
                  />
                </div>
                <div className="inputBx">
                  <input
                    type="text"
                    required="required"
                    placeholder="Ismingiz"
                    value="Botir Atajanov"
                  />
                </div>
                <div className="inputBx">
                  <input type="text" required="required" placeholder="Fakultet" value="" />
                </div>
                <div className="inputBx">
                  <input type="text" required="required" placeholder="Guruh" value="" />
                </div>
                <div
                  className="btn"
                  style={{
                    background: '#23a6d5',
                    border: 'none',
                    textAlign: 'center',
                    fontSize: '18px',
                    color: '#fff',
                    borderRadius: '8px'
                  }}
                >
                  Ro'yhatdan o'tish
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

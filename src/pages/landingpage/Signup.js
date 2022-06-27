/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './SignIn.css';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

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
              <h2>Ro'yxatdan o'tish</h2>
              <Formik
                initialValues={{
                  phone: '',
                  password: '',
                  firstName: '',
                  lastName: '',
                  faculty: '',
                  course: '',
                  group: ''
                }}
                onSubmit={async (values) => {
                  console.log(values);
                  fetch('https://bilim-coin.herokuapp.com/register', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  }).then((data) => {
                    console.log(data);
                    if (data && data.status === 200) {
                      navigate('/login', { replace: true });
                    }
                  });
                }}
              >
                {({ values, handleChange, handleBlur }) => (
                  <Form>
                    <Stack
                      spacing={3}
                      style={{ marginBottom: 30, color: 'red', borderColor: 'red' }}
                    >
                      <TextField
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        fullWidth
                        name="firstName"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Ismingiz"
                        value={values.firstName}
                        color="warning"
                      />
                      <TextField
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        fullWidth
                        name="lastName"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Familiyangiz"
                        value={values.lastName}
                        color="warning"
                      />
                      <TextField
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        fullWidth
                        autoComplete="phone"
                        name="phone"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Telefon"
                        value={values.phone}
                        color="warning"
                      />
                      <TextField
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        fullWidth
                        name="faculty"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Fakultet"
                        value={values.faculty}
                        color="warning"
                      />
                      <TextField
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        fullWidth
                        name="course"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Kursingiz"
                        value={values.course}
                        color="warning"
                      />
                      <TextField
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        fullWidth
                        name="group"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Guruhingiz"
                        value={values.group}
                        color="warning"
                      />
                      <TextField
                        fullWidth
                        sx={{
                          input: {
                            borderColor: 'white',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                          }
                        }}
                        autoComplete="current-password"
                        type="password"
                        label="Parolingiz"
                        onChange={handleChange}
                        name="password"
                        onBlur={handleBlur}
                        value={values.password}
                        color="warning"
                        // {...getFieldProps('password')}
                      />
                    </Stack>
                    <LoadingButton fullWidth size="large" type="submit" variant="contained">
                      Ro'yxatdan o'tish
                    </LoadingButton>
                  </Form>
                )}
              </Formik>
              {/* <form action="">
                <div className="inputBx">
                  <input type="text" required="required" placeholder="Telefon Raqam" />
                </div>
                <div className="inputBx password">
                  <input
                    id="password-input"
                    type="password"
                    name="password"
                    required="required"
                    placeholder="Parol"
                  />
                </div>
                <div className="inputBx">
                  <input type="text" required="required" placeholder="Ismingiz" />
                </div>
                <div className="inputBx">
                  <input type="text" required="required" placeholder="Fakultet" />
                </div>
                <div className="inputBx">
                  <input type="text" required="required" placeholder="Guruh" />
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
              </form> */}
            </div>
            <Link
              to="/login"
              style={{
                color: 'white',
                fontWeight: '900',
                textDecoration: 'none',
                marginTop: '30px'
              }}
            >
              Kirish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

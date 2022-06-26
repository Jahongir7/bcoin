/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/self-closing-comp */
import { useEffect } from 'react';
// import * as Yup from "yup";
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { login, checkToken } from '../../redux/actions/authActions';
import './SignIn.css';

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
  const role = useSelector((state) => state.authReducer.role);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(checkToken(3600));
      navigate('/dashboard/companies', { replace: true });
    }
    console.log(isAuthenticated);
    console.log(role);
  });

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
              <h2>Kirish</h2>
              <Formik
                initialValues={{ phone: '', password: '' }}
                onSubmit={async (values) => {
                  dispatch(login(values));
                  console.log(values);
                }}
              >
                {({ values, handleChange, handleBlur }) => (
                  <Form>
                    <Stack
                      spacing={3}
                      style={{ marginBottom: 30, color: 'red', borderColor: 'red' }}
                    >
                      <TextField
                        sx={{ input: { color: 'white', borderColor: 'white' } }}
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
                        fullWidth
                        sx={{ input: { color: 'white', borderColor: 'white' } }}
                        autoComplete="current-password"
                        type="password"
                        label="Yashirin so&#8216;z"
                        onChange={handleChange}
                        name="password"
                        onBlur={handleBlur}
                        value={values.password}
                        color="warning"
                        // {...getFieldProps('password')}
                      />
                    </Stack>
                    <LoadingButton fullWidth size="large" type="submit" variant="contained">
                      Kirish
                    </LoadingButton>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* eslint-disable no-unneeded-ternary */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useEffect, useState } from 'react';
import { Stack, TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from 'react-redux';
import ModalImage from 'react-modal-image';
import { addPrices, getPrices } from '../redux/actions/adminActions';
import './ranking.css';

const Baholash = () => {
  const [val, setVal] = useState(0);
  const dispatch = useDispatch();
  const students = useSelector((state) => state.adminReducer.prices);
  let arr = [];

  if (students && students.length > 0) {
    arr = [...students];
  }
  useEffect(() => {
    dispatch(getPrices());
  }, [dispatch]);
  console.log(arr[0]);
  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Talabalar Ro'yhati</h2>
      <div className="container">
        <div className="wrapper">
          <table>
            <thead>
              <tr>
                <th>Ism-Familiya</th>
                <th>Ball</th>
                <th>Fayli</th>
                <th>Baho</th>
              </tr>
            </thead>
            <tbody>
              {arr.length > 0
                ? arr.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td className="team">
                          {item.firstName} {item.lastName}
                        </td>
                        <td className="points">{item?.files[0]?.grade || 0}/100</td>
                        <td className="up-down" style={{ width: '20px', height: '20px' }}>
                          {item.files[0] && item.files[0].image ? (
                            <ModalImage
                              width="30px"
                              height="30px"
                              alt=""
                              small={item.files[0].image || ''}
                              large={item.files[0].image || ''}
                            />
                          ) : (
                            'Topshirilmagan'
                          )}
                        </td>
                        <td>
                          <Formik
                            initialValues={{
                              grade: 0
                            }}
                            onSubmit={(values, { resetForm }) => {
                              dispatch(addPrices(item._id, item.files[0]._id, values));
                              resetForm({ values: '' });
                              console.log(values);
                            }}
                          >
                            {({ values, handleChange, handleBlur, touched, errors }) => (
                              <Form style={{ display: 'flex' }}>
                                <Stack>
                                  <div>
                                    <TextField
                                      type="number"
                                      value={values.grade}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      name="grade"
                                      disabled={item.files[0]?._id ? false : true}
                                    />
                                  </div>
                                </Stack>
                                <LoadingButton
                                  size="large"
                                  type="submit"
                                  variant="contained"
                                  style={{ marginLeft: '20px' }}
                                >
                                  Saqlash
                                </LoadingButton>
                              </Form>
                            )}
                          </Formik>
                        </td>
                      </tr>
                    );
                  })
                : ''}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Baholash;

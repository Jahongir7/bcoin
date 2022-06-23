/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable arrow-body-style */
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import classes from './landingpage/Services.module.css';
import AddService from './AddServices';
import { getPrices, deletePrices, updateService } from '../redux/actions/adminActions';
import Loader from './landingpage/Loader';

const AdminServices = () => {
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.adminReducer.prices);
  let cprices = [];
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const handleClose = () => setOpen(false);
  if (prices && prices.length > 0) {
    cprices = [...prices];
  }
  const hendl = (item) => {
    setOpen(true);
    setData(item);
  };

  function myFunction1(id) {
    swal("Haqiqatdan ham ushbu xizmatni o'chirasizmi ?", {
      buttons: ["Yo'q", 'Ha']
    }).then((value) => {
      if (value) {
        dispatch(deletePrices(id));
        dispatch(getPrices());
      }
    });
  }
  useEffect(() => {
    dispatch(getPrices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.servicesContainer}>
      <AddService />
      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
              <Formik
                initialValues={{
                  description: data.description,
                  price1: data.price1,
                  price: data.price
                }}
                onSubmit={(values, { resetForm }) => {
                  resetForm({ values: '' });
                  handleClose();
                  dispatch(updateService(values, data._id));
                  dispatch(getPrices());
                }}
              >
                {({ values, handleChange, handleBlur, touched, errors }) => (
                  <Form>
                    <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
                      <div>
                        <TextField
                          type="text"
                          value={values.description}
                          className={classes.contract_input}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="description"
                          multiline
                          style={{ margin: '10px auto' }}
                          error={Boolean(touched.date && errors.date)}
                        />
                        <div className={classes.errors}>
                          {errors.date && touched.date ? <div>{errors.date}</div> : null}
                        </div>
                      </div>
                      <div>
                        <TextField
                          type="text"
                          value={values.price}
                          className={classes.contract_input}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{ margin: '10px auto' }}
                          name="price"
                          error={Boolean(touched.description && errors.description)}
                        />
                        <div className={classes.errors}>
                          {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <TextField
                          type="text"
                          value={values.price1}
                          className={classes.contract_input}
                          style={{ margin: '10px auto' }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="price1"
                          error={Boolean(touched.debit && errors.debit)}
                        />
                        <div className={classes.errors}>
                          {errors.debit && touched.debit ? <div>{errors.debit}</div> : null}
                        </div>
                      </div>
                    </Stack>
                    <LoadingButton size="large" type="submit" variant="contained">
                      Yangilash
                    </LoadingButton>
                  </Form>
                )}
              </Formik>
            </div>
          ) : (
            ''
          )}
        </Box>
      </Modal>
      <div className={classes.groupWrap} style={{ marginTop: '20px' }}>
        <div className={classes.item_head1}>
          <div className={classes.karta}>Xizmat turi</div>
          <div className={classes.founderPayment}>Rezedentlar(so'm)</div>
          <div className={classes.founderPayment}>Norezedentlar(so'm)</div>
          <div className={classes.founderPayment}>Amallar</div>
        </div>
        <div className={classes.data}>
          {cprices && cprices.length > 0 ? (
            cprices.reverse().map((item) => (
              <div className={classes.item1} key={item._id}>
                <div className={classes.karta}>{item.description}</div>
                <div className={classes.founderPayment}>{item.price}</div>
                <div className={classes.founderPayment}>{item.price1}</div>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <LoadingButton onClick={() => hendl(item)}>
                    <Icon icon="bi:pencil" width={24} height={24} />
                  </LoadingButton>
                  <LoadingButton onClick={() => myFunction1(item._id)}>
                    <Icon icon="bi:trash" width={24} height={24} />
                  </LoadingButton>
                </div>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminServices;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable prettier/prettier */
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import { addPrices, getPrices } from '../redux/actions/adminActions';
import classes from '../css/AddContract.module.css';
// ----------------------------------------------------------------------
const ValidationAddNews = Yup.object().shape({
  description: Yup.string()
    .required('Izoh kiritilishi shart!')
    .min(5, "Yangilik matni kamida 5 ta harfdan iborat bo'lishi kerak!"),
  price: Yup.string().required('Summa kiritilsin yoki 0 deb yozilsin!'),
  price1: Yup.string().required('Summa kiritilsin yoki 0 deb yozilsin!')
});
export default function AddService() {
  const dispatch = useDispatch();
  return (
    <div className={classes.contract_form}>
      <h1>Xizmat qo'shish</h1>
      <Formik
        initialValues={{
          description: '',
          price: '',
          price1: ''
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addPrices(values));
          dispatch(getPrices());
          resetForm();
        }}
        validationSchema={ValidationAddNews}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <Stack style={{ margin: '30px auto' }} className={classes.flexx}>
              <div className={classes.myclas}>
                <label htmlFor="domId2" className={classes.contract_input1}>
                  Xizmat izohi
                </label>
                <input
                  autoComplete="username"
                  type="text"
                  label="Xizmat izohi"
                  value={values.description}
                  className={classes.contract_input1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="description"
                  id="domId2"
                />
                <div className={classes.errors}>
                  {errors.description && touched.description ? (
                    <div>{errors.description}</div>
                  ) : null}
                </div>
              </div>
              <div className={classes.myclas}>
                {/* <TextField
                  autoComplete="username"
                  type="number"
                  label="Rezedentlar uchun to'lov"
                  value={values.price}
                  className={classes.contract_input}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="price"
                  multiline
                  error={Boolean(touched.price && errors.price)}
                /> */}
                <label htmlFor="domId" className={classes.contract_input1}>
                  Rezedentlar uchun to'lov
                </label>
                <NumberFormat
                  value={values.price}
                  thousandSeparator={true}
                  inputmode="numeric"
                  className={classes.contract_input1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="price"
                  id="domId"
                />
                <div className={classes.errors}>
                  {errors.price && touched.price ? <div>{errors.price}</div> : null}
                </div>
              </div>
              <div className={classes.myclas}>
                <label htmlFor="domId1" className={classes.contract_input1}>
                  Norezedentlar uchun to'lov
                </label>
                <NumberFormat
                  value={values.price1}
                  thousandSeparator={true}
                  inputmode="numeric"
                  className={classes.contract_input1}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="price1"
                  id="domId1"
                />
                <div className={classes.errors}>
                  {errors.price1 && touched.price1 ? <div>{errors.price1}</div> : null}
                </div>
              </div>
            </Stack>
            <LoadingButton
              size="large"
              type="submit"
              variant="contained"
              style={{ marginLeft: '20px' }}
            >
              Yuborish
            </LoadingButton>
          </Form>
        )}
      </Formik>
    </div>
  );
}

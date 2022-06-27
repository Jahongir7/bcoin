/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import classes from '../css/AddContract.module.css';
// ----------------------------------------------------------------------

export default function Postt() {
  const [selectedImage, setSelectedImage] = useState(false);
  const { token } = useSelector((state) => state.authReducer);

  return (
    <div className={classes.contract_form}>
      <h1>Fayl yuborish</h1>

      <div>
        <Formik
          initialValues={{
            description: ''
          }}
          onSubmit={async (values) => {
            let formData = new FormData();
            formData.append('file', selectedImage);
            formData.append('upload_preset', 'uhnveshd');
            fetch('https://api.cloudinary.com/v1_1/dtyz1dnzd/upload', {
              method: 'POST',
              body: formData
            })
              .then((response) => response.text())
              .then((data) => {
                fetch('https://bilim-coin.herokuapp.com/upload-image', {
                  method: 'PUT',
                  body: JSON.stringify({
                    image: JSON.parse(data).url,
                    description: values.description
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: token
                  }
                }).then((data) => {
                  console.log(data);
                });
              });
          }}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form>
              <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
                <TextField
                  type="text"
                  label="Izoh"
                  className={classes.contract_input}
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  multiline
                />
                <input
                  type="file"
                  className={classes.contract_input}
                  name="myImage"
                  accept="image/*"
                  onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                  }}
                />
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
    </div>
  );
}

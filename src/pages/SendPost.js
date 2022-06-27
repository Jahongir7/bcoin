/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import classes from '../css/AddContract.module.css';
import { addNews } from '../redux/actions/adminActions';
// ----------------------------------------------------------------------

export default function SendPost() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    image: '',
    description: ''
  });
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const url = 'https://api.cloudinary.com/v1_1/dtyz1dnzd/image/upload';
  let response;

  const onSubmit = (e) => {
    e.preventDefault();
    const files = document.querySelector('[type=file]').files;
    const imageData = new FormData();

    let file = files[0];
    imageData.append('file', file);
    imageData.append('upload_preset', 'uzbekdevs');

    fetch(url, {
      method: 'POST',
      body: imageData
    })
      .then((response) => {
        return response.text();
      })
      .then(async (data) => {
        response = await JSON.parse(data).url;
        formData.image = response;
        dispatch(addNews(formData));
        console.log(response, formData);
      });
  };

  return (
    <div className={classes.contract_form}>
      <h1>Diplom ishini yuborish</h1>

      <div>
        <Stack style={{ marginBottom: 30 }} className={classes.flexx}>
          <div>
            <TextField
              autoComplete="username"
              type="text"
              label="Qisqacha matni"
              className={classes.contract_input}
              name="description"
              value={formData.description}
              onChange={onChange('description')}
              multiline
            />
          </div>

          <div>
            <TextField
              type="file"
              accept="image/*"
              name="pictures"
              onChange={onChange('image')}
              className={classes.contract_input}
              inputProps={{
                multiple: true
              }}
            />
          </div>
        </Stack>
        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          style={{ marginLeft: '20px' }}
          onSubmit={onSubmit}
        >
          Yuborish
        </LoadingButton>
      </div>
    </div>
  );
}

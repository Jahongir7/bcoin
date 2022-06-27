/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import classes from '../css/AddContract.module.css';
// ----------------------------------------------------------------------

export default function Postt() {
  const [data, setData] = useState({
    image: '',
    description: ''
  });
  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('image', data.image);
      formData.append('description', data.description);

      const res = await fetch('http://localhost:5000/post', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        setData({ image: '', description: '' });
      }
    } catch (err) {
      console.log(err);
    }
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
              label="Izoh"
              className={classes.contract_input}
              name="description"
              value={data.description}
              onChange={handleChange('description')}
              multiline
            />
          </div>

          <div>
            <TextField
              type="file"
              accept="image/*"
              name="image"
              onChange={handleChange('image')}
              className={classes.contract_input}
            />
          </div>
        </Stack>
        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          style={{ marginLeft: '20px' }}
          onClick={handleSubmit}
        >
          Yuborish
        </LoadingButton>
      </div>
    </div>
  );
}

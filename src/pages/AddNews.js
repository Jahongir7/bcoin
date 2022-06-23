/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Stack, TextField } from '@mui/material';
import classes from '../css/AddContract.module.css';
// ----------------------------------------------------------------------

export default function AddNews() {
  const [data, setData] = useState({
    name: '',
    pictures: '',
    description: '',
    date: ''
  });
  const handleChange = (name) => (e) => {
    const value = name === 'pictures' ? e.target.files : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      Object.values(data.pictures).forEach((file) => {
        formData.append('pictures', file);
      });
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('date', data.date);

      const res = await fetch('https://onkolagiya.herokuapp.com/post', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        setData({ name: '', pictures: '', description: '', date: '' });
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
              label="Diplom ishi mavzusi"
              className={classes.contract_input}
              name="name"
              value={data.name}
              onChange={handleChange('name')}
            />
          </div>
          <div>
            <TextField
              autoComplete="username"
              type="text"
              label="Qisqacha matni"
              className={classes.contract_input}
              name="description"
              value={data.description}
              onChange={handleChange('description')}
              multiline
            />
          </div>
          <div>
            <TextField
              type="date"
              className={classes.contract_input}
              name="date"
              value={data.date}
              onChange={handleChange('date')}
            />
          </div>
          <div>
            <TextField
              type="file"
              accept="image/*"
              name="pictures"
              onChange={handleChange('pictures')}
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
        >
          Yuborish
        </LoadingButton>
      </div>
    </div>
  );
}

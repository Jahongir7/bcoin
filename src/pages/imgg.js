/* eslint-disable prefer-const */
import { useState } from 'react';

/* eslint-disable arrow-body-style */
const Imgaaa = () => {
  const [data, setData] = useState({
    name: '',
    image: '',
    description: '',
    date: ''
  });
  const handleChange = (name) => (e) => {
    const value = name === 'image' ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append('image', data.image);
      formData.append('name', data.name);
      formData.append('description', data.description);
      formData.append('date', data.date);

      const res = await fetch('https://onkologiya.herokuapp.com/post', {
        method: 'POST',
        body: formData
      });
      if (res.ok) {
        setData({ name: '', image: '', description: '', date: '' });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" name="image" onChange={handleChange('image')} />
      <input type="text" name="name" value={data.name} onChange={handleChange('name')} />
      <input
        type="text"
        name="description"
        value={data.description}
        onChange={handleChange('description')}
      />
      <input type="text" name="date" value={data.date} onChange={handleChange('date')} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Imgaaa;

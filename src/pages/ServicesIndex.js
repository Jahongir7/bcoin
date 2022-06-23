import { useState } from 'react';
import AdminServices from './Services';
import UpdateServices from './UpdateServices';

export default function CompanyIndex() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const handleEdit = (data, id) => {
    setId(id);
    setData(data);
  };
  const handleShow = (bool) => {
    setId(bool);
    console.log(bool);
  };
  return (
    <div>
      {id ? <UpdateServices defaultData={data} handleShow={handleShow} /> : ''}
      <AdminServices handleEdit={handleEdit} />
    </div>
  );
}

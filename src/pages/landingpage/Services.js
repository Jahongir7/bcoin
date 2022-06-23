/* eslint-disable arrow-body-style */

import MUIDataTable from 'mui-datatables';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrices } from '../../redux/actions/adminActions';
import useWindowDimensions from '../ScreenSize';
import Loader from './Loader';

const columns = [
  {
    name: 'description',
    label: 'Xizmat turi'
  },
  {
    name: 'price',
    label: 'Rezidentlar uchun'
  },
  {
    name: 'price1',
    label: 'Norezidentlar uchun'
  }
];

const options = {
  filter: true,
  sort: true,
  selectableRows: 'none'
};
const Services = () => {
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const prices = useSelector((state) => state.adminReducer.prices);
  let cprices = [];

  if (prices && prices.length > 0) {
    cprices = [...prices];
  }
  useEffect(() => {
    dispatch(getPrices());
  }, [dispatch]);
  return (
    <>
      {cprices.length > 0 ? (
        <div
          style={{
            backgroundColor: '#e5e5e5',
            padding: `${width < 880 ? '2px' : '30px'}`,
            overflow: 'auto'
          }}
        >
          <MUIDataTable
            title="Xizmat narxlari"
            data={cprices}
            columns={columns}
            options={options}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default Services;

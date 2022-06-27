/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPrices } from '../redux/actions/adminActions';
import './ranking.css';

const RankingTable = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.adminReducer.prices);
  let arr = [];

  if (students && students.length > 0) {
    arr = [...students];
  }
  useEffect(() => {
    dispatch(getPrices());
  }, [dispatch]);
  console.log(arr);

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Talabalar Reytingi</h2>
      <div className="container">
        <div className="wrapper">
          <table>
            <thead>
              <tr>
                <th>O'rin</th>
                <th>Ism-Familiya</th>
                <th>Ball</th>
              </tr>
            </thead>
            <tbody>
              {arr.length > 0
                ? arr.map((item, index) => {
                    return (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td className="team">
                          {item.firstName} {item.lastName}
                        </td>
                        <td className="points">{item?.files[0]?.grade || 0}/100</td>
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

export default RankingTable;

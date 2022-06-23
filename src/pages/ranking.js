/* eslint-disable arrow-body-style */
import './ranking.css';

const RankingTable = () => {
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
                <th>+/-</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="rank">1</td>
                <td className="team">Atajanov Botir</td>
                <td className="points">98/100</td>
                <td className="up-down">0</td>
              </tr>
              <tr>
                <td className="rank">2</td>
                <td className="team">Sobirov Anvar</td>
                <td className="points">98/100</td>
                <td className="up-down">0</td>
              </tr>
              <tr>
                <td className="rank">3</td>
                <td className="team">Alisherov Anvar</td>
                <td className="points">91/100</td>
                <td className="up-down">0</td>
              </tr>
              <tr>
                <td className="rank">4</td>
                <td className="team">Diyorov Anvar</td>
                <td className="points">90/100</td>
                <td className="up-down">0</td>
              </tr>
              <tr>
                <td className="rank">5</td>
                <td className="team">Rasulov Anvar</td>
                <td className="points">82/100</td>
                <td className="up-down">0</td>
              </tr>
              <tr>
                <td className="rank">6</td>
                <td className="team">Saidov Anvar</td>
                <td className="points">70/100</td>
                <td className="up-down">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RankingTable;

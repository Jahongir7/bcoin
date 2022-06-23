/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { useSelector } from 'react-redux';
// import Categories from './Categories';
import Footer from './Footer';
// import LeadInfo from './LeadInfo';
import Navbar from './Navbar';
// import Question from './Question';
import { dataUz, dataRu, dataEn } from './LanData';
import './All.css';
import './styles.css';
import Carousel from './Carousel';
import News from './News';
import Questions from './Questions';
import GoogleMap from './GoogleMap';
import Rahbariyat from './Rahbariyat';
import RankingTable from '../ranking';

const All = () => {
  const lang = useSelector((state) => state.langReducer.language);
  const shrift = useSelector((state) => state.shriftReducer.shrift);
  let lanData = {};
  let shriftData = {};
  switch (lang) {
    case 'uz':
      lanData = { ...dataUz };
      break;
    case 'ru':
      lanData = { ...dataRu };
      break;
    case 'en':
      lanData = { ...dataEn };
      break;
    default:
      lanData = { ...dataUz };
      break;
  }
  switch (shrift) {
    case 'kichik':
      shriftData = -5;
      break;
    case 'orta':
      shriftData = 0;
      break;
    case 'katta':
      shriftData = 8;
      break;
    default:
      shriftData = 0;
      break;
  }

  return (
    <>
      <Navbar data={lanData.navbar} fontSize={shriftData} />
      <Carousel />
      <RankingTable />
      <News data={lanData.news} fontSize={shriftData} />
      <Footer data={lanData.footer} fontSize={shriftData} />
    </>
  );
};

export default All;

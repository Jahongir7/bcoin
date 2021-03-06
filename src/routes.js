import { Routes, Route } from 'react-router-dom';
import AddStory from './pages/AddStory';
import Company from './pages/Company';
import Companies from './pages/Companies';
import AddCompany from './pages/AddCompany';
import Statistics from './pages/Statistics';
import UpdateStory from './pages/UpdateStory';
import CompanyIndex from './pages/CompanyIndex';
import AdminNews from './pages/News';
import AdminServices from './pages/Services';
import Post from './pages/landingpage/Post';
import Prof from './pages/Account';
import RankingTable from './pages/ranking';
import SendPost from './pages/SendPost';
import Postt from './pages/Postt';
import Baholash from './pages/Baholash';

// ----------------------------------------------------------------------
export const AdminRoutes = () => (
  <Routes>
    <Route path="/companies" element={<AdminNews />} />
    <Route path="/add-company" element={<AddCompany />} />
    <Route path="/post" element={<SendPost />} />
    <Route path="/add-services" element={<AdminServices />} />
    <Route path="/add-story" element={<AddStory />} />
    <Route path="/company/:id" element={<CompanyIndex />} />
    <Route path="/admin-post/:id" element={<Post />} />
    <Route path="/update-story/:id" element={<UpdateStory />} />
    <Route path="/account" element={<Prof />} />
    <Route path="/reyting" element={<RankingTable />} />
    <Route path="/postt" element={<Postt />} />
    <Route path="/ranking" element={<Baholash />} />
  </Routes>
);

export const DirectorRoutes = () => (
  <Routes>
    <Route path="/statistics" element={<Statistics />} />
    <Route path="/companies" element={<Companies />} />
    <Route path="/company/:id" element={<Company />} />
  </Routes>
);

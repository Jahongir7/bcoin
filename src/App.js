import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import store from './redux/store';
import PrivateRoute from './utility/PrivateRoute';
import DashboardLayout from './layouts/dashboard';
import { AdminRoutes, DirectorRoutes } from './routes';
import './App.css';
import All from './pages/landingpage/All';
import Posts from './pages/landingpage/Posts';
import Post from './pages/landingpage/Post';
import Services from './pages/landingpage/Services';
import Auth from './pages/landingpage/Auth';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <DashboardLayout />
        <Routes>
          <Route path="/" element={<All />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Auth />} />
        </Routes>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
        <Routes>
          <Route path="/landing-page/post/:id/" element={<Post />} />
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
        <div className="mainContainer">
          <Routes>
            <Route path="/dashboard/*" element={<AdminRoutes />} />
            <Route
              path="/director/*"
              element={
                <PrivateRoute>
                  <DirectorRoutes />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
        <ToastContainer />
      </ThemeConfig>
    </Provider>
  );
}

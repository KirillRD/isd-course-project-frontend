import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import './utils/i18n';
import { PagePath, Role } from '@/structures/enums';
import NotFoundPage from '@/pages/NotFoundPage';
import LoginPage from '@/pages/LoginPage';
import SignUpPage from '@/pages/SignUpPage';
import Auth from '@/components/Auth';
import UserPage from '@/pages/UserPage';
import AdminPage from '@/pages/AdminPage';
import useAuthUser from '@/hooks/useAuthUser';

export default function App() {
  useAuthUser();

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Routes>
          <Route path={PagePath.HOME} element={<HomePage />} />

          <Route element={<Auth allowedRoles={[]} />}>
            <Route path={PagePath.LOGIN} element={<LoginPage />} />
            <Route path={PagePath.SIGN_UP} element={<SignUpPage />} />
          </Route>

          <Route element={<Auth allowedRoles={[Role.USER, Role.ADMIN]} />}>
            <Route path={PagePath.PROFILE} element={<UserPage />} />
          </Route>

          <Route element={<Auth allowedRoles={[Role.ADMIN]} />}>
            <Route path={PagePath.ADMIN} element={<AdminPage />} />
          </Route>

          <Route path={PagePath.ANY} element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </Wrapper>
  );
}

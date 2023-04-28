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
import ProfilePage from '@/pages/ProfilePage';
import useAuthUser from '@/hooks/useAuthUser';
import useLocale from '@/hooks/useLocale';
import UsersPage from '@/pages/UsersPage';
import CreationSelectPage from '@/pages/CreationSelectPage';
import CreationCreatePage from '@/pages/CreationCreatePage';
import ReviewCreatePage from '@/pages/ReviewCreatePage';
import ReviewPage from '@/pages/ReviewPage';
import UserPage from '@/pages/UserPage';
import ReviewUpdatePage from '@/pages/ReviewUpdatePage';

export default function App() {
  useLocale();
  useAuthUser();

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={PagePath.REVIEWS}>
            <Route path=":reviewId" element={<ReviewPage />} />
          </Route>

          <Route element={<Auth allowedRoles={[]} />}>
            <Route path={PagePath.LOGIN} element={<LoginPage />} />
            <Route path={PagePath.SIGN_UP} element={<SignUpPage />} />
          </Route>

          <Route element={<Auth allowedRoles={[Role.USER, Role.ADMIN]} />}>
            <Route path={PagePath.PROFILE} element={<ProfilePage />} />
            <Route path={PagePath.REVIEWS.slice(1)}>
              <Route path=":reviewId">
                <Route
                  path={PagePath.UPDATE.slice(1)}
                  element={<ReviewUpdatePage />}
                />
              </Route>
              <Route path={PagePath.CREATE.slice(1)}>
                <Route path={PagePath.CREATIONS.slice(1)}>
                  <Route
                    path={PagePath.SELECT.slice(1)}
                    element={<CreationSelectPage />}
                  />
                  <Route
                    path={PagePath.CREATE.slice(1)}
                    element={<CreationCreatePage />}
                  />
                  <Route path=":creationId" element={<ReviewCreatePage />} />
                </Route>
              </Route>
            </Route>
          </Route>

          <Route element={<Auth allowedRoles={[Role.ADMIN]} />}>
            <Route path={PagePath.USERS.slice(1)}>
              <Route index element={<UsersPage />} />
              <Route path=":userId">
                <Route index element={<UserPage />} />
                <Route path={PagePath.REVIEWS.slice(1)}>
                  <Route path=":reviewId">
                    <Route
                      path={PagePath.UPDATE.slice(1)}
                      element={<ReviewUpdatePage />}
                    />
                  </Route>
                  <Route path={PagePath.CREATE.slice(1)}>
                    <Route path={PagePath.CREATIONS.slice(1)}>
                      <Route
                        path={PagePath.SELECT.slice(1)}
                        element={<CreationSelectPage />}
                      />
                      <Route
                        path={PagePath.CREATE.slice(1)}
                        element={<CreationCreatePage />}
                      />
                      <Route
                        path=":creationId"
                        element={<ReviewCreatePage />}
                      />
                    </Route>
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>

          <Route path={PagePath.ANY} element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </Wrapper>
  );
}

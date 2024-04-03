import { Link, Navigate, Route, Routes } from 'react-router-dom';
import './app.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { SinglePage } from './pages/SinglePage';
import { Layout } from './components/Layout';
import LoginPage from './pages/LoginPage';
import CreateNewPost from './pages/CreateNewPost';
import { RequireAuth } from './hoc/RequireAuth';
import { AuthContext, AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="posts/new" element={
            <RequireAuth>
              <CreateNewPost />
            </RequireAuth>
          } />
          <Route path="about/*" element={<AboutPage />}>
            <Route path='contacts' element={<p>Ouer contacts</p>} />
            <Route path='team' element={<p>Ouer team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to={'/about'} replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;

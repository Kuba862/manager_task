import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PublicRoute } from '../Routes/RouteGuards';
import Layout from './Layout';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const Home = lazy(() => import('../pages/Home/Home'));
const Form = lazy(() => import('../pages/Form/Form'));
const Comments = lazy(() => import('../pages/Comments/Comments'));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<LoadingSpinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/form"
          element={
            <PublicRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Form />
              </Suspense>
            </PublicRoute>
          }
        />
        <Route
          path="/comments"
          element={
            <PublicRoute>
              <Suspense fallback={<LoadingSpinner />}>
                <Comments />
              </Suspense>
            </PublicRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

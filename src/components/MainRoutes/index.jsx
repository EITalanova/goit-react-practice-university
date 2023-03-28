import { Suspense } from 'react';
import { UniversityPage } from 'pages/UniversityPage';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Loader } from 'components/Loader';

const University = lazy(() => import('pages/UniversityPage'));
const Faculty = lazy(() => import('pages/FacultyPage'));

export default function MainRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
              <Route path="/" element={<University />} />
              <Route path="/faculty" element={<Faculty />} />
      </Routes>
    </Suspense>
  );
}

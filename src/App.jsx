import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';

// The print page is for the owner, so it loads separately and keeps the
// customer-facing page small on slow mobile connections.
const QrPage = lazy(() => import('./pages/QrPage.jsx'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/qr"
          element={
            <Suspense fallback={<p style={{ padding: 24 }}>Loading…</p>}>
              <QrPage />
            </Suspense>
          }
        />
        {/* Anything else (including the old /thank-you link) goes to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

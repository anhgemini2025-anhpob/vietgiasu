import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { PrimaryPage } from './pages/PrimaryPage';
import { SecondaryPage } from './pages/SecondaryPage';
import { HighSchoolPage } from './pages/HighSchoolPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // If there is a hash like #chon-lop, let the hash handler handle it
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-brand-text font-sans selection:bg-brand-blue selection:text-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tieu-hoc" element={<PrimaryPage />} />
            <Route path="/thcs" element={<SecondaryPage />} />
            <Route path="/thpt" element={<HighSchoolPage />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

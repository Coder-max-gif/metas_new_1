import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import FeatureDetail from './pages/FeatureDetail';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Feature pages
import IndicatorsPage from './pages/features/IndicatorsPage';
import AlgorithmPage from './pages/features/AlgorithmPage';
import AIAnalystPage from './pages/features/AIAnalystPage';

// Partnership pages
import ReferralProgram from './pages/partnership/ReferralProgram';
import B2B from './pages/partnership/B2B';

// Resources pages
import Marketplace from './pages/resources/Marketplace';
import QuickStart from './pages/resources/QuickStart';
import Community from './pages/resources/Community';
import HelpCenter from './pages/resources/HelpCenter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          
          {/* Feature Detail Pages */}
          <Route path="/features/indicators" element={<IndicatorsPage />} />
          <Route path="/features/algorithm" element={<AlgorithmPage />} />
          <Route path="/features/ai-analyst" element={<AIAnalystPage />} />
          <Route path="/features/:slug" element={<FeatureDetail />} />
          
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Partnership Routes */}
          <Route path="/partnership/referral" element={<ReferralProgram />} />
          <Route path="/partnership/b2b" element={<B2B />} />
          
          {/* Resources Routes */}
          <Route path="/resources/marketplace" element={<Marketplace />} />
          <Route path="/resources/quick-start" element={<QuickStart />} />
          <Route path="/resources/community" element={<Community />} />
          <Route path="/resources/help" element={<HelpCenter />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

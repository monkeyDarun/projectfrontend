import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DesignGallery from './pages/DesignGallery';
import RecentProjects from './pages/RecentProjects';
import Reviews from './pages/Reviews';
import SiteServices from './pages/SiteServices';
import Guides from './pages/Guides';
import Cities from './pages/Cities';
import More from './pages/More';
import SubmitBlogIdea from './pages/SubmitBlogIdea';
import Footer from './components/Footer';
import AllBlogs from './pages/AllBlogs';
import StaticIcon from './components/StaticIcon';
import PopupAd from './components/PopupAd'; 

function App() {
    return (
        <Router>
            <Navbar />
            <StaticIcon />
            <PopupAd /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<DesignGallery />} />
                <Route path="/projects" element={<RecentProjects />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/services" element={<SiteServices />} />
                <Route path="/guides" element={<Guides />} />
                <Route path="/guides/cities" element={<Cities />} />
                <Route path="/guides/more" element={<More />} />
                <Route path="/submit-idea" element={<SubmitBlogIdea />} />
                <Route path="/all-blogs" element={<AllBlogs />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

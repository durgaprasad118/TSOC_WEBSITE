import Companies from './components/Companies';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Story from './components/Story';
import Features from './components/ui/Features';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <Features />
                <Companies />
                <div className="h-40"></div>
                <Story />
                <Footer />
            </div>
        </>
    );
}

export default App;

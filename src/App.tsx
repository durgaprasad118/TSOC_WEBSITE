import Benefit from './components/Benefit';
import Companies from './components/Companies';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HiringForm from './components/HiringForm';
import Navbar from './components/Navbar';
import Request from './components/Request';
import Story from './components/Story';
import Features from './components/ui/Features';
import Working from './components/Working';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <Features />
                <Companies />
                <Story />
                <Benefit />
                <Working />
                <HiringForm />
                <Request />
                <Footer />
            </div>
        </>
    );
}

export default App;

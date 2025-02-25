import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import WorkProcess from './components/WorkProcess/WorkProcess';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Work />
      <WorkProcess />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

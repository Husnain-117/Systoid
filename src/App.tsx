// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/about';
import Portfolio from './components/portfolio';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
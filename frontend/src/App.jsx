import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import ProductSection from './components/ProductSection/ProductSection';
import Footer from './components/Footer/Footer';
import './styles/global.css';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container">
        <Banner />
        <ProductSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
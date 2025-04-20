import './App.css';
import { useState } from 'react';
import PageContent from './PageContent';
import SimpleNavbar from './NavBar';

function App() {
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonPress = () => {
    setIsDivVisible(true);

    setTimeout(() => {
      const vhInPixels = window.innerHeight;
      const targetScrollY = (1.35 * vhInPixels);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });

    }, 200);
  }

  return (
    <div className='main-page'>
      <SimpleNavbar></SimpleNavbar>
      <div className='main-page-awards-cover'>
        <h1>Awards</h1>
        <h3>We selected the best of the best for u to choose!</h3>
        <button onClick={handleButtonPress} className='goto-button'>Choose ur fav one</button>
      </div>

      {isDivVisible && (
        <PageContent/>
      )}
    </div>
  );
}

export default App;
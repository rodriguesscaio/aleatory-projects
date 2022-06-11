import { useState } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';

const App = () => {
  const [display, setDisplay] = useState(false);

  function changeColor(e) {
    e.target.style.background = 'yellow';
    console.log(e.target.style);
  }

  window.onscroll = () => {
    setDisplay(true);
  };

  return (
    <div
      onScroll={(e) => changeColor(e)}
      style={{
        boxSizing: 'border-box',
        overflow: 'auto',
      }}
    >
      <Banner />
      <Banner />

      <Card display={display} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default App;

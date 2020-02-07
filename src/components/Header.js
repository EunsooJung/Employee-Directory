import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <h1>React Empoloyee Directory</h1>
      <p>
        Click on grid title to filter by heading or use the search box to find
        your results.
      </p>
    </div>
  );
}

export default Header;
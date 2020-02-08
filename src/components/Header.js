import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className='header'>
      <h1 className='h-h1'>React Empoloyee Directory</h1>
      <h6 className='h6-1'>
        Click on grid title to filter by heading or use the search box to find
        your results.
      </h6>
    </div>
  );
}

export default Header;

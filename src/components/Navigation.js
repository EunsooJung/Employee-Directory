import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import SearchByName from '../components/SearchByName';

function Navigation() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </Button>
      <div className='collapse navbar-collapse row' id='navbarNav'>
        {/* inpup text to search by name */}
        <div className='search-area col-4'>
          <SearchByName />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

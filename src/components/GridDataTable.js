import React, { useContext } from 'react';
import GridDataBody from './GridDataBody';
// import css
import GridDataContext from '../routes/GridDataContext';

const GridDataTable = () => {
  const context = useContext(GridDataContext);

  return (
    <div className='datatable mt5'>
      <table
        id='table'
        className='table table-striped table-hover table-condensed'
      >
        <thead>
          <tr>
            {context.developerState.heading.map(({ name, width }) => {
              return (
                <th
                  className='col'
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    // name.toLowerCase()
                    context.handleSoft(name);
                  }}
                >
                  {name}
                  <span className='pointer'></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <GridDataBody />
      </table>
    </div>
  );
};

export default GridDataTable;

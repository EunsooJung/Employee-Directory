import React, { useContext } from 'react';
import '../styles/GridDataBody.css';
import GridDataContext from '../utils/GridDataContext';

const GridDataBody = () => {
  const context = useContext(GridDataContext);

  function dateFormat(date) {
    const dateArr = date.split('-');
    const year = dateArr[0];
    const month = dateArr[1];
    const dayArr = dateArr[2].split('T');
    const day = dayArr[0];
    const formattedDate = [month, day, year].join('-');
    return formattedDate;
  }

  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined &&
      context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(
          ({ login, name, picture, phone, email, dob }) => {
            return (
              <tr key={login.uuid}>
                <td data-th='Image' className='align-middle'>
                  <img
                    src={picture.medium}
                    alt={'profile image for ' + name.first + ' ' + name.last}
                    className='img-responsive'
                  />
                </td>
                <td data-th='Name' className='name-cell align-middle'>
                  {name.first} {name.last}
                </td>
                <td data-th='Phone' className='align-middle'>
                  {phone}
                </td>
                <td data-th='Email' className='align-middle'>
                  <a href={'mailto:' + email} target='__blank'>
                    {email}
                  </a>
                </td>
                <td data-th='DOB' className='align-middle'>
                  {dateFormat(dob.date)}
                </td>
              </tr>
            );
          }
        )
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default GridDataBody;

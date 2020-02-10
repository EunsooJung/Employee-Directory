Create a Employee-Directory web applicaion with React Framework and Node.js with MVC Pattern.

- [Employee-Directory-Web-Application: Demo](https://eunsoojung.github.io/Employee-Directory/)

- [Applied to My Reponsive Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
See deployment for notes on how to deploy the project on a live system.

```bash
# Install packages
npm i axios

# Run
npm start
```

## Preview

[![Employee-Directory](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Materials%20E-Shop-Demo.gif)](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Materials%20E-Shop-Demo.gif)

## Usage

### Basic Usage

To get Employee-Directory, after downloading, you need to make sure Git Bash terminal open and looking at the correct folder. When you are within the correct location, you may type the following commands to ask her for information:

- npm start

### Guidelines:

- Proceeds as follows:

To use this applicaion, Clone the applicaion to your local git repository or directory:

- In your terminal, git clone https://github.com/EunsooJung/Employee-Directory.git

To start:

- You have to install npm packages depend on my package.json file: "npm install"
- Open your terminal then "npm start"

### Code Snippet

- Project structure

  [![Employee-Directory-Project-Structure](https://github.com/EunsooJung/Shopping-Cart/blob/master/public/images/Shopping-Cart-ProjectStructure.png)]

- Source Code Check point

1. folder "components": It provides react components.
   1.1 Applied React Hooks to use state and other React features without writing class.

```javascript
/**
 * State Hook
 */
// // Declare a new state variable, which we'll call "developerState"
const [developerState, setDeveloperState] = useState({
    users: [],
    order: 'descend',
    filteredUsers: [],
    headings: [
      { name: 'Image', width: '10%', order: 'descend' },
      { name: 'name', width: '10%', order: 'descend' },
      { name: 'phone', width: '20%', order: 'descend' },
      { name: 'email', width: '20%', order: 'descend' },
      { name: 'dob', width: '10%', order: 'descend' }
    ]
  });
...
/**
 * Effect Hook: The Effect Hook lets you perform side effects in function components.
 */
// If you only want to run the function given to useEffect after the initial render, you can give it an empty array as second argument.
  useEffect(() => {
    RandomUserAPI.getUsers().then(results => {
      console.log(results.data.results);
      setDeveloperState({
        ...developerState,
        users: results.data.results,
        filteredUsers: results.data.results
      });
    });
  }, []);

```

1.2 Applied React Context: Context provides a way to pass data through the component tree without having to pass props down manually at every level. - utils/GridDataContext.js

```javascript
import React from 'react';

const DataAreaContext = React.createContext({});

export default DataAreaContext;
```

1.3 Applied axios to get external api's data

```javascript
import axios from 'axios';

export default {
  // Gets users from randomuser.me
  getUsers: function() {
    return axios.get('https://randomuser.me/api/?results=20&nat=us');
  }
};
```

## Built With

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [MVC Patterns](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [React](https://reactjs.org/)

## Authors

- **Michael(Eunsoo)Jung**

* [Employee-Directory-Web-Application: Demo]()
* [My Portfolio](https://eunsoojung.github.io/Responsive-Portfolio/portfolio.html)
* [Link to Employee-Directory-Web-Application Github](https://github.com/EunsooJung/Employee-Directory.git)
* [Link to LinkedIn](www.linkedin.com/in/eun-soo-jung/)

## License

This project is licensed under the MIT License

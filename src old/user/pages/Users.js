
import React from 'react';

import UsersList from '../components/UsersList';

console.log('Users.js');

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Doe',
      image:
        'https://images.pexels.com/photos/3752834/pexels-photo-3752834.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3752834.jpg&fm=jpg',
      places: 3
    },
    {
      id: 'u2',
      name: 'Jane Doe',
      image:
      'https://images.pexels.com/photos/3885618/pexels-photo-3885618.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3885618.jpg&fm=jpg',
      places: 2
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Urkeee',
      image:
        'https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_5885988bd.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Avatarr',
    description: 'avatraaaar',
    imageUrl:
      'https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_5885988bd.jpg',
    address: 'aaaaaa',
    location: {
      lat: 20,
      lng: -20
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Avatarr',
    description: 'avatraaaar',
    imageUrl:
      'https://www.indiewire.com/wp-content/uploads/2019/03/shutterstock_5885988bd.jpg',
    address: 'aaaaaa',
    location: {
      lat: 20,
      lng: -20
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

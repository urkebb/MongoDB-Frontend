import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>Nije pronadjeno nijedno mesto, mozda da napravite jedno?</h2>
          <button>Podeli mesto</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;

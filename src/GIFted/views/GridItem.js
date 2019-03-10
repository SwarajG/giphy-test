import React from 'react';
import GifCard from './GifCard';

const Item = ({ gif, index, isPlaying, tab }) => (
  <div className="item">
    <div className="thumbnail">
      <GifCard
        tab={tab}
        gif={gif}
        index={index}
        isPlaying={isPlaying}
      />
    </div>
  </div>
);

export default Item;

// suffDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewList from './ReviewList';

const SuffDetail = ({ suffs }) => {
  const { id } = useParams();
  const suff = suffs.find((r) => r.id === parseInt(id));

  if (!suff) {
    return <div>suff not found</div>;
  }

  return (
    <div className="suff-detail">
      <h2>{suff.name}</h2>
      <img src={suff.image} alt={suff.name} />
      <p>{suff.cuisine}</p>
      <p>{suff.address}</p>
      <ReviewList reviews={suff.reviews} />
    </div>
  );
};

export default SuffDetail;

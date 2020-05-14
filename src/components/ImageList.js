import './ImageList.css';
import React from 'react';

const ImageList = props => {
  const pics = props.images.map(image => {
    console.log(<img alt={image.description} key={image.id} src={image.urls.regular} />);
    return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  });
  // console.log(pics);
  return <div className="image-list">{pics}</div>;
};

export default ImageList;

import React from 'react';

export default function SlackMojiComponent({ id, size}) {
  const urlImage = `slackmojis/${id}.gif`;
  const width = size || 16;
  return (
    <img src={urlImage} width={width}/>
  );
}
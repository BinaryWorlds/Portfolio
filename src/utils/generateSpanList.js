import React from 'react';

const generateList = (object) =>
  object.map((item) => <span key={item}>{item}</span>);

export default generateList;

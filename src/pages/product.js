import React from 'react';
import Project from './Project/Project';
import product from '../assets/images/product';

const data = {
  title: `Wizytówka produktu`,
  image: product,
  alt: 'my product site',
  live: `https://climbingtimers.com/`,
  description: [
    `Prosta strona wykonana przy użyciu Wordpress i Elementora.`,
    `Powstała w celu wstępnej prezentacji sprzętu dla wspinaczki sportowej, który zaprojektowałem. Sercem jest zespół układów ESP32, które napędza kod w C++.`,
    `To w tym momencie zaczęła się moja przygoda z tworzeniem stron internetowych.`,
  ],
};

function Product() {
  return <Project data={data} />;
}

export default Product;

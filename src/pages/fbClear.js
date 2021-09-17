import React from 'react';
import Project from './Project/Project';
import fbClear from '../assets/images/fbClear';

const data = {
  title: `Skrypt oczyszczający historię facebook`,
  image: fbClear,
  alt: 'anonymous mask',
  label: 'fb',
  github: `https://github.com/BinaryWorlds/FacebookClearActivityLog`,
  description: [
    `Umożliwia masowe usuwanie aktywności każdego typu.`,
    `Do niedawna brakowało działającego narzędzia, a api platformy nie zapewniało wykonywania operacji tego typu. Dlatego stworzyłem prosty skrypt, który bazując na liście klas przeprowadza operacje za nas, w sposób zautomatyzowany.`,
    `Dodatkowo napisałem kod wraz z instrukcją, umożliwiający szybkie aktualizowanie listy klas.`,
    `Docelowo, planowałem stworzyć z tego rozszerzenie do Chrome. Aktualnie facebook wprowadza własne rozwiązanie. Jego obecna forma wskazuje jednak na to, że projekt ten ma dalej rację bytu.`,
  ],
};

function FbClear() {
  return <Project data={data} />;
}

export default FbClear;

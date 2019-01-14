import React from 'react';
import Shapes from './Shapes';

export default function Footer() {
  return (
    <React.Fragment>
      <Shapes />
      <footer>
        <p>
          Made in{' '}
          <img src="http://flags.fmcdn.net/data/flags/w580/do.png" width="20" alt="RD" /> with <i className="fa fa-heart" aria-hidden="true" /> by{' '}
          <a href="https://github.com/andydev404" target="_blank" rel="noopener noreferrer">Andy Santana</a>{' '}
          and{' '}
          <a href="https://cuatrokb.com" target="_blank" rel="noopener noreferrer">Cuatrokb</a>
        </p>
      </footer>
    </React.Fragment>
  );
}

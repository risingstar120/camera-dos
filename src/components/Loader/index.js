import './styles.scss';

import React from 'react';
import { Circles } from '@agney/react-loading';
import Spinner from '../../assets/spinner.svg';

const Loader = () => (
  <div className="loader-wrapper">
    <Circles />
    <h4>Carregando...</h4>
  </div>
);

export default Loader;

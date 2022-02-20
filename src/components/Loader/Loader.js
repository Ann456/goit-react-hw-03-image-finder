import React from 'react';
import { Audio } from  'react-loader-spinner'
import s from './Loader.module.css';

const Spinner = () => {
  return (
    <section className={s.loader}>
    <Audio
        ariaLabel="loading"
        color="#00BFFF"
        height={200}
        width={200}
      />
    </section>
  );
};

export default Spinner;
import React from 'react';
import styles from './Header.module.scss';

// Dumb component / Componente de presentación
// No tiene estado
const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Eventos</h1>
    </header>
  );
};

export default Header;

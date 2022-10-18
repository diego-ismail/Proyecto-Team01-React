import React, { Component } from 'react';
import Button from '../Button';
import styles from "./styles.module.css"
function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
      <header >
        <p className={styles.welcomeMessage}>
          ¡Welcome! I will be a title
          <Button></Button>
        </p>
      </header>
    </div>
  );
}

export default Welcome;

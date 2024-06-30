import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import NewsList from '../../components/NewsList/NewsList';
import styles from './News.module.scss';

const News = () => {
  return (
    <div className={styles.news}>
        <Header />
        <NewsList />
        <Footer />
    </div>
  )
}

export default News
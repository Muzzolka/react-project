import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = props => (

    <section className= {styles.component}>
    <h3 className={styles.title}> {props.title} </h3>
    </section>

);

Column.propTypes = {
    title: PropTypes.node,
};

export default Column;

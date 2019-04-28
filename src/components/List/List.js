import React from 'react';
import styles from './List.scss';
import Column from '../Column/Column.js'
import Hero from '../Hero/Hero.js'
import PropTypes from 'prop-types';

class MyList extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
    image: PropTypes.string,
    }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    }

  render() {
    return (
      <section className= {styles.component}>
        <Hero titleText={this.props.title} image={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
        <Column title='Animals' />
        <Column title='Plants' />
        <Column title='Minerals' />
        </div>
      </section>
    )
  }
}

export default MyList;

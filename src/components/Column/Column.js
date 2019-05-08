import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
//import {settings} from '../../data/dataStore';


class Column extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className= {styles.component}>
        <h3 className={styles.title}> {title} 
          <span className= {styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        */}
      </section>
    );
  }

}

export default Column;

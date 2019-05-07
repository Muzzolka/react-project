import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';


class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards[state.cards.length-1].key+1,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className= {styles.component}>
        <h3 className={styles.title}> {this.props.title} 
          <span className= {styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        {this.state.cards.map(({key, ...columnProps}) => (
          <Card key={key} {...columnProps} />
        ))}
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
      </section>
    );
  }

}

export default Column;

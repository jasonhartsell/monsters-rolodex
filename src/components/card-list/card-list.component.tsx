// import { Component } from "react";

import { IMonster } from '../../App';

import Card from "../card/card.component";

import "./card-list.styles.css";

interface CardListProps {
  monsters: IMonster[]
}

const CardList = ({monsters}: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id}/>;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id}/>;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListCardItem from './ListCardItem';
import BtnPrimary from '../UI/BtnPrimary';
import LearnMoreIcon from '/src/assets/learn-more-icon.svg';

const ListCard = () => {

  const [listItem, setListItem] = useState([
    {
      id: uuidv4(),
      text: "Banking transactions are free for you"
    },
    {
      id: uuidv4(),
      text: "No monthly cash commission"
    },
    {
      id: uuidv4(),
      text: "Manage payments and transactions online"
    }
  ]);

  return (
    <div className="section-4-top-left-card gap-2">
        <h2 className="h3 w-75">Make your money transfer simple and clear</h2>
        <ul className="section-4-list">
          {listItem.map(item => (
            <ListCardItem key={item.id} text={item.text} />
          ))}
        </ul>
        <div className="d-flex">
            <BtnPrimary text={"Learn more"} imageAfter={LearnMoreIcon} altText='arrow symbol' srText={"Learn more about making simple and clear transactions."} />
        </div>
    </div>
  )
}

export default ListCard
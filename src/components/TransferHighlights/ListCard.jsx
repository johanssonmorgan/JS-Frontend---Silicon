import React from 'react'
import ListCardItem from './ListCardItem'
import BtnPrimary from '../UI/BtnPrimary'

const ListCard = () => {
  return (
    <div className="section-4-top-left-card gap-2">
        <h2 className="h3 w-75">Make your money transfer simple and clear</h2>
        <ul className="section-4-list">
            <ListCardItem text={"Banking transactions are free for you"} />
            <ListCardItem text={"No monthly cash commission"} />
            <ListCardItem text={"Manage payments and transactions online"} />
        </ul>
        <div className="d-flex">
            <BtnPrimary text={"Learn more"} imageAfter={"src/assets/learn-more-icon.svg"} altText='arrow symbol' srText={"Learn more about making simple and clear transactions."} />
        </div>
    </div>
  )
}

export default ListCard
import React from 'react'
import Checkbox from '/src/assets/checkbox.svg'

const ListCardItem = ({ text }) => {
  return (
    <li className="fs-9 mb-1 flex-align gap-05">
        <img src={Checkbox} alt="Checked" />
        {text}
    </li>
  )
}

export default ListCardItem
import React from 'react'

const ListCardItem = ({ text }) => {
  return (
    <li className="fs-9 mb-1 flex-align gap-05">
        <img src="src/assets/checkbox.svg" alt="Checked" />
        {text}
    </li>
  )
}

export default ListCardItem
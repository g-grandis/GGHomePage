import React from "react"

const List = ({items}) => {

    return (
        <ul>
          {items ? items.map(item => (
            <li key={item.id}>{item.text}</li>
          )) :null}
        </ul>
      );
}
  export default List
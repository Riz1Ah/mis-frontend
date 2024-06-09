import { useState } from "react";
import styles from './ListGroup.module.css'
import styled from 'styled-components'

interface Props {
    items: string[];
    heading: string;
    onSelectItem : (item:string) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
//   let items = ["London", "Paris", "NY", "LA", "San Fransisco"];
  // items =[]
  //   const onclickItemsDo = (item: string) => {
  //     console.log(item)
  //   }
  // let selectedCity = 0
//   const {items, heading} = props
  const [selectedCity, setSelectedCity] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Cities found</p>}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedCity === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedCity(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

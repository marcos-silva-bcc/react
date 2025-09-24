import { useState } from "react";
import style from "./ListGroup.module.css";
import styled from "styled-components"

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

const List = styled.ul`
    padding: 0%;
    list-style: none;
`;
function ListGroup({items, heading}: Props) {

    const [SelectedIndex, setSelectedIndex] = useState(-1);

    useState(-1)
   

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 ? <p>No item Found</p>: null};
            <ul className={[style.ListGroup, style.container].join(" ")}>

                {items.map((item, index) => (
                    <li className={SelectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item)}}> {item} </li>
                ))}

            </ul>
        </>
    );
}

export default ListGroup;
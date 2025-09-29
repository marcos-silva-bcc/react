import { useState } from "react";
import style from "./ListGroup.module.css"
import styled from "styled-components"

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

interface ListItemProps {
    active: boolean;
}

const List = styled.ul`
    padding: 0 ; 
    list-style: none ;
`;

const ListItem = styled.li<ListItemProps> `
    padding: 5px 0;
    background: ${ props => props.active ? 'blue' : 'none'} 
`

function ListGroup({items, heading}: Props) {

    const [SelectedIndex, setSelectedIndex] = useState(-1);

    useState(-1)
   

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 ? <p>No item Found</p>: null};
            <List>

                {items.map((item, index) => (
                    <ListItem
                    active = {index === SelectedIndex}
                    key={item} onClick={() => {setSelectedIndex(index); onSelectItem(item)}}> {item} </ListItem>
                ))}

            </List>
        </>
    );
}

export default ListGroup;
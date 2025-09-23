import { Fragment } from "react";

function listGroup() {

    const items = [
        'New York',
        'San Francisco',
        'Toquio',
        'Londres', 
        'Paris'
    ]

    const message = () => { 
        return items.length === 0 ? <p>No item found</p> : null 
    }

    return (
        <Fragment>
            <h1><List></h1>

            {message}

            <ul className="list-group">
                {/*<li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>*/}
                
                

                {items.map((item) => (
                    <li>{item}</li>
                ))}

            </ul>
        </Fragment>
    );
}

export default listGroup;
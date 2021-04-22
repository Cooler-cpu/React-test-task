import React from 'react';

import { ListGroup } from 'react-bootstrap';

const SettingsDisplay = (props) => {
    return(

        <ListGroup>

            <ListGroup.Item>
                Фильтрация по столбцу: {props.nameColl}
            </ListGroup.Item>

            <ListGroup.Item>
                Фильтрация по: 
                {
                props.filtCategory === "contains"
                ? "  содержанию" : 
                null
                }

                {
                props.filtCategory === "increment"
                ? "  возрастанию" : 
                null
                }

                {
                props.filtCategory === "decrement"
                ? "  убыванию" : 
                null
                }


            </ListGroup.Item>

        </ListGroup>
    )
}

export default SettingsDisplay
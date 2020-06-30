import React from 'react';
import './listItem.css';
import DeleteIcon from '@material-ui/icons/Delete';


function ListItems(props){
    const items = props.items;
    const ListItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}
                <span>
                    <DeleteIcon className="faicons"
                    onClick={ () => props.deleteItem(item.key)
                    }
                    />
                </span>
                </p>
            </div>
        })
    return(
    <div>{ListItems}</div>
    )
}
export default ListItems;

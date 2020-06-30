import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './listPanel.css';



function ListPanel(props){
    const items = props.items;
    const ListItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <Card className="cardItem">
                    <p>
                    {item.text}
                    <span>
                        <DeleteIcon className="faicons"
                        onClick={ () => props.deleteItem(item.key)
                        }
                        />
                    </span>
                    </p>
                </Card>
            </div>
        })
    return(
    <div>{ListItems}</div>
    )
}
export default ListPanel;

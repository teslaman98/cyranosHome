import React, { Component } from 'react';
import './todoPanel.css';
import ListPanel from './components/listPanel';
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class TodoPanel extends Component{

  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key:Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
  }

  render(){
    return (
      <div>
        <header>

              <ExpansionPanel className="todo">
                  <ExpansionPanelSummary>
                    <h3>LIST TITLE</h3>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className="container">
                        
                            <div>
                                <form id="todo-form" onSubmit={this.addItem}>
                                <input type="text" placeholder="Enter Text"
                                value={this.state.currentItem.text}
                                onChange={this.handleInput}/>
                                <button type="submit">Add</button>
                                </form>
                            </div>
                            
                            <div className="listItem">
                                <ListPanel items = {this.state.items}
                                deleteItem = {this.deleteItem}></ListPanel>
                            </div>
                        
                        
                    </ExpansionPanelDetails>
            </ExpansionPanel>


        </header>

      </div>
    );
  }
}

export default TodoPanel;
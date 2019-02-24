import React, { Component } from 'react';
import ListItem from './ListItem'; 

class ItemsList extends Component{
    constructor(props){
      super(props);
      this.state = {
        date:'11.11.2018',
        items:[],
        itemsValues:[],
        statuses:['status1','status2','status3','status4']
      }
      this.addItem = this.addItem.bind(this);
      this.itemClickHandler = this.itemClickHandler.bind(this); 
      this.guidGenerator = this.guidGenerator.bind(this); 
    }
    itemClickHandler = (item)=>{
      console.log(item);
      let ind = this.state.statuses.indexOf(item.status);
      console.log(ind);
      let stateItems = this.state.items;
      if(!ind<this.state.statuses.length){
        stateItems.find(x => x.id === item.id).status = this.state.statuses[ind+1];
        console.log(stateItems);
        this.setState({items:stateItems});
      }
    }
    addItem = ()=>{
      let buffer = this.state.items;
      buffer.push({"id":this.guidGenerator(),"name":prompt('Название записи'),"status":this.state.statuses[0]}); 
      // let items = this.state.items.map((item,i)=>(<ListItem data={item} key={item.id} onClick={()=>this.itemClickHandler(item)}/>));
      this.setState({items:buffer});
    }
    guidGenerator = () => {
      var S4 = function() {
         return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

    render(){
      return(
        <div className="itemsList">

          <div className="sidePanel">
              <span className="generalDate">{this.state.date}</span>
              <div  className="addButton" onClick={this.addItem}><img src="http://pluspng.com/img-png/free-png-plus-sign-plus-sign-comments-980.png" alt=""/></div>
          </div>
          <div className="items">
            <div className="tableHeader">
              <div className="tableColumn-1 tableLine">Название</div>
              <div className="tableColumn-2 tableLine">Статус</div>
            </div>
            <div className="itemsItself">
              {this.state.items.map((item,i)=>(<ListItem data={item} key={item.id} onClick={()=>this.itemClickHandler(item)}/>))}
            </div>
          </div>
              
        </div>
      );
  
    }
  
  }
  
export default ItemsList;
 
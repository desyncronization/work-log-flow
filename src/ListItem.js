import React, { Component } from 'react';

class ListItem extends Component{ 
    render(){
        return(
            <div className="listItem tableLine" onClick={this.props.onClick}>
                <div className="tableColumn-1 tableLine">{this.props.data.name}</div>
                <div className="tableColumn-2 tableLine">{this.props.data.status}</div>
            </div>
        )
    }
}

export default ListItem;
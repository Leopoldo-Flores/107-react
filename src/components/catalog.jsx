import React, { Component } from "react"; 
import Item from "./item";
import "./catalog.css"
import ItemService from './../services/itemService';

class Catalog extends Component {
    state = {
        items: [],
    };

    //display elements on the screen
    render() {
        console.log("Render catalog");
        return (
        <div className="catalog-page">   
            <h3>{this.state.items.length} Amazing silicone pets</h3>  
                   
            { this.state.items.map((prod) => (
            <Item key={prod._id}prod={prod}></Item> 
            ))}
        </div>
        );
    }

    // called after the render function is executed
    componentDidMount() {
        console.log("Catalog did mount");

        //call the service to get the list of items
        var itemService = new ItemService();
        var items = itemService.getCatalog();
        console.log(items);
        this.setState({ items: items });
    }
}

export default Catalog;

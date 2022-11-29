import { Component } from "react";
import {Card,Button} from "react-bootstrap"
import Comment from "./Comment"
import RenderComment from "./RenderComment";

class SingleBook extends Component {
    state = { 
        clickedItem: null,
     }
    
    render() { 
        return (  <>
            <Card className="content mt-3">
          <Card.Img  src={this.props.book.img}
           onClick={()=>{
            this.state.clickedItem?
            this.setState({
                clickedItem:false
            }):
            this.setState({
                clickedItem:true
            })
           }}/>
          <Card.Body>
            <Card.Title className="cardtitle">{this.props.book.title}</Card.Title>
            <Button variant="primary">Buy Now$:{this.props.book.price}</Button>
          </Card.Body>
          <RenderComment bookid={this.props.book.asin} clickedItem={this.state.clickedItem}/>
          <Comment clickedItem={this.state.clickedItem} bookid={this.props.book.asin}/>
        </Card>
        </>);
    }
}
 
export default SingleBook;
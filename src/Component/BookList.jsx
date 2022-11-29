import {Component} from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends Component {
  state = { 
   clickedItem: null,
   bookId: null
  } 

  render() { 
    return (
    <Container id='herocontainer' fluid>
    <div className='heropage mt-3'>
      <div className='leftmenu'>
          <h3>Categories</h3>
          <div className='cats'>
              <span className='cat'><a href='ddd'>All</a></span>
              <span className='cat'><a href='ddd'>Comedy</a></span>
              <span className='cat'><a href='ddd'>Horror</a></span>
              <span className='cat'><a href='ddd'>Fantansy</a></span>
              <span className='cat'><a href='ddd'>Fantansy</a></span>
              </div>
          </div>
          <div className='content'>
            
              <Row>
              {this.props.items.slice(0,10).map((book)=>(
                    <Col lg={3} key={book.asin}>
                        <SingleBook book={book}/>
                        </Col>
                      
                ))}
              </Row>
          </div>
      </div>
  </Container>
  );
  }
}
export default BookList
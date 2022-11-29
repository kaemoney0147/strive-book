import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Comment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 1,
      elementId: `${this.props.bookid}`,
    },
  };

  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [fieldToSet]: value,
      },
    });
  };

  onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZWVhOWQ0YmUzZDAwMTU4NDVmZDQiLCJpYXQiOjE2NjkyOTkwOTcsImV4cCI6MTY3MDUwODY5N30.gSLzkzp4veyX12SS_vvvrsf05yByVnN7nkb2HlHFHlk",
          },
        }
      );
      if (response.ok) {
        alert("Comment posted sucessfully!");
        this.setState({
          comment: {
            comment: "",
            rate: 1,
            elementId: this.props.bookid,
          },
        });
      } else {
        console.log("Something went wrong!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <Form onSubmit={this.onSubmitHandler}>
        {this.props.clickedItem && (
          <>
            <Form.Group>
              <Form.Label>Your Comment</Form.Label>
              <Form.Control
                className="comment"
                as="textarea"
                rows={5}
                placeholder="Your Comment Here!"
                required
                value={this.state.comment.comment}
                onChange={(e) =>
                  this.onChangeHandler(e.target.value, "comment")
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                className="comment"
                as="select"
                value={this.state.comment.rate}
                onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Post Comment!
            </Button>
          </>
        )}
      </Form>
    );
  }
}
export default Comment;
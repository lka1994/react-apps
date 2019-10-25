import React from "react";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

class Gift extends React.Component {
  state = { person: "", present: "" };
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <FormLabel>Person</FormLabel>
            <FormControl className="input-person" onChange={e => this.setState({ person: e.target.value })} />
            <FormLabel>Present</FormLabel>
            <FormControl className="input-present" onChange={e => this.setState({ present: e.target.value })} />
          </FormGroup>
        </Form>
        <Button className="btn-remove" onClick={() => this.props.removeGift(this.props.gift.id)}>
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;

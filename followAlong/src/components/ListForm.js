import React from "react";

class ListForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChanges = e => {
    this.props.setState
  };

  subimt = () => {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <input type="text" name="item" onChange={this.handleChanges}/>
        <button onClick={this.submit}>Add</button>
      </form>
    );
  }
}

export default ListForm;



import { Component } from "react";
class ClassState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banana: "바나나",
    };
  }
  바나나;
  state = {
    banana: "바나나",
  };
  render() {
    const { banana } = this.state;
    return (
      <div>
        {/* <div>{this.state.banana}</div> */}
        <div>{banana}</div>
        <button onClick={() => this.setState({ banana: "banana" })}>
          change to EN(class type)
        </button>
      </div>
    );
  }
}

export default ClassState;

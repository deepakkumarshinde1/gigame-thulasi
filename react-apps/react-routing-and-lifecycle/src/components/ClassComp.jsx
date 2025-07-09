import { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: [],
    };
  }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     // return null;
  //   }
  //   shouldComponentUpdate(nextProps, nextState) {
  //     // return true;
  //   }

  getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    this.setState({ ...this.state, data: data });
  };

  componentDidMount() {
    this.getData();
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        ClassComp {this.state.count} <button onClick={this.inc}>INC </button>
      </div>
    );
  }
}

export default ClassComp;

// mounting => once => api or some logic
// unmounting => once => cleanup
// updating => multi => api or some logic

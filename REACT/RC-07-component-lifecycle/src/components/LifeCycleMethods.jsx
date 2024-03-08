import React from "react";

//?=================================
//? LIFECYCLE METHODS
//? https://reactjs.org/docs/react-component.html
//?
//?=================================

//* Lifecycle methods are special methods built into React that are used to operate on components throughout their duration in the DOM.
//* For example, when the component connects, creates, updates, or disconnects.

//* Creating the component (constructor)
//* Adding to the DOM tree. (componentDidMount)
//* Rendering of the component
//* (Optional) Updating the component (componentDidUpdate)
//* death of component (removing from DOM tree) (componentWillUnmount)

class LifeCycleMethods extends React.Component {
  //! 1- render at the beginning => first

  constructor(props) {
    console.log("constructor is running");
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //! 3- render after component implemented. Within the lifecycle it will be rendered only one time ! (get data from database !) => third

  componentDidMount() {
    console.log("component is mounted");
  }

  //! 4- component will be updating after each changes and again created and called back. (render only after change)  => fourth

  componentDidUpdate() {
    console.log("component is updated");
  }

  //! 5- render right before the component is deleted from DOM => fifth

  componentWillUnmount() {
    console.log("component is dead");
  }

  //! 2- render everytime (render into DOM) => second
  render() {
    console.log("component rendered");
    return (
      <div className="container text-center p-3">
        <h1 className="text-danger">LIFECYCLE METHODS</h1>
        <h3>COUNT= {this.state.count}</h3>
        <button className="btn btn-info" onClick={this.increase}>
          INC
        </button>
      </div>
    );
  }
}

export default LifeCycleMethods;

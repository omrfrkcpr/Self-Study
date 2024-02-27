import { Component } from "react";

//* =========== CLASS COMPONENTS AND STATE ============
// React taki Class-Components  ES6 class yapısını temel alır.
// çok fazla boilerplate code a sahipler.
// fakat, state lere sahip olabilirler
//  state component hakkında data veya bilgi içermek için kullanılan yerleşik bir React object tidir. component in durumu zamanla değişebilir ;
// ne zaman değişse component re-render olur.
// this.state ile constructor da state için bir initial value atayabiliriz. constructor  dışında, state i setState() metoduyla değiştirebiliriz,
//* =================================================

class Counter extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
    const { count } = props;
    //! assign initial value to state
    this.state = {
      counter: count || 0,
      title: "This is a Counter",
    };
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1,
      title: "Counter increased!",
    });
  }

  //!burada arrow function tercih ettiğimiz için button kısmında fonksiyonu bind etmeye gerek kalmadı
  decrease = () => {
    const { count } = this.props;
    this.setState({
      counter: this.state.counter > count ? this.state.counter - 1 : count,
      title: "Counter decreased!",
    });
  };

  render() {
    return (
      <div className="container text-center m-4">
        <h2>***************************</h2>
        <h2>***************************</h2>
        <h1>{this.state.title}</h1>
        <h2>{this.state.counter}</h2>
        <button
          onClick={this.increase.bind(this)}
          className="btn btn-success m-1"
        >
          Increase
        </button>

        <button onClick={this.decrease} className="btn btn-warning m-1">
          Decrease
        </button>
      </div>
    );
  }
}

export default Counter;

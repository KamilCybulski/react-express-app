import React from 'react';


class Api extends React.Component {
  constructor() {
    super();
    this.state = {
      stuff1: '',
      stuff2: '',
    };
  }
  
  componentDidMount(){
    fetch('/api')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          stuff1: data.d1,
          stuff2: data.d2
        })
      })
  }

  render() {
    if (this.state.stuff1) {
      return (
        <div>
          <p>{this.state.stuff1}</p>
          <p>{this.state.stuff2}</p>
        </div>
      );
    }
    return <p>Loading...</p>;
  }
}

export default Api;

import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000")
      .then(res => {
        if ((res.status = 200)) {
          this.setState({ message: res.data.message });
        }
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <p>
          {this.state.message.length === 0 ? "No message" : this.state.message}
        </p>
      </div>
    );
  }
}

export default Home;

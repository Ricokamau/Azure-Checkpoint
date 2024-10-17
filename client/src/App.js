import React from "react";
import axios from 'axios';
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestShows: {}, // Initialize as an empty object
    };
  }

  componentDidMount() {
    console.log("componentDidMount success");
    axios.get('/api/data')
      .then(res => {
        console.log("data received: ", res.data);
        this.setState({ bestShows: res.data[0] }); // Ensure res.data[0] is an object
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        alert("Error fetching data");
      });
  }

  render() {
    console.log("render bestShows: ", this.state.bestShows);
    
    // Ensure bestShows is defined and is an object
    const showKeys = typeof this.state.bestShows === 'object' && this.state.bestShows !== null ? Object.keys(this.state.bestShows) : [];

    return (
      <div>
        <h1>Rico's Azure MERN Project</h1>
        <ul>
          {
            showKeys.map((cur, idx) => (
              <li key={idx}>{cur} - {this.state.bestShows[cur]}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;

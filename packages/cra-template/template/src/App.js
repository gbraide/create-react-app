import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  componentDidMount(){
    console.log(process.env);
  }
  render() {
    return (
      <div className="myAppName">
        <div className="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">
            <a className="btn btn-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
          </p>
          <hr className="my-4"></hr>
          <p><code>Create a .env file at the root of your project with several REACT_APP_SOME_UNIQUE_IDENTIFIER's</code></p>
          <p><mark>Note: CRA already includes support for custom env variables if you're open to prefixing their names with REACT_APP</mark></p>
          <hr className="my-4"></hr>
          <p>Update title text & app icon in <code>public/</code></p>
          <p>Edit <code>src/App.js</code> and save to reload.</p>
        </div>
      </div>
    );
  }
}
export default App;

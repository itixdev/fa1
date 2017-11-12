import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import './App.css';
import ContactForm from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
        <header className="App-header">

          <h1 className="App-title">Добро уже рядом</h1>
        </header>
        <p className="App-intro">
          Инструкции ... To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ContactForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;

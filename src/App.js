import React, { Component } from 'react';
import Card from "./Card.js";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="CardRow1">
      <div className="Card">
      <Card 
      Heading = "HTML"
      para = "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."
      />
      </div>
      <div className="Card">
      <Card
      Heading = "CSS"
      para = "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript"
      />
      </div>
      </div>
      <div className="CardRow2">
      <div className="Card">
      <Card
      Heading = "Java Script"
      para = "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries."
      />
      </div>
      <div className="Card">
      <Card
      Heading = "React"
      para="React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications"
      />
      </div>
      </div>
      </div>
    );
  }
}

export default App;

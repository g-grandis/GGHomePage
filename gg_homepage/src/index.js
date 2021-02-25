import './App.css';
import React from "react"
import ReactDOM, { render } from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'

class App extends React.Component {
  render() {
    return (
      <div>
        <CardDeck>
          <div>
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>
                Favorites
              </Card.Header>
              <Card.Body>
                <Favorites/>
              </Card.Body>
            </Card>
            <br></br>
          </div>
          <div>
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>
                To Do List
                        </Card.Header>
              <Card.Body>
                <ToDoList />
              </Card.Body>
            </Card>
            <br></br>
          </div>
          <div>
            <Card bg="info" text="white" style={{ width: '18rem' }}>
              <Card.Header>Random Quotes</Card.Header>
              <Card.Body>
                <RandomQuotes />
              </Card.Body>
            </Card>
            <br></br>
          </div>
        </CardDeck>
      </div>
    )
  }
}

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = { urls :  [
      {
        id: 0,
        url: "https://web.whatsapp.com/",
        img: "./icon/wa.png"
      },
      {
        id: 1,
        url: "https://www.youtube.com/?hl=it&gl=IT",
        img: "./icon/yt.png"
      },
      {
        id: 2,
        url: "https://www.twitch.tv/",
        img: "./icon/tw.png"
      },
      {
        id: 3,
        url: "https://www.amazon.it/",
        img: "./icon/amazon.png"
      },
      {
        id: 4,
        url: "https://www.google.com/gmail/",
        img: "./icon/gmail.png"
      },
      {
        id: 5,
        url: "https://drive.google.com/drive/my-drive?hl=it",
        img: "./icon/drive2.png"
      },
    ]}
  }

  render() {
    this.state = this.state.urls.map((urls) =>
    <Button 
    type="Submit"
    variant="dark"
    size="padding"
    href={urls.url}
    target="_blank"><img src={urls.img}></img></Button>);

    console.log(this.state)
    return (
      <div>
        <div class="buttons">
             {this.state}
        </div>
      </div>
    )

  }
}

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <List items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Cosa bisogna fare?
            </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <br></br>
          <br></br>          
          <button
            type="Submit"
            class="btn btn-dark btn-sm" >
            Aggiungi #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}


class RandomQuotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: '',
      author: ''
    }
  }
  randomQuote = async () => {
    const response = await fetch('https://api.quotable.io/random').then(r => r.json());
    this.setState({
      quotes: response.content,
      author: response.author
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>
          <p>{this.state.quotes}</p>
          <p>{this.state.author}</p>
        </p>
        <button
          type="button"
          class="btn btn-dark btn-sm"
          onClick={() => this.randomQuote()} >Quotes!</button>
      </div>)
  }

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

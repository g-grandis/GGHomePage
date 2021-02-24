import './App.css';
import React from "react"
import ReactDOM from "react-dom"
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
                        <div>    
                        <>
                            <Button 
                            variant="dark" 
                            href="https://web.whatsapp.com/"
                            target="_blank"><img src="./icon/wa.png" alt="" /></Button>{' '}
                            <Button 
                            variant="dark" 
                            href="https://www.youtube.com/?hl=it&gl=IT"
                            target="_blank"><img src="./icon/yt.png" alt="" /></Button>{' '}
                            <Button 
                            variant="dark" 
                            href="https://www.twitch.tv/"
                            target="_blank"><img src="./icon/tw.png" alt="" /></Button>{' '}
                        </>
                        </div>
                        <div>   
                        <br></br>
                        <>
                            <Button 
                            variant="dark" 
                            href="https://www.amazon.it/"
                            target="_blank"><img src="./icon/amazon.png" alt="" /></Button>{' '}
                            <Button 
                            variant="dark" 
                            href="https://www.google.com/gmail/"
                            target="_blank"><img src="./icon/gmail.png" alt="" /></Button>{' '}
                            <Button 
                            variant="dark" 
                            href="https://drive.google.com/drive/my-drive?hl=it"
                            target="_blank"><img src="./icon/drive2.png" alt="" /></Button>{' '}
                        </>
                        </div>  
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
            <button             
            type="button" 
            class="btn btn-dark" >
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


class RandomQuotes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            quotes : '',
            author : ''
        }
    }
     randomQuote = async () => {
        const response = await fetch('https://api.quotable.io/random').then( r => r.json());
        this.setState( {
            quotes : response.content,
            author : response.author
        });
        console.log(this.state);
      }
      
    render (){
        return(
        <div>
            <p>
            <p>{this.state.quotes}</p>
            <p>{this.state.author}</p>
            </p>
            <button 
            type="button" 
            class="btn btn-dark" 
            onClick ={() => this.randomQuote()} >Quotes!</button>
        </div>)
    }

}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

import './App.css';
import React from "react"
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Favorites from './Components/Favorites'
import ToDoList from './Components/ToDoList'
import RandomQuotes from './Components/RandomQuotes'
import {favorites1 as favorites1_data} from './favorites1'
import {favorites2 as favorites2_data} from './favorites2'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


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
                <Tabs defaultActiveKey="home" id="tab-favorites" size="test">
                  <Tab eventKey="home" title="Home">
                    <br></br>
                  <Favorites data={favorites1_data} index="1"/>
                  </Tab>
                  <Tab eventKey="work" title="Work">
                    <br></br>
                  <Favorites data={favorites2_data} index="2"/>
                  </Tab>
                </Tabs>
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







ReactDOM.render(
  <App />,
  document.getElementById('root')
);

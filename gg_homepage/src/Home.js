import './App.css';
import React,{useState,useEffect} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Favorites from './Components/Favorites'
import ToDoList from './Components/ToDoList'
import RandomQuotes from './Components/RandomQuotes'
import {favorites1 as favorites1_data} from './Data/favorites1'
import {favorites2 as favorites2_data} from './Data/favorites2'
//import Tabs from 'react-bootstrap/Tabs'
//import Tab from 'react-bootstrap/Tab'

const Home = () =>{
  const [selectedFavorites,setSelectedFavorites] = useState(favorites1_data);
  const [favoritesName,setFavoritesName] = useState("");
  useEffect (() => {
    switch(favoritesName){
      case "data1" : 
      setSelectedFavorites(favorites1_data);
      document.getElementById("btn1").disabled = true;
      document.getElementById("btn2").disabled = false;
      break;
      case "data2" :
      setSelectedFavorites(favorites2_data);
      document.getElementById("btn1").disabled = false;
      document.getElementById("btn2").disabled = true;
      break;
      default:
        break;
    }
  },[favoritesName]);
const changeFavorites = (newData) =>{
    setFavoritesName(newData);
}

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
            <button
              id="btn1"
              type="button"
              class="btn btn-dark btn-sm"
              onClick = {() => changeFavorites("data1")}
              >Home</button>
            &nbsp;
            <button
              id="btn2"
              type="button"
              class="btn btn-dark btn-sm"
              onClick = {() => changeFavorites("data2")}>Work</button>
              </div>
            <br></br>
            <Favorites data={selectedFavorites} index="1"/>
              {/*     ALTERNATIVE WITHOUT useEffect WITH TABS BOOTSTRAP
              
               <Tabs defaultActiveKey="home" id="tab-favorites" size="test">
                <Tab eventKey="home" title="Home">
                  <br></br>
                <Favorites data={favorites1_data} index="1"/>
                </Tab>
                <Tab eventKey="work" title="Work">
                  <br></br>
                <Favorites data={favorites2_data} index="2"/>
                </Tab>
              </Tabs> */}
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

export default Home;


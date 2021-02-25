import React, {useState,useEffect} from "react"
import Button from 'react-bootstrap/Button'
import isArray from 'lodash/isArray'
//import {favorites1 as favorites1_data} from '../favorites1'
//import {favorites2 as favorites2_data} from '../favorites2'

const Favorites = (props) => {

    const [favorites,setFavorites] = useState(null);
    useEffect(()=> {
        console.log(props);
        setFavorites(props.data);
    },[props]); 
    console.log({favorites});
    return (
        <div>
          <div class="buttons">
               {favorites && isArray(favorites) ? favorites.map((url,index) => 
                <Button 
                key={index}
                type="Submit"
                variant="dark"
                size="padding"
                href={url.url}
                target="_blank"><img src={url.img} alt=""></img></Button>) : <span>No data</span>}
          </div>
          
        </div>
      )

}

  export default Favorites;
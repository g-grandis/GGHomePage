import React, {useState,useEffect} from "react"
import Button from 'react-bootstrap/Button'
import isArray from 'lodash/isArray'

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
                variant="secondary"
                size="padding"
                href={url.url}
                target="_blank"><img src={url.img} alt=""></img></Button>) : <span>No data</span>}
          </div>
          
        </div>
      )

}

  export default Favorites;
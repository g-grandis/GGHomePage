import React from "react"


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

  export default RandomQuotes
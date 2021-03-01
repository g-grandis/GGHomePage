import React,{useState} from "react"
import List from './List'

const ToDoList = () => {
  const [items,setItems] = useState([]);
  const [text,setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    };
    if(items!=null){
      if(items == null){
        this.items = [];
      }
    setItems([...items,newItem]);
  }
  }
  return (
    <div>
      <List items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">
          Cosa bisogna fare?
        </label>
        <input
          id="new-todo"
          onChange={handleChange}
          value={text}
        />
        <br></br>
        <br></br>
        <button
          type="Submit"
          class="btn btn-dark btn-sm" >
          Aggiungi #{items.length +1}
        </button>
      </form>
    </div>
  );
}



  export default ToDoList
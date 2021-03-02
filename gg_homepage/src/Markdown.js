import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import ReactMarkdown from 'react-markdown'
import Button from 'react-bootstrap/Button'


    const  downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('input').value],    
        {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.md";
        document.body.appendChild(element);
        element.click();
      }
const Markdown = () => {
    const [markdown, setMarkdown] = useState('');
    const [marckdownPreview, setMarkdownPreview] = useState('');
    const handleChange = (e) => {
        setMarkdown(e.target.value);
        
      }
      const print = () => {
            setMarkdownPreview (markdown);
      }

    return (<div>
        <div>
     </div>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Markdown text area</Form.Label>
                <Form.Control id="input" as="textarea" rows={3} onChange={handleChange}/>
            </Form.Group>
            <Button onClick={print} >Preview</Button>
            &nbsp;
            <Button 
            variant="secondary"
            onClick={downloadTxtFile} >Download</Button>
        </Form>
        <p> <ReactMarkdown>{marckdownPreview}</ReactMarkdown> </p>
        
    </div>);
}

export default Markdown
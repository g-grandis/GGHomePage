import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import ReactMarkdown from 'react-markdown'
import Button from 'react-bootstrap/Button'

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
        
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Markdown text area</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={handleChange}/>
            </Form.Group>
            <Button onClick={print} >Preview</Button>
        </Form>
        <p> <ReactMarkdown>{marckdownPreview}</ReactMarkdown> </p>
        
    </div>);
}

export default Markdown
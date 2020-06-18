import React from 'react'

function Editor({ text, onTextChange }) {
    function handleTextChange(event) {
        console.log(event.target);
        const value = event.target.value;
        onTextChange(value);
    }
    return(
        <textarea value={text} onChange={handleTextChange} />
    )
}

export default Editor;
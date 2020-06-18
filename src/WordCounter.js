import React from 'react';
import Editor from './Editor';

class WordCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' }
    }

handleTextChange(text) {
    console.log(text);
    // Change the state
}

    render() {
        return (
            <Editor text={this.state.text} onTextChange={this.handleTextChange} />

        )
    }

}


export default WordCounter;
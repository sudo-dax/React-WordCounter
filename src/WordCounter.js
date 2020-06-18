import React from 'react';
import Editor from './Editor';

class WordCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: '' }
        // Hardbind a perfect facsimile to this so that when calle on render, i
        // it is in the context of handleTextChange
        this.handleTextChange = this.handleTextChange.bind(this);
    }

handleTextChange(currentText) {
    // Change the state
    this.setState((prevState) => ({ text: currentText}))
}

    render() {
        return (
            <Editor text={this.state.text} onTextChange={this.handleTextChange} />

        )
    }

}


export default WordCounter;
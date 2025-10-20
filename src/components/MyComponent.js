import React from 'react';

class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'savio',
        age: 35
    }

    handleonClick(event) {
        console.log('>>My name Savio');

    }

    handleonMouseOver(event) {
        console.log(event.pageX);
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and i am {this.state.age} years old
                <button onClick={this.handleonClick}>Click me</button>
                <button onMouseOver={this.handleonMouseOver}>Over me</button>
            </div>
        );
    }
}

export default MyComponent;
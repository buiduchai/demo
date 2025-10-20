import React from 'react';

class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'savio',
        age: 35
    }



    handleonClick(event) {

        this.setState({
            age: Math.floor((Math.random() * 100) + 1)
        })
        console.log('>>My name', this.state.name, ' and I am', this.state.age);

    }

    handleonMouseOver(event) {
        // console.log(event.pageX);
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and i am {this.state.age} years old
                <button onClick={(event) => { this.handleonClick(event) }}>Click me</button>
                <button onMouseOver={this.handleonMouseOver}>Over me</button>
            </div>
        );
    }
}

export default MyComponent;
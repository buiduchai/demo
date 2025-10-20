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

    handleonChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleonSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

    }

    render() {
        return (
            <div>
                my name is {this.state.name} and i am {this.state.age} years old
                <button onClick={(event) => { this.handleonClick(event) }}>Click me</button>
                <form onSubmit={(event) => this.handleonSubmit(event)}>
                    <input type='text' onChange={(event) => this.handleonChange(event)}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
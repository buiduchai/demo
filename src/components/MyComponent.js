import React from 'react';

class MyComponent extends React.Component {
    //JSX
    state = {
        name: 'savio',
        age: 35
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and i am {this.state.age} years old
            </div>
        );
    }
}

export default MyComponent;
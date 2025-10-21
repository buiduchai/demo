import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    //JSX

    state = {
        listUser: [
            { id: 1, name: 'hai', age: 35 },
            { id: 2, name: 'bui', age: 32 },
            { id: 3, name: 'duc', age: 40 },
        ]
    }

    render() {
        return (
            <div>
                <UserInfo></UserInfo>
                <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
            </div >
        );
    }
}

export default MyComponent;
import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {
    //JSX

    state = {
        listUser: [
            { id: 1, name: 'hai', age: '16' },
            { id: 2, name: 'bui', age: '20' },
            { id: 3, name: 'duc', age: '30' },
        ]
    }

    handleAddUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    render() {
        return (
            <div>
                <UserInfo handleAddUser={this.handleAddUser}></UserInfo>
                <DisplayInfo listUser={this.state.listUser}></DisplayInfo>
            </div >
        );
    }
}

export default MyComponent;
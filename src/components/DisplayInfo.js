import React from "react";

class DisplayInfo extends React.Component {

    render() {
        const listUser = this.props.listUser;
        return (
            <div>
                {
                    listUser.map((item) => {
                        return (
                            <div key={item.id}>
                                <div>My name is {item.name}</div>
                                <div>My age is {item.age}</div>
                                <hr></hr>
                            </div>
                        )
                    })
                }
            </div >
        );
    }
}

export default DisplayInfo;
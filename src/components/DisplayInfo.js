import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShowHide: true
    }

    handleOnClick = () => {
        this.setState({
            isShowHide: !this.state.isShowHide
        })
        console.log(this.state.isShowHide)
    }
    render() {
        const listUser = this.props.listUser;
        return (
            <div>

                <div>
                    <br></br>
                    <span onClick={() => {
                        this.handleOnClick()
                    }}>{this.state.isShowHide === true ? "Hide user list" : "Show user list"}</span>
                </div>
                {this.state.isShowHide &&
                    <div>
                        {
                            listUser.map((item) => {
                                return (
                                    <div key={item.id} className={+item.age > 18 ? "green" : "red"}>
                                        <br></br>
                                        <div>My name is {item.name}</div>
                                        <div>My age is {item.age}</div>
                                        <hr></hr>
                                    </div>
                                )
                            })
                        }
                    </div >
                }
            </div>
        );
    }
}

export default DisplayInfo;
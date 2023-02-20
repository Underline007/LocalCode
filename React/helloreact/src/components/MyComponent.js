// class component (old)
// function component (new)
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "Dzung", age: "13" },
            { id: 2, name: "Dzung2", age: "32" },
            { id: 3, name: 'Dzung33', age: "69" },

        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUser]
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUser: listUserClone,
        })
    }

    render() {
        const myAge = 24;
        // mỗi render chỉ có một thẻ div
        return (
            <>
                <div className="a">
                    <AddUserInfor handleAddNewUser={this.handleAddNewUser} ></AddUserInfor>
                    <br></br>
                    <DisplayInfor listUser={this.state.listUser}
                        handleDeleteUser={this.handleDeleteUser}
                    >
                    </DisplayInfor >
                </div >

                <div className="b">

                </div >
            </>
        );
    }
}

export default MyComponent;



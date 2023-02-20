import React from "react";




class AddUserInfor extends React.Component {
    // Đang dùng cú pháp JSX : 
    // cú pháp đặc biệt của React cho phép
    // viết code JS trong html
    state = {
        name: "Dzung",
        address: "Ha Noi",
        age: 26
    }

    // handleClick(event) {
    //     //merge state => react class (khi cập nhật một biến, các biến 
    //     // không dùng sẽ được giữ nguyên)
    //     this.setState({
    //         name: "Dzung Tran",
    //         age: Math.floor(Math.random() * 100) + 1
    //     })
    // }

    // handleOnMoverOver(event) {
    //     // console.log(event.pageX)
    // }

    handleOneChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOneChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handlleOnSubmit = (event) => {
        //khi bấm submit thì trang sẽ không reload lại trang
        event.preventDefault();
        console.log(this.state);
        this.props.handleAddNewUser({
            id: Math.floor((Math.random() * 100) + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
        }
        );
    }



    render() {
        return (
            <div>
                My name is {this.state.name} and I'm  {this.state.age}
                {/* <button onClick={(event) => { this.handleClick(event) }} > Click Me </button> */}
                {/* <button onMouseOver={this.handleOnMoverOver} > Hover Me </button>
             */}
                <form onSubmit={(event) => this.handlleOnSubmit(event)}>
                    <label>Your Name</label>
                    <input type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOneChangeInput(event)} />

                    <label>Your Age</label>
                    <input type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOneChangeAge(event)} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor;
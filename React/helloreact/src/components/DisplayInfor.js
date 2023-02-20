import React from 'react';
import './DisplayInfor.scss'
import logo from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log("call constructor")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log("Call me did mount");
        setTimeout(() => {
            document.title = " Dzung and React"
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("call me did update", this.props, prevProps)
        if (this.props.listUser != prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert("You got 5 user")
            }
        }
    }

    handShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }


    render() {
        console.log("Call me render")
        const { listUser } = this.props;
        console.log(listUser)
        //props là viết tắt của properties 
        // dùng để chuyền dữ liệu từ class cha truyền xuống

        return (
            <div className='display-info-container'>
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={() => { this.handShowHide() }}>
                        {this.state.isShowListUser == true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUser.map((user) => {
                            // if (+user.age > 18) {
                            //     return (
                            //         <div key={user.id} className='blue'>
                            //             <div >ID:  {user.id} </div>
                            //             <div>My name is {user.name} </div>
                            //             <div>My age is {user.age}</div>
                            //             <hr></hr>
                            //         </div>
                            //     )
                            // } else {
                            //     return (
                            //         <div key={user.id} className='red'>
                            //             <div >ID:  {user.id} </div>
                            //             <div>My name is {user.name} </div>
                            //             <div>My age is {user.age}</div>
                            //             <hr></hr>
                            //         </div>
                            //     )
                            // }
                            return (
                                <div key={user.id} className={+user.age > 18 ? "blue" : "red"}>
                                    <div>
                                        <div style={{ color: 'green', paddingTop: "50px" }} >ID:  {user.id} </div>
                                        <div>My name is {user.name} </div>
                                        <div>My age is {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}> Delete </button>
                                    </div>
                                    <hr></hr>
                                </div >
                            )
                        })}
                        {/* <div>My name is  {name}</div>
                <div>My age is {age}</div>
                <hr></hr>
                <div>My name is  {name}</div>
                <div>My age is {age}</div>
                <hr></hr>
                <div>My name is  {name}</div>
                <div>My age is {age}</div>
                <hr></hr> */}
                    </>
                }

            </div>
        )
    }
}

export default DisplayInfor;
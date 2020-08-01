import React from 'react';
import { User, Index } from './Demo.style'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
// import


const Users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]

function Demo1() {
    const [user] = this.props
    return (
        <>
            <div>姓名{user.username}</div>
            <div>年龄{user.age}</div>
            <div>性别{user.gender}</div>
        </>

    )
}
function Index() {
    return (
        <div>
            {Users.map((user) => <Demo1 user={user} />)}
        </div>
    )
}

export default Demo1
import React, { Component } from 'react'
// 以上写法为ES6解构写法，拆解开如以下写法:
// import React from 'react'
// const Component = React.Component

class App extends Component{
    render(){
        return (
            // JSX 可以在react之中的js代码之中写html
            <ul className="name">
                <li>{false?'吴彦祖':'朱明'}</li>  
                <li>彭于晏</li>  
                <li>古天乐</li>  
            </ul>

            // ul中的代码转换为js写法如下:
            // var child1 = React.createElement('li',null,'吴彦祖')
            // var child2 = React.createElement('li',null,'彭于晏')
            // var child1 = React.createElement('li',null,'古天乐')
            // var root = React.createElement('ul',{className:name},child1,child2)
        )
    }
}

export default App;
import React from 'react'
import Style from './Style'
import { renderRoutes } from 'react-router-config'
import { UserName, Content, Button, Down, DownContent } from './Style'
import { Globalstyle } from './Style'
import { useState,useEffect } from 'react'

function Comment(props) {
    // const { route } = props
    const { username, setUsername } = useState('') 
    const { content, setContent } = useState('') 
    useEffect((e) => {
       
    })

    return (
        <div className="all">
            <div className="content">
                <div className="top">
                    <Globalstyle />
                    <UserName>
                        <label htmlFor="" className="name">用户名: <input type="text" className="zm" /></label>
                    </UserName>
                    <Content>
                        <label htmlFor="" className="cont">评论内容:<textarea className="content1" id="" cols="30" rows="10"></textarea></label>
                    </Content>
                    <Button>
                        <button className="btn">发布</button>
                    </Button>
                </div>
                <div className="footer">
                    <DownContent>
                        <div className="speak"></div>
                    </DownContent>
                </div>
                {/* {renderRoutes(route.routes)} */}
            </div>

        </div>
    )
}

export default React.memo(Comment)
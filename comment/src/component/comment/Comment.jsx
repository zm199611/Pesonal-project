import React from 'react'
import Style from './Style'
import { renderRoutes } from 'react-router-config'
import { UserName, Content, Button, Down, DownContent } from './Style'

 function Comment(props) {
    // const { route } = props
    return (
        <div className="all">
            <div className="top">
                <UserName>
                    <label htmlFor=""> 用户名<input type="text" className="zm" /></label>
                </UserName>
                <Content>
                    <label htmlFor=""><textarea name="" id="" cols="30" rows="10"></textarea>评论内容</label>
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
    )
}
export default React.memo(Comment)
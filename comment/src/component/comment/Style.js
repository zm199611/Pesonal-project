import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
body{
　　margin: 0;
　　padding: 0;
    background-color:#FBFBFB;
}
body .all{
    height:500px;
    width:350px;
    background-color:#FFFFFF;
    margin-left:50%;
    margin-top:50%;
    transform:translate3d(-50%,-50%,0)
}
body .all .content{
    width:300px;
    height:450px;
    border: 1px solid #DDDDDD;
    position: relative;
    left:25px;
    top:25px;
}
`
export const UserName = styled.div`
    left:-5px;
    position: relative;
    top:20px;
    .zm{
        width:230px;
        height:30px;
        border-radius:5px;
        border:1px solid #DDDDDD;
        margin-left:20px;
        /* border-radius:3px; */

    }
`
export const Content = styled.div`
    position: relative;
    left: -10px;
    top:40px;
    .content1{
        border-radius:5px;
        border:1px solid #DDDDDD;
        margin-left:30px;
    }
`
export const Button = styled.div`
    border-radius:10px;
>.btn{
    border-radius:5px;
    background-color:#37A2D1;
    color:white;
    outline:hidden;
    border:hidden;
    width:100px;
    height:30px;
    margin-left:180px;
    margin-top:80px;

}

`
export const DownContent = styled.div`
     color:blue;
    background-color:#ffff;
    border-radius:10px;

`
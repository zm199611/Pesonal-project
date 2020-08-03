import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const Globalstyle = createGlobalStyle`　
body{
　　margin: 0;
　　padding: 0;
    background-color:#FBFBFB;
　}
>.all{
    height:500px;
    width:200px;
    background-color:#FFFFFF;
}
`
export const UserName = styled.div`
    margin-left:20px;
    color:#0000;
    display:flex;
`
export const Content = styled.div`
     color:#0000;
    display:flex;
    margin-left:70px;

`
export const Button = styled.div`
    
    /* background-color:blue; */
    border-radius:10px;
>.btn{
    border-radius:5px;
    background-color:#37A2D1;
    color:white;
    outline:hidden;
    border:hidden;
    width:100px;
    height:30px;

}

`
export const DownContent = styled.div`
     color:blue;
    background-color:#ffff;
    border-radius:10px;

`
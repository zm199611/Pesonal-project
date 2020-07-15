import React, { Component } from 'react';
import './tabbar.css'


function Tabbar (){
    return(
        <div className="footer">
            <span className="iconfont">&#xe74f;
            <p>星球</p>
            </span>
            <span className="iconfont">&#xe6a7; 
            <p>动态</p>
            </span>
            <span className="iconfont">&#xe726; 
            <p>发现</p>
            </span>
            <span className="iconfont">&#xe649; 
            <p>我</p>
            </span>
            
        </div>
    )
}

export default Tabbar
import React, { Component } from 'react';
import './search.css'


function Search (){
    return(
        <div className="search">
            <input type="search" className="input" name="user_search" placeholder="搜索用户，星球及内容"/>
    </div>
    )
    }
export default Search
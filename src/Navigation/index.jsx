import React, { Component ,Fragment} from 'react';

export default class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
        this.handleToggole=this.handleToggole.bind(this);
    }
    handleToggole(){
        this.setState({
            show:this.state.show?false:true
        })
        const left = document.getElementById("left");
        if(!this.state.show)left.style.display='block';
        else left.style.display='none';
        
    }          
    render() {
		return (
            <Fragment>
                <div className="tm-left" id="left">  

                    <div className={`${"tm-left-inner"} ${this.state.show?'show':'hide'}`}>
                        <div className="tm-site-header" onClick={this.handleToggole}>
                            <i className="fas fa-coffee fa-3x tm-site-logo"></i>
                            <h1 className="tm-site-name" >Streaming</h1>
                        </div>
                        <nav  className={"tm-site-nav"}>
                            <ul className="tm-site-nav-ul"> 
                                <li className="tm-page-nav-item">
                                    <a href="#learn" className="tm-page-link active">
                                    <i className="fas fa-study tm-page-link-icon"></i>
                                    <span>開始上課</span> 
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#teach" className="tm-page-link">
                                    <i className="fas fa-teach tm-page-link-icon"></i>
                                    <span>開啟直播</span>   
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#drink" className="tm-page-link">
                                    <i className="fas fa-mug-hot tm-page-link-icon"></i>
                                    <span>討論區</span>
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#about" className="tm-page-link">
                                    <i className="fas fa-users tm-page-link-icon"></i>
                                    <span>功課表</span>
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#special" className="tm-page-link">
                                    <i className="fas fa-glass-martini tm-page-link-icon"></i>
                                    <span>常用網站</span> 
                                    </a>
                                </li>
                                <li className="tm-page-nav-item">
                                    <a href="#contact" className="tm-page-link ">
                                    <i className="fas fa-comments tm-page-link-icon"></i>
                                    <span>登入/登出</span> 
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <footer class="tm-site-footer">
                            <p class="tm-black-bg tm-footer-text"/> Copyright 2022 | NTUST MIS
                        </footer>
                    </div> 
                </div>
                <div className={` ${this.state.show?'hide':'show'} ${"fa-mymenu"} ${"fas"} ${"tm-page-link-icon"}`} 
                     onClick={this.handleToggole} 
                     id='left-2'>
                        
                </div> 
            </Fragment>
        )   
    }
}
import React, { Component ,Fragment} from 'react';

export default class Schedule extends React.Component{
    render() {
		return (
            <Fragment>
                <div id="about" className="tm-page-content">
                    <div className="tm-black-bg tm-mb-20 tm-about-box-1">              
                        <h2 className="tm-text-primary tm-about-header "style={{"marginLeft":"30px"}} >您的功課表</h2>
                        <div className="tm-list-item tm-list-item-2">
                            <img src={require('../.././img/110-2課表.png')} alt="" style={{"maxWidth":"100%" ,"height":"auto", "marginLeft":"15px"}} />      
                        </div>
                    </div>
                </div>
            </Fragment>
        )   
    }
}
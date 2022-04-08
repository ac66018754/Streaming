import React, { Component ,Fragment} from 'react';

export default class OtherSite extends React.Component{
    render() {
		return (
            <Fragment>
                <div id="special" className="tm-page-content">
                    <div className="tm-list">
                        <div className="tm-list-item">          
                            <a href='https://moodle.ntust.edu.tw/'><img src={require('../.././img/zuvio_irs_logo.ico') } alt="" className="tm-list-item-img"/></a>
                            <div className="tm-black-bg tm-list-item-text">
                                <p className="tm-list-item-description"><a href='https://moodle.ntust.edu.tw/'>https://moodle.ntust.edu.tw/</a> </p>
                            </div>
                        </div>
                        
                        <div className="tm-list-item">          
                            <a href='https://www.ntust.edu.tw/home.php'><img src={require('../.././img/msys_1000_5502915_29532.ico') } alt="" className="tm-list-item-img"/></a>
                            <div className="tm-black-bg tm-list-item-text">
                            <p className="tm-list-item-description"><a href='https://www.ntust.edu.tw/home.php'>https://www.ntust.edu.tw/home.php</a> </p>
                            </div>
                        </div>	
                        <div className="tm-list-item">          
                            <a href='https://www.ntust.edu.tw/home.php'><img src={require('../.././img/moodle.ico') } alt="" className="tm-list-item-img"/></a>

                            <div className="tm-black-bg tm-list-item-text">
                            <p className="tm-list-item-description"><a href='https://www.ntust.edu.tw/home.php'>https://www.ntust.edu.tw/home.php</a> </p>
                            </div>
                        </div>	
                    </div>   
				</div>
            </Fragment>
        )   
    }
}
import React, { Component ,Fragment} from 'react';

export default class Forum extends React.Component{
    render() {
		return (
            <Fragment>
               <div id="drink" className="tm-page-content"> 

                    <nav className="tm-black-bg tm-drinks-nav">
                    <ul>
                        <li>
                        <a href="#" className="tm-tab-link active" data-id="cold">您的課程</a>
                        </li>
                        <li>
                        <a href="#" className="tm-tab-link" data-id="hot">討論版</a>
                        </li>
                        <li>
                        <a href="#" className="tm-tab-link" data-id="juice">最愛</a>
                        </li>
                    </ul>
                    </nav>

                    <div id="cold" className="tm-tab-content">
                        <div className="tm-list">
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>					
                        </div>
                    </div> 

                    <div id="hot" className="tm-tab-content">
                    <div className="tm-list">
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                                                
                        </div>
                    </div>

                    <div id="juice" className="tm-tab-content">
                    <div className="tm-list">
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                            <div className="tm-list-item">          
                                <img src="img/iced-americano.png" alt="" className="tm-list-item-img"/>
                                <div className="tm-black-bg tm-list-item-text">
                                    <h3 className="tm-list-item-name">XXX<span className="tm-list-item-price">Date</span></h3>
                                    <p className="tm-list-item-description">Content</p>
                                </div>
                            </div>
                                                
                        </div>
                    </div>
                </div> 
            </Fragment>
        )   
    }
}
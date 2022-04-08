import React, { Component ,Fragment} from 'react';

export default class Login extends React.Component{
    render() {
		return (
            <Fragment>
               <div id="contact" className="tm-page-content">
                    <div className="tm-black-bg tm-contact-text-container" style={{"visibility": "hidden"}}>
                        <h2 className="tm-text-primary">Streaming</h2>
                        <p>若忘記密碼，請按此以重設</p>
                    </div>
                    <div className="tm-black-bg tm-contact-form-container tm-align-right">
                        <form action="" method="POST" id="contact-form">
                            <div className="tm-form-group">
                                <input type="text" name="name" className="tm-form-control" placeholder="學號" required="" />
                            </div>
                            <div className="tm-form-group">
                                <input type="email" name="email" className="tm-form-control" placeholder="密碼" required="" />
                            </div>      
                            <div>
                                <button type="submit" className="tm-btn-primary tm-align-right">
                                    登入
                                </button>
                            </div>
                        </form>
                    </div>
				</div>
            </Fragment>
        )   
    }
}
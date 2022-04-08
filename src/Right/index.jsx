import React, { Component ,Fragment} from 'react';
import Learn from './Learn/index';
import Teach from './Teach/index';
import Forum from './Forum/index';
import OtherSite from './OtherSite/index';
import Login from './Login/index';
import Schedule from './Schedule';

export default class Navigation extends React.Component{
    render() {
		return (
            <Fragment>
                <div className="tm-right">
                    <main className="tm-main">
                        <Learn/>{/*上課*/}     
                        <Teach/>{/*直播 */}
                        <Forum/> {/*討論區*/}
                        <Schedule/>{/*功課表*/}
                        <OtherSite/>{/*其他網站*/}
                        <Login/>{/*登入頁面*/}
                    </main>
                </div>
            </Fragment>
        )   
    }
}
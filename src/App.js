import React, { Component ,Fragment} from 'react';
import $ from  'jquery';
import '../src/css/tooplate-wave-cafe.css';
import "../src/fontawesome/css/all.min.css";

import Navigation from './Navigation/index';
import Right from './Right';
import Background from './Background';



export default class App extends Component
{
	componentDidMount () 
	{
		<script src="./js/jquery-3.4.1.min.js"></script>    

    	function setVideoSize() {
			const vidWidth = 1920;
			const vidHeight = 1080;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;
			const tempVidWidth = windowHeight * vidWidth / vidHeight;
			const tempVidHeight = windowWidth * vidHeight / vidWidth;
			const newVidWidth = tempVidWidth > windowWidth ? tempVidWidth : windowWidth;
			const newVidHeight = tempVidHeight > windowHeight ? tempVidHeight : windowHeight;
			const tmVideo = $('#tm-video');

			tmVideo.css('width', newVidWidth);
			tmVideo.css('height', newVidHeight);
		}
		// 切換page 依照#跟id做切換
		function openTab(evt, id) {
			$('.tm-tab-content').hide();
			$('#' + id).show();
			$('.tm-tab-link').removeClass('active');
			$(evt.currentTarget).addClass('active');
		}    

		function initPage() {
			let pageId = window.location.hash;

			if(pageId) {
				highlightMenu($(`.tm-page-link[href^="${pageId}"]`)); 
				showPage($(pageId));
			}
			else {
				pageId = $('.tm-page-link.active').attr('href');
				showPage($(pageId));
			}
		}

    	function highlightMenu(menuItem) {
			$('.tm-page-link').removeClass('active');
			menuItem.addClass('active');
		}

    	function showPage(page) {
			$('.tm-page-content').hide();
			page.show();
		}

    	$(document).ready(function(){

		/***************** Pages *****************/

		initPage();

		$('.tm-page-link').click(function(event) {
			
			if(window.innerWidth > 991) {
			event.preventDefault();
			}

			highlightMenu($(event.currentTarget));
			showPage($(event.currentTarget.hash));
		});

      
		/***************** Tabs 按誰誰就加上active*******************/

		$('.tm-tab-link').on('click', e => {
			e.preventDefault(); 
			openTab(e, $(e.target).data('id'));
		});

		$('.tm-tab-link.active').click(); // Open default tab


		/************** Video background *********/

		setVideoSize();

		// Set video background size based on window size
		let timeout;
		window.onresize = function(){
			clearTimeout(timeout);
			timeout = setTimeout(setVideoSize, 100);
		};

		// Play/Pause button for video background      
		const btn = $("#tm-video-control-button");

		btn.on("click", function(e) {
			const video = document.getElementById("tm-video");
			const body = document.getElementById("bodyy");
			switch (this.className) {//抓按鈕的class
				case "fas fa-pause":  //暫停->播放
					video.style.visibility='visible';
					video.play();
					$(this).removeClass();
					$(this).addClass("fas fa-play");
					break;
				case "fas fa-play"://播放->綠色
					body.style.backgroundColor='#1E5050';
					video.style.visibility='hidden';
					$(this).removeClass();
					$(this).addClass("green");
					break;
				case 'green': //綠色->紅色
					body.style.backgroundColor='#bbded6'; 	//背景轉藍
					video.style.visibility='hidden';  //影片藏起來
					$(this).removeClass();        //這兩行是
					$(this).addClass("red");      //把按鈕的class改成blue
					break;
				case 'red':  //藍->暫停
					body.style.backgroundColor='#ffb6b9';
					video.style.visibility='hidden';
					$(this).removeClass();
					$(this).addClass("fas fa-pause");
					break;
				
			}
     	 });
    });
      
	}
  	render() 
	{
		return(
			<Fragment>
				<div className="tm-container">
					<div className="tm-row">
						<Navigation/> {/*左半塊的導覽列*/}
						<Right/>{/*右半塊的內容*/}
					</div>
				</div>	
				<Background/>{/* 背景動畫 */}
			</Fragment>
		);
    }
}
  
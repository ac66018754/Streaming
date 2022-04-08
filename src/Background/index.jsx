import React, { Component ,Fragment} from 'react';

export default class Background extends React.Component{
    constructor(props){
        super(props);
        this.state={
            background_color:"fas fa-pause"
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(){
        // this.setState({
        //     show:this.state.show?false:true
        // })
       
        //若是顏色，i標籤的顏色必須被更改，透過將他原有的class替換掉的方式
        //若是顏色，將這個值傳回去給css，並將video的visibility設為hidden
        //若是video，則將video的visibility改成visible，將css設為red
    }  
    render() {
		return (
            <Fragment>
                <div class="tm-video-wrapper">
						<i id="tm-video-control-button" class="fas fa-pause"></i>
						<video autoplay muted loop id="tm-video">
							<source src={require(".././video/wave-cafe-video-bg.mp4")} type="video/mp4"/>
						</video>
					</div>
            </Fragment>
        )   
    }
}
//按鈕(i標籤)被按，要改:
//(1.)按鈕的樣式
//      更改i標籤的class
//(2.)背景的樣式
//      更改video的class，要嘛隱藏要嘛出現
//      如果點擊之前是viedo是出現的，那麼video變成隱藏，且body的css不須改變
//      如果點擊之前video為隱藏，則判斷現在是第幾個顏色，如果不是最後一個，則video繼續隱藏，且改變body的Css
//                                                    如果已經是最後一個，則video出現，body的css仍需改變

//做一個按紐，負責開關導覽列
//如果按下，則導覽列的class設定成"相反"，並將內容置中or擺右側

//設三個討論版物件陣列
//這三個陣列裡面分別存放數個文章物件
//文章物件包含標題、內容、以及日期
//JSON數組:(在方括號內存放多個JSON對象，以逗號隔開)
// {"sites":[
//     {"name":"W3cmap", "url":"www.w3cmap.com"}, 
//     {"name":"Google", "url":"www.google.com"},
//     {"name":"Taobao", "url":"www.taobao.com"}
// ]}





//其他想法:
// 1.可以讓使用者自行輸入程式碼來撰寫自己的背景顏色、圖片、影片、漸層等，要附上教學
// 2.可以增加背景音樂
// 3.可以讓使用者看到下一個是什麼顏色
// 4.附上調色盤直接讓使用者直接挑選顏色

// 5.連導覽列開關都可以隱藏:
//     當導覽列隱藏時，開關也隨之隱藏，透過滑鼠移到網頁最左側來重新叫出來
// 6.撰寫導覽列開關的動畫(偏難)

// 7.撰寫新的文章
// 8.討論版需要返回按鈕吧
// 9.文章是要像FB跟IG一樣的閱讀方式，還是Dcard?

//1.上傳自己的功課表
//2.重新構思課程、討論版之間的關係
//3.
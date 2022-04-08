import React from 'react'
import {Wholee} from './style'


export default class Teach extends React.Component {
	componentDidMount() 
	{
        'use strict'
        var mediaRecorder;
        const pauseBtn = document.getElementById('pause');
        pauseBtn.disabled = true;
        pauseBtn.onclick = function(ev) {
            if (!mediaRecorder) {
                return;
            }

            if (pauseBtn.textContent == "pause") {
                mediaRecorder.pause();
                pauseBtn.textContent = "resume";
            }
            else {
                mediaRecorder.resume();
                pauseBtn.textContent = "pause";
            }
        }

        var buffer = [];
        function onDataAvailable(d) {
            if (d && d.data && d.data.size > 0) {
                buffer.push(d.data);
            }
        }

        function onRecordError(e) {
            console.error('Recorder error', e);
        }

        const recordBtn = document.getElementById('record');
        function onGetStream(stream) {
            recordBtn.textContent = "stop";
            var options = {mimeType: 'video/webm;codecs=vp8'};
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.error(`${options.mimeType} is not supported!`);
                return;
            }

            try {
                mediaRecorder = new MediaRecorder(stream, options);
            }
            catch (e) {
                console.error('Filed to create MediaRecorder', e);
                return;
            }

            mediaRecorder.ondataavailable = onDataAvailable;
            mediaRecorder.onerror = onRecordError;
            mediaRecorder.start(10);
        }

        function saveVideo() {
            if (buffer) {
                var blob = new Blob(buffer, {type: 'video/webm'});
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');

                a.href = url;
                a.style.display = 'none';
                a.download = 'record.webm';
                a.click();
            }
            else {
                console.error("record failed");
            }
        }

        // 捕获视频
        const streamContrains = {
            video: {
                width: 1280,
                height: 720,
                frameRate: 15,
            },
            audio: false
        };

        function onGetStreamError(error) {
            console.log('getDisplayMedia error', error);
        }

        recordBtn.onclick = function(ev) {
            if (mediaRecorder && recordBtn.textContent != "record") {
                recordBtn.textContent = "record";
                pauseBtn.disabled = false;

                let tracks = mediaRecorder.stream.getTracks();
                tracks.forEach(track => track.stop());
                saveVideo();
                return;
            }
            
            pauseBtn.disabled = false;
            const mDevices = navigator.mediaDevices;
            const promise = mDevices.getDisplayMedia(streamContrains);
            promise.then(
                onGetStream
            ).catch(
                onGetStreamError
            );
        }
	        
	}	
	
	render() {
		return (
			<Wholee>
                <div id="teach" className="tm-page-content">
                    <div className="tm-black-bg tm-mb-20 tm-about-box-1">   
                        <h1>以WebRTC直播</h1>
                        <div>
                            <button id = "record">開始錄影</button>
                            <button id = "pause">暫停</button>
                        </div>
                    </div>
                </div>
			</Wholee>
		)
	}
}
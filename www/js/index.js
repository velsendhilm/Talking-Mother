/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("Device Ready");
    alert("test");
    // document.addEventListener('deviceready', function () {
    //     console.log("a");
    //     alert("a");
    //     TTS.speak('hello, world!').then(function () {
    //         alert('success');
    //     }, function (reason) {
    //         alert(reason);
    //     });
    //     console.log("b");
    //     alert("b");
    //     // or with more options
    //     TTS.speak({
    //         text: 'Hi I\'m Siri!',
    //         identifier: 'com.apple.ttsbundle.Samantha-compact',
    //         rate: 0.75,
    //         pitch: 0.9,
    //         cancel: true
    //     }).then(function () {
    //         alert('success');
    //     }, function (reason) {
    //         alert(reason);
    //     });
    //     console.log("c");
    //     alert("c");
    //     // or with more options
    //     TTS.getVoices().then(function (voices) {
    //         // Array of voices [{name:'', identifier: '', language: ''},..] see TS-declarations
    //     }, function (reason) {
    //         alert(reason);
    //     });
    //     console.log("d");
    //     alert("d");
    // });
}



function SpeakWord(speachtext) {
    if (speachtext == "Yes") {
        speachtext = "I am saying Yes";
    }
    if (speachtext == "No") {
        speachtext = "I am saying No";
    }
    speachcontent(speachtext);
}

function speachcontent(speachtext) {
    console.log("a");
        alert("a");
        window.TTS.speak('hello, world!').then(function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
        console.log("b");
        alert("b");
        // or with more options
        window.TTS.speak({
            text: 'Hi I\'m Siri!',
            identifier: 'com.apple.ttsbundle.Samantha-compact',
            rate: 0.75,
            pitch: 0.9,
            cancel: true
        }).then(function () {
            alert('success');
        }, function (reason) {
            alert(reason);
        });
        console.log("c");
        alert("c");
        // or with more options
        window.TTS.getVoices().then(function (voices) {
            // console.log(voices);
            // Array of voices [{name:'', identifier: '', language: ''},..] see TS-declarations
        }, function (reason) {
            alert(reason);
        });
        console.log("d");
        alert("d");
}
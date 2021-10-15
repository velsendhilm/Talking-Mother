// Initialize new SpeechSynthesisUtterance object
let speech = new SpeechSynthesisUtterance();

// Set Speech Language
speech.lang = "en";

// let voicesa = [{ 
//     voiceURI: "urn:moz-tts:sapi:Microsoft Zira Desktop - English (United States)?en-US", 
//     name: "Microsoft Zira Desktop - English (United States)", 
//     lang: "en-US", 
//     localService: true, 
//     default: false 
// },{ voiceURI: "urn:moz-tts:sapi:Microsoft David Desktop - English (United States)?en-US", name: "Microsoft David Desktop - English (United States)", lang: "en-US", localService: true, default: false }]; // global array of available voices
// let voices = [];
// speech.voice = voices[0];
// console.log(voicesa);
// console.log(voicesa[0]);
// console.log(window.speechSynthesis.getVoices());
let voicesa = [];
voicesa = window.speechSynthesis.getVoices();
var voiceselection = 1;
for (i=0; i<voicesa.length;i=i+1) {
    console.log(voicesa[i]);
    console.log(voicesa[i].name)
    if (voicesa[i].name == "Microsoft Zira - English (United States)") {
        voiceselection = i;
    }
}
speech.voice = voicesa[voiceselection];
speech.rate = 1;
speech.pitch = 2;
speech.volume = 1;

// SpeechSynthesisVoice { 
//     voiceURI: "urn:moz-tts:sapi:Microsoft Zira Desktop - English (United States)?en-US", 
//     name: "Microsoft Zira Desktop - English (United States)", 
//     lang: "en-US", 
//     localService: true, 
//     default: false 
// }
// textToSpeech.js:62:13

// window.speechSynthesis.onvoiceschanged = () => {
//     // Get List of Voices
//     voices = voicesa;
//     voices =  window.speechSynthesis.getVoices();
//     console.log(voices);
//     // Initially set the First Voice in the Array.
//     speech.voice = voices[1];

//     // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
//     let voiceSelect = document.querySelector("#voices");
//     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
// };

// document.querySelector("#rate").addEventListener("input", () => {
//     // Get rate Value from the input
//     const rate = 1; // document.querySelector("#rate").value;

//     // Set rate property of the SpeechSynthesisUtterance instance
//     speech.rate = rate;

//     // Update the rate label
//     document.querySelector("#rate-label").innerHTML = rate;
// });

// document.querySelector("#volume").addEventListener("input", () => {
//     // Get volume Value from the input
//     const volume = 1; //document.querySelector("#volume").value;

//     // Set volume property of the SpeechSynthesisUtterance instance
//     speech.volume = volume;

//     // Update the volume label
//     document.querySelector("#volume-label").innerHTML = volume;
// });

// document.querySelector("#pitch").addEventListener("input", () => {
//     // Get pitch Value from the input
//     const pitch = 2; //document.querySelector("#pitch").value;

//     // Set pitch property of the SpeechSynthesisUtterance instance
//     speech.pitch = pitch;

//     // Update the pitch label
//     document.querySelector("#pitch-label").innerHTML = pitch;
// });

// document.querySelector("#voices").addEventListener("change", () => {
//     // On Voice change, use the value of the select menu (which is the index of the voice in the global voice array)
//     speech.voice = voices[document.querySelector("#voices").value];
// });

// document.querySelector("#start").addEventListener("click", () => {
//     // Set the text property with the value of the textarea
//     speech.text = document.querySelector("textarea").value;
//     console.log(speech.voice);
//     console.log(speech.rate);
//     console.log(speech.pitch);
//     console.log(speech.volume);
//     // Start Speaking
//     window.speechSynthesis.speak(speech);
// });

// document.querySelector("#pause").addEventListener("click", () => {
//     // Pause the speechSynthesis instance
//     window.speechSynthesis.pause();
// });

// document.querySelector("#resume").addEventListener("click", () => {
//     // Resume the paused speechSynthesis instance
//     window.speechSynthesis.resume();
// });

// document.querySelector("#cancel").addEventListener("click", () => {
//     // Cancel the speechSynthesis instance
//     window.speechSynthesis.cancel();
// });

function speachcontent(speachtext) {
    speech.text = speachtext;
    window.speechSynthesis.speak(speech);
}

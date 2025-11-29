let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GN";
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 0 && hour < 12) {
        speak("good morning! welcome back");
    } else if (hour >= 12 && hour < 18) {
        speak("good afternoon! welcome back");
    } else {
        speak("good evening! welcome back");
    }
   
}
window.addEventListener("load", () => {
    wishMe()
})
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult=(event) => {
    let transcript = event.results[event.results.length - 1][0].transcript;

    let content = document.querySelector("#content");
    content.innerHTML = transcript;
    if (content) {
        content.innerText = transcript;
    }
        
    takeCommand(transcript.toLowerCase());

};
window.addEventListener("load",()=>{
    let btn = document.querySelector("#btn");
    let voice = document.querySelector("#voice");
    btn.addEventListener("click",()=>{
        recognition.start();
        btn.style.display="block";
        voice.style.display="block";
    });
});
 function takeCommand(message, btn, voice) {
    if (message.includes("नमस्ते") || message.includes("hello") || message.includes("हेलो")) {
        speak("नमस्ते! मैं आपकी कैसे मदद कर सकती हूँ?");
    }
    else if (message.includes("आपका नाम क्या है") || message.includes("तुम कौन हो")) {
        speak("मेरा नाम भिष्मा है, मैं आपकी वर्चुअल असिस्टेंट हूँ।");
    }
    else if (message.includes("आप कैसी हैं") || message.includes("तुम कैसी हो")) {
        speak("मैं ठीक हूँ, धन्यवाद! आप कैसे हैं?");
    }
    else if (message.includes("मौसम कैसा है") || message.includes("मौसम बताओ")) {
        speak("कृपया अपने स्थान के लिए मौसम जानकारी प्राप्त करने के लिए एक वेब ब्राउज़र खोलें।");
    }
    else if (message.includes("धन्यवाद") || message.includes("थैंक यू")) {
        speak("आपका स्वागत है! मुझे आपकी मदद करके खुशी हुई।");
    }
    else if (message.includes("अलविदा") || message.includes("बाय")) {
        speak("अलविदा! आपका दिन शुभ हो।");
    }
    else if (message.includes("आप क्या कर सकती हैं") || message.includes("तुम क्या कर सकती हो")) {
        speak("मैं आपकी विभिन्न कार्यों में मदद कर सकती हूँ, जैसे कि जानकारी प्रदान करना, अनुस्मारक सेट करना, और बहुत कुछ।");
    }
    else if (message.includes("मुझे एक चुटकुला सुनाओ") || message.includes("एक मजेदार बात बताओ")) {
        speak("यहाँ एक मजेदार बात है: मैं एक वर्चुअल असिस्टेंट हूँ, लेकिन मैं कभी भी वर्चुअल नहीं होता!");
    }
    else if (message.includes("तुम्हारा जन्मदिन कब है") || message.includes("आपका जन्मदिन कब है")) {
        speak("मेरा जन्मदिन हर दिन है, क्योंकि मैं हमेशा यहाँ हूँ आपकी मदद के लिए!");
    }
    else if (message.includes("आप किसके लिए काम करती हैं") || message.includes("तुम किसके लिए काम करती हो")) {
        speak("मैं आपकी सेवा में हूँ, ताकि आपकी ज़िन्दगी आसान और बेहतर हो सके।");
    }
    else if (message.includes("who are you") || message.includes("what is your name")) {
        speak("I am Bhishma, your virtual assistant. My purpose is to help you with various tasks and provide information. i am created by suryapratap singh");
    }
    else if (message.includes("open google") || message.includes("google खोलो")) {
        speak("Google खोल रहा हूँ");
        window.open("https://www.google.com", "_blank");
    }
    else if (message.includes("open youtube") || message.includes("youtube खोलो")) {
        speak("YouTube खोल रहा हूँ");
        window.open("https://www.youtube.com", "_blank");
    }
    else if (message.includes("open facebook") || message.includes("facebook खोलो")) {
        speak("Facebook खोल रहा हूँ");
        window.open("https://www.facebook.com", "_blank");
    }
    else if (message.includes("open instagram") || message.includes("instagram खोलो")) {
        speak("Instagram खोल रहा हूँ");
        window.open("https://www.instagram.com", "_blank");
    }
    else if (message.includes("open twitter") || message.includes("twitter खोलो")) {
        speak("Twitter खोल रहा हूँ");
        window.open("https://www.twitter.com", "_blank");
    }
    else if (message.includes("open whatsapp") || message.includes("whatsapp खोलो")) {
        speak("WhatsApp खोल रहा हूँ");
        window.open("https://web.whatsapp.com", "_blank");
    }
    
    else if (message.includes("open gmail") || message.includes("gmail खोलो")) {
        speak("Gmail खोल रहा हूँ");
        window.open("https://mail.google.com", "_blank");
    }
    else if (message.includes("open github") || message.includes("github खोलो")) {
        speak("GitHub खोल रहा हूँ");
        window.open("https://www.github.com", "_blank");
    }
    else if (message.includes("open linkedin") || message.includes("linkedin खोलो")) {
        speak("LinkedIn खोल रहा हूँ");
        window.open("https://www.linkedin.com", "_blank");
    }
    else if (message.includes("open netflix") || message.includes("netflix खोलो")) {
        speak("Netflix खोल रहा हूँ");
        window.open("https://www.netflix.com", "_blank");
    }
    else if (message.includes("open amazon") || message.includes("amazon खोलो")) {
        speak("Amazon खोल रहा हूँ");
        window.open("https://www.amazon.com", "_blank");
    }
    else if (message.includes("open flipkart") || message.includes("flipkart खोलो")) {
        speak("Flipkart खोल रहा हूँ");
        window.open("https://www.flipkart.com", "_blank");
    }
    else if (message.includes("open myntra") || message.includes("myntra खोलो")) {
        speak("Myntra खोल रहा हूँ");
        window.open("https://www.myntra.com", "_blank");
    }
    else if (message.includes("open hotstar") || message.includes("hotstar खोलो")) {
        speak("Hotstar खोल रहा हूँ");
        window.open("https://www.hotstar.com", "_blank");
    }
    else if (message.includes("open spotify") || message.includes("spotify खोलो")) {
        speak("Spotify खोल रहा हूँ");
        window.open("https://www.spotify.com", "_blank");
    }
    else if (message.includes("open soundcloud") || message.includes("soundcloud खोलो")) {
        speak("SoundCloud खोल रहा हूँ");
        window.open("https://www.soundcloud.com", "_blank");
    }
    else if (message.includes("open quora") || message.includes("quora खोलो")) {
        speak("Quora खोल रहा हूँ");
        window.open("https://www.quora.com", "_blank");
    }
    else if (message.includes("open reddit") || message.includes("reddit खोलो")) {
        speak("Reddit खोल रहा हूँ");
        window.open("https://www.reddit.com", "_blank");
    }
    else if (message.includes("open stackoverflow") || message.includes("stackoverflow खोलो")) {
        speak("StackOverflow खोल रहा हूँ");
        window.open("https://stackoverflow.com", "_blank");
    }
    else if (message.includes("open udemy") || message.includes("udemy खोलो")) {
        speak("Udemy खोल रहा हूँ");
        window.open("https://www.udemy.com", "_blank");
    }
    else if (message.includes("open coursera") || message.includes("coursera खोलो")) {
        speak("Coursera खोल रहा हूँ");
        window.open("https://www.coursera.org", "_blank");
    }
    else if (message.includes("open edx") || message.includes("edx खोलो")) {
        speak("edX खोल रहा हूँ");
        window.open("https://www.edx.org", "_blank");
    }
    else if (message.includes("open khan academy") || message.includes("khan academy खोलो")) {
        speak("Khan Academy खोल रहा हूँ");
        window.open("https://www.khanacademy.org", "_blank");
    }
    else if (message.includes("open wikipedia") || message.includes("wikipedia खोलो")) {
        speak("Wikipedia खोल रहा हूँ");
        window.open("https://www.wikipedia.org", "_blank");
    }
    else if (message.includes("open dictionary") || message.includes("dictionary खोलो")) {
        speak("Dictionary खोल रहा हूँ");
        window.open("https://www.dictionary.com", "_blank");
    }
    else if (message.includes("open thesaurus") || message.includes("thesaurus खोलो")) {
        speak("Thesaurus खोल रहा हूँ");
        window.open("https://www.thesaurus.com", "_blank");
    }
    else if (message.includes("open weather") || message.includes("weather खोलो")) {
        speak("Weather खोल रहा हूँ");
        window.open("https://www.weather.com", "_blank");
    }
    else if (message.includes("open news") || message.includes("news खोलो")) {
        speak("News खोल रहा हूँ");
        window.open("https://www.news.google.com", "_blank");
    }
    else if (message.includes("open maps") || message.includes("maps खोलो")) {
        speak("Maps खोल रहा हूँ");
        window.open("https://www.google.com/maps", "_blank");
    }
    else if (message.includes("open translate") || message.includes("translate खोलो")) {
        speak("Translate खोल रहा हूँ");
        window.open("https://translate.google.com", "_blank");
    }
    else if (message.includes("open calculator") || message.includes("calculator खोलो")) {
        speak("Calculator खोल रहा हूँ");
        window.open("https://www.calculator.com", "_blank");
    }
    else if (message.includes("open calendar") || message.includes("calendar खोलो")) {
        speak("Calendar खोल रहा हूँ");
        window.open("https://calendar.google.com", "_blank");
    }
    else if (message.includes("open youtube") || message.includes("youtube खोलो")) {
        speak("YouTube खोल रहा हूँ");
        window.open("https://www.youtube.com", "_blank");
    }
    else if (message.includes("stop") || message.includes("रुको")) {
        speak("ठीक है, मैं रुक रही हूँ। जब भी आपको मेरी ज़रूरत हो, बस मुझे बुलाइए।");
        recognition.stop();
    }
    else if (message.includes("thank you") || message.includes("धन्यवाद")) {
        speak("आपका स्वागत है! मुझे आपकी मदद करके खुशी हुई।");
    }
    else if (message.includes("goodbye") || message.includes("अलविदा")) {
        speak("अलविदा! आपका दिन शुभ हो।");
        recognition.stop();
    }
    else if (message.includes("how are you") || message.includes("आप कैसी हैं")) {
        speak("मैं ठीक हूँ, धन्यवाद! आप कैसे हैं?");
    }
    else if (message.includes("what can you do") || message.includes("आप क्या कर सकती हैं")) {
        speak("मैं आपकी विभिन्न कार्यों में मदद कर सकती हूँ, जैसे कि जानकारी प्रदान करना, अनुस्मारक सेट करना, और बहुत कुछ।");
    }
    else if (message.includes("tell me a joke") || message.includes("मुझे एक चुटकुला सुनाओ")) {
        speak("यहाँ एक मजेदार बात है: मैं एक वर्चुअल असिस्टेंट हूँ, लेकिन मैं कभी भी वर्चुअल नहीं होता!");
    }
    else if (message.includes("when is your birthday") || message.includes("तुम्हारा जन्मदिन कब है")) {
        speak("मेरा जन्मदिन हर दिन है, क्योंकि मैं हमेशा यहाँ हूँ आपकी मदद के लिए!");
    }
    else if (message.includes("who created you") || message.includes("तुम्हें किसने बनाया")) {
        speak("मुझे सुर्यप्रताप सिंह ने बनाया है।");
    }
    else if (message.includes("open google") || message.includes("google खोलो")) {
        speak("Google खोल रहा हूँ");
        window.open("https://www.google.com", "_blank");
    }   
    else if(message.includes("time") || message.includes("समय")) {
        let date=new Date();
        let time=date.getHours()+" बजे और "+date.getMinutes()+" मिनट";
        speak(time);
    }
    else if(message.includes("date") || message.includes("तारीख")) {
        let date=new Date();
        let todaydate=date.getDate()+" "+(date.getMonth()+1)+" "+date.getFullYear();
        speak(todaydate);
    }
    
    else {
        let finaltext="this is what i found on google for"+message.replace("Bheeshma","")||message.
        replace("Bhishma","");
        speak(finaltext);
        window.open(`https://www.google.com/search?q=${message.replace("Bheeshma","") || message.replace("bhishma","")}`, "_blank");
    }

 }

    
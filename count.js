var style = "uc"

function useUc(arg) {
    style = "uc" 
}

function useCommon(arg) {
    style = "common"
}

function ucCount(text) {
    words = text.replace(/[\s+-]/, " ").split(" ")
    return words.length;
    /*
    var wc = 0
    for (let i = 0; i < words.length; i++) {
        // If the "word" is not an empty string (i.e., the paragraph ended with
        // a space)
        if (words[i])
            console.log("Empty word")
            wc++
    }
    return wc
    */
}

function commonCount(text) {
    words = text.replace(/\s+/, " ").split(" ")
    return words.length;
    /*
    var wc = 0
    for (let i = 0; i < words.length; i++) {
        // If the "word" is not an empty string (i.e., the paragraph ended with
        // a space)
        if (words[i])
            console.log("Empty word")
            wc++
    }
    return wc
    */
}

// https://stackoverflow.com/questions/25976564/onkeyup-event-in-textarea
function count() {
    var input = document.getElementById("input").value;
    style = document.getElementById("style").value;
    if (style == "uc")
        var wordcount = ucCount(input);
    else if (style == "common")
        var wordcount = commonCount(input);
   
    output = document.getElementById("output");
    output.innerHTML = wordcount;
}

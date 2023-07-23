var style = "uc"

function useUc(arg) {
    style = "uc" 
}

function useCommon(arg) {
    style = "common"
}

function ucCount(text) {
    // Replace any spaces/newlines/tabs and hyphens with spaces
    words = text.replace(/[\s+-]/, " ").split(" ")
    return words.length;
}

function commonCount(text) {
    words = text.replace(/\s+/, " ").split(" ")
    return words.length;
}

// https://stackoverflow.com/questions/25976564/onkeyup-event-in-textarea
function countWords() {
    var input = document.getElementById("input").value;
    if (style == "uc")
        var wordcount = ucCount(input);
    else if (style == "common")
        var wordcount = commonCount(input);
   
    output = document.getElementById("output");
    output.innerHTML = wordcount;
}

function countChars() {
				var input = document.getElementById("input").value;
    var wordcount = input.length;
    output = document.getElementById("output");
    output.innerHTML = wordcount;
}
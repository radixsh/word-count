var style = "uc"

function ucCount(text) {
    words = text.split(/\W+/);
    var wc = 0
    for (let i = 0; i < words.length; i++) {
        // If the "word" is not an empty string (i.e., the paragraph ended with
        // a space)
        if (words[i])
            wc++
    }
    return wc
}

// https://stackoverflow.com/questions/25976564/onkeyup-event-in-textarea
function count() {
    var input = document.getElementById("input").value;
    if (style == "uc") {
        var wordcount = ucCount(input);
    } else if (style == "common") {
        var wordcount = commonCount(input);
    }
   
    output = document.getElementById("output");
    output.innerHTML = "Wordcount: " + wordcount;
}

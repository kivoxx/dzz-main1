

function rejestracja(event) {
    event.preventDefault();
    window.location.href = "index.html";
}

function perehod1(event) {
    event.preventDefault();
    window.location.href = "oplata.html";
}

function printText() {
    var text = "Cześć, na naszej stronie nauczysz się języka, którego potrzebujesz bez żadnych trudności w krótkim czasie.";
    var words = text.split(' ');
    var i = 0;
    var wordCount = 0;
    var speed = 80;
    var element = document.getElementById("text-area");
    element.innerHTML = '';

    
    function typeWriter() {
        if (i < text.length) {
          
            element.innerHTML += text.charAt(i);
            

            element.innerHTML += '|';
            
      
            setTimeout(function() {
                element.innerHTML = element.innerHTML.slice(0, -1);
                i++;
                typeWriter();
            }, speed);
        } else {

            element.innerHTML = element.innerHTML.slice(0, -1);
        }
    }


    function addText() {
        if (wordCount < words.length) {

            let word = words[wordCount];
            let charIndex = 0;

            function printWord() {
                if (charIndex < word.length) {
                    element.innerHTML += word.charAt(charIndex);
                    charIndex++;
                    setTimeout(printWord, speed);
                } else {
                    
                    element.innerHTML += " ";
                    wordCount++;

                    if (wordCount % 4 === 0) {
                        element.innerHTML += "<br>";
                    }

                  
                    setTimeout(addText, speed);
                }
            }

            printWord();
        } else {

            element.innerHTML = element.innerHTML.slice(0, -1);
        }
    }

    addText();
}

window.onload = printText;

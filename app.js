function rot13(str) { 
    str = str
        .split("")
        .map(char => {
            if (/[A-Z]/.test(char)) {
                
                char = char.charCodeAt(0);
                char -= 65;
                char = (char + 13) % 26;
                char = String.fromCharCode(65 + char);

                return char;
            }
            else
                return char;
        })
        .join("");

    return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));

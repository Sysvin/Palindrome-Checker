const btn = document.querySelector(".btn");
const result = document.querySelector(".result"); 

btn.addEventListener("click", palindrome); 

function palindrome(){
    //get the value of input word and make it lowercase (you don't want capitals to throw you off in your check)
    const word = document.querySelector(".input-text").value.toLowerCase();
    //we now need to take that word, split it into an array (b/c you can't reverse a string), reverse it, and then rejoin it to make a new word. 
    newWord = [...word].reverse().join(''); 
    //this [...word] is the same as if I had said word.split(''); This is just a new spreader operator in javascript ES6. it will turn a string into an array. 
    //now we need to check the new word (the reversed word) and test it against the original word (before reversal) and see if they are the same
    if (newWord == word){
        result.innerHTML = `${word.toUpperCase()} is a palindrome`; 
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a palindrome`; 
    }
}

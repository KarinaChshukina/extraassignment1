const message = document.getElementById("message")
const picture = document.getElementById("picture")
const phrase = document.getElementById("phrase")
const submit = document.getElementById("submit")
const button = document.getElementById("result");


// 
// 1. Split message words and store it in an array.
// 2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
// 

function calculate(){
// Random phrases and its pictures (represented as an array of objects)


    var word = "";
    word.split();
    var count = 0;
if (message.length > 20) {
    return randomPhrasesAndPictures
}
else {}
const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

theMostFrequentWord = messageWords.toUpperCase();
const randomNumber = randomPhrasesAndPictures(Math.floor(Math.random())); 


console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
console.log(`The number of words in the message is ${numberOfElementsInTheArray}`)


phrase.innerHTML = randomPhrasesAndPicture("phrase");
picture.innerHTML= randomPhrasesAndPictures("imageURL");
picture.width = "400px";
picture.height = "280px";
   
}


button.addEventListener("click", calculate)
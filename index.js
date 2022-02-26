const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
// I am considering uppercase as group 1, lowercase as group 2 and so on...
const allChars = [uppercase, lowercase, numbers, symbols];
const passwords = document.getElementsByClassName("pass");

const generateBtn = document.querySelector("#btn");
let size = 15;
let group = 0;
let charIndex = 0;
generateBtn.addEventListener("click", function() {
    for(let i = 0; i < 4; i++) {
        passwords[i].textContent = returnPassword();
    }
})

// Random function to get values between 0- 3 [0,26)
function randomGroup() {
    return Math.floor(Math.random() * 4);
}
function randomIndex() {
    let sizeOfGroup = allChars[group].length;
    let number = Math.floor(Math.random() * sizeOfGroup);
    return number;
}

function returnPassword() {
    let password = "";
    for(let j = 0; j < size; j++)
        {
            group = randomGroup();
            charIndex = randomIndex();
            password += allChars[group][charIndex];
        }
    return password;
}
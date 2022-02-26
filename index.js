const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

// I am considering uppercase characters as group 1, lowercase as group 2 and so on...
const groups = [uppercase, lowercase, numbers, symbols];
const passwords = document.getElementsByClassName("pass"); 
const generateBtn = document.querySelector("#btn");
let size = 15;
let groupIndex = 0;
let charIndex = 0;

generateBtn.addEventListener("click", function() {
    for(let i = 0; i < 4; i++) {
        passwords[i].textContent = returnPassword();
    }
})

// Random function to get values between 0- 3 
function randomGroup() {
    return Math.floor(Math.random() * 4);
}

// Random function to get values between 0- 25
function randomIndex() {
    let sizeOfGroup = groups[groupIndex].length;
    let number = Math.floor(Math.random() * sizeOfGroup);
    return number;
}

function returnPassword() {
    let password = "";
    for(let j = 0; j < size; j++)
        {
            groupIndex = randomGroup();
            charIndex = randomIndex();
            password += groups[groupIndex][charIndex];
        }
    return password;
}


document.querySelectorAll(".pass").forEach (item => {
    item.addEventListener("click",function() {
        let content = item.textContent;
        navigator.clipboard.writeText(content);
    })
})
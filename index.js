const alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*()_+-=[]|:;'<>?,./"
const exampleOne = document.getElementById("exampleone")
const exampleTwo = document.querySelector("#exampletwo")
const genPasBtn = document.getElementById("genPas-btn")

function generatePassword() {
    let pass1 = ""
    let pass2 = ""
    let n = Math.floor(Math.random() * 5) + 12;
    for (let j = 0; j < n; j++) {
        let i = Math.floor(Math.random() * alphabet.length)
        pass1 += alphabet[i]
    }
    let m = Math.floor(Math.random() * 5) + 12;
    for (let j = 0; j < m; j++) {
        let k = Math.floor(Math.random() * alphabet.length)
        pass2 += alphabet[k]
    }
    exampleOne.textContent = pass1
    exampleTwo.textContent = pass2

}

generatePassword()

genPasBtn.addEventListener('click', generatePassword);


const copyBtn1 = document.getElementById("copy-btn1");
const copyBtn2 = document.getElementById("copy-btn2");

function copy(event) {
    const button = event.target;
    const textToCopy = button.previousElementSibling.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        button.textContent = "COPIED!";
        setTimeout(() => {
            button.textContent = "COPY";
        }, 2000); // Reset the button text after 2 seconds
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

copyBtn1.addEventListener('click', copy);
copyBtn2.addEventListener('click', copy);
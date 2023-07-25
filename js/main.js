console.log("loaded")

//This is our code base. It works and this should reflect on our main branch. 

const btnContainer = document.querySelector('.button-container')
console.log(btnContainer)

for (let i = 0; i < 3; i++) {
    const buttonEl = document.createElement('button')
    buttonEl.className = 'button'
    buttonEl.innerText = i
    btnContainer.appendChild(buttonEl)
}

document.body.appendChild(btnContainer)

const allButtons = document.querySelectorAll('.button')
allButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log("I'm clicking the button, and here is e.target: ", e.target)
    })
})
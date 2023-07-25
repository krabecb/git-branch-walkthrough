console.log("loaded")

//This is our code base. It works and this should reflect on our main branch. 

const btnContainer = document.querySelector('.button-container')
console.log(btnContainer)

for (let i = 0; i < 4; i++) {
    const buttonEl = document.createElement('button')
    buttonEl.className = 'button'
    buttonEl.innerText = i
    btnContainer.appendChild(buttonEl)
}

document.body.appendChild(btnContainer)
console.log("loaded")

const history = [ ];

//03a5b4d212ab01cae7f89d574ca482bc
//03a5b4d212ab01cae7f89d574ca482bc

function myFunction(event) {
    event.preventDefault();
    let search = document.querySelector("#name").value;
    console.log(search)
    history.push(search)
    renderHistory();

    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=03a5b4d212ab01cae7f89d574ca482bc')
    .then(response => console.log(response))
    .catch(error => {
        console.log(error)
    })
    
}

const renderHistory = () => {
    let box = document.getElementById('history__box')
    document.querySelector("#name").value = ""
    box.innerHTML = ""
    const ul = document.createElement('ul')
    
    ul.className = 'history__list'

    let list = history.map((item) => {
        return `
            <li>${item}</li>
        `
    })

    let data = list.join(' ')
    ul.innerHTML = data
    
    
    box.appendChild(ul)
}


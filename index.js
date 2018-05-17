const form = document.querySelector('#epForm')

function handleSubmit(ev){
    ev.preventDefault()
    const episodes = document.querySelector('#episodes')
    const ef = ev.target
    const favEp = ef.episode.value
    const list = document.createElement('ul')
    /*
    const item = document.createElement('li')
    item.style.listStyleType = 'none'
    item.style.fontSize = '20px'
    item.textContent = favEp
    */
    list.appendChild(epItem(favEp))
    episodes.appendChild(list)

    ef.reset()
    ef.episode.focus()


}

function epItem(episode){
    const item = document.createElement('li')
    item.style.listStyleType='none'
    item.style.fontSize='20px'
    item.textContent = episode
    return item
}

form.addEventListener('submit',handleSubmit)

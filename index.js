const form = document.querySelector('#epForm')
const epArray = []

function handleSubmit(ev){
    ev.preventDefault()

    const episodes = document.querySelector('#episodes')
    const ef = ev.target
    const favEp = ef.episode.value
    const label = ef.wword.value
    
    episodes.appendChild(epList(label,favEp))
    epArray.push(favEp)

    ef.reset()
    ef.episode.focus()


}
function epList(label, episode){
    const list = document.createElement('ul')
    list.appendChild(epItem(label,episode))
    return list
}

function epItem(label,episode){
    const item = document.createElement('li')
    item.style.listStyleType='none'
    item.style.fontSize='31px'
    item.textContent = `The One ${label} ${episode}`
    item.style.textAlign = 'center'
    item.appendChild(createDelete())
    return item
}

function createDelete(){
    const deleteButton = document.createElement('button')
    deleteButton.style.marginLeft = '15px'
    deleteButton.style.height = '20px'

    const trash = document.createElement('img')
    trash.src='trash.png'
    trash.style.width='15px'
    
    deleteButton.appendChild(trash)
    deleteButton.addEventListener('click',deleteItem)
    return deleteButton
}

function deleteItem(ev){
    ev.preventDefault();
    const epItem = ev.target
    epItem.parentNode.parentNode.remove()
    epArray.splice(epArray.indexOf(epItem), 1)
}


form.addEventListener('submit',handleSubmit)

const form = document.querySelector('#epForm')
const epArray = []
function handleSubmit(ev){
    ev.preventDefault()
    const episodes = document.querySelector('#episodes')
    const ef = ev.target
    const favEp = ef.episode.value
    const list = document.createElement('ul')
   
    list.appendChild(epItem(favEp))
    episodes.appendChild(list)
    epArray.push(favEp)

    ef.reset()
    ef.episode.focus()


}

function epItem(episode){
    const divItem = document.createElement('div')
    
    divItem.style.width='fit-content'
    divItem.style.height='auto'
    divItem.style.alignSelf='center'
    // divItem.style.padding="10px"
    
    divItem.style.borderStyle = 'dotted'
    divItem.styleborderColor='black'

    const item = document.createElement('li')
    item.style.listStyleType='none'
    item.style.fontSize='20px'
    item.textContent = episode
    item.style.textAlign='center'
   

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete!'
    item.appendChild(deleteButton)
    divItem.appendChild(item)



    return divItem
}


form.addEventListener('submit',handleSubmit)

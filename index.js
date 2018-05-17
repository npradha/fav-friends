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
    
   // divItem.style.width='fit-content'
    //divItem.style.height='auto'
    divItem.style.alignSelf='center'
    //divItem.style.cssFloat='left'
    // divItem.style.padding="10px"
    
    //divItem.style.borderStyle = 'none'
    //divItem.styleborderColor='black'

    const item = document.createElement('li')
    item.style.listStyleType='none'
    item.style.fontSize='20px'
    item.textContent = episode
    item.style.textAlign = 'center'
   

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete!'
    deleteButton.addEventListener('click',deleteItem)
    
    
      // deleteButton.type='image';
   // deleteButton.style.src='url(trash.png)'



    item.appendChild(deleteButton)
   divItem.appendChild(item)
    return divItem
}
function deleteItem(ev){
    ev.preventDefault();
    const epItem = ev.target
    epItem.parentNode.remove()
    epArray.splice(epArray.indexOf(epItem), 1)
}


form.addEventListener('submit',handleSubmit)

const form = document.querySelector('#epForm')
const epArray = []
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
    epArray.push(favEp)

    ef.reset()
    ef.episode.focus()


}

function epItem(episode){
    /*const divItem = document.createElement('div')
    divItem.style.border='50px solid transparent'
    divItem.style.webkitBorderImage= 'url(frame.png) 30 30 stretch'
    divItem.style.display='block'
    divItem.style.width='50px'
    divItem.style.height='100px'
    divItem.style.padding="10px"
    divItem.style.height='100px'
    */
   // divItem.style.borderStyle = 'dotted'
   // divItem.styleborderColor='black'
   /* const blankDiv = document.createElement('div')
    blankDiv.style.position = 'relative'
    const framePic = document.createElement('img')
    framePic.src='frame.png'
    framePic.style.position='relative'
    framePic.style.width='20%'
    framePic.style.height='30%'
    //framePic.style.zIndex='-1'
  */  

    const item = document.createElement('li')
    //item.style.position='absolute'
    //item.style.top = '0px'
   // item.style.left='0'
   // item.style.width='100%'
    item.style.listStyleType='none'
    item.style.fontSize='20px'
    item.textContent = episode
    item.style.textAlign='center'
    item.style.wordWrap='break-word'
   // item.style.zIndex='-1'
    //framePic.appendChild(item)
    //blankDiv.appendChild(framePic)
    //blankDiv.appendChild(item);
    return item
}


form.addEventListener('submit',handleSubmit)

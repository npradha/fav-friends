/*const form = document.querySelector('#epForm')
const epArray = []

function handleSubmit(ev){
    ev.preventDefault()

    const episodes = document.querySelector('#episodes')
    const ef = ev.target
    const favEp = ef.episode.value
    const label = ef.wword.value
    
    episodes.insertBefore(epList(label,favEp),episodes.firstChild)
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
*/


const app = {
    init(selectors){
        this.epArray=[]
        this.max=0
        this.list=document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)

        document   
            .querySelector(selectors.formSelector)
            .addEventListener('submit', (ev) => {
                ev.preventDefault()
                this.handleSubmit(ev)
            })
        

    },
    deleteItem(episode, ev){
        const listItem = ev.target.closest('.episode')
        const epArr = this.epArray
        for(var i = 0; i < epArr.length; i++){
            const curr = epArr[i].id.toString()
            if(listItem.dataset.id === curr){
                epArr.splice(i, 1)
                break
            }
        }
        listItem.remove()
    },

    renderListItem(label,episode) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = episode.id
        item
            .querySelector('.episodes')
            .textContent = `The One ${label} ${episode.name}`
            
            item.style.fontSize='31px'
             item.style.textAlign = 'left-align'
    
        item
            .querySelector('#del')
            .addEventListener('click', ev => { 
                ev.preventDefault()
                this.deleteItem(this, ev)
            })



        return item
    },

    handleSubmit(ev){
        ev.preventDefault()
        const f = ev.target
        const label = f.wword.value
        const episode = {
            id: ++this.max,
            name: f.episodes.value,
        }

        this.epArray.unshift(episode)

        const item = this.renderListItem(label,episode)
        this.list.insertBefore(item, this.list.firstChild)
        f.reset()
    },
}

app.init({
    formSelector: '#epForm',
    listSelector: '#episodes',
    templateSelector: '.episode.template',
    delButton: '#del'
})
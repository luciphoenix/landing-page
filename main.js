const menu = document.querySelector('.menu')
const menuBoard = document.querySelector('.menu-links')

menuBoard.style.display = 'none'

menu.addEventListener('click', displayMenuBoard)

function displayMenuBoard(e){
   if(menuBoard.style.display == 'block'){
    menuBoard.style.display ='none'
    menuBoard.removeAttribute('class','drop-menu-links')
    
    }else{
        menuBoard.style.display ='block'
        menuBoard.setAttribute('class','drop-menu-links')
        
    }
}
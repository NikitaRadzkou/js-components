window.onload = function () {
   let icon = document.querySelector('.sidebar__icons')
   let main = document.querySelector('.main')
   let mainContent = document.querySelector('.main > .main__content')
   // icon
   icon.onclick = function () {
      icon.classList.toggle('change-icon')
      main.classList.toggle('main_bg')
      mainContent.classList.toggle('main__content_bg')
   }

   let closeMenu = event => {
      let target = event.target

      if (target.classList.contains('main_bg')) {
         icon.classList.remove('change-icon')
         main.classList.remove('main_bg')
         mainContent.classList.remove('main__content_bg')
      }
   }

   main.addEventListener('click', closeMenu)
}

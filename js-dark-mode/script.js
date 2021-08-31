document.querySelector('.themetoggle').addEventListener('click', (event) => {
   event.preventDefault()
   if (localStorage.getItem('theme') === 'dark') {
      localStorage.removeItem('theme')
   } else {
      localStorage.setItem('theme', 'dark')
   }
   addDarkToHTML()
})

function addDarkToHTML() {
   try {
      if (localStorage.getItem('theme') === 'dark') {
         document.querySelector('html').classList.add('dark')
         document.querySelector('.themetoggle span').textContent = 'dark_mode'
      } else {
         document.querySelector('html').classList.remove('dark')
         document.querySelector('.themetoggle span').textContent = 'wb_mode'
      }
   } catch (err) { }
}

addDarkToHTML()
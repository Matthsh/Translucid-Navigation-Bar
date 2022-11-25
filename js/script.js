const sidebar = document.querySelector('.sidebar')
const navItems = document.querySelectorAll('nav .nav-item')
const toggle = document.querySelector('.sidebar .toggle')

toggle.addEventListener('click', () => {
    if(sidebar.className === 'sidebar')
        sidebar.classList.add('open')
    else
        sidebar.classList.remove('open')
})

navItems.forEach((navItem) => {
    navItem.addEventListener('click', () => {
        navItems.forEach((navItem => {
            if(navItem.className != 'nav-item') {
                navItem.classList.remove('active')
            } 
        }))
        navItem.classList.add('active')
    })
})
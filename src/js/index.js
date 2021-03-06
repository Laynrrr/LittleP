// mouse-cursor
document.body.addEventListener('mousemove', (e) => {
    let target = document.querySelector('.mouse-follower')
    target.style.left = e.clientX + 'px'
    target.style.top = e.clientY + 'px'
})

// all projects menu
const menu = document.querySelector('.all-projects')
const allProjectsMenu = document.getElementById('all-projects-menu')
const allProjectsMenu2 = document.getElementById('all-projects-menu-2')
const containerMenu = document.querySelector('.container-menu')
const home = document.getElementById('home')

menu.addEventListener('click', () => {
    allProjectsMenu.classList.add('active')
    setTimeout(function circle() {allProjectsMenu2.classList.add('active')}, 1100);
    
    setTimeout(function menuSpawn() {
        containerMenu.style.display = "block";
    }, 800)
})

home.addEventListener('click', () => {
    allProjectsMenu2.style.transition = "1.5s"
    allProjectsMenu.style.transition = "1.5s"
    allProjectsMenu2.classList.remove('active')
    setTimeout(function circle() {allProjectsMenu.classList.remove('active')}, 1100);
    
    setTimeout(function menuSpawn() {
        containerMenu.style.display = "none";
    }, 1500)
})
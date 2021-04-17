

document.body.addEventListener('mousemove', (e) => {
    let target = document.querySelector('.mouse-follower')
    target.style.left = e.clientX + 'px'
    target.style.top = e.clientY + 'px'
})
<<<<<<< HEAD
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')

    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
=======
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')

    })
})

function removeActiveClass() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
>>>>>>> 0d3bdf8bb95c41a0e94cedb033e670558fb4fb54
}
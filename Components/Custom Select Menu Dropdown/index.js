const select = document.querySelector('.textBox')
const dropdown = document.querySelector('.dropdown')

const show = ( selection ) => {
    select.value = selection
}

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active')
})
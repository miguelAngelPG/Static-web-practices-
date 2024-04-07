/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById( toggleId )
    const nav = document.getElementById( navId )

    if( toggle && nav ){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu( 'nav-toggle', 'nav-menu' )


/*===== REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__item')
const navMenu = document.getElementById('nav-menu')

const linkAction = () => {
    navMenu.classList.remove('show')
}

navLink.forEach(( item ) => {
    item.addEventListener('click',() =>{
        linkAction()
    })
})

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach( current => {
        const sectionHeight = current.offsetHeight
        // const sectionTop = current.offsetTop - document.querySelector('header').offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        // console.log(scrollY+ ' > ' +sectionTop+ ' && ' +scrollY+ ' <= ' +(sectionTop + sectionHeight))


        if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ) {
            document.querySelector('.nav__menu a[href*='+ sectionId +']')?.classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']')?.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*===== CHANGE COLOR HEADER =====*/ 
window.onscroll = () => {
    const nav = document.getElementById('header')

    if ( this.scrollY >= 200 ) {
        nav.classList.add('scroll-header')
    }else{
        nav.classList.remove('scroll-header')
    }
}
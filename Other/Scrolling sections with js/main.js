const sections = document.querySelectorAll('section')

let data = {}

sections.forEach( element => {
    data = {
        'offsetTop': element.offsetTop,
        'offsetWidth': element.offsetWidth,
        'offsetHeight': element.offsetHeight,
        'offsetLeft': element.offsetLeft,
        'offsetParent': element.offsetParent,
    }
    console.log(data)
    
} )

let c = 0

const debounce = function() {
    console.log('object')
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            c += data?.offsetHeight
            window.scrollTo(0, c)
            // window.scrollTo(0, c += data[0]?.offsetHeight)
            console.log({c})
      }, 300);
    }
  }

addEventListener('wheel', debounce())
addEventListener('wheel', () => {
    console.count('object')
})



// addEventListener('resize',() => {
//     console.log(innerHeight, innerWidth)
// })
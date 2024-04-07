const typewriter = document.querySelector('.typewriter')
const textArr = [ 'Typewriter', 'Effect' ]
let currentWords = ''
let words = ''
let count = 0
let index = 0
let speed = 500
let isDeleting = false

const init = () => {
    setInterval(() => {
        if ( count >= textArr.length ) {
            count = 0
        }
    
        currentWords = textArr[ count ]
    
        if ( isDeleting ) {
            speed = 150
            words = currentWords.slice( 0, --index )
    
            if ( words === '' ) {
                isDeleting = false
                count++
                speed = 500
            }
        }else{
            words = currentWords.slice( 0, ++index )
    
            if ( words === currentWords ) {
                isDeleting = true
            }
        }
    
        typewriter.innerHTML = words
    }, speed)
}


document.addEventListener('DOMContentLoaded ', init())
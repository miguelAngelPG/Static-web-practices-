const imgSlider = ( newImg, newColor ) => {
    document.querySelector('.pepsi').src = newImg
    changeBgColor( newColor )
}

const changeBgColor = ( newColor ) => {
    const sec = document.querySelector('.sec')
    sec.style.background = newColor
}


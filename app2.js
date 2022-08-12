function checkRes() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
  .test(navigator.userAgent)) {
    document.body.style.padding = '100px'
    document.querySelector('.start_back').style.display = 'none'
    document.querySelector('.main_border').style.position = 'static'
    document.querySelector('.main_border').style.height = '100%'
    document.querySelector('.left_menu').style.display = 'none'
    document.querySelector('.right_menu').style.margin = 'auto'
    document.querySelector('.right_button_menu').style.alignItems = 'center'
    document.querySelector('.right_button_menu').style.justifyContent = 'space-between'
    document.querySelector('.right_button_menu').style.height = '200px'
    document.querySelector('#frame_map').style.width = '100%'
    document.querySelector('#frame_map').style.height = '390px'
    let rB = document.querySelector('.right_button h1')
    Array.from(document.querySelectorAll('.right_button')).forEach(rB => {rB.style.fontSize = '16px'})
  }
}
checkRes()


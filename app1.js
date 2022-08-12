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
    document.querySelector('.partners_pack').style.justifyContent = 'space-between'
    let rB = document.querySelector('.right_button h1')
    Array.from(document.querySelectorAll('.right_button')).forEach(rB => {rB.style.fontSize = '16px'})

    let wImgPre = document.querySelector('.partners_pack')
    Array.from(document.querySelectorAll('.part_img')).forEach(wImgPre => {wImgPre.style.width = '40%'})
    Array.from(document.querySelectorAll('.part_img')).forEach(wImgPre => {wImgPre.style.height = '200px'})
    let hImg = document.querySelector('img')
    Array.from(document.querySelectorAll('.part_img img')).forEach(hImg => {hImg.style.height = '120px'})
    Array.from(document.querySelectorAll('.part_img img')).forEach(hImg => {hImg.style.width = '240px'})

    let pText = document.querySelector('.part_img')
    Array.from(document.querySelectorAll('.part_img p')).forEach(pText => {pText.style.opacity = '0.8'})
    Array.from(document.querySelectorAll('.part_img p')).forEach(pText => {pText.style.fontSize = '18px'})



  }
}
checkRes()



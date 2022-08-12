function checkRes() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
  .test(navigator.userAgent)) {
    console.log(navigator.userAgent)
  }
  else {window.location="index.html"}
}
checkRes()

const logo = document.querySelector('#logo')
const topMenu = document.querySelector('.top_menu')
logo.onclick = function() {window.scrollTo({
    top: 0,
    behavior: "smooth"})};

["sao", "info", "svl-tr", "ul-service", "eis", "po", "video", "partners", "contacts"].forEach(
    (val) => {
      let elem = document.querySelector(`#${val}`);
      let elemBtn = document.querySelector(`#${val}_btn`);
  
      elemBtn.onclick = function () {
      elem.scrollIntoView({ behavior: "smooth" });
      };
    }
  );

const menuCheck = document.getElementById('menuCheck')
const arrow = document.getElementById('arrow')
const intro = document.getElementById('intro')

topMenu.onclick = function() {
 if(menuCheck.checked === false) {
  menuCheck.checked = true
  topMenu.style.top = "0"
  arrow.style.opacity = "0"
  intro.style.opacity = "0"
}
 else {
  menuCheck.checked = false
  topMenu.style.top = "-1140px"
  arrow.style.opacity = "0.5"
  intro.style.opacity = "0.5"}
}
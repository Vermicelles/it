function checkRes() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
    .test(navigator.userAgent)) {
        window.location="mobile.html"
    }
}
checkRes()


document.querySelector('.left_sub_button1').style.display = 'none'
let btn = document.querySelector('.left_sub_button')
Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'none'})

const logo = document.querySelector('#logo')
logo.onclick = function() {window.scrollTo({
    top: 0,
    behavior: "smooth"})}

let cOne = document.querySelector('#check')
let cTwo = document.querySelector('#check1')

cOne.onclick = function () {
    if (cOne.checked === true)
        {Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'flex'});
        document.querySelector('.left_sub_button1').style.display = 'none'
        cTwo.checked = false
        }
    else {Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'none'})
    }
}

cTwo.onclick = function () {
    if (cTwo.checked === true)
        {document.querySelector('.left_sub_button1').style.display = 'flex'        
        Array.from(document.querySelector('#active_system').children).forEach(btn => {btn.style.display = 'none'})
        cOne.checked = false       
        }
    else {document.querySelector('.left_sub_button1').style.display = 'none'
    }
};

["sao", "info", "svl-tr", "ul-service", "eis", "po", "video"].forEach(
    (val, index) => {
      let elem = document.querySelector(`#${val}`);
      let elemBtn = document.querySelector(`#${val}_btn`);
  
      elemBtn.onclick = function () {
        elem.scrollIntoView({ behavior: "smooth" });
      };
    }
  );




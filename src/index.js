var firework = document.getElementById('firework');
var openGift = document.getElementsByClassName('open-gift')[0];
var main = document.getElementsByClassName('main')[0];

// ẩn pháo hoa
var closeFirework = function (){
    firework.classList.remove('pyro');
}

closeFirework();

// thêm pháo hoa
var openFirework = function (){
    firework.classList.add('pyro');
}

// ẩn mở quả
var HideGift = function (){
    openGift.style.display = 'none';
}
// phát âm nhạc
function openMusic(){
    //var audio = new Audio('https://data3.chiasenhac.com/downloads/2098/5/2097042-21ed29ac/128/Hon%20Ca%20Yeu%20-%20Nguyen%20Duc%20Phuc.mp3');
    var audio = new Audio('https://cdn.glitch.me/6f02aa1c-ea26-41b1-92ae-31b07546cd69%2FHon%20Ca%20Yeu%20-%20Duc%20Phuc.m4a?v=1634343011797');
    audio.play();
}
// hiện main
function showMain(){
    main.style.display = 'block';
}

// ẩn title
function HideTitle(){
    var title = document.getElementsByClassName('title')[0];
    title.style.display = 'none';
}

// ẩn trái tim
function HideHeart(){
    var heart = document.getElementsByClassName('content')[0];
    heart.style.display = 'none';
}

// hiện slide 
function showSlideClass(){
    var slide = document.getElementsByClassName('slide')[0];
    slide.style.display = 'block';
}

// Ẩn slide khi hết nhạc 
function hideSlideClass(){
    var slide = document.getElementsByClassName('slide')[0];
    slide.style.display = 'none';
}
/* nhấn hộp quà */
var clickGift = document.getElementById('click-gift');
clickGift.onclick = function(){
    openGift.style.display = 'block';
    clickGift.style.display = 'none';
    setTimeout(HideGift, 2000);
    setTimeout(openFirework, 3000);
    setTimeout(closeFirework, 128000);
    setTimeout(HideHeart, 6000);
    setTimeout(showSlideClass, 6000);
    setTimeout(HideTitle, 2000);
    setTimeout(openMusic, 2000);
    setTimeout(showMain, 2000);
    setTimeout(hideSlideClass, 252000);
}

/* slide */
var slideIndex;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    console.log(slides.length)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "flex";  
    //dots[slideIndex].className += " active";
    //chuyển đến slide tiếp theo
    slideIndex++;
    //nếu đang ở slide cuối cùng thì chuyển về slide đầu
    if (slideIndex > slides.length - 1) {
    slideIndex = 0
    }    
    //tự động chuyển đổi slide sau 5s
    setTimeout(showSlides, 5000);
}
//mặc định hiển thị slide đầu tiên 
showSlides(slideIndex = 0);


function currentSlide(n) {
showSlides(slideIndex = n);
}

/* đếm thời gian */
function Dong_ho() {
    var date = new Date();
    var gio = document.getElementById("gio");
    var phut = document.getElementById("phut");
    var giay = document.getElementById("giay");
    var ngay = document.getElementById("ngay");
    var nowDate = document.getElementById("now-date");
    let stringNowDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    nowDate.innerHTML = stringNowDate;

    var Gio_hien_tai = new Date().getHours();
    var Phut_hien_tai = new Date().getMinutes();
    var Giay_hien_tai = new Date().getSeconds();
    
    var Ngay_ky_niem = '2020-10-18';
    var so_ngay = datediff(Ngay_ky_niem, date);
    ngay.innerHTML = so_ngay;
    if (Gio_hien_tai < 10){
        gio.innerHTML = '0' + Gio_hien_tai;
    } else {
        gio.innerHTML = Gio_hien_tai;
    }
    if (Phut_hien_tai < 10){
        phut.innerHTML = '0' + Phut_hien_tai;
    } else {
        phut.innerHTML = Phut_hien_tai;  
    }
    if (Giay_hien_tai < 10){
        giay.innerHTML = '0' + Giay_hien_tai;
    } else{
        giay.innerHTML = Giay_hien_tai;
    }
    
}

function datediff(startDate, endDate) {
    const start = new Date(startDate) //clone
    const end = new Date(endDate) //clone
    let dayCount = 0
    while (end > start) {
        dayCount++
        start.setDate(start.getDate() + 1)
    }
    return dayCount
}
var Dem_gio = setInterval(Dong_ho, 1000);

alert("BÙI QUỐC BẢO - 2001215608")

var countDownDate = new Date("May 19, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    var finish = document.querySelector(".content__countdown")
    finish.innerHTML = "chương trình sale đã kết thúc";
    finish.style.color = "red"
    finish.style.padding = "40px"
  }

}, 1000);


const btns = document.querySelectorAll(".nav-item");
btns.forEach((btn) =>
{
  const answer = btn.nextElementSibling;
  btn.addEventListener("click", () =>
  {
    answer.classList.toggle("active");
    const activeAnswers = document.querySelectorAll(".nav-content");
    activeAnswers.forEach((activeAnswer) =>
    {
      if (activeAnswer !== answer)
      {
        activeAnswer.classList.remove("active");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.slideshow3', {
    loop: true,
    slidesPerView: 5, 
    // (số lượng ảnh chiếu 1 lượt)
    speed: 2000,
    autoplay: {
      delay: 1000,
    },
    spaceBetween: 40,	
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.slideshow3--mb', {
    loop: true,
    slidesPerView: 2, 
    // (số lượng ảnh chiếu 1 lượt)
    speed: 2000,
    autoplay: {
      delay: 1000,
    },
    spaceBetween: 30,	
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


let count = 99995;
const value = document.querySelector("#value");
const btnlike = document.querySelector(".btn-like");

    btnlike.addEventListener("click", function ()
    {
      count++;
      value.textContent = count;
    }
)
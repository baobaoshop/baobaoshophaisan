$(function(){
    $(".image-slider").slick({
        autoplay: true,
        speed: 1000,
        arrows: false,
        asNavFor: ".image-slider2"
    });
    $(".image-slider2").slick({
        slidesToShow: 3,
        speed: 1000,    
        asNavFor: ".image-slider",
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right"></i></button>`,

    });
});
  
let demsl = 1;
const slg = document.getElementById("soluong");
const btnsps = document.querySelectorAll(".btnsp");
btnsps.forEach(function (btn)
{
    btn.addEventListener("click", function (e)
    {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease"))
        {
            if(demsl==1)
            demsl++;
            demsl--;
        }
        else if (styles.contains("increase"))
        {
            demsl++;
        }
        slg.textContent = demsl;
    }
    );
}
);
let demsl1 = 1;
const slg1 = document.getElementById("soluong1");
const btnsps1 = document.querySelectorAll(".btnsp1");
btnsps1.forEach(function (btn)
{
    btn.addEventListener("click", function (e)
    {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease"))
        {
            if(demsl1==1)
            demsl1++;
            demsl1--;
        }
        else if (styles.contains("increase"))
        {
            demsl1++;
        }
        slg1.textContent = demsl1;
    }
    );
}
);
let demsl2 = 1;
const slg2 = document.getElementById("soluong2");
const btnsps2 = document.querySelectorAll(".btnsp2");
btnsps2.forEach(function (btn)
{
    btn.addEventListener("click", function (e)
    {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease"))
        {
            if(demsl2==1)
            demsl2++;
            demsl2--;
        }
        else if (styles.contains("increase"))
        {
            demsl2++;
        }
        slg2.textContent = demsl2;
    }
    );
}
);
let demsl3 = 1;
const slg3 = document.getElementById("soluong3");
const btnsps3 = document.querySelectorAll(".btnsp3");
btnsps3.forEach(function (btn)
{
    btn.addEventListener("click", function (e)
    {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease"))
        {
            if(demsl3==1)
            demsl3++;
            demsl3--;
        }
        else if (styles.contains("increase"))
        {
            demsl3++;
        }
        slg3.textContent = demsl3;
    }
    );
}
);


let dongia = "";
const gia = document.getElementById("dongia");
const loais = document.querySelectorAll(".phanloai");
loais.forEach(function (loai)
{
    loai.addEventListener("click", function (e)
    {
        const styles = e.currentTarget.classList;
        if (styles.contains("loai500"))
        {
            dongia = "" + "390.000đ"
        }
        else if (styles.contains("loai2"))
        {
            dongia = "" + "420.000đ"
        }
        gia.textContent = dongia;
    }
    );
}
);

const dathang = document.querySelector(".dathang");
dathang.addEventListener("click", function() {
    alert("Đặt hàng không thành công");
})
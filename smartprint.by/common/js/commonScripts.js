! function () {
    $(document).ready(function () {
        $(".slick-slider-recomendation").slick({
            dots: !1
            , slidesToShow: 5
            , adaptiveHeight: !0
            , autoplay: !0
            , infinite: !0
            , speed: 1500
            , autoplaySpeed: 12e3
            , arrows: !0
            , draggable: !0
            , pauseOnHover: !0
            , pauseOnDotsHover: !0
            , respondTo: !0
            , cssEase: "ease-out"
        })
    })
}()
, function () {
    $(document).ready(function () {
        $(".slick-slider-main").slick({
            centerMode: !1
            , slidesToShow: 1
            , cssEase: "ease-out"
            , dots: !0
            , adaptiveHeight: !0
            , autoplay: !0
            , infinite: !0
            , speed: 1500
            , autoplaySpeed: 12e3
            , arrows: !0
            , draggable: !0
            , pauseOnHover: !0
            , pauseOnDotsHover: !0
            , respondTo: !0
        })
    })
}()
, function () {
    var e = document.querySelector("ul.menu");
    e.onclick = function (e) {
        var t = e.target;
        if ("SPAN" == t.tagName) {
            t.classList.toggle("span-open");
            var o = t.parentElement.querySelector("ul.submenu").classList;
            o.contains("submenu-open") ? (o.remove("submenu-open"), o.add("submenu-close")) : (o.remove("submenu-close"), o.add("submenu-open"))
        }
    }
}()
, function () {
    var e = document.querySelector("i.fa.fa-angle-double-left");
    e.onclick = function () {
        if ("I" == e.tagName) {
            var t = e.classList
                , o = e.parentElement.getElementsByTagName("INPUT")[0].classList;
            t.contains("arrow-open") ? (t.add("arrow-close"), o.add("input-close"), t.remove("arrow-open"), o.remove("input-open")) : (t.add("arrow-open"), o.add("input-open"), t.remove("arrow-close"), o.remove("input-close"))
        }
    }
}();
$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('.popup').iziModal('open');
});
$(document).ready(function () {
    var a = 0;
    var b = 0;
    // var d = 100000;
    var c = 10000 + 10000;
    var length = $('ul.test2').children().length;
    function wheel() {
        setTimeout(function () {
            $('ul.test2 li.test2__industry:eq(' + a + ')').addClass('active').siblings().removeClass('active');
            a++;
            b++;
            if (a == length)
                a = 0;
            if (b < c)
                wheel();
        }, 6000);
    }

    wheel(10);

})
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    prevNextButtons: true,
    pageDots: false,
});

var flkty = new Flickity('.main-carousel', {
});
$('.toggle').click(function () {
    $('.monthly-pro').toggleClass('active1');
    $('.yearly-pro').toggleClass('active1');
})
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 50) {
        $('.menu-fixed').addClass('active');
    } else {
        $('.menu-fixed').removeClass('active');
    }
})

var elem = document.querySelector('.main');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    prevNextButtons: true,
    pageDots: false,
});

var flkty = new Flickity('.main', {
});
$('#togle5').click(function () {
    $('.collapse').toggleClass('show1')
})
$('#togle2').click(function () {
    $('.collapse').toggleClass('show2')
})
$('#togle3').click(function () {
    $('.collapse').toggleClass('show3')
})
$('#contact-form').submit(function () {
    var action = $(this).attr('action');
    $("#message").slideUp(750, function () {
        $('#message').hide();

        $('#submit')
            .before('')
            .attr('disabled', 'disabled');

        $.post(action, {
            name: $('#name').val(),
            email: $('#email').val(),
            comments: $('#comments').val(),
        },
            function (data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.contact-loader').fadeOut('slow', function () {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});


$('.menu-mobile__hamburger').click(function () {
    $('.menu-fullscreen').addClass('active-mobile');
})
$('.close').click(function () {
    $('.menu-fullscreen').removeClass('active-mobile');
})


$('.menuMobile').click(function () {
    $('.menu-fullscreen').removeClass('active-mobile');
})
$('.menuMobile1').click(function () {
    $('.menu-fullscreen').removeClass('active-mobile');
})

$(document).on('click', '.test2__industry', function () {
    $(".test2__industry").removeClass('active');
    $(this).addClass("active");
})

// BACK TO TOP  
$(window).on('load', function () {
    setTimeout(() => {
        $('.loader').fadeOut(1000)
    }, 500)
})
$('.toTop').click(function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        scrollBehavior: 'smooth'
    })
})

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        $('.toTop').addClass('active');
    } else {
        $('.toTop').removeClass('active');
    }
})
window.addEventListener('scroll', function () {
    if (898 < window.pageYOffset) {
        $('.linkss').addClass('active123');
    } else {
        $('.linkss').removeClass('active123');
    }
})
const li = document.querySelectorAll(".links")
const sec = document.querySelectorAll("section")
function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {
        li.forEach(ltx => ltx.classList.remove("active123"));
        li[len].classList.add("active123")
    }
    activeMenu();
    window.addEventListener("scroll", activeMenu)
}


var elem = document.querySelector('.totalMain');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    prevNextButtons: true,
    pageDots: false,
});

var flkty = new Flickity('.totalMain', {
});
//    DSC quote fade-in fade out
var listTicker = function(options) {
    var defaults = {
        list: [],
        startIndex: 0,
        interval: 3 * 1000,
    };
    var options = $.extend(defaults, options);
    var listTickerInner = function(index) {
        if (options.list.length == 0) return;
        if (!index || index < 0 || index > options.list.length) index =
            0;
        var value = '"' + options.list[index] + '" <span>- DSC</span>';
        options.trickerPanel.fadeOut(function() {
            $(this).html(value).fadeIn();
        });
        var nextIndex = (index + 1) % options.list.length;
        setTimeout(function() {
            listTickerInner(nextIndex);
        }, options.interval);
    };
    if ($(window).width() > 767) {
        listTickerInner(options.startIndex);
    }
}
var textlist = new Array('Our deeds decide our future',
    'Make your own path, rather than just following a known path!',
    'One must view life as a continuous learning experience.',
    'Do not kill any idea due to lack of money',
    'Successful people do one thing at a time.',
    'Whatever you are doing today, try doing it in a new way.',
    'Our deeds decide our future', 'Creativity is a result of rebellion',
    'VFear is what keeps dragging a person back',
    'CSR is hypocritical if it is not solving a real issue or problem which exists in society',
    'If you want to trust others, you have to be trustworthy yourself',
    'Achieve success honestly and ethically and you will be happy in life',
    'If one wants to succeed in something, one must keep trying and not lose focus',
    'You attain failure in life, when you accept defeat',
    'The journey of a thousand miles starts with a single step');
$(function() {
    listTicker({
        list: textlist,
        startIndex: 0,
        trickerPanel: $('#dscQuote'),
        interval: 5 * 1000, //5 seconds interval
    });
});

$(document).ready(function() {
    //Video Youtube Sizing
    $(window).resize(function() {
        adjustsize();
    });

    function adjustsize() {
        w = $("#vdo").width();
        h = $("#vdo").height();
        vratio = h / w;
        targetw = $('.tray').width();
        console.log("w" + w + " - " + "h" + h + " - " + "vratio" +
            vratio);
        console.log("w" + targetw + " - " + "h" + (targetw * vratio));
        $("#vdo").css({
            'width': targetw,
            'height': targetw * vratio
        });
		window.location.href="#vdo";
    }
	
	
    var traystatus = 0;
    var vurl = "1";
    var bvurl = "2";
	var t="";
    $(".media-listing h4").click(function() {
		t=this;
        vurl = "https://www.youtube.com/embed/" + ($(this).attr(
            "data-src"));
			console.log(vurl + " // "+ bvurl + " // " + traystatus);
        if ((vurl != bvurl) && (traystatus == 0)) {
            opentray(this);
            bvurl = vurl;
			console.log("Open Tray");
        } else if((vurl != bvurl) && (traystatus == 1)){
			removetray(this);
			setTimeout(function(){
				console.log("Close Tray and Then Open Tray");
				opentray(t);	
			},500);
		}
		else{
            removetray(this);
            bvurl = "2";
			console.log("Close Tray");
        }
    });
	
	
	/* Open Video Tray */
    function opentray(n) {
        setTimeout(function() {
            $(".tray").css({
				'width': $(".tray").width()-30,
                'height': $(".tray").width()*(0.75),
                'margin': '30px 0'
            });
        }, 100);
        if ($(window).width() > 767) {
            $(n).parent().parent().parent().after(
                "<div class='tray container'> <iframe id='vdo' width='780' height='585' src=" +
                vurl +
                " frameborder='0' allowfullscreen></iframe> <div>"
            );
        } else {
            $(n).parent().parent().after(
                "<div class='tray container'> <iframe id='vdo' width='780' height='585' src=" +
                vurl +
                "  frameborder='0' allowfullscreen></iframe> <div>"
            );
        }
        setTimeout(function() {
            adjustsize();
        }, 500);
        traystatus = 1;
    }

	/* Close Video Tray */
    function removetray() {
            $(".tray").css({
                'height': '0px',
                'margin': '0'
            });
            setTimeout(function() {
                $(".tray").remove();
            }, 500);
            traystatus = 0;
    }
		
		
    /* Carousel */
    function adjustcarousel() {
        if ($(window).width() > 767) {
            $("#interests .carousel .row div.img-wrapper").css(
                'width', '50%');
            $("#interests .carousel .row div").css('height', $(
                "#interests .carousel div .img-wrapper").width());
            $("#interests .carousel .row div.img-wrapper").css(
                'height', $("#interests .carousel .row div").height()
            );
            $("#interests .carousel .row div.img-wrapper img").css(
                'width', '100%');
        } else {
            $("#interests .carousel .row div.img-wrapper").css(
                'width', '100%');
            $("#interests .carousel .row div.img-wrapper").css(
                'height', $(
                    "#interests .carousel .row div.img-wrapper"
                ).width());
            $("#interests .carousel .row div").css('height', $(
                "#interests .carousel div .img-wrapper").width());
        }
    }
    $(".carousel a.left").click(function() {
        $(".slider-wrapper").css('margin-left', '0');
    });
    $(".carousel a.right").click(function() {
        $(".slider-wrapper").css('margin-left', '-1' * $(
            ".slider").width());
    });
    setTimeout(function() {
        if ($(window).width() > 767) {
            $(
                "#interests .carousel .slider , #interests .carousel .arrows"
            ).css('opacity', '1');
        } else {
            $("#interests .carousel .slider").css('opacity',
                '1');
        }
    }, 500);
    setTimeout(function() {
        $("#interests .carousel .row div").css('height', $(
            "#interests .carousel div img").height());
        $("#interests .carousel .row div.img-wrapper").css(
            'width', $("#interests .carousel .row div").height()
        );
        $("#interests .carousel .row div.img-wrapper img").css(
            'width', '100%');
    }, 100);
    $(window).resize(function() {
        adjustcarousel();
    });
    window.addEventListener("orientationchange", function() {
        adjustcarousel();
    });
    //social more
    $(".social-wall-more").click(function() {
        $(".social-wall").addClass("active");
        $(".social-wall-more").fadeOut();
    });
    //Countdown date & Time For next event
    $('#getting-started').countdown('2016/05/16', function(event) {
        $(this).html(event.strftime(
            '<div>%w</div> <div class="days">%d</div> <div class="hours">%H</div> <div class="mins">%M</div><div class="secs">%S</div>'
        ));
    });
});

$(document).click(function() {
    $("#navbar").removeClass("in");
});

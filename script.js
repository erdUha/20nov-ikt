new WOW().init();
$(window).on("resize", function() {if (window.innerWidth/window.innerHeight > 1) closeBurgerMenu()});
$(document).ready(function () {
	$("#up-button").hide();
});
function bounce(x) {
	x = x + 0.6;
	return(
		Math.sin(x * 2 * Math.cos(x - 0.5) - 1.1) *
		(1/(1+Math.pow(x-2.4, 6)))
	);
}
$(document).ready(function() {
	$("#up-button").on("click", function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		for (let i = 0; i < 4.5; i += 0.1) {
			$("#up-button").animate({
				bottom: -bounce(i) * 10 + 100
			}, (i*4) + 4);
		}
		$("#up-button").animate({bottom: 100}, 15);
	});
});
var isPhone = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
	var isPhone = true;
}
var onBottom = true;
var lastOnBottom = true;
$(document).on("scroll", function () {
	var scroll = ($(document).height() - $(window).scrollTop() - ($(window).height() * 0.5));
	if(scroll > $(document).height()*0.5) {
		onBottom = true;
	}
	else {
		onBottom = false;
	}
	if (lastOnBottom != onBottom) {
		$("#up-button").fadeToggle();
	}
	lastOnBottom = onBottom;
});
var typed;
function typedInit() {
	try {
		typed.destroy();
	} catch {}
	typed = new Typed("#typed", {
		stringsElement: "#typed-strings",
		typeSpeed: 90,
		backSpeed: 80,
		startDelay: 150,
		backDelay: 1500,
		loop: true,
	});
}
function setOffsetPercent() {
	$(".offset").each(function() {
		var wowHeight = $(this).height();
		$(this).attr("data-wow-offset", (wowHeight * 0.5) + ($(window).height()*0.09));
	});
	new WOW().init();
}
function addOnClick() {
	var buttons = document.getElementsByClassName("burger-menu-button");
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", function() {openBurgerMenu()});
	}
	var raschetClose = document.getElementById("raschet-button-close");
	raschetClose.addEventListener("click", function() {closeRaschet()});
	try {
		var raschetOpen = document.getElementById("raschet-button-open");
		raschetOpen.addEventListener("click", function() {openRaschet()});
	}
	catch {
	}
}
var isOpeningBurgerMenu = false;
var burgerMenuRot = 1;
var openingBurgerMenu;
var burgerMenu = document.getElementById("m-navpanel");
if (!isPhone) {
	function openBurgerMenu() {
		if (!isOpeningBurgerMenu) {
			isOpeningBurgerMenu = true;
			startOpeningBurgerMenu();
		}
	}
	function closeBurgerMenu() {
		if (!isOpeningBurgerMenu && Math.round(burgerMenuRot) != 1) {
			isOpeningBurgerMenu = true;
			startOpeningBurgerMenu();
		}
	}
} else {
	burgerMenu.style.transition = "0.3s ease-in-out";
	function openBurgerMenu() {
		startOpeningBurgerMenu();
	}
	function closeBurgerMenu() {
		burgerMenu.style.transform = "rotate(-90deg)";
		enableScroll();
	}
}
function smooth(x) {
	return(
		(-Math.cos(x * Math.PI) + 1) / 2
	);
}
if (!isPhone) {
	function startOpeningBurgerMenu() {
		var isSecondHalf = Math.round(burgerMenuRot);
		openingBurgerMenu = setInterval(function() {
			if (isSecondHalf == 0) {
				$("#burger-menu-button-close").css("transform", "rotate(-270deg)");
				burgerMenuRot += 0.05;
				burgerMenuRot = Math.round(burgerMenuRot*20)/20;
				if (burgerMenuRot >= 1) {
					clearInterval(openingBurgerMenu);
					isOpeningBurgerMenu = false;
				}
				enableScroll();
			}
			else {
				$("#burger-menu-button-close").css("transform", "rotate(0deg)");
				burgerMenuRot -= 0.05;
				burgerMenuRot = Math.round(burgerMenuRot*20)/20;
				if (burgerMenuRot <= 0) {
					clearInterval(openingBurgerMenu);
					isOpeningBurgerMenu = false;
				}
				disableScroll();
			}
			burgerMenu.style.transform = "rotate(" + (-smooth(burgerMenuRot)*90) + "deg)";
			if (!isPhone) {
				burgerMenu.style.filter = "blur(" + (smooth(burgerMenuRot*2)*5) + "px)";
			}
		}, 15);
	}
}
else {
	function startOpeningBurgerMenu() {
		var isSecondHalf = Math.round(burgerMenuRot);
			$("#burger-menu-button-close").css("transform", "rotate(-270deg)");
			burgerMenu.style.transform = "rotate(" + 0 + "deg)";
			disableScroll();
	}
}
var isOpeningRaschet = false;
var raschetRot = 1;
var openingRaschet;
var raschet = document.getElementById("raschet");
if (!isPhone) {
	function openRaschet() {
		if (!isOpeningRaschet) {
			isOpeningRaschet = true;
			startOpeningRaschet();
		}
	}
	function closeRaschet() {
		if (raschetRot != 1) {
			isOpeningRaschet = true;
			startOpeningRaschet();
		}
	}
}
else {
	function openRaschet() {
		raschet.style.transform = "rotate(0deg)";
		disableScroll();
	}
	function closeRaschet() {
		raschet.style.transform = "rotate(90deg)";
		enableScroll();
	}
}
if (!isPhone) {
	function startOpeningRaschet() {
		var isSecondHalf = Math.round(raschetRot);
		openingRaschet = setInterval(function() {
			if (isSecondHalf == 0) {
				$("#raschet-button-close").css("transform", "rotate(270deg)");
				raschetRot += 0.05;
				raschetRot = Math.round(raschetRot*20)/20;
				if (raschetRot >= 1) {
					clearInterval(openingRaschet);
					isOpeningRaschet = false;
				}
				enableScroll();
			}
			else {
				$("#raschet-button-close").css("transform", "rotate(0deg)");
				raschetRot -= 0.05;
				raschetRot = Math.round(raschetRot*20)/20;
				if (raschetRot <= 0) {
					clearInterval(openingRaschet);
					isOpeningRaschet = false;
				}
				disableScroll();
			}
			raschet.style.transform = "rotate(" + (smooth(raschetRot)*90) + "deg)";
			raschet.style.filter = "blur(" + (smooth(raschetRot*2)*5) + "px)";
		}, 15);
	}
}
function raschitat() {
	var platform = document.getElementById("platform");
	var budget = document.getElementById("budget");
	var ads = document.getElementById("ads");
	var result = document.getElementById("result");
	result.innerHTML = Math.round(	(Math.pow(platform.value, 3.23) * 100000) +
									(Math.pow(budget.value, 6.21) * 20000) +
									(Math.pow(ads.value, 3.66) * 40000 * Math.pow(budget.value, 2.34)));
}

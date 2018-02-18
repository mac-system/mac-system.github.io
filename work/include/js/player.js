(function ($) {

	var playlist = [{
		title: "Gravity",
		artist: "Jessica",
		mp3: "http://p2.music.126.net/lkK28FliZQJwQ5r1XAZ-KA==/3285340747760477.mp3",
		cover: "http://p4.music.126.net/7VJn16zrictuj5kdfW1qHA==/3264450024433083.jpg?param=106x106",
	},{
		title: "그대라는 한 사람",
		artist: "Jessica",
		mp3: "http://p2.music.126.net/N5MyzQh73z5KRqhmQe_WPg==/5675679022587512.mp3",
		cover: "http://p3.music.126.net/DkVjogF-Ga8_FX0Kf7p7Pw==/2328765627693725.jpg?param=106x106",
	},{
		title: "Luv Letter",
		artist: "DJ OKAWARI",
		mp3: "http://p2.music.126.net/hpNIN9n-_GeBCv0jMSIxww==/3172091046155063.mp3",
		cover: "http://p4.music.126.net/YXY1vPG5rtdV7w_cWDnNWw==/884007348732141.jpg?param=106x106",
	}, {
		title: "Flower Dance",
		artist: "DJ OKAWARI",
		mp3: "http://p2.music.126.net/lEtKDG2hAnhw4V2z4dxMpQ==/3086329139187024.mp3",
		cover: "http://p3.music.126.net/P1ac-TWkFzjDqcvl5_oK7Q==/881808325476577.jpg?param=106x106",
	}, {
		title: "먼저 말해줘",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/bjngndk8YaiOpID7Fl-EgQ==/3344714372820105.mp3",
		cover: "http://p3.music.126.net/Oiw-e2oZ_Mj52e4copv7WQ==/3413983604265136.jpg?param=106x106",
	}, {
		title: "들리나요...",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/ggjq7dAKAYieKWAHio8IXQ==/5725157045876751.mp3",
		cover: "http://p4.music.126.net/2zWUKyXGY5yyd1-aO2DRxA==/569547023192127.jpg?param=106x106",
	}, {
		title: "그리고 하나",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/F2qApXV5v2g_MpZ2MZdRNA==/2791660022930910.mp3",
		cover: "http://p3.music.126.net/M8AAx8RvouJiwffq8mJLjw==/2261695418357199.jpg?param=106x106",
	}, {
		title: "만약에",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/_W3MHbGYREJYhooqUCFw0w==/7936274929553895.mp3",
		cover: "http://p4.music.126.net/3-Xl4UGcpgl2I3YbbC3QFg==/2933497024962579.jpg?param=106x106",
	},{
		title: "쌍둥이자리",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/r7vM1JwsKhqqli8faUsivA==/3415083116322530.mp3",
		cover: "http://p4.music.126.net/Oiw-e2oZ_Mj52e4copv7WQ==/3413983604265136.jpg?param=106x106",
	}, {
		title: "만약에",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/_W3MHbGYREJYhooqUCFw0w==/7936274929553895.mp3",
		cover: "http://p4.music.126.net/3-Xl4UGcpgl2I3YbbC3QFg==/2933497024962579.jpg?param=106x106",
	}, {
		title: "그리고 하나",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/F2qApXV5v2g_MpZ2MZdRNA==/2791660022930910.mp3",
		cover: "http://p3.music.126.net/M8AAx8RvouJiwffq8mJLjw==/2261695418357199.jpg?param=106x106",
	}, {
		title: "I",
		artist: "金泰妍",
		mp3: "http://p2.music.126.net/RQET5JRaaUfnSVW15Qpwhg==/3427177744227312.mp3",
		cover: "http://p4.music.126.net/Oiw-e2oZ_Mj52e4copv7WQ==/3413983604265136.jpg?param=106x106",
	},{
		title: "울컥",
		artist: "Krystal",
		mp3: "http://p2.music.126.net/8Sd3wLlNvspQJeyYgO1h3Q==/2538772348755620.mp3",
		cover: "http://p4.music.126.net/HC1ZPOlaooXxNZdsiiOi8A==/6639950720797133.jpg?param=106x106",
	}, {
		title: "12월 24일",
		artist: "IU",
		mp3: "http://p2.music.126.net/L_fV92D5ALuJq0VurUaRZw==/7975857348596951.mp3",
		cover: "http://p3.music.126.net/FjM0XL9lW_H4lZaSMI3HJw==/7697680908005337.jpg?param=106x106",
	}, {
		title: "나의 옛날이야기",
		artist: "IU",
		mp3: "http://p2.music.126.net/_VueJD6ndr8BL1J3J60HqQ==/6001134464694369.mp3",
		cover: "http://p4.music.126.net/vvep8oWbYOhpWchNu4C8qg==/6022025185715205.jpg?param=106x106",
	}, {
		title: "Bila",
		artist: "Candy",
		mp3: "http://p2.music.126.net/iH1HT5Giq9N1lma9A7wHIg==/6041816395113477.mp3",
		cover: "http://p3.music.126.net/fIv14Wd9nlpmAoUqPGEhAA==/3405187512278988.jpg?param=106x106",
	}, {
		title: "저 높은곳에 펼쳐",
		artist: "YG Family",
		mp3: "http://p2.music.126.net/exc30s0WC0uSMFCGriIorA==/5632798069157260.mp3",
		cover: "http://p3.music.126.net/GocfGJGMdvfyPxOoFHZNHg==/526666069716184.jpg?param=106x106",
	}, {
		title: "BAD BOY",
		artist: "BIGBANG",
		mp3: "http://p2.music.126.net/aeePqXtZZjDyPwSGckGAwQ==/7897792023496393.mp3",
		cover: "http://p4.music.126.net/DACbuAsZkYFpDFJGhGXTsQ==/5649290743585546.jpg?param=106x106",
	}, {
		title: "LOSER",
		artist: "BIGBANG",
		mp3: "http://p2.music.126.net/TrhAlAzpmOJeRfZmF1Kk1A==/7957165650487044.mp3",
		cover: "http://p4.music.126.net/18ZF3M8ZMjeBzuRnnNvBKA==/2889516558887956.jpg?param=106x106",
	}, {
		title: "BLUE",
		artist: "BIGBANG",
		mp3: "http://p2.music.126.net/db2Apbz6ijvxzh26gnToaw==/7998947093790162.mp3",
		cover: "http://p4.music.126.net/DACbuAsZkYFpDFJGhGXTsQ==/5649290743585546.jpg?param=106x106",
	}, {
		title: "거짓말",
		artist: "BIGBANG",
		mp3: "http://p2.music.126.net/gHe4rsAUsWA1PyTsziay0g==/7960464187509860.mp3",
		cover: "http://p3.music.126.net/AZY9h8NpSotAJqu2aQbTlA==/6653144859773779.jpg?param=106x106",
	},{
		title: "Watch Me",
		artist: "Silento",
		mp3: "http://p2.music.126.net/GDKUQnS0vigzXuuFUPhsXw==/7738362836841506.mp3",
		cover: "http://p3.music.126.net/zqIbO5mzddeRoGHzAfey5A==/7722969674031059.jpg?param=106x106",
	}, {
		title: "Sugar",
		artist: "Maroon 5",
		mp3: "http://p2.music.126.net/PyGLVH9skbsJofDCrSFMQQ==/1393081240556825.mp3",
		cover: "http://p4.music.126.net/SwbJDnhHO0DUDWvDXJGAfQ==/6655343883051583.jpg?param=106x106",
	}, {
		title: "BLACK -JPN-",
		artist: "G-Dragon",
		mp3: "http://p2.music.126.net/9fBn2YT_swcGzjaGzL-U-Q==/5782331650524910.mp3",
		cover: "http://p4.music.126.net/O-xfpcLtMByG3gXEOyhf6Q==/1902155116188033.jpg?param=106x106",
	}, {
		title: "THAT XX",
		artist: "G-Dragon",
		mp3: "http://p2.music.126.net/7JojFEF2HpPes-Ma-yIugA==/3273246122007103.mp3",
		cover: "http://p3.music.126.net/O-xfpcLtMByG3gXEOyhf6Q==/1902155116188033.jpg?param=106x106",
	}, {
		title: "소년이여",
		artist: "G-Dragon",
		mp3: "http://p2.music.126.net/zWsJPmHVa70FyoLeL85ByQ==/1364493976508846.mp3",
		cover: "http://p4.music.126.net/5BdnSRhKuy8oNa6oH4UHzw==/798245441810786.jpg?param=106x106",
	},{
		title: "죽을 만큼 아파서",
		artist: "MC 梦",
		mp3: "http://p2.music.126.net/gYFkBWCy2R-D6_1L91c_5Q==/5773535557574782.mp3",
		cover: "http://p4.music.126.net/sMvNgKL0EwlsomFrT1lOjA==/5796625301757325.jpg?param=106x106",
	},{
		title: "风继续吹",
		artist: "张国荣",
		mp3: "http://p2.music.126.net/uLdeqTZsAdxRSW08wnM9gw==/7949469070463566.mp3",
		cover: "http://p4.music.126.net/5BhQJrnd5LsP78XSJI8q4Q==/2306775395096470.jpg?param=106x106",
	}, {
		title: "Uptown Funk",
		artist: "Mark Ronson",
		mp3: "http://p2.music.126.net/ru4rRgSHFFixWfQZVtPSMQ==/3249056861081712.mp3",
		cover: "http://p4.music.126.net/G2nCsXpMc81lcUY-pOHr9Q==/2528876745541310.jpg?param=106x106",
	}, ];
	  var isRotate = true;
  var autoplay = false;

	// Settings
	var isShowNotification = false,
		isInitMarquee = true,
		shuffleArray = [],
		shuffleIndex,
		autoClearTimer,
		autoShowTimer,
		isFirstPlay = localStorage.qplayer == undefined ? true : false,
		isShuffle = localStorage.qplayer == undefined ? false : localStorage.qplayer === 'true' ? true : false;

	// Load playlist
	for (var i = 0; i < playlist.length; i++) {
		var item = playlist[i];
		$('#playlist').append('<li class="lib" style="overflow:hidden;"><strong style="margin-left: 5px;">' + item.title + '</strong><span style="float: right;" class="artist">' + item.artist + '</span></li>');
		if (item.mp3 == "") {
			$('#playlist li').eq(i).css('color', '#ddd');
		}
	}

	var currentTrack = 0,
		audio, timeout;
	var shuffle_array = localStorage.qplayer_shuffle_array;

	if (isShuffle && shuffle_array != undefined && playlist.length === (shuffleArray = JSON.parse(shuffle_array)).length) {
		currentTrack = shuffleArray[0];
		shuffleIndex = 0;
		$('#QPlayer .cover').attr('title', '点击关闭随机播放');
	} else {
		isShuffle = false;
		$('#QPlayer .cover').attr('title', '点击开启随机播放');
	}

	//判断是否显示滚动条
	var totalHeight = 0;
	for (var i = 0; i < playlist.length; i++) {
		totalHeight += ($('#playlist li').eq(i).height() + 6);
	}
	if (totalHeight > 360) {
		$('#playlist').css("overflow", "auto");
		if (isShuffle) {
			var temp = 0;
			for (var j = 0; j < currentTrack; j++) {
				temp += ($('#playlist li').eq(j).height() + 6);
			}
			$('#playlist').scrollTop(temp);
		}
	}

	var play = function () {
		audio.play();
		if (isRotate) {
			$("#player .cover img").css("animation", "9.8s linear 0s normal none infinite rotate");
			$("#player .cover img").css("animation-play-state", "running");
		}
		$('.playback').addClass('playing');
		timeout = setInterval(updateProgress, 500);
		//超过显示栏运行跑马灯
		if (isExceedTag()) {
			if (isInitMarquee) {
				initMarquee();
				isInitMarquee = false;
			} else {
				$('.marquee').marquee('resume');
			}
		}
	}

	var pause = function () {
		audio.pause();
		$("#player .cover img").css("animation-play-state", "paused");
		$('.playback').removeClass('playing');
		clearInterval(timeout);
		if (isExceedTag()) {
			$('.marquee').marquee('pause');
		}
	}

	// Update progress
	var setProgress = function (value) {
		var currentSec = parseInt(value % 60) < 10 ? '0' + parseInt(value % 60) : parseInt(value % 60),
			ratio = value / audio.duration * 100;

		$('.timer').html(parseInt(value / 60) + ':' + currentSec);
	}

	var updateProgress = function () {
		setProgress(audio.currentTime);
	}

	// Switch track
	var switchTrack = function (i) {
		if (i < 0) {
			track = currentTrack = playlist.length - 1;
		} else if (i >= playlist.length) {
			track = currentTrack = 0;
		} else {
			track = i;
		}

		isInitMarquee = true;
		$('audio').remove();
		loadMusic(track);
		play();
	}

	// Shuffle
	var shufflePlay = function (i) {
		if (i === 1) {
			//下一首
			if (++shuffleIndex === shuffleArray.length) {
				shuffleIndex = 0;
			}
			currentTrack = shuffleArray[shuffleIndex];

		} else if (i === 0) {
			//上一首
			if (--shuffleIndex < 0) {
				shuffleIndex = shuffleArray.length - 1;
			}
			currentTrack = shuffleArray[shuffleIndex];
		}
		switchTrack(currentTrack);
	}

	// Fire when track ended
	var ended = function () {
		pause();
		audio.currentTime = 0;
		if (isShuffle) {
			shufflePlay(1);
		} else {
			if (currentTrack < playlist.length) switchTrack(++currentTrack);
		}

	}

	var beforeLoad = function () {
		var endVal = this.seekable && this.seekable.length ? this.seekable.end(0) : 0;
	}

	// Fire when track loaded completely
	var afterLoad = function () {
		if (autoplay == true) play();
	}

	// Load track
	var loadMusic = function (i) {
		var item = playlist[i];
		while (item.mp3 == "") {
			showNotification('歌曲地址为空，已自动跳过');
			if (isShuffle) {
				if (++shuffleIndex === shuffleArray.length) {
					shuffleIndex = 0;
				}
				i = currentTrack = shuffleArray[shuffleIndex];
			} else {
				currentTrack = ++i;
			}
			item = playlist[i];
		}
		var newaudio = $('<audio>').html('<source src="' + item.mp3 + '"><source src="' + item.ogg + '">').appendTo('#player');
		$('.cover').html('<img src="' + item.cover + '" alt="' + item.album + '">');
		$('.musicTag').html('<strong>' + item.title + '</strong><span> - </span><span class="artist">' + item.artist + '</span>');
		$('#playlist li').removeClass('playing').eq(i).addClass('playing');
		audio = newaudio[0];
		audio.addEventListener('progress', beforeLoad, false);
		audio.addEventListener('durationchange', beforeLoad, false);
		audio.addEventListener('canplay', afterLoad, false);
		audio.addEventListener('ended', ended, false);
	}

	loadMusic(currentTrack);

	$('.playback').on('click', function () {
		if ($(this).hasClass('playing')) {
			pause();
		} else {
			play();
		}
	});

	$('.rewind').on('click', function () {
		if (isShuffle) {
			shufflePlay(0);
		} else {
			switchTrack(--currentTrack);
		}
	});

	$('.fastforward').on('click', function () {
		if (isShuffle) {
			shufflePlay(1);
		} else {
			switchTrack(++currentTrack);
		}
	});

	$('#playlist li').each(function (i) {
		$(this).on('click', function () {
			if (isShuffle) {
				for (var j = 0; j < shuffleArray.length; j++) {
					if (shuffleArray[j] === i) {
						shuffleIndex = j;
						break;
					}
				}
			} else {
				currentTrack = i;
			}
			switchTrack(i);
		});
	});

	$('#QPlayer .liebiao,#QPlayer .liebiao').on('click', function () {
		var pl = $('#playlist');
		if (pl.hasClass('go') === false) {
			pl.css({
				"max-height": "360px",
				"transition": "max-height .5s ease"
			});
			pl.css("border", "1px solid #dedede");
			pl.addClass('go');
		} else {
			pl.css({
				"max-height": "0px",
				"transition": "max-height .5s ease"
			});
			pl.css("border", "0");
			pl.removeClass('go');
		}
	});

	$("#QPlayer .ssBtn").on('click', function () {
		var mA = $("#QPlayer");
		if ($('.ssBtn .adf').hasClass('on') === false) {
			if (isFirstPlay) {
				setTimeout("showTips('#player .cover','点击封面开启(关闭)随机播放', " + function () {
					setTimeout("showTips('#player .ctrl .musicTag','点击拖动标题栏快进(快退)')", 1000)
				} + ");", 500);
				isFirstPlay = !isFirstPlay;
				localStorage.qplayer = 'false';
			}
			mA.css("transform", "translateX(250px)");
			$('.ssBtn .adf').addClass('on');
		} else {
			mA.css("transform", "translateX(0px)");
			$('.ssBtn .adf').removeClass('on')
		}
	});

	$("#player .cover").on('click', function () {
		isShuffle = !isShuffle;
		if (isShuffle) {
			$("#player .cover").attr("title", "点击关闭随机播放");
			showNotification('已开启随机播放');

			var temp = [];
			for (var i = 0; i < playlist.length; i++) {
				temp[i] = i;
			}
			shuffleArray = shuffle(temp);
			for (var j = 0; j < shuffleArray.length; j++) {
				if (shuffleArray[j] === currentTrack) {
					shuffleIndex = j;
					break;
				}
			}
			localStorage.qplayer_shuffle_array = JSON.stringify(shuffleArray);
		} else {
			$("#player .cover").attr("title", "点击开启随机播放");
			showNotification('已关闭随机播放');
			localStorage.removeItem('qplayer_shuffle_array');
		}
		localStorage.qplayer = isShuffle;
	});


	var startX, endX;
	$('#player .ctrl .musicTag').mousedown(function (event) {
		startX = event.screenX;
	}).mousemove(function (event) {
		//鼠标左键
		if (event.which === 1) {
			endX = event.screenX;
			var seekRange = Math.round((endX - startX) / 678 * 100);
			audio.currentTime += seekRange;
			setProgress(audio.currentTime);
		}
	});

	$('#player .ctrl .musicTag').bind('touchstart', function (event) {
		startX = event.originalEvent.targetTouches[0].screenX;
	}).bind('touchmove', function (event) {
		endX = event.originalEvent.targetTouches[0].screenX;
		var seekRange = Math.round((endX - startX) / 678 * 100);
		audio.currentTime += seekRange;
		setProgress(audio.currentTime);
	});

})(jQuery);


function initMarquee() {
	$('.marquee').marquee({
		//speed in milliseconds of the marquee
		duration: 15000,
		//gap in pixels between the tickers
		gap: 50,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true
	});
}

//检测标题和作者信息总宽度是否超出播放器，超过则返回true开启跑马灯
function isExceedTag() {
	var isExceedTag = false;
	if ($('.musicTag strong').width() + $('.musicTag span').width() + $('.musicTag .artist').width() > $('.musicTag').width()) {
		isExceedTag = true;
	}
	return isExceedTag;
}


function shuffle(array) {
	var m = array.length,
		t, i;
	// 如果还剩有元素…
	while (m) {
		// 随机选取一个元素…
		i = Math.floor(Math.random() * m--);
		// 与当前元素进行交换
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
	return array;
}

function showNotification(info) {
	isShowNotification = true;
	//判断通知是否存在，存在就移除
	if ($('.qplayer-notification').length > 0) {
		$('.qplayer-notification').remove();
		clearTimeout(autoClearTimer);
		clearTimeout(autoShowTimer);
	}
	$('body').append('<div class="qplayer-notification animation-target"><span class="qplayer-notification-icon">i</span><span class="body" style="box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 5px;"><span class="message"></span></span><a class="close" href="#" onclick="closeNotification();return false;">×</a><div style="clear: both"></div>');
	$('.qplayer-notification .message').text(info);
	//用width:auto来自动获取通知栏宽度
	var width = $('.qplayer-notification').css({
		"opacity": "0",
		"width": "auto"
	}).width() + 20;
	$('.qplayer-notification').css({
		"width": "50px",
		"opacity": "1"
	});

	autoShowTimer = setTimeout(function () {
		$('.qplayer-notification').css({
			"width": width,
			"transition": "all .7s ease"
		});
		$('.qplayer-notification .close').delay(500).show(0);
	}, 1500);
	autoClearTimer = setTimeout("if ($('.qplayer-notification').length>0) {closeNotification()}", 8000);
}


function closeNotification() {
	isShowNotification = false;
	$('.qplayer-notification').css({
		"width": "50px",
		"transition": "all .7s ease"
	});
	$('.qplayer-notification .close').delay(500).hide(0);
	setTimeout(function () {
		if (!isShowNotification) {
			$('.qplayer-notification').css("opacity", "0");
			$('.qplayer-notification-icon').css({
				"transform": "scale(0)",
				"transition": "transform .5s ease"
			});
		}
	}, 1000);
	setTimeout(function () {
		if (!isShowNotification) {
			$('.qplayer-notification').remove();
		}
	}, 1500);
	clearTimeout(autoClearTimer);
	clearTimeout(autoShowTimer);
}

/*
 *div: 要在其上面显示tip的div
 *info: tip内容
 *func: 不再提示按钮的click绑定函数
 */
function showTips(div, info, func) {
	var box_height = 100;
	$('body').append('<div class="qplayer_tips"><span class="tips_arrow"></span><span class="info" style="display:none">' + info + '</span><button class="tips_button" onclick="removeTips()">不再提示</button></div>');
	$('.qplayer_tips').css({
		"top": $(div).offset().top - box_height - 30 - 15,
		"left": $(div).offset().left - 28
	});
	$('.qplayer_tips').css({
		"height": box_height,
		"transition": "all .5s ease-in-out"
	});
	$('.qplayer_tips .info').delay(500).fadeIn();
	$('.tips_arrow').css({
		"border-width": "15px",
		"transition": "all .5s ease-in-out"
	});
	$('.tips_button').css({
		"height": "30px",
		"transition": "all .5s ease-in-out"
	});
	if (func != undefined) {
		$('.tips_button').click(func);
	}
}

function removeTips() {
	$('.qplayer_tips .info').fadeOut();
	$('.qplayer_tips').css({
		"height": "0",
		"transition": "all .5s ease-in-out"
	});
	$('.tips_arrow').css({
		"border-width": "0",
		"transition": "all .5s ease-in-out"
	});
	$('.tips_button').css({
		"opacity": "0",
		"transition": "all .2s ease-in-out"
	});
	setTimeout(function () {
		$('.qplayer_tips').remove()
	}, 500);
}
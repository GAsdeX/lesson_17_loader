
var loaderStartus = 0;

var horizontalLoaderController = function() {
	if (loaderStartus >= 100 ) {
		$('#horizontal-loader').find('.loader-snack').css('width', '100%');
	} else {
		$('#horizontal-loader').find('.loader-snack').css('width', (loaderStartus++) + '%');
		$('#loader-status').html(loaderStartus + '%');
	}
}

var ronudLoaderController = function(){
	if (loaderStartus >= 50 && loaderStartus <= 100) {
		$('#rounded-loader').find('.overlay').css('display','block');
		$('#rounded-loader').find('.right-bar').css('display', 'none');
		$('#rounded-loader').find('.right-bar').css('transform', 'rotate('+ (-loaderStartus*3.6) + 'deg'+')');
	}
	if (loaderStartus <= 100) {
		$('#rounded-loader').find('.left-bar').css('transform', 'rotate('+ (-loaderStartus*3.6) + 'deg'+')');
	} else {
		$('#rounded-loader').find('.left-bar').css('transform', 'rotate('+ (-loaderStartus*3.6) + 'deg'+')');
	}
}

setInterval(function(){
	horizontalLoaderController();
	ronudLoaderController();
}, 100);

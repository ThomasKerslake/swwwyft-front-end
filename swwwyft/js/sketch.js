$('a').on('click', function() {
	var target = $(this).attr('rel');
	$('#' + target).show().siblings('div').hide();
});

$('img', '#gifs-rows').hover(function() {
	$('.preset-file').toggle();
	$('.gif-file').toggle();
});

function openNav() {
	document.getElementById('mySidenav').style.width = '350px';
	document.getElementById('allContOverlay').style.display = 'block';
}

function closeNav() {
	document.getElementById('mySidenav').style.width = '0';
	document.getElementById('allContOverlay').style.display = 'none';
}

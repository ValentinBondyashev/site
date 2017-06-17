$('.slider').slick({
  dots: true,
});

var $j = jQuery.noConflict();



$j(document).ready(function() {
 
	var hash = window.location.hash.substr(1);
	var href = $j('#nav li a').each(function(){
		var href = $j(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$j('#content').load(toLoad)
		}											
	});

	$j('#nav li a').click(function(){
								  
		var toLoad = $j(this).attr('href')+' #content';
		$j('#content').hide('fast',loadContent);
		$j('#load').remove();
		$j('#wrapper').append('<span id="load">LOADING...</span>');
		$j('#load').fadeIn('normal');
		window.location.hash = $j(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$j('#content').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$j('#content').show('normal',hideLoader());
		}
		function hideLoader() {
			$j('#load').fadeOut('normal');
		}
		return false;
		
	});

});
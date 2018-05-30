/**Video js **/
$(document).ready(function() {
    $('.video video').on('click', function() {
        /**Class 'fullvideo' adding to class 'video' on click of video**/ 
        $('.video').addClass('fullvideo');
    });
     /**Class 'fullvideo' removing from class 'video' on click of close button**/ 
    $('.close_btn').on('click', function() {
        $(this).parents('.video').removeClass('fullvideo');
    });


 	/**tabbing js**/
    window.openCity = function(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen").click();

    window.openNav = function() {
	    document.getElementById("myNav").style.width = "100%";
	}

	window.closeNav = function() {
	    document.getElementById("myNav").style.width = "0%";
	}

	/**Nav bar js***/
	$(window).scroll(function() {
	    var nav = $('#navbarMain');
	    var top = 200;
	    if ($(window).scrollTop() >= top) {

	        nav.addClass('fixed'); 

	    } else {
	        nav.removeClass('fixed');
	    }
	});
});
/**Video js **/
$(document).ready(function() {
    jQuery('.video video').on('click', function() {
                /**Class 'fullvideo' adding to class 'video' on click of video**/ 
                jQuery('.video').addClass('fullvideo');
            });
             /**Class 'fullvideo' removing from class 'video' on click of close button**/ 
            jQuery('.close_btn').on('click', function() {
                jQuery(this).parents('.video').removeClass('fullvideo');
            });
	});


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

 /**tabbing js**/
            function openCity(evt, cityName) {
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
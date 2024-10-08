$(function () {

    var link = $('#navbar a.dot');

    // Move to specific section when click on menu link
    link.on('click', function (e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600);
        $(this).addClass('active');
        e.preventDefault();
    });

    // Run the scrNav when scroll
    $(window).on('scroll', function () {
        scrNav();
    });

    // scrNav function 
    // Change active dot according to the active section in the window
    function scrNav() {
        var sTop = $(window).scrollTop();
        $('section').each(function () {
            var id = $(this).attr('id'),
                offset = $(this).offset().top - 1,
                height = $(this).height();
            if (sTop >= offset && sTop < offset + height) {
                link.removeClass('active');
                $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    }
    scrNav();

    // Add this new function to update the year
    function updateYear() {
        var currentYear = new Date().getFullYear();
        $('.footer .wordmark-black').parent().contents().filter(function() {
            return this.nodeType === 3;
        }).first().replaceWith(' ' + currentYear);
    }

    // Call the updateYear function when the document is ready
    updateYear();

    // Add an interval to update the year every minute
    setInterval(updateYear, 60000);

    // Function to set the current year in the footer
    function setCurrentYear() {
        const currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    }

    // Call the function when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', setCurrentYear);
});
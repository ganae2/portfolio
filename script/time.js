$(document).ready(function(){
    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // Pad single digit hours, minutes and seconds with a leading zero
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        var timeString = hours + ':' + minutes + ':' + seconds;

        $('#clock').text(timeString);
    }

    // Update clock immediately
    updateClock();
    // Set interval to update clock every second
    setInterval(updateClock, 1000);
});
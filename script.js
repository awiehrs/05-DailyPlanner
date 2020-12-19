 $(document).ready(function () {
     
    var todayDisplay = moment().format('dddd[|] MMMM Do[,] YYYY');
    console.log(todayDisplay)
    $("#currentDay").text(todayDisplay);

    var currentTime = parseInt(moment().format('HH'));
    console.log(currentTime)

    var hour = [9,10,11,12,13,14,15,16,17]

    var taskForm = $(".input-group-text")




 });
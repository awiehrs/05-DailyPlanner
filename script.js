 $(document).ready(function () {
     
    var todayDisplay = moment().format('dddd[|] MMMM Do[,] YYYY');
    console.log(todayDisplay)
    $("#currentDay").text(todayDisplay);

    var currentTime = parseInt(moment().format('hh'));
    console.log(currentTime)

    var timeSlot = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}

    const date = new Date();
    const hour = date.getHours();

    for (var i = 9; i < 18; i++) {
        var timeDiv = $("<div>");
        timeDiv.text(`${i}:00`);
        timeDiv.addClass("col-md-1 hour");
        $("#timeTable").append(timeDiv);
    
        var inputDiv = $("<textarea>");
        inputDiv.addClass(`col-md-10 input textarea ${i<hour? 'past' : i>hour? 'future': 'present'}`);
        inputDiv.text(timeSlot[i]|| "");
        inputDiv.attr("id", `todo${i}`);
        $("#timeTable").append(inputDiv);

    
        var saveBtnDiv = $("<button>");
        saveBtnDiv.addClass("col-md-1 saveBtn");
        saveBtnDiv.text("save");
        saveBtnDiv.attr("id", i);
        $("#timeTable").append(saveBtnDiv);
    }


 });
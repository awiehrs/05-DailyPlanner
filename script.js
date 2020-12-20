$(document).ready(function () {
    // Implementing moment library to display the current accurate time wherever the user is
    var todayDisplay = moment().format('dddd[| ] MMMM Do[,] YYYY');
    console.log(todayDisplay)
    $("#currentDay").text(todayDisplay);

    var currentTime = parseInt(moment().format('hh'));
    console.log(currentTime)

    //Adds key value to local storage and establishes variable to use as text if any task has been previously entered
    var timeSlot = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}
    
    //Establishes the hours array to display in the time blocks on each row
    const date = new Date();
    let hour = date.getHours();
    
    //For loop to display each row dynamically
    for (var i = 9; i < 18; i++) {
        //override of 24hr time display to 12hr and adding meridian's for clarity
        let j = i 
        let timeType = "am"
        if( j > 11 ){
            timeType="pm"
        }
        if (j > 12){
            j = j-12
        }
        //adds text and bootstrap column styling to where each hour is displayed
        var timeDiv = $("<div>");
        const displayedTime =`${j}:00 ${timeType}`
        timeDiv.text(displayedTime);
        timeDiv.addClass("col-md-1 hour");
        $("#timeTable").append(timeDiv);

        //adds text and bootstrap column styling to where user will input task, establishes what color the row needs to be based off the current time of day
        var inputDiv = $("<textarea>");
        inputDiv.addClass(`col-md-10 input textarea ${i<hour? 'past' : i>hour? 'future': 'present'}`);
        inputDiv.text(timeSlot[i]|| "");
        inputDiv.attr("id", `todo${i}`);
        $("#timeTable").append(inputDiv);

        //adds a save button to the end of the row and establishes bootstrap column styling
        var saveBtnDiv = $("<button>");
        saveBtnDiv.addClass("col-md-1 saveBtn");
        saveBtnDiv.text("save");
        saveBtnDiv.attr("id", i);
        $("#timeTable").append(saveBtnDiv);
    }

    //event listener for clicking on the save button, logs information to the local storage
    $(".saveBtn").on("click", function(){
        var id = $(this).attr("id");
        var value = $(this).prev().val()
        timeSlot[id] = value
       localStorage.setItem('todos', JSON.stringify(timeSlot));
       console.log(timeSlot);
       console.log(value);
    });   
    //event listener for "Start New Day" button in header, clears display and local storage
    $(".clearBtn").on("click", function(){
        window.localStorage.clear();
        $(".textarea").val('')
    });

 });
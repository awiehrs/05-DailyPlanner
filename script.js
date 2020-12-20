$(document).ready(function () {
     
    var todayDisplay = moment().format('dddd[| ] MMMM Do[,] YYYY');
    console.log(todayDisplay)
    $("#currentDay").text(todayDisplay);

    var currentTime = parseInt(moment().format('hh'));
    console.log(currentTime)

    var timeSlot = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : {}
    
    const date = new Date();
    let hour = date.getHours();
    

    for (var i = 9; i < 18; i++) {
        let j = i 
        let timeType = "am"
        if( j > 11 ){
            timeType="pm"
        }
        if (j > 12){
            j = j-12
        }
        var timeDiv = $("<div>");
        const displayedTime =`${j}:00 ${timeType}`
        timeDiv.text(displayedTime);
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


    $(".saveBtn").on("click", function(){
        var id = $(this).attr("id");
        var value = $(this).prev().val()
        timeSlot[id] = value
       localStorage.setItem('todos', JSON.stringify(timeSlot));
       console.log(timeSlot);
       console.log(value);
    });   
    
    $(".clearBtn").on("click", function(){
        window.localStorage.clear();
        $(".textarea").val('')
    });

 });
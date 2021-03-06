// Display the time of current day
let today = moment().format('dddd, MMMM Do');
document.getElementById("currentDay").innerText = today;

$(document).ready(() => {
    // Feature: save the input into local storage to make it appear after refresh
    for (i = 9; i < 18; i++) {
        let time = `${i}:00`;
        let ipt = `#Ipt-${i}`;
        let btn = `#Btn-${i}`;
        $(ipt).val(localStorage.getItem(time));
        $(btn).on('click', () => {
            let event = $(ipt).val();
            localStorage.setItem(time, event);
        })
    }

    // Use Moment JS to get the time.
    let currentHour = parseInt(moment().format('H'));
    if (currentHour < 9) {
        $('.past').addClass('future');
        $('.past').removeClass('present');
        $('.past').removeClass('past');
    } else if (currentHour > 17) {
        for (let i = 9; i < 18; i++) {
            let pastTimeBlock = `#Ipt-${i}`;
            $(pastTimeBlock).addClass('past');            
        }
    } else {
        // Set current time block red
        let currentTimeBlock = `#Ipt-${currentHour}`;
        $(currentTimeBlock).removeClass('past');
        $(currentTimeBlock).removeClass('future');
        $(currentTimeBlock).addClass('present');

        // Set past time block grey
        for (let i = 9; i < currentHour; i++) {
            let pastTimeBlock = `#Ipt-${i}`;
            $(pastTimeBlock).removeClass('present');
            $(pastTimeBlock).removeClass('future');
            $(pastTimeBlock).addClass('past');            
        }

        // future time block green
        for (let i = (currentHour + 1); i < 18; i++) {
            let futureTimeBlock = `#Ipt-${i}`;
            $(futureTimeBlock).removeClass('present');
            $(futureTimeBlock).removeClass('past');
            $(futureTimeBlock).addClass('future');  
        }
    }
})
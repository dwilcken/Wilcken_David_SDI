//David Wilcken 
//13 Aug 15 
//Conditional Statements 


//Are the Conditions Right for flying?
//A student can fly solo flight if the wind is less than 20kts, the visibility 10sm or more and the 
//density altitude is below 8,000ft. Otherwise a student must fly with an instructor. 

var windMaxSolo = 20;//max wind speed variable for solo flight
var visMinSolo = 10;//min visibility variable for solo flight
var denAltSolo = 8000;//max density altitude for solo flight


var dayOrNight = prompt("Enter Time in Military Format");//prompt for current time
    if (dayOrNight == ""){//validation if user enters nothing
        dayOrNight = prompt("Please enter the time.");//prompt reminding the user to enter a value
        console.log("Thank you");//log thanking the user for their input
    }
    time = (dayOrNight < 1200) ? "Good morning, lets see if we can fly!" : "Good evening, lets see if we can fly!";//ternary var for which greeting to use depending on users input.
    console.log(time);//log displaying message for either day or night

var soloTime = prompt("Enter your current solo time.");//var prompt asking for solo time
    if (soloTime == ""){//validation if user enters nothing
        soloTime = prompt("Please enter your solo time.");//prompt reminding the user to enter a value
        console.log("Thank you.");//log thanking the user for their input
    }

var dualTime = prompt("Enter your dual hours flown with an instructor.");//prompt asking for dual time
    if (dualTime == ""){//validation if user enters nothing
        dualTime = prompt("Please enter dual hours.");//prompt reminding user to enter a value
        console.log("Thank you.");//log thanking the user for their input
    }
    var totalTime = Number(soloTime) + Number(dualTime);//creating a var for total time by casting & adding solo-dual times
    console.log("You currently have "+totalTime+" total hours.");//log giving user total flight time

var currentWind = prompt("Enter Current Wind Speed");//var prompt asking for current wind

    if (currentWind == ""){//validation if user enters nothing
        currentWind = prompt("Please enter a wind value");//reminding the user to input something
        console.log("Thank you.");//log thanking user for input
    }else if(currentWind > windMaxSolo) {//when user enters current wind it gets compared to max solo wind
        var windDif = (currentWind - windMaxSolo);//var calculating wind speed diff
        console.log("Sorry the winds are " +windDif+ "kts over your solo maximum. You may " +
            "still fly with an instructor.");//logs the amount of wind over max and tells user
    }
var currentvis = prompt("Enter Current Visibility in Statute Miles");//var prompt asking for current vis

    if (currentvis ==""){//validation if user enters nothing
        currentvis = prompt("Please enter a visibility value.");//reminding the user to input something
        console.log("Thank you.");//log thanking user for input
    }else if(currentvis < visMinSolo) {//when user enters current vis it gets compared to min vis solo
        var visDif = (visMinSolo - currentvis);//finding the dif between vis
        console.log("Sorry the visibility is " +visDif+ "sm less than your minimum. You may " +
            "still fly with an instructor");//logs the amount under vis req and tells user
    }
var currentDenAlt = prompt("Enter Current Density Altitude.");//var prompt asking for current den alt

    if (currentDenAlt ==""){//validation if user enters nothing
        currentDenAlt = prompt("Please enter density altitude value.");//reminding user to enter value
        console.log("Thank you.");//log thanking user for input
    }else if(currentDenAlt > denAltSolo) {//compares current den alt to max solo den alt
        var altDif = (currentDenAlt - denAltSolo);//finding the dif between den alt
        console.log("Sorry the density altitude is " + altDif + " feet over you solo maximum. " +
            "You may still fly with an instructor");//logs the amount over den alt and tells user
    }

if(currentWind < windMaxSolo && currentvis > visMinSolo && currentDenAlt < denAltSolo) {//if the wind & vis & DA are all within solo limitations
    console.log("You are allowed to fly solo today.");//the user will get a log stating they can solo
}else if(currentWind > windMaxSolo || currentvis < visMinSolo || currentDenAlt > denAltSolo) {//if wind or vis or DA are over solo limitations
    console.log("Or you may go home and study.");//the user can either fly with an instructor or have the option of going home
}

// I ran several different numbers and validated each prompt and the code is working as designed.
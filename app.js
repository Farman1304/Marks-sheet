
var mobtained = prompt ("Enter marks obtained")
var tmarks = 300


var percentage = (mobtained / tmarks * 100);

var grade;

var remarks;




// document.write("Total marks" + " " + tmarks +"<br>" );

// document.write("Marks obtained" + " " + mobtained + "<br>");

// document.write("Percetage =" + " " + percentage +"%" + "<br>");

if (percentage <= 59) {
    grade = "Fail" , remarks = "Fail"
} 
else if (percentage <= 69) {
        grade = "B" , remarks = "Need to improve"

}

else if (percentage <= 79) {
    grade = "A" , remarks = "Good"

}
document.write(`<h1> Total marks = ${tmarks} <br> Total `)
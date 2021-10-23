var percentage = prompt("Enter your percentage: ");

getObtMarks(percentage);

function getObtMarks(percentage) {
  if (percentage < 0 || percentage > 100) {
    console.log("Input must be >= 0 and <= 100 ");
  } else {
    console.log(
      "Considering you've 5 subjects, your total obtained marks is: ",
      percentage * 5
    );
  }
}

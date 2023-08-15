$(".form").on('click', function(){
  $(this).addClass('active');
});

$(".submit").on('click', function() {
  $(this).parent().parent().hide(300);
  $(".ok_message").addClass("active");

  //Getting the user input from the HTML and using it to calculate 
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  var num3 = +document.getElementById("num3").value;

  //Calls the calculateMax function to get the maximum number out of the three numbers
  maxNum = calculateMax(num1, num2, num3);
  document.getElementById("maximum").innerHTML = maxNum;

  //Calls the calculateMin functin to get the minimum number out of the three numbers
  minNum = calculateMin(num1, num2, num3);
  document.getElementById("minimum").innerHTML= minNum;

  //Calls the calculateAvg function to calculate the average of all three numbers
  avgNum = calculateAvg(num1, num2, num3);
  document.getElementById("average").innerHTML = avgNum;

  //Calls the calculateMedian function to calculate the median of all three numbers
  medianNum = calculateMedian(num1, num2, num3);
  document.getElementById("median").innerHTML = medianNum;

  //Calls the calculateRange function to calculate the range of all three numbers
  rangeNum = calculateRange(num1, num2, num3);
  document.getElementById("range").innerHTML = rangeNum;
});

$(".ok_message").on('click', function() {
  $(this).removeClass("active");
  $(".form").removeClass("active").show();
});

//Will calculate the maximum
function calculateMax(x, y, z) {
  let max = Math.max(x,y,z);
  return ("Maximum: " + max);
}

//Will calculate the minimum
function calculateMin(x, y, z) {
  let min = Math.min(x, y, z);
  return ("Minimum: " + min);
}

//Will calculate the average
function calculateAvg(x, y, z) {
  //Will add all the numbers together and divide by 3
  let avg = (x + y + z) / 3;
  return ("Average: " + avg);
}

//Will calculate the median 
function calculateMedian(x, y, z) {
  //Will calculate the minimum number
  let min = Math.min(x, y, z);
  //Will calculate the max number
  let max = Math.max(x,y,z);
  //Will calculate the median
  let median = x + y + z - min - max;
  return ("Median: " + median);
}

//Will calculate the range
function calculateRange(x, y, z) {
  //Will calculate the max number
  let max = Math.max(x,y,z);
  //Will calculate the minimum number
  let min = Math.min(x, y, z);
  //Will subtraxt the maximum number by the minimum number to get the range
  let range = max - min;
  return ("Range: " + range);
}
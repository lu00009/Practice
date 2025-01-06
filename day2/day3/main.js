let result= prompt("Enter your result?");
function grade(result){
  if (result >= 90) {
    console.log("A");
  }
  else if (result >= 80) {
    console.log("B");
  }
  else if (result >= 70) {
    console.log("C");
  }
  else if (result >= 60) {
    console.log("D");
  }
  else {
    console.log("F");
  }}
grade(result);
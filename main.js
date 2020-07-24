function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var operator = document.querySelector("#type").value;
  var answer;


  if (operator == "add"){
    answer= a + b;
  }
  else if (operator == "sub"){
    answer= a - b;
  }
  else if (operator == "mult"){
    answer= a * b;
  }
  else if (operator == "div"){
    answer= a / b;
  }

  console.log(answer);
  document.querySelector("#result").innerHTML = answer;
}

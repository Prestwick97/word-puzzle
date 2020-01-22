$(document).ready(function () {
  
    function puzzle(str) {
      var vow = ["a", "e", "i", "o", "u"];
      var puzzled = []
      for (var index = 0; index <= str.length-1; index += 1) {
        if (vow.includes(str[index])){
        puzzled.push("-")
        }
        else {
      puzzled.push(str[index])
      };
    };
    return puzzled.join("");
  }

  $("#input").submit(function (event) {
   var sentence = $("#sentence").val().split("");
  $("#novowel").text(puzzle(sentence));
    event.preventDefault();
  });
 
});
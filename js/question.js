var questions = ["which country have lake Victoria","Entomology is the science that studies","Hitler party which came into power in 1933 is known as", "In which year of First World War Germany declared war on Russia and France?", "With which sport is the Jules Rimet trophy associated?"];
var answers = ["Tanzaniya", "Insects", "Nazi party", "1914","Football"];
var random = Math.floor(Math.random() * questions.length);

  document.getElementById("name").innerHTML = questions[random];

function submit() {
    var sub = document.getElementById('input').value;
    if (random == 0 && sub == answers[0]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    } 
    else if (random == 1 && answers[1]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    } 
    else if (random == 2 && answers[2]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    }
    else if (random == 3 && answers[3]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    }
    else {
        document.getElementById("answer").innerHTML = "Incorrect";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    }
  } 

  function btn() {
    random = Math.floor(Math.random() * questions.length);
    document.getElementById("name").innerHTML = questions[random];
    document.getElementById("button").innerHTML = "";
    document.getElementById("answer").innerHTML = "";
  }
  
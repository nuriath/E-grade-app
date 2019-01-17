var lakes = ["Kivu","Victoria","Tanganyika","Malawi"];
var countries = ["Uganda","Rwanda","Tanzaniya","Malawi"];
var random = Math.floor(Math.random() * lakes.length);

  document.getElementById("name").innerHTML = lakes[random];

function submit() {
    var sub = input.value;
    if (random == 0 && sub == countries[1]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    } 
    else if (random == 1 && countries[0]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    } 
    else if (random == 2 && countries[2]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    }
    else if (random == 3 && countries[3]) {
        document.getElementById("answer").innerHTML = "Correct";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    }
    else {
        document.getElementById("answer").innerHTML = "Incorrect";
        document.getElementById("button").innerHTML = "<button onclick=btn()>Next</button>";
    }
  } 

  function btn() {
    random = Math.floor(Math.random() * lakes.length);
    document.getElementById("name").innerHTML = lakes[random];
    document.getElementById("button").innerHTML = "";
    document.getElementById("answer").innerHTML = "";
  }
  
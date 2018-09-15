
var map = Array ();
function init_map(){
  map =
  [
    ["", "P", "", "", "", "", "p",  ""], //x1
    ["","P","","","","","p",""], //x2
    ["","P","","","","","p",""], //x3
    ["","P","","","","","p",""], //x4
    ["","P","","","","","p",""], //x5
    ["","P","","","","","p",""], //x6
    ["","P","","","","","p",""]
  ];
}

function show_map(){
  html="<table border='1' cellpadding='2' cellspacing='0'>";
  for(var y = 7; y >= 0; y--) {
    html += "<tr>"
    html += "<td>" + y + "</td>"
    for(var x = 0; x <= 7; x++) {
      color = ( x + y) % 2 ? "white" : "yellow";
      html += "<td style='height: 50px; width: 50px; " + "background-color: " + color + ";" + "text-align:center;" + "'>";
      html += map [x] [y];
      html += "</td>";
    }
    html += "</tr>";
  }

  html += "<tr>"
  html += "<td>&nbsp;</td>";
  for(var x = 0; x<=7; x++) {
    html += "<td>" + x + "</td>";

  }
  document.getElementById('board').innerHTML = html;
}
init_map ();
show_map ();

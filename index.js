function show_map(){
  html="<table border='1'>";
  for(let y = 7; y > 0; y--) {
    html += "<tr>"
    for(let x = 0; x<=7; x++) {
      html += "<td></td>";
    }
    html += "</tr>";
  }
  document.getElementById('board').innerHTML = html;
}
show_map();

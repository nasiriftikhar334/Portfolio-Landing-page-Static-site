function skillsBtn() {
  var x = document.getElementById("circle");
    if (x.style.display === 'none') {
    x.style.display = 'block';
} else {
  x.style.display = 'none';
}
}
      
function dropdownMenu() {
  var x = document.getElementById("dropdownclick");
  if ( x.className === "navtop") {
    x.className += " responsive";
} else {
  x.className = "navtop";
}
}


function normalMode() {
    
        document.documentElement.style.setProperty('--text', "#111");
        document.documentElement.style.setProperty('--background', "#fff");
        document.documentElement.style.setProperty("--grey", "#ddd");
        document.documentElement.style.setProperty("--hover", "#bbb");
        document.documentElement.style.setProperty("--skill", "#aaa");
        document.documentElement.style.setProperty("--border", "#111");
        document.documentElement.style.setProperty("--shadow", "0");
}

function darkMode() {
    
        document.documentElement.style.setProperty('--text', "#fff");
        document.documentElement.style.setProperty('--background', "#111");
        document.documentElement.style.setProperty('--grey', "#222");
        document.documentElement.style.setProperty("--hover", "#444");
        document.documentElement.style.setProperty("--skill", "#666");
        document.documentElement.style.setProperty("--border", "#ddd");
        document.documentElement.style.setProperty("--shadow", "255");
}

function hackingMode() {
    
        document.documentElement.style.setProperty('--text', "#4dd752");
        document.documentElement.style.setProperty('--background', "#111");
        document.documentElement.style.setProperty('--grey', "#222");
        document.documentElement.style.setProperty("--hover", "#444");
        document.documentElement.style.setProperty("--skill", "#666");
        document.documentElement.style.setProperty("--border", "#4dd752");
        document.documentElement.style.setProperty("--shadow", "255");
}
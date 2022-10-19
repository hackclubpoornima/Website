function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
var navbar = document.getElementById("navbar");
var footer = document.querySelector("footer");
var data = document.createElement("p");
data.id = "footerlogo";
data.innerHTML = "<a href='https://www.instagram.com/hackclubpoornima/?hl=en'><img src='images/logos/instagram.png'></a>&nbsp;<a href='https://discord.gg/f3acf983wR'><img src='images/logos/discord.png'></a>&nbsp;<a href='https://twitter.com/HC_Poornima'><img src='images/logos/twitter.png'></a>&nbsp;<a href='https://github.com/hackclubpoornima'><img src='images/logos/github.png'></a>&nbsp;<a href='https://linkedin.com/in/hackclubpoornima'><img src='images/logos/linkedin.png'></a>&nbsp;<a href='https://chat.whatsapp.com/HHjSaQ8ReyiAvoqsovRR63'><img src='images/logos/whatsapp.png'></a>";

footer.appendChild(data);

const filenames = {"Home":"/Website","About Us":"about.html","Projects":"projects.html","Core Team":"core.html","Gallery":"gallery.html","FAQs":"faq.html"};
for(i=0;i<Object.keys(filenames).length;i++){
    var opt = document.createElement('a');
        opt.href = Object.values(filenames)[i];
        opt.innerHTML = Object.keys(filenames)[i];
        navbar.appendChild(opt);
}
var btn = document.createElement('label');
btn.className = "switch";
btn.innerHTML = '<span class="theme-toggler__label"></span><input id="mode" type="checkbox"><span class="slider round"></span>';
navbar.appendChild(btn);
function darkmode(){
    document.getElementById("css").href = "css/base.css";
    sessionStorage.setItem("mode", "dark");
    document.getElementById("mode").checked = true;
}
function nodark(){
    document.getElementById("css").href = "css/normal.css";
    sessionStorage.setItem("mode", "nodark");
    document.getElementById("mode").checked = false;
}






var checkbox = document.getElementById("mode"); //get the checkbox to a variable

//check storage if dark mode was on or off
if (sessionStorage.getItem("mode") == "dark") {
  darkmode(); //if dark mode was on, run this funtion
  
} else {
  nodark(); //else run this funtion
}

//if the checkbox state is changed, run a funtion
checkbox.addEventListener("change", function() {
  //check if the checkbox is checked or not
  if (checkbox.checked) {
    darkmode(); //if the checkbox is checked, run this funtion
  } else {
    nodark(); //else run this funtion
  }
});




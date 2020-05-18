var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content2 = this.nextElementSibling;
    if (content2.style.maxHeight){
      content2.style.maxHeight = null;
    } else {
      content2.style.maxHeight = content2.scrollHeight + "px";
    }
  });
}

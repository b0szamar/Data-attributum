const szinek = ["", "", "", ""];
let szin = "red";

function changeColor(element) {
  const index = element.dataset.indexNumber - 1;
  if (szinek[index] == "") {
    element.style.backgroundColor = szin;
    szinek[index] = szin;
    szin = szin == "red" ? "blue" : "red";
  }
}
document.querySelectorAll(".item").forEach(item => 
{
    item.addEventListener("click", function() 
    {
    changeColor(this);
    });
});
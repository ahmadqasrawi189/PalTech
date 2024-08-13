var allproducts = document.querySelectorAll(".allcollection button")
var selectedItems = document.querySelector("#selected");
var summerybox = document.querySelector(".summery")
var calculatet = document.querySelector("#price")
var clearCart = document.querySelector("#clear");
var totalprice = 0
allproducts.forEach(function(item){
    item.onclick = function(){
        var productName = item.parentElement.querySelector(".card-text").textContent.trim();
        selectedItems.innerHTML += productName + "<br>";
        totalprice += +(item.getAttribute("price"))
        if (selectedItems.innerHTML !=""){
            summerybox.style.display = "block"
            summerybox.style.background = "blue"
        }
    }
})
calculatet.onclick = function() {
    document.querySelector("#total").innerHTML = "Total Price: $" + totalprice;
};
clearCart.onclick = function(){
    selectedItems.innerHTML = "";
    summerybox.style.display = "none";
    totalprice = 0;
    document.querySelector("#total").innerHTML = "";
}


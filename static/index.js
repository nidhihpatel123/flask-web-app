
$("#autoContainer").click(function () {
    localStorage.setItem("itemType","");
    window.location.href = "static/pruduct_page/product_page.html";
    localStorage.setItem("itemType","auto")

});
$("#fashionContainer").click(function () {
    localStorage.setItem("itemType","");
    window.location.href = "static/pruduct_page/product_page.html";
    localStorage.setItem("itemType","fashion")

});
$("#clothesContainer").click(function () {
    localStorage.setItem("itemType","");
    window.location.href = "static/pruduct_page/product_page.html";
    localStorage.setItem("itemType","clothes")

});
$("#elecContainer").click(function () {
    localStorage.setItem("itemType","");
    window.location.href = "static/pruduct_page/product_page.html";
    localStorage.setItem("itemType","electronics")

});

$("#addItem").click(function () {
    window.location.href = "static/add_item/add_item.html";
});
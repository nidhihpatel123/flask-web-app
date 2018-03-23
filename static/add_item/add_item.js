

$("#addItemButton").click(function () {

    var itemName = document.getElementById("name").value;
    var itemCategory = document.getElementById("category").value;
    var itemPrice = document.getElementById("price").value;
    var itemPicture = document.getElementById("picAddress").value;

    var item = {
        name:itemName,
        category:itemCategory,
        price:itemPrice,
        picture:itemPicture
    };
    console.log(item);

});

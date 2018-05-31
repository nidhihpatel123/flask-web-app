

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

    $.ajax({
        url: 'http://127.0.0.1:5000/add_item',
        type: 'POST',
        data: JSON.stringify({"item":item}),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
            var resp = msg.response;
            console.log(resp);
            }
    });

});

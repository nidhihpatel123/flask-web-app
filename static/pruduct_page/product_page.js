
$(document).ready(function () {

    var itemType = localStorage.getItem("itemType");
    console.log(itemType);
    $.ajax({
        url: 'http://127.0.0.1:5000/search',
        type: 'POST',
        data: JSON.stringify({"category":itemType}),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
        var resp = msg.response;
            var table = document.getElementById("productTable");
            for(i=0;i<resp.length;i++){
                var row = table.insertRow(0);
                row.setAttribute("class","itemContainer");

                var cell0 = row.insertCell(0);
                cell0.innerHTML="<img class='pictures' src="+ resp[i].picture + ">";

                var cell1 = row.insertCell(1);
                cell1.innerHTML="<h1>" + resp[i].name + "</h1>" + "\n"
                    + "<p> Category: " + resp[i].category+ "</p>" + "\n" + "<p> Price: " + "$" + resp[i].price +"</p>";

            }
        }
    });


});
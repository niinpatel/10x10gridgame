// get the reference for the body
var body = document.getElementsByTagName("body")[0];

// creates a <table> element and a <tbody> element
var tbl = document.createElement("table");
var tblBody = document.createElement("tbody");

index = 1;
// creating all cells
for (var i = 1; i <= 10; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 1; j <= 10; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(index);
        cell.appendChild(cellText);
        cell.addEventListener("click", function (e) {
            destroy(e.target.textContent);
        }, false);
        row.appendChild(cell);
        index++
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
// sets the border attribute of tbl to 2;
tbl.setAttribute("border", "2");



function destroy(number) {
    allCells = document.getElementsByTagName("td");


    for (var i = 0; i < allCells.length; i++){

        cellValue = i + 1;

        if (cellValue%number === 0){
            allCells[i].textContent = "*"
        }

    }

}


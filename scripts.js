// get the reference for the body
let body = document.getElementsByTagName("body")[0];

// creates a <table> element and a <tbody> element
let tbl = document.createElement("table");
let tblBody = document.createElement("tbody");

index = 1;
// creating all cells
for (let i = 1; i <= 10; i++) {
    // creates a table row
    let row = document.createElement("tr");

    for (let j = 1; j <= 10; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        let cell = document.createElement("td");
        let cellText = document.createTextNode(index);
        cell.appendChild(cellText);
        cell.addEventListener("click", function (e) {
            destroy(e.target.textContent);
        }, false);
        row.appendChild(cell);
        index++;
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
}

// put the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
body.appendChild(tbl);
// sets the border attribute of tbl to 2;
tbl.setAttribute("class", "table table-bordered w-50")
let allCells = document.getElementsByTagName("td");


function destroy(number) {


    for (let i = 1, length = allCells.length; i <= length; i++) {

        if (i % number === 0) {
            allCells[i-1].textContent = "**"
        }

    }

}


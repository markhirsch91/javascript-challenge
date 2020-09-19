// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);


// This function will append the table with the UFO Sightings from "data.js"
function ufoTable(data) {
    // Ensure that the table is cleared out before we begin the loop
    tbody.html("");
    // For every report of a UFO sighting in data.js, add it to a new row in the "tbody" table.
    data.forEach(ufoReport => {
       tableRow = tbody.append("tr");
       // This is where we will iterate through each key/value pair
        Object.entries(ufoReport).forEach(function([key, value]) {
            tableDataLine = tableRow.append("td").text(value);
        })
    })
}
// Apply the function above with the tableData variable.
ufoTable(tableData);


// Creaitng the Filter Table button
var button = d3.select("#filter-btn");
var form = d3.select("#form-group");

// This will begin filtering the database from the Filter Table button
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    if (inputValue.trim() === "") {
        var filteredData = tableData;
    }
    else {
        var filteredData = tableData.filter(ufoEvent => ufoEvent.datetime === inputValue.trim());
    }
    console.log(filteredData);

};

// button.on("click", runEnter);
// form.on("submit", runEnter);
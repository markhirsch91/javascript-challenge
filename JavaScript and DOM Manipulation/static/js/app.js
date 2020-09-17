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

function runEnter() {
    var dateFilterSearch = d3.select("#datetime");
    var dateTimeValue = dateFilterSearch.property("value");

    if(dateTimeValue === "") {
        // This is the default view, showing all the table data in this first part of the if statement.
        var displayData = tableData;
    }
    else {
        var displayData = tableData.filter(data => data.datetime === dateTimeValue);
    }
};


// button.on("click", runEnter);
// form.on("submit", runEnter);
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


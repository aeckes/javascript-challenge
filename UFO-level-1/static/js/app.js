// from data.js
var tableData = data;
var columns = ['datetime','city','state','country','shape','durationMinutes','comments']

// select button
var button = d3.select("#filter-btn");

// event of click

button.on('click', function() {

    // get date input from form
    var dateForm = d3.select('#datetime');
    var userDate = dateForm.property('value');

    // filter using date
    var filteredData = data.filter(obs => obs.datetime === userDate)

    // check for proper filtering in console
    console.log(filteredData);

    // create table oof filtered results
    createTable(filteredData, columns);

});

// create table
function createTable(data, columns) {

    // select table body - headers are static
    var table = d3.select('tbody');

    // clear any existing results
    table.html("");

    // create table rows based on length of filtered data
    var rows = table.selectAll('tr')
        .data(data)
        .enter()
        .append('tr');

    // create table cells, use column names to get each value - I borrowed this :/
    var cells = rows.selectAll('td')
        .data(function(row) {
            return columns.map(function(column) {
                    return {column: column, value: row[column]};
            });
        })
        .enter()
        .append('td')
        .html(function(d) {return d.value}); //add data to each cell

    return table;

}






// list.append('li').text(`text ${var}`)
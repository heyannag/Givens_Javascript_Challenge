// Reference to the table body
var tbody = d3.select("tbody");

 // Assign the data from `data.js` to a descriptive variable
var ufo = data;

// Select the button
var button = d3.select("#button-addon1");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  tbody.html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#ufo-form-input");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // Get the value property of the dropdown
  var resultFilter = ufo.filter(function(report){
      return report.datetime == inputValue;
  });
  
  
  //display the result of the filter in the table 
  resultFilter.forEach(function (filter){
    console.log(filter);
    var row = tbody.append("tr");
    row.html("");
    Object.entries(filter).forEach(function([key,value]){
        console.log(key,value);        
        var cell = row.append("td");
        cell.text(value);
    });
 });
  
};

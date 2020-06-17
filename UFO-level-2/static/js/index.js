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
  var dropDown = d3.select("#selFilter");
  var elDrop = dropDown.property("value");
  //console.log(elDrop);

  // conditionals to determine the type of select
  if (elDrop=='datetime'){
    console.log(elDrop);
    var resultFilter = ufo.filter(function(report){
      return report.datetime == inputValue;
    });
    var selFilter =d3.select("#selFilter")
    var empSearch = d3.select('#ufo-form-input').attr('placeholder', '1/1/2010');
    console.log(empSearch);

    selFilter.on('change', function () {
    empSearch.attr('placeholder', 'bonita');
    });
  }
  else if (elDrop == 'city'){
    var resultFilter = ufo.filter(function(report){
      return report.city == inputValue;
    });
    var selFilter =d3.select("#selFilter")
    
    var empSearch = d3.select('#ufo-form-input').attr('placeholder', 'bonita');
    console.log(empSearch);

    selFilter.on('change', function () {
    empSearch.attr('placeholder', 'bonita');
    });
    
    console.log(elDrop);
  }
  else if (elDrop == 'state'){
    var resultFilter = ufo.filter(function(report){
      return report.state == inputValue;
    });
    console.log(elDrop);
    var selFilter =d3.select("#selFilter")
    
    var empSearch = d3.select('#ufo-form-input').attr('placeholder', 'ar');
    console.log(empSearch);

    selFilter.on('change', function () {
    empSearch.attr('placeholder', 'bonita');
    });
  }
  else if(elDrop == 'country'){
    var resultFilter = ufo.filter(function(report){
      return report.country == inputValue;
    });
    console.log(elDrop);
    var selFilter =d3.select("#selFilter")
    
    var empSearch = d3.select('#ufo-form-input').attr('placeholder', 'us');
    console.log(empSearch);

    selFilter.on('change', function () {
    empSearch.attr('placeholder', 'bonita');
    });
  }
  else if(elDrop == 'shape'){
    var resultFilter = ufo.filter(function(report){
      return report.shape == inputValue;
    });
    console.log(elDrop);
    var selFilter =d3.select("#selFilter")
    
    var empSearch = d3.select('#ufo-form-input').attr('placeholder', 'triangle');
    console.log(empSearch);

    selFilter.on('change', function () {
    empSearch.attr('placeholder', 'bonita');
    });
  }
  
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

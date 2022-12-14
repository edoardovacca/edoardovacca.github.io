// 10.object_more_tasks_1.js JavasScript code
// Initially, this program shows the name and population of a country.<br />
// Modify the program so that it shows also the name of the country in Finnish.<br />
// NB! Add a new property to the object constructor for this purpose.<br /><br />

function Country(countryName, countryPopulation, translatedName) {
  this.name = countryName;
  this.population = countryPopulation;
  this.finnishName = translatedName;
}

var myCountry = new Country("Finland", 5501043, "Suomi");

var outputText =
  myCountry.name +
  ", population is " +
  myCountry.population +
  ", and its Finnish name is " +
  myCountry.finnishName;

document.getElementById("pOutput").innerHTML = outputText;

// End

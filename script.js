var countryCodesToCheck = ['AT', 'BE', 'US', 'HR', 'CY', 'EE', 'FI', 'FR', 'DE', 'GR', 'IE', 'IT', 'LV', 'LT', 'LU', 'MC', 'NL', 'PT', 'SM', 'SK', 'SI', 'ES', 'VA'];

var checkboxes = Array.from(document.querySelectorAll('table input[type="checkbox"]'));

for (var i = 0; i < checkboxes.length; i++) {
  var checkbox = checkboxes[i];
  let countryCode = checkbox.name.substring(8, 10);
  if (countryCodesToCheck.includes(countryCode)) {
    console.log(countryCode);
    checkbox.checked = true;
  }
}
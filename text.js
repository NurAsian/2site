document.write('<h2><?!=color_button ?></h2>');
document.write('<h2>display: contents:</h2>');
document.write('<div class="a">');
document.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <div class="b">HELLO WORLD!</div> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.');
document.write('</div>');
document.write('');
document.write('<p>display: contents does not work in Edge, prior version 79.</p>');


  var id = "1sVVDut8dAcYV0zpNb8F5M4Gf4SsFXrZAkDJkTVwqgF0"
const css_color = SpreadsheetApp.openById(id);
const css_color1 = css_color.getSheetByName("css_color");
const color_button = css_color1.getRange('B1').getValues()


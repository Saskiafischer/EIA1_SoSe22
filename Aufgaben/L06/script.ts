var gesamtEU21 = 447.01;

var deutschland21 = 83.16
var deutschland08 = 82.11
var deutschlandEU = 100*deutschland21/gesamtEU21
var deutschland = (deutschland21-deutschland08)/deutschland08

var oesterreich21 = 8.93
var oesterreich08 = 8.34
var oesterreichEU = 100*oesterreich21/gesamtEU21
var oesterreich = (oesterreich21-oesterreich08)/oesterreich08

var frankreich21 = 67.44
var frankreich08 = 64.37
var frankreichEU = 100*frankreich21/gesamtEU21
var frankreich = (frankreich21-frankreich08)/frankreich08

var italien21 = 59.26
var italien08 = 58.83
var italienEU = 100*italien21/gesamtEU21
var italien = (italien21-italien08)/italien08

console.log("Die Einwohnerzahl in Deutschland beträgt im Jahr 2021 "+ deutschland21+" Millionen.")
console.log("Relativ zur gesamtzahl der EU beträgt die Einwohnerzahl in Deutschland "+deutschlandEU.toFixed(2)"%");
console.log("Für Deutschland hat sich die Einwohnerzahl im Jahr 2021 im Vergleich zu 2008 um "+deutschland.toFixed(2)+ "% verändert.");

console.log("Die Einwohnerzahl in Österreich beträgt im Jahr 2021 "+ oesterreich21+" Millionen.");
console.log("Relativ zur gesamtzahl der EU beträgt die Einwohnerzahl in Österreich "+oesterreichEU.toFixed(2)"%");
console.log("Für Österreich hat sich die Einwohnerzahl im Jahr 2021 im Vergleich zu 2008 um "+oesterreich.toFixed(2)+ "% verändert.");


console.log("Die Einwohnerzahl in Frankreich beträgt im Jahr 2021 "+ frankreich21+" Millionen.");
console.log("Relativ zur gesamtzahl der EU beträgt die Einwohnerzahl in Frankreich "+frankreichEU.toFixed(2)"%");
console.log("Für Frankreich hat sich die Einwohnerzahl im Jahr 2021 im Vergleich zu 2008 um "+frankreich.toFixed(2)+ "% verändert.");


console.log("Die Einwohnerzahl in Italien beträgt im Jahr 2021 "+ italien21+" Millionen.");
console.log("Relativ zur gesamtzahl der EU beträgt die Einwohnerzahl in Italien "+italienEU.toFixed(2)"%");
console.log("Für Italien hat sich die Einwohnerzahl im Jahr 2021 im Vergleich zu 2008 um "+italien.toFixed(2)+ "% verändert.");




var numerology = require('./numerology.js');
var kutil = require('./util.js');

var print = kutil.print;

print (numerology.analyzeStringsWithSpaces("What is the deal with stuff"));
var oldestWords = 'DIE HAND NIGHT GIVE STAR WHERE WHAT HOU NEW TONGUE NAME ONE HOW FOUR WE FIVE I THREE WO WHO';
print(numerology.analyzeStringsWithSpaces(oldestWords));

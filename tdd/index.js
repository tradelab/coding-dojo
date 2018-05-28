var mapArabicToRoman = [
    [100, "C"], [50, "L"], [10,"X"],[9,"IX"],[5,"V"], [4, "IV"], [1, "I"]
]
var converter = {
    arabicToRoman : function(arabic) {
        var result = "";
        while(arabic > 0) {
            (mapArabicToRoman).forEach(function(dico) {
                var key = dico[0], value = dico[1];
                if(arabic >= key) {
                    result += value;
                    arabic -= key;
                }
            });
        }

        return result;
    },
    romanToArabic: function(roman) {
        var result = 0;
        while(roman.length > 0) {
            mapArabicToRoman.forEach(function(dico) {
            var key = dico[1], value = dico[0];
            var regex = new RegExp('^'+key);
                if(roman.match(regex)) {
                   roman = roman.replace(regex, "");
                    result+=value;
                }
            });
        }

        return result;
    }
};


module.exports = converter;
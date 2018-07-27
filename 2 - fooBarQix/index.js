var FooBarQix = {
    compute : function(string) {
        var result = '';

        var mapping = {
           "3": "Foo",
           "5": "Bar" ,
           "7": "Qix",
        };


        for (const key in mapping) 
        {
            if(string % key === 0)  
            {
                result+= mapping[key];
            }
        }

        for (var i =0; i <= string.length -1; i++)
        {
            if(mapping[string[i]])  
            {
                result+= mapping[string[i]];
            }
        }

        if(!result.length) {
            result = string;
        }

        return result;
    },

    computeZero: function(string) {
        var result = '';

        var mapping = {
           "3": "Foo",
           "5": "Bar" ,
           "7": "Qix",
        };


        for (const key in mapping) 
        {
            if(string % key === 0)  
            {
                result+= mapping[key];
            }
        }

        for (var i =0; i <= string.length -1; i++)
        {
            if(mapping[string[i]])  
            {
                result+= mapping[string[i]];
            } else {
                result += string[i];
            }
        }

        result = result.replace('0', '*');

        return result;
    }
}

module.exports = FooBarQix;
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
            for (const key in mapping) 
            {
                if(string[i] === key)  
                {
                    result+= mapping[key];
                } 
            }

            if(string[i] === "0") {
                result += "0";
            } 
        }
        if (!result.length) {
            result = string;
        }

        result = result.replace('0', '*');

        return result;
    }
}

module.exports = FooBarQix;
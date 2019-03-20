const recursiveGetResult = (conv, arabic, result) => {
    Object.keys(conv)
        .sort((a,b) => parseInt(b) - parseInt(a))
        .forEach((key) => {
            let intKey = parseInt(key);
            if (arabic >= intKey) {
                arabic -= intKey;
                result += conv[intKey];
            }
        });
        console.log(arabic);
    if(arabic > 0) {
        recursiveGetResult(conv, arabic, result);
    } else {
        return result;
    }
}

export default class Converter {
    arabicToRoman(arabic: number): string {
        const conv =  {
            1: "I",
            4: "IV",
            5: "V",
        };

        const res =  recursiveGetResult(conv, arabic, "");
        return res;
    }
}
export default class ArrayChunk {
   constructor() {}

   chunk(arr, size) {
    let i = 0;

       return arr.reduce((acu,number,index) => {

        if(arr.length === size){
            acu[index] = [number];
            return acu;
        }

        if (acu[i]){
            acu[i].push(number);
        } else {
            acu[i] = [number]
        }

        if((index+1)%size === 0) i++;

        return acu; 
        },[]);
   }
   
}
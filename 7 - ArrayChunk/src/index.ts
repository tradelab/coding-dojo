export default class ArrayChunk {
   constructor() {}

   chunk(arr, size) {

       return arr.reduce((acu,number,index) => {  
       
        if (acu[(index+1)%size]){
            acu[(index+1)%size].push(number);
        }

        else{
            acu[(index+1)%size] = [number];  
        } 
           return acu; 
        },[]);
   }
   
}
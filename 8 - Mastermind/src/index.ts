export default class Mastermind {
  evaluate (secret: string[], proposition: string[]){
    let wellPlaced: number = 0;
    let missPlaced: number = 0;

    secret.forEach((element, index) => {
      if (proposition[index] === element) {
        wellPlaced++;
      }
      else if (proposition.includes(element)) {
        missPlaced++;
      }
    });

    return [wellPlaced, missPlaced];
  }
}
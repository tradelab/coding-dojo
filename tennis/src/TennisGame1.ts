import { TennisGame } from './TennisGame';

const scoreMap = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
};

export class TennisGame1 implements TennisGame {
  private scoreP1: number = 0;
  private scoreP2: number = 0;

  wonPoint(playerName: string): void {
    playerName === 'player1' ? this.scoreP1 += 1 : this.scoreP2 += 1;
  }

  getScore(): string {
    return this.scoreP1 !== this.scoreP2 && (this.scoreP1 >= 4 || this.scoreP2 >= 4) ?
      this.getAdvantage() :
      this.getBasicScore();
  }

  private getAdvantage(): string {
    const minusResult: number = this.scoreP1 - this.scoreP2;
    let score = Math.abs(minusResult) === 1 ? 'Advantage' : 'Win for';

    score += ' player';
    score += this.scoreP1 > this.scoreP2 ? '1': '2';

    return score;
  }

  private getBasicScore(): string {
    if (this.scoreP1 === this.scoreP2 && this.scoreP1 > 2) {
      return 'Deuce';
    } 

    const last = this.scoreP1 === this.scoreP2 ? 'All' : scoreMap[this.scoreP2];

    return `${scoreMap[this.scoreP1]}-${last}`;
  }
}

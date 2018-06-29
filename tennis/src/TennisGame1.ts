import { TennisGame } from './TennisGame';

const scoreMap = {
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty'
}

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string; 

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  // map = {}
  // 0 - Love
  // 1 - Fifteen
  // 2 - ..

  // si score1 != score2 && score1 < 4 || score2 <4
  // return map[score1] - map[score2]

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    if (this.m_score1 === this.m_score2) {
      score = this.getEqualsScore();
    }
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else {
      score = this.getBasicScore()
    }
    return score;
  }

  private getEqualsScore(): string {
    if (this.m_score1 > 2) {
      return 'Deuce';
    }
    return `${scoreMap[this.m_score1]}-All`;
  }

  private getBasicScore(): string {
    return `${scoreMap[this.m_score1]}-${scoreMap[this.m_score2]}`;
  }
}

import { Game } from '../src/game';

describe('Bowling game', () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  test('should score 0 for a gutter game', () => {
    rollMany(20, 0);

    expect(g.score()).toBe(0);
  });

  test('should score 20 for all ones game', () => {
    rollMany(20, 1);

    expect(g.score()).toBe(20);
  });

  function rollMany(n: number, pins: number): void {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  }
});

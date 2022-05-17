import { Game1 } from './game1'
import { Game2 } from './game2'
import { Game3 } from './game3'

const GAME1 = new Game1()
GAME1.addWinner(2, 'João')

const GAME2 = new Game2()
GAME2.addWinner(3, 'Carlos')

const GAME3 = new Game3()
GAME3.addWinner(1, 'Leonora')

GAME1.leaderboard.print()
GAME2.leaderboard.print()
GAME3.leaderboard.print()
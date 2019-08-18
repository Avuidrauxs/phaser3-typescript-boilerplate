import 'phaser';
import { ExampleScene } from './exampleScene';

interface GameConfig {
    title: string;
    width: integer;
    height: integer;
    parent: string;
    scene: Array<any>;
    physics: object;
    backgroundColor: string;
  }
  const config: GameConfig = {
    title: "New game",
    width: 800,
    height: 600,
    parent: "game",
    scene: [ExampleScene],
    physics: {
      default: "arcade",
      arcade: {
        debug: false
      }
    },
    backgroundColor: "#18216D"
  };
  export class NewGame extends Phaser.Game {
    constructor(config: GameConfig) {
      super(config);
    }
  }
  window.onload = () => {
    const game = new NewGame(config);
  };
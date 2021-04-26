import {
  Engine,
  Actor,
  Loader,
  vec,
  Vector,
  Scene,
  Label,
  Color,
} from "excalibur";
import { Dungeon, getRandomInt } from "./dungeon";
import { CellType, Level, CharacterAlignment, CharacterClass } from "./level";
import { MainMenuResources, Resources } from "./resources";

const game = new Engine({
  width: 720,
  height: 480,
});

const loader = new Loader();

for (let key in Resources) {
  loader.addResource(Resources[key]);
}

loader.suppressPlayButton = true;
loader.logo = "";
loader.backgroundColor = "black";

document.oncontextmenu = () => {
  return false;
};

export function generateLevel(game: Engine) {
  let dungeon = new Dungeon(1);
  let player_spawns = dungeon.getPlayerSpawnPoints(3);
  let enemy_spawns: Vector[][] = dungeon.getEnemySpawnPoints(1, 2, 3);

  const spawnPoints = [
    {
      alignment: CharacterAlignment.PLAYER,
      class: CharacterClass.BOW,
      spawnTile: player_spawns[0],
    },
    {
      alignment: CharacterAlignment.PLAYER,
      class: CharacterClass.SWORD,
      spawnTile: player_spawns[1],
    },
    {
      alignment: CharacterAlignment.PLAYER,
      class: CharacterClass.MAGIC,
      spawnTile: player_spawns[2],
    },
  ];

  enemy_spawns.forEach((points) => {
    const classes = [
      CharacterClass.SWORD,
      CharacterClass.SWORD,
      CharacterClass.BOW,
      CharacterClass.BOW,
      CharacterClass.MAGIC,
      CharacterClass.MAGIC,
    ];
    points.forEach((point) =>
      spawnPoints.push({
        alignment: CharacterAlignment.ENEMY,
        class: classes.splice(getRandomInt(0, classes.length - 1), 1)[0],
        spawnTile: point,
      })
    );
  });

  return new Level(game, dungeon.asCell2dArray(), spawnPoints);
}

const mainMenuLoader = new Loader();
for (let key in MainMenuResources) {
  mainMenuLoader.addResource(MainMenuResources[key]);
}
mainMenuLoader.suppressPlayButton = true;
mainMenuLoader.logo = "";
mainMenuLoader.backgroundColor = "black";

const title = new Actor({
  x: 360,
  y: 240,
  width: 720,
  height: 480,
});
title.addDrawing("title", MainMenuResources.title.asSprite());

title.on("pointerdown", () => {
  title.off("pointerdown");
  game.start(loader).then(() => {
    game.add("test_level", generateLevel(game));
    game.goToScene("test_level");
  });
});

const clickText = new Label("- Click Anywhere to Start -");
clickText.fontSize = 20;
clickText.fontFamily = "serif";
clickText.color = Color.White;
clickText.pos = vec(
  360 - clickText.getTextWidth(game.ctx) / 2,
  480 - (20 + 10)
);

clickText.actions.blink(500, 500).repeatForever();

const mainMenu = new Scene(game);

mainMenu.add(title);
mainMenu.add(clickText);

game.start(mainMenuLoader).then(() => {
  game.add("main_menu", mainMenu);
  game.goToScene("main_menu");
});

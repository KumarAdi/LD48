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
import { MainMenuResources, Resources } from "./resources";
import { Level, CharacterAlignment } from "./level";
import { Sword, Bow, Magic, CharacterClass } from "./character";

const game = new Engine({
  viewport: { width: 720, height: 480 },
});

export const levelLoader = new Loader();

for (let key in Resources) {
  levelLoader.addResource(Resources[key]);
}

levelLoader.suppressPlayButton = true;
levelLoader.logo = "";
levelLoader.backgroundColor = "black";

document.oncontextmenu = () => {
  return false;
};

export function generateLevel(
  game: Engine,
  depth: number,
  last_player_stats?: { class: CharacterClass; exp: number }[]
) {
  let dungeon = new Dungeon(1);

  const spawnPoints = [];
  if (last_player_stats) {
    let player_spawns = dungeon.getPlayerSpawnPoints(last_player_stats.length);
    last_player_stats.forEach((stats, i) => {
      spawnPoints.push({
        alignment: CharacterAlignment.PLAYER,
        class: stats.class,
        spawnTile: player_spawns[i],
        exp: stats.exp,
      });
    });
  } else {
    let player_spawns = dungeon.getPlayerSpawnPoints(3);
    spawnPoints.push({
      alignment: CharacterAlignment.PLAYER,
      class: new Bow(true),
      spawnTile: player_spawns[0],
    });
    spawnPoints.push({
      alignment: CharacterAlignment.PLAYER,
      class: new Sword(true),
      spawnTile: player_spawns[1],
    });
    spawnPoints.push({
      alignment: CharacterAlignment.PLAYER,
      class: new Magic(true),
      spawnTile: player_spawns[2],
    });
  }

  let enemy_spawns: Vector[][] = dungeon.getEnemySpawnPoints(1, 2, 3);
  const depth_level_factor = (depth - 1) * 2;
  enemy_spawns.forEach((points) => {
    const classes = [
      new Sword(false).levelUp(depth_level_factor + getRandomInt(0, 1)),
      new Sword(false).levelUp(depth_level_factor),
      new Bow(false).levelUp(depth_level_factor + getRandomInt(0, 1)),
      new Bow(false).levelUp(depth_level_factor),
      new Magic(false).levelUp(depth_level_factor + getRandomInt(0, 1)),
      new Magic(false).levelUp(depth_level_factor),
    ];
    points.forEach((point) =>
      spawnPoints.push({
        alignment: CharacterAlignment.ENEMY,
        class: classes.splice(getRandomInt(0, classes.length - 1), 1)[0],
        spawnTile: point,
      })
    );
  });

  return new Level(
    game,
    dungeon.asCell2dArray(),
    spawnPoints,
    depth,
    dungeon.getstairLocation()
  );
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
  game.start(levelLoader).then(() => {
    game.add("level_1", generateLevel(game, 1));
    game.goToScene("level_1");
  });
});

const clickText = new Label("Click Anywhere to Start");
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

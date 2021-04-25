import { Engine, Actor, Loader, vec, Vector } from "excalibur";
import { Dungeon } from "./dungeon";
import { CellType, Level, CharacterAlignment, CharacterClass } from "./level";
import { Resources } from "./resources";

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
    points.forEach((point) =>
      spawnPoints.push({
        alignment: CharacterAlignment.ENEMY,
        class: CharacterClass.SWORD,
        spawnTile: point,
      })
    );
  });

  return new Level(game, dungeon.asCell2dArray(), spawnPoints);
}

game.start(loader).then(() => {
  game.add("test_level", generateLevel(game));
  game.goToScene("test_level");
});

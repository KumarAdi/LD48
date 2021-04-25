import { Engine, Actor, Loader, vec, Vector } from "excalibur";
import { Dungeon } from "./dungeon";
import { CellType, Level, SpawnCharacterType } from "./level";
import { Resources } from "./resources";

const game = new Engine({
  width: 1200,
  height: 900,
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

game.start(loader).then(() => {
  let dungeon = new Dungeon(2);
  let player_spawns = dungeon.getPlayerSpawnPoints(2);
  let enemy_spawns: Vector[][] = dungeon.getEnemySpawnPoints(0.5, 2, 3);
  console.log(player_spawns);

  const spawnPoints = [
    { characterType: SpawnCharacterType.PLAYER, spawnTile: player_spawns[0] },
    { characterType: SpawnCharacterType.PLAYER, spawnTile: player_spawns[1] },
  ];

  enemy_spawns.forEach((points) => {
    points.forEach((point) =>
      spawnPoints.push({
        characterType: SpawnCharacterType.ENEMY,
        spawnTile: point,
      })
    );
  });

  game.add("test_level", new Level(game, dungeon.asCell2dArray(), spawnPoints));
  game.goToScene("test_level");
});

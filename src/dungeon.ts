import { Vector } from "excalibur";
import { CellType } from "./level";

const CHUNK_SIZE = 9;

class Any {
  public readonly type = "any";
}
class Floor {
  public readonly type = "floor";
}
class Wall {
  public readonly type = "wall";
}
class Connecter {
  public readonly type = "connecter";
  public width: number;

  constructor(width: number) {
    this.width = width;
  }
}

type StrictRequirement = Floor | Wall | Connecter;
type Requirement = Any | StrictRequirement;

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface Connectable {
  left: Requirement;
  top: Requirement;
  right: Requirement;
  bottom: Requirement;

  asCell2dArray(): CellType[][];
}

class Road implements Connectable {
  public left: StrictRequirement;
  public top: StrictRequirement;
  public right: StrictRequirement;
  public bottom: StrictRequirement;

  constructor(
    left: StrictRequirement,
    top: StrictRequirement,
    right: StrictRequirement,
    bottom: StrictRequirement
  ) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  asCell2dArray(): CellType[][] {
    // TODO do actual selection and generation here
    let data: CellType[][] = [];
    for (let x = 0; x < CHUNK_SIZE; x++) {
      data.push([]);
      for (let y = 0; y < CHUNK_SIZE; y++) {
        data[x].push(CellType.WALL);
      }
    }

    if (this.left.type === "connecter") {
      for (
        let y = Math.ceil(CHUNK_SIZE / 2 - this.left.width);
        y < Math.floor(CHUNK_SIZE / 2 + this.left.width);
        y++
      ) {
        for (let x = 0; x < CHUNK_SIZE / 2; x++) {
          data[x][y] = CellType.FLOOR;
        }
      }
    }
    if (this.top.type === "connecter") {
      for (
        let x = Math.ceil(CHUNK_SIZE / 2 - this.top.width);
        x < Math.floor(CHUNK_SIZE / 2 + this.top.width);
        x++
      ) {
        for (let y = 0; y < CHUNK_SIZE / 2; y++) {
          data[x][y] = CellType.FLOOR;
        }
      }
    }
    if (this.right.type === "connecter") {
      for (
        let y = Math.ceil(CHUNK_SIZE / 2 - this.right.width);
        y < Math.floor(CHUNK_SIZE / 2 + this.right.width);
        y++
      ) {
        for (let x = (CHUNK_SIZE - 1) / 2; x < CHUNK_SIZE; x++) {
          data[x][y] = CellType.FLOOR;
        }
      }
    }
    if (this.bottom.type === "connecter") {
      for (
        let x = Math.ceil(CHUNK_SIZE / 2 - this.bottom.width);
        x < Math.floor(CHUNK_SIZE / 2 + this.bottom.width);
        x++
      ) {
        for (let y = (CHUNK_SIZE - 1) / 2; y < CHUNK_SIZE; y++) {
          data[x][y] = CellType.FLOOR;
        }
      }
    }

    return data;
  }
}

class Room implements Connectable {
  public left: StrictRequirement;
  public top: StrictRequirement;
  public right: StrictRequirement;
  public bottom: StrictRequirement;

  constructor(
    left: StrictRequirement,
    top: StrictRequirement,
    right: StrictRequirement,
    bottom: StrictRequirement
  ) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  asCell2dArray(): CellType[][] {
    // TODO do actual selection and generation here
    let data: CellType[][] = [];

    if (
      this.left.type === "wall" &&
      this.top.type === "wall" &&
      this.right.type === "wall" &&
      this.bottom.type === "wall"
    ) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        data.push([]);
        for (let y = 0; y < CHUNK_SIZE; y++) {
          data[x].push(CellType.WALL);
        }
      }
      return data;
    }

    for (let x = 0; x < CHUNK_SIZE; x++) {
      data.push([]);
      for (let y = 0; y < CHUNK_SIZE; y++) {
        data[x].push(CellType.FLOOR);
      }
    }
    if (this.left.type === "wall" || this.left.type === "connecter") {
      for (let y = 0; y < CHUNK_SIZE; y++) {
        data[0][y] = CellType.WALL;
      }
    }
    if (this.top.type === "wall" || this.top.type === "connecter") {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        data[x][0] = CellType.WALL;
      }
    }
    if (this.right.type === "wall" || this.right.type === "connecter") {
      for (let y = 0; y < CHUNK_SIZE; y++) {
        data[CHUNK_SIZE - 1][y] = CellType.WALL;
      }
    }
    if (this.bottom.type === "wall" || this.bottom.type === "connecter") {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        data[x][CHUNK_SIZE - 1] = CellType.WALL;
      }
    }
    if (this.left.type === "connecter") {
      for (
        let y = Math.ceil(CHUNK_SIZE / 2 - this.left.width);
        y < Math.floor(CHUNK_SIZE / 2 + this.left.width);
        y++
      ) {
        data[0][y] = CellType.FLOOR;
      }
    }
    if (this.top.type === "connecter") {
      for (
        let x = Math.ceil(CHUNK_SIZE / 2 - this.top.width);
        x < Math.floor(CHUNK_SIZE / 2 + this.top.width);
        x++
      ) {
        data[x][0] = CellType.FLOOR;
      }
    }
    if (this.right.type === "connecter") {
      for (
        let y = Math.ceil(CHUNK_SIZE / 2 - this.right.width);
        y < Math.floor(CHUNK_SIZE / 2 + this.right.width);
        y++
      ) {
        data[CHUNK_SIZE - 1][y] = CellType.FLOOR;
      }
    }
    if (this.bottom.type === "connecter") {
      for (
        let x = Math.ceil(CHUNK_SIZE / 2 - this.bottom.width);
        x < Math.floor(CHUNK_SIZE / 2 + this.bottom.width);
        x++
      ) {
        data[x][CHUNK_SIZE - 1] = CellType.FLOOR;
      }
    }
    return data;
  }
}

function resolveRequirement(
  req: Requirement,
  can_floor?: boolean
): StrictRequirement {
  const options = [new Floor(), new Wall(), new Connecter(getRandomInt(1, 2))];
  return req.type === "any" ? options[getRandomInt(can_floor ? 0 : 1, 2)] : req;
}

function connetableFromRequirement(
  left: Requirement,
  top: Requirement,
  right: Requirement,
  bottom: Requirement
): Connectable {
  if ([left, top, right, bottom].every((side) => side.type !== "floor")) {
    return Math.random() > 0.5
      ? new Road(
          resolveRequirement(left),
          resolveRequirement(top),
          resolveRequirement(right),
          resolveRequirement(bottom)
        )
      : new Room(
          resolveRequirement(left, true),
          resolveRequirement(top, true),
          resolveRequirement(right, true),
          resolveRequirement(bottom, true)
        );
  } else {
    return new Room(
      resolveRequirement(left, true),
      resolveRequirement(top, true),
      resolveRequirement(right, true),
      resolveRequirement(bottom, true)
    );
  }
}

class Chunk {
  private parent_map: Chunk[][];
  private x: number;
  private y: number;
  public connectable?: Connectable;

  constructor(parent_map: Chunk[][], x: number, y: number) {
    this.parent_map = parent_map;
    this.x = x;
    this.y = y;
  }

  left(): Chunk | null {
    try {
      return this.parent_map[this.x - 1][this.y];
    } catch {
      return null;
    }
  }

  top(): Chunk | null {
    try {
      return this.parent_map[this.x][this.y - 1];
    } catch {
      return null;
    }
  }

  right(): Chunk | null {
    try {
      return this.parent_map[this.x + 1][this.y];
    } catch {
      return null;
    }
  }

  bottom(): Chunk | null {
    try {
      return this.parent_map[this.x][this.y + 1];
    } catch {
      return null;
    }
  }
}

class ChunkMap {
  public map: Chunk[][];
  private center: number[];

  constructor(max_size: number) {
    this.map = [];
    this.center = [max_size, max_size];
    for (let i = 0; i < max_size * 2 + 1; i++) {
      this.map.push([]);
      for (let j = 0; j < max_size * 2 + 1; j++) {
        this.map[i].push(new Chunk(this.map, i, j));
      }
    }
  }

  getCenterChunk(): Chunk {
    return this.map[this.center[0]][this.center[1]];
  }
}

export class Dungeon {
  private map: ChunkMap;

  constructor(max_depth: number) {
    this.map = new ChunkMap(max_depth);
    this.resolveMap(this.map.getCenterChunk());
  }

  resolveMap(chunk: Chunk) {
    const seenNodesSet: Set<Chunk> = new Set();
    // chunk.connectable = new Room(
    //   new Floor(),
    //   new Floor(),
    //   new Floor(),
    //   new Floor()
    // );

    const resolveQueue: Chunk[] = [chunk];

    while (resolveQueue.length) {
      let chunk = resolveQueue.shift()!;

      if (seenNodesSet.has(chunk)) continue;
      else seenNodesSet.add(chunk);

      let left = chunk.left();
      let top = chunk.top();
      let right = chunk.right();
      let bottom = chunk.bottom();

      if (!chunk.connectable) {
        let left_requirement = left
          ? left?.connectable?.right || new Any()
          : new Wall();
        let top_requirement = top
          ? top?.connectable?.bottom || new Any()
          : new Wall();
        let right_requirement = right
          ? right?.connectable?.left || new Any()
          : new Wall();
        let bottom_requirement = bottom
          ? bottom?.connectable?.top || new Any()
          : new Wall();

        chunk.connectable = connetableFromRequirement(
          left_requirement,
          top_requirement,
          right_requirement,
          bottom_requirement
        );
      }

      if (left) resolveQueue.push(left);
      if (top) resolveQueue.push(top);
      if (right) resolveQueue.push(right);
      if (bottom) resolveQueue.push(bottom);
    }
  }

  asCell2dArray(): CellType[][] {
    const cell_array_root: CellType[][] = [];

    for (let i = 0; i < this.map.map.length; i++) {
      for (let x = 0; x < CHUNK_SIZE; x++) cell_array_root.push([]);
      for (let j = 0; j < this.map.map[i].length; j++) {
        for (let y = 0; y < CHUNK_SIZE; y++)
          cell_array_root[i * CHUNK_SIZE + y].push(CellType.NONE);
        const cell_array = this.map.map[i][j].connectable?.asCell2dArray();
        if (cell_array) {
          for (let x = 0; x < CHUNK_SIZE; x++) {
            for (let y = 0; y < CHUNK_SIZE; y++) {
              cell_array_root[i * CHUNK_SIZE + x][j * CHUNK_SIZE + y] =
                cell_array[x][y];
            }
          }
        }
      }
    }

    // Fix the matrix by transposing it
    const final_cell_array_root: CellType[][] = [];
    for (let i = 0; i < cell_array_root[0].length; i++) {
      final_cell_array_root.push([]);
      for (let j = 0; j < cell_array_root.length; j++) {
        final_cell_array_root[i][j] = cell_array_root[j][i];
      }
    }

    return final_cell_array_root;
  }

  getPlayerSpawnPoints(num_players: number): Vector[] {
    return [];
  }
}

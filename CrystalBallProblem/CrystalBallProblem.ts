export default function CrystalBallProblem(floor: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(floor.length));

  let i = jmpAmount;
  for (; i < floor.length; i += jmpAmount) {
    if (floor[i]) {
      break;
    }
  }
  i -= jmpAmount;
  for (let j = 0; j < jmpAmount && i < floor.length; j++) {
    if (floor[i]) {
      break;
    }
  }
  return -1;
}

// O(sqrt(N))

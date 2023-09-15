function solution(command) {
  let direction = 0;
  let coordinates = [0, 0];
  const commands = command.split("");
  const go = [
    { G: [0, 1], B: [0, -1] },
    { G: [1, 0], B: [-1, 0] },
    { G: [0, -1], B: [0, 1] },
    { G: [-1, 0], B: [1, 0] },
  ];

  commands.forEach((command) => {
    switch (command) {
      case "R":
        direction = direction + 1 > 3 ? 0 : direction + 1;
        break;
      case "L":
        direction = direction - 1 < 0 ? 3 : direction - 1;
        break;
      default:
        const [dX, dY] = go[direction][command];
        coordinates = coordinates.map(([x, y]) => {
          return [x + dX, y + dY];
        });
        break;
    }
  });

  return coordinates;
}

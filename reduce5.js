const scores = [90, 30, 20, 75, 85, 95, 0, 55, 60, 40];

const minMax = scores.reduce(
  (acc, score) => [Math.min(acc[0], score), Math.max(acc[1], score)],
  [100, 0]
);

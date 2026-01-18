class Point {
  createdAt: number;
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.createdAt = Date.now();
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof Point>; // === Point
//InstanceType<T> artinya:
// Ambil tipe object yang dihasilkan oleh new T()

function moveRight(point: PointInstance) {
  point.x += 5;
}

const point = new Point(3, 4);
moveRight(point);
point.x; // => 8

//NOTES:
// typeof → naik ke level constructor
// InstanceType → turun kembali ke instance

// | Expression                   | Artinya                  |
// | ---------------------------- | ------------------------ |
// | `Point`                      | tipe instance            |
// | `typeof Point`               | tipe constructor         |
// | `InstanceType<typeof Point>` | tipe hasil `new Point()` |

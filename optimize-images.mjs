
import sharp from "sharp";
import path from "node:path";
import { mkdir } from "node:fs/promises";

const assetsDir = path.resolve("src/assets");
const outputDir = path.join(assetsDir, "optimized");

const files = [
  "cat-carpet-tiles.jpeg",
  "cat-wall-panels.jpg",
  "cat-wallpapers.jpg",
  "cat-window-blinds.jpg",
  "cat-artificial-grass.jpg",
];

await mkdir(outputDir, { recursive: true });

for (const file of files) {
  const input = path.join(assetsDir, file);
  const output = path.join(
    outputDir,
    `${path.parse(file).name}.webp`,
  );

  await sharp(input)
    .rotate()
    .resize({
      width: 1000,
      height: 800,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 78, effort: 5 })
    .toFile(output);

  console.log(
    `Optimized: ${file} -> ${path.relative(process.cwd(), output)}`
  );
}

console.log("\nDone. Original images have not been changed.");

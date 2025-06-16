import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  entry: "./bundle-entry.js",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "anki-apkg-export.bundle.js",
  },
  resolve: {
    fallback: {
      path: "path-browserify",
      os: "os-browserify/browser",
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      fs: false,
      buffer: false,
      vm: false,
    },
  },
};

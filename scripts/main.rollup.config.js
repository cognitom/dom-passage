import { join } from "path"
import resolve from "rollup-plugin-node-resolve"
import { uglify } from "./uglify.js"

const production = !process.env.ROLLUP_WATCH
const nodeModules = join(__dirname, "..", "node_modules")

export default {
  input: "lib/index.js",
  plugins: [resolve(), production && uglify()],
  output: {
    file: "index.js",
    format: "umd",
    name: "dominiq",
    sourcemap: !production
  }
}
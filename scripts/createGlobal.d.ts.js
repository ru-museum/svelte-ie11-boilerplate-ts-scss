// @ts-check

/** 
 *  Create GLOBAL.D.TS  
 * 
 *   src/global.d.ts を生成します。
 * 　スクリプト setupTypeScript.js を基にしています。
 */

const fs = require("fs")
const path = require("path")
const { argv } = require("process")

const projectRoot = argv[2] || path.join(__dirname, "..")

// Add global.d.ts
const dtsPath =  path.join(projectRoot, "src", "global.d.ts")
fs.writeFileSync(dtsPath, `/// <reference types="svelte" />`)

console.log("Converted to TypeScript.")

if (fs.existsSync(path.join(projectRoot, "node_modules"))) {
  console.log("\nYou will need to re-run your dependency manager to get started.")
}


import fs from 'fs/promises'
import path from 'path'
import { describe, it, expect, beforeAll } from "vitest"

const res = await fs.readFile(path.join(import.meta.dirname, "temp.json"), { encoding: 'utf-8' })

console.log(res);

await fs.writeFile('test.json', JSON.stringify({
    body: [res]
}, null, 2))


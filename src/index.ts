import Tinypool from 'tinypool'

const pool = new Tinypool({
  filename: new URL('./worker/index.js', import.meta.url).href,
})
const result = await pool.run({ a: 4, b: 6 })
console.log(result) // Prints 10

// Make sure to destroy pool once it's not needed anymore
// This terminates all pool's idle workers
await pool.destroy()
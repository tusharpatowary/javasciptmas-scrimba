const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

 /* write code here */
const sortedAZ = [...xmasGifts].sort((a, b) => a.localeCompare(b));

console.log('A-Z: ', sortedAZ) 
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

/* write code here */
const sortedZA = [...xmasGifts].sort((a, b) => b.localeCompare(a));
console.log('Z-A: ', sortedZA) 
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]
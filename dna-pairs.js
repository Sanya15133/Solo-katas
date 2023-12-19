function dnaPairs(dna) {

  // 'A' = 'T',
  // 'C' = 'G'
let dnaArray = []

for (let i = 0; i < dna.length; i++) {

  if (dna[i] === 'A') {
    dnaArray.push(['A', 'T'])
  } else if (dna[i] === 'T') {
    dnaArray.push(['T', 'A'])
} else if (dna[i] === 'C') {
  dnaArray.push(['C', 'G'])
} else if (dna[i] === 'G') {
  dnaArray.push(['G', 'C'])
} 

}

return dnaArray


}

module.exports = dnaPairs;

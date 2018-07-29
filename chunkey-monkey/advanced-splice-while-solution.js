// Chunkey Monkey
// Advanced Solution

/*
  1. (['a', 'b', 'c', 'd'], 2) is expected to be [ [ 'a', 'b' ], [ 'c', 'd' ] ]
  2. ([0, 1, 2, 3, 4, 5], 3) is expected to be [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
  3. ([0, 1, 2, 3, 4, 5], 2) is expected to be [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
  4. ([0 ,1, 2, 3, 4, 5], 4) is expected to be [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
*/

function chunkeyArrayInGroups(arr, size) {
    var res = [];

    while (arr.length) {
        res.push(arr.splice(0, size));
    }
    return res;
}

console.log(chunkeyArrayInGroups(['a', 'b', 'c', 'd'], 2));
console.log(chunkeyArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkeyArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkeyArrayInGroups([0, 1, 2, 3, 4, 5], 4));

// Solution
// [ [ 'a', 'b' ], [ 'c', 'd' ] ]
// [ [ 0, 1, 2 ], [ 3, 4, 5 ] ]
// [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
// [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
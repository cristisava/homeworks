// ex 1
for(i of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]){
    console.log(i)
}

// ex 2
for(i=1; i<=20; i++){
    if(i%2 !==0)
    console.log(i)
}

// ex 3
var arr = [11,23,5,70,30]
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum)

// ex 4
var list = [1,3,7,12,22,4,8,33]
var max = Math.max(...list);
console.log(max)

// ex 5
var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[2]);


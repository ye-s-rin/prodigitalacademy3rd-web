let sample = [1,2,3, "a", "b", "c"];
sample.splice(3, 2, "d", "e", "f")
console.log(sample)

sample = [1,2,3, "a", "b", "c"];
sample.forEach(function(item, index, array){
 console.log(item);
 console.log(index);
 console.log(array);
 console.log('-'.repeat(10))
})

/** map filter concat은 배열을 새로 생성
 * 배열의 주소가 변경
 * react는 배열 주소를 기반으로 변경 판단
 * 결론: 3가지 함수는 react에서 자주 사용
 */
console.log("map filter concat reduce")

sample = [1,2,3];
let sample2 = sample.map(function(value, index, array){
 return value * 10;
})
console.log(sample2)

sample = [1, 2, 3, 4, 5];
sample2 = sample.filter(function(value, index, array){
    if (value>10){
        return true;
    }
    else {
        return false;
    }
})
console.log(sample2)

sample = [1, 2, 3, 4, 5]
sample2 = sample.concat(6, 7, 8)
console.log(sample)
console.log(sample2)

sample = [1, 3, 5, 7, 9];
sample2 = sample.reduce(function(prev, cur, curIdx, 
array){
 console.log(prev)
 console.log(cur)
 console.log('-------')
 return cur + prev
}, 0)
console.log(sample2)

/**
>
 node .\08_array.js
[
  1,   2,   3,   'd',
  'e', 'f', 'c'
]
1
0
[ 1, 2, 3, 'a', 'b', 'c' ]
----------
2
1
[ 1, 2, 3, 'a', 'b', 'c' ]
----------
3
2
[ 1, 2, 3, 'a', 'b', 'c' ]
----------
a
3
[ 1, 2, 3, 'a', 'b', 'c' ]
----------
b
4
[ 1, 2, 3, 'a', 'b', 'c' ]
----------
c
5
[ 1, 2, 3, 'a', 'b', 'c' ]
----------
map filter concat reduce
[ 10, 20, 30 ]
[]
[ 1, 2, 3, 4, 5 ]
[
  1, 2, 3, 4,
  5, 6, 7, 8
]
0
1
-------
1
3
-------
4
5
-------
9
7
-------
16
9
-------
25
 */
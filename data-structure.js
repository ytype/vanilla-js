arr = new Array()
console.log(arr)
arr = []
console.log(arr)
arr.push(1)
arr.push(2)
arr.push(3)

// push: 배열 끝에 요소 추가
console.log(arr)
arr.pop()
arr.pop()

// pop: 배열 끝에 요소 삭제 및 출력 가능
console.log(arr.pop())

// unshift: 배열 앞에서 부터 요소 추가
arr.unshift(1)
arr.unshift(2)
console.log(arr)
//[ 2, 1 ]

// shift: 배열 앞에서 부터 요소 삭제
arr.shift()
console.log(arr.shift())

// indexOf: 배열 요소 위치 찾기 없으면 -1
console.log( arr.indexOf(2) )

arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)

// slice: n번 인덱스 부터 m개 제거
arr.splice(0, 1) //0번 인덱스 부터 1개 제거
console.log(arr) 

obj = new Object()
obj = {}

// object는 파이썬 딕셔너리 처럼 사용가능
obj['shin'] = []
obj['shin'].push(1)
obj['shin'].push(2)
console.log(obj['shin'])
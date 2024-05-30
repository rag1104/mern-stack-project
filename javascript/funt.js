//sETS

const arr = [10,30,30,340,340,20,10]
console.log(arr.length);

const s =new Set([10,20,30,40]);
s.add(60)
s.add("hello developers");
console.log(s);

length =0;
for(let ele of s){
    length++;
}
console.log(length);
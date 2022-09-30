class queue{
    constructor(){
        this.item=[];
    }
   enqueue(element){
    this.item.push(element);
   }
   dequeue(){
    this.item.shift();
   }
   front(){
    return this.item[0];
   }
   isEmpty(){
    if(this.item.length>0){
        return false;
    }else{
        return true;
    }
   }
}
let q= new queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
console.log(q.item);
q.dequeue();
console.log(q.item);
console.log(q.front);
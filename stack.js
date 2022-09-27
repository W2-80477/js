class stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length==0
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString());
    }
}
// const stack =new stack();
// console.log(stack.isEmpty());


stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size());
console.print();



console.log("hellpo s");

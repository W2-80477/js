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
const stackInt =new stack();
console.log(stackInt.isEmpty());


stackInt.push(20)
stackInt.push(10)
stackInt.push(30)
stackInt.push(50)
stackInt.push(11)
console.log(stackInt);
console.log(stackInt.size())
console.log(stackInt.peek());

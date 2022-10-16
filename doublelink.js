class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null
    }
}
class doubleList{
    constructor(head=null){
        this.head=head;
        this.tell=head;

        if(head==null){
            this.length=0;
        }
        else{
            this.length=1;
        }
    }
    print(){
        let =current=this.head;
        while()
    }
}

let node=new Node(100);
let list=new doubleList(node);

console.log(node);
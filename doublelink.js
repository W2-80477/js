class Node{

    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
            
    }
}
class DoublyLinkedList{
    constructor(head=null){
        this.head=head;
        this.tail=head;
        if(head==null){
            this.lenght=0;
        }else{
            this.length=1;
        }
    }
    size(){
        return this.lenght;
    }
    inserAt(position, element){
        let newnode= new Node(element)

        if(position<0){
            console.log("please enter the posative number ");
            return;
        }
    }
}

let node=new Node(1);
let list=new DoublyLinkedList(node);

console.log(node);
class Node{
constructor(value){
    this.value=value;
    this.next=null;
}
}
class linkedList{
    constructor(head){
        this.head=head;
    }
    print(){
        let current=this.head;

        if(current==null){
            console.log("linkedList is empty");
            return;
        }
        while(current!=null){
            console.log(current.value);
            current=current.next;
        }

    }
    clear(){
        this.head=null;
    }
    getLast(){
        if(this.head==null){
            console.log("linkedList is empty");
            return;
        }
        let current=this.head;
        while(current.next!=null) {
            current=current.next;
        }
        return current;
    }
    getFirst(){
        if(this.head==null){
            console.log("linkedList is empty");
            return;
        }
        return this.head;
    }

}
linkedList.prototype.insertBegning=function(value){
    let newnode= new Node(value);
    newnode.next=this.head;
    this.head=newnode;
    return this.head;
}


let node=new Node(1000);
let node1=new Node(2000);
node.next=node1;
let LinkedList=new linkedList(node)

// LinkedList.print();
// LinkedList.clear();
// LinkedList.print();
//  console.log(LinkedList.getLast());
//  console.log(LinkedList.getFirst());
 LinkedList.insertBegning(500);
 LinkedList.print();




// let node1=new Node(10);
// let node2=new Node(20);
// let node3=new Node(30);

// node1.next=node2;
// node2.next=node3;
// node3.next =null;

// console.log(node1);
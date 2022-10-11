// Bubble sort
// function bubbleSort(arr) {
//     for(let i=0; i<arr.length;i++){
//         for(let j=0; j<arr.length-i-1; i++){
//             if(arr[j]>arr[j+1]){
//                 let temp=arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp;

//              }
//         }
//     }
//     console.log(arr);
// } 
// let a =[5,4,1,10,98,23];
// bubbleSort(a)

// SlectionSort
// function selectionSort(arr){
//     let n=arr.length;
//     let min_idx;
//     for(i=0;i<n-1;i++){
//         min_idx=i;
//         for(j=i+1;j<n;j++){
//             if(arr[j]<arr[min_idx]){
//                 min_idx=j;
//             }
//         }
//         let temp=arr[i];
//         arr[i]=arr[min_idx];
//         arr[min_idx]=temp;
//     }
//     console.log(arr);
// }
// selectionSort([6,4,1,3,8,0]);



// insertion sort
// function insertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i];

//         let j=i-1;
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j];
//             j--;
//         }
//         arr[j+1]=key;
//     }
//     console.log(arr);
// }
// let a=[20,5,40,60,10,30];
// insertionSort(a);


// Searching
// let arr=[3,6,1,8,0];
// let x=8;
// function linearSearch(arr,x){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==x){
//             return i;
//         }
//     }
// }
// console.log(linearSearch([4,2,5,5,7],5))


// BinarySearch
// function binarySearch(arr,x){
//     let left=0;
//     let right=arr.length-1;
  
//     while (left=right) {
//       let mid=parseInt(left+right)/2;
      
//       if(arr[mid]==x){
//         return mid;
      
//       }else if(arr[mid]>x){
//         right=mid-1;
//       }else{
//         left=mid+1;
//         }
//       }
//     }
  
//   console.log(binarySearch([2,4,1,5,6], 1))
//1. function can be stored in a vraible
// function greet(name){
//     console.log("Hello", name)
//     }
//     var myfn = greet;
//     myfn("satyam");

    //2. pass a function as a paramter to antother finction
    // function greet(){
    //     return "Hello";
    //     }
    //     function talk(fn){
    //     console.log(fn());
    //     }
    //     var myfn = greet;
    //     talk(myfn);

        // 3.function can return function
        function greet(){
            return "Hello";
            }
            function talk(myfn){
            console.log(myfn);
            }
            var myfn = greet;
            talk(myfn);

            

//   4.


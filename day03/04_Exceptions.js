console.log('Test started here');

try{

    console.log(result);

}catch(e){

    console.log('An error has occurred during runtime');
    console.log(e); // reference variable of the error object that was created in try block when there is an error

}finally{

    console.log('Error handling is completed');

}


console.log('Test ended here');

console.log('----------------------------------------------');

console.log('New Test Started here');

// throw new Error('Throwing a new error because something went wrong in the test');

console.log('Test is completed here');






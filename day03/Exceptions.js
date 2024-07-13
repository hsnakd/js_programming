console.log('Test started here');

try{

    console.log(result);

}catch(e){

    console.log('An error has occured during runtime');
    console.log(e); // reference variable of the error object that was created in try block when there is an error

}finally{

    console.log('Error handling is complleted');

}


console.log('Test edned here');

console.log('----------------------------------------------');

console.log('New Test Started here');

// throw new Error('Throwing a a new error because something went wrong in the test');

console.log('Test is complted here');






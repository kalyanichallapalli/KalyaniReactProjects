function PrintNumbers(start, end){
    console.log(start);

    if(start < end){
        PrintNumbers((start + 1), end);
    }
}

PrintNumbers(1, 100);

function PrintNumbers(start, end){
   console.log(start)

   if(end > start){
       PrintNumbers((start+1), end)
   }
}
PrintNumbers(1,10)

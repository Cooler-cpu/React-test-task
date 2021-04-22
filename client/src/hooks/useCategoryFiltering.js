const sortByIncrement = (arr, columnName) => {
    arr.sort((a, b) => a[columnName] > b[columnName] ? 1 : -1);
    return arr
}

const sortByDecrement= (arr, columnName) => {
    arr.sort((a, b) => a[columnName] < b[columnName] ? 1 : -1);
    return arr
}



const useCategoryFiltering =  (data, category, columnName, contains) => {
    let dataTmp = [];


    if(category === 'increment'){
        dataTmp = sortByIncrement(data, columnName)
        return dataTmp
        
    }

    if(category === 'decrement'){
        dataTmp = sortByDecrement(data, columnName)
        return dataTmp
    }

    if(category === 'contains'){
       
       
       data.forEach(element => {
        let dataContains = contains;

        if( columnName === 'quantity' || columnName === 'distance'){
            dataContains = Number(contains);
        }

           if( element[columnName] === dataContains){
          
            dataTmp.push(element);
           }
       });


        return dataTmp

    }

}

export default useCategoryFiltering;
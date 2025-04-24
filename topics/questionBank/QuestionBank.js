    // Program to remove duplicate item from array

    const arr = [1, 2, 3, 4, 1, 2];
    const b = [];
    for (let i = 0; i < arr.length; i++) {
      if (b.indexOf(arr[i]) == -1) {
        b.push(arr[i]);
      }
    }
    console.log("removed array value", b);

    const arr2 = [1, 2, 3, 4, 1, 2];
    const c = [];
    arr.filter((dup) => {
      if (b.indexOf(arr[dup]) == -1) {
        b.push(arr[dup]);
      }
    });
    console.log("removed array value", b);

    function removeDuplicates(arr) {
      let uniqueElements = [];
      for (let elem of arr) {
        console.log("elem", elem);
        
        if (!uniqueElements.includes(elem)) {
          uniqueElements.push(elem);
        }
      }
      return uniqueElements;
    }

    console.log(removeDuplicates([1, 2, 3, 1, 2, 4])); 
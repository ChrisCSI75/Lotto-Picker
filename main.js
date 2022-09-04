function lottoPicker() {

    // check if circle element exists, and delete it if it does
    // prevent duplicate lotto number circles from popping up
    if (document.getElementsByClassName('circle').length) {
        const removeElements = (elms) => elms.forEach(el => el.remove());
        removeElements( document.querySelectorAll(".circle") );
    }

    if (document.getElementsByClassName('ballHeading').length) {
        const removeElements = (elms) => elms.forEach(el => el.remove());
        removeElements( document.querySelectorAll(".ballHeading") );
    }

    let arr = [];
    while(arr.length < 6){
        let r = Math.floor(Math.random() * 45) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        let add = true;

        // looks for duplicate numbers
        // if duplicate exists it does not add it to the array
        for(let y = 0; y < 45; y++) {
            if(arr[y] == arr) {
                add = false;
            }
        }
    }

    let newHeading = document.createElement("span");
    newHeading.setAttribute('class', 'ballHeading');
    newHeading.textContent="Lotto Numbers";
    lotto.append(newHeading);

    //sorts array by ascending order and adds it into new array
    const sorted = [...arr].sort((a,b)=>a-b);

    // for each element of array it adds it creates an element
    // and adds the class circle to each each
    // and then appends it to the lotto element
    sorted.forEach(function (content) {
        let lotto = document.getElementById("lotto");
        let circle = document.createElement('span');
        circle.setAttribute('class', 'circle m-3');
        circle.textContent = content;
        lotto.append(circle);
    });

    let bonusArr = [];
    while(bonusArr.length < 2){
        let r = Math.floor(Math.random() * 12) + 1;
        if(bonusArr.indexOf(r) === -1) bonusArr.push(r);
        let add = true;

        // looks for duplicate numbers
        // if duplicate exists it does not add it to the array
        for(let y = 0; y < 12; y++) {
            if(bonusArr[y] == bonusArr) {
                add = false;
            }
        }
    }

    let newHeading2 = document.createElement("span");
    newHeading2.setAttribute('class', 'ballHeading');
    newHeading2.textContent="Bonus Numbers";
    bonus.append(newHeading2);    

    //sorts array by ascending order and adds it into new array
    const bonusSorted = [...bonusArr].sort((a,b)=>a-b);

    // for each element of array it adds it creates an element
    // and adds the class circle to each each
    // and then appends it to the lotto element
    bonusSorted.forEach(function (content) {
        let bonus = document.getElementById("bonus");
        let circle = document.createElement('span');
        circle.setAttribute('class', 'circle m-3');
        circle.textContent = content;
        bonus.append(circle);
    });

    console.log(sorted);
    console.log(bonusSorted);
    console.log("finished");
}
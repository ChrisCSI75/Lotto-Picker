const btn = document.querySelector('#mainButton');        
const radioButtons = document.querySelectorAll('input[name="gameType"]');
btn.addEventListener("click", () => {
    let selectedGame;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedGame = radioButton.value;
            break;
        }
    }
    // show the output:
    console.log(selectedGame);
    // alert(selectedGame);

    //select the game page to show
    if (selectedGame == "Lotto") {
        document.location.href = "lotto.html";
    } else if (selectedGame == "Set for Life") {
        document.location.href = "setForLife.html";
    } else if (selectedGame == "Euro Millions") {
        document.location.href = "euro.html";
    } else {
        alert("Please select a game type to proceed")
    }
});


function lottoPicker(game) {
    var choice = game;

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

    var maxNum = 1;
    var maxBonus = 1;
    var mainNums = 0;
    var bonusNums = 0;

    // console.log(maxNum);
    // console.log(maxBonus);
    // console.log(choice);

    if (choice == "lotto") {
        maxNum = 49;
        maxBonus = 12;
        mainNums = 6;
        bonusNums = 0;
    } else if (choice == "euro") {
        maxNum = 58;
        maxBonus = 18
        mainNums = 5;
        bonusNums = 2;
    } else if (choice =="life") {
        maxNum = 45;
        maxBonus = 10;
        mainNums = 5;
        bonusNums = 1;
    }

    let arr = [];
    while(arr.length < mainNums){
        let r = Math.floor(Math.random() * maxNum) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        let add = true;

        // looks for duplicate numbers
        // if duplicate exists it does not add it to the array
        for(let y = 0; y < maxNum; y++) {
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
    while(bonusArr.length < bonusNums){
        let r = Math.floor(Math.random() * maxBonus) + 1;
        if(bonusArr.indexOf(r) === -1) bonusArr.push(r);
        let add = true;

        // looks for duplicate numbers
        // if duplicate exists it does not add it to the array
        for(let y = 0; y < maxBonus; y++) {
            if(bonusArr[y] == bonusArr) {
                add = false;
            }
        }
    }

    if (choice != "lotto") {
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
    }

    // console.log(sorted);
    // console.log(bonusSorted);
    // console.log(maxNum);
    // console.log(maxBonus);
    console.log("finished");
}
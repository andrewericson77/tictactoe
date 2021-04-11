
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");

let c1Mark,c2Mark, c3Mark, c4Mark, c5Mark, c6Mark, c7Mark, c8Mark, c9Mark;

/* let turnCounter = 0;

function turn(mark, pos){
    addMark(pos, mark);
    checkBoard(mark);
}

function fillSlot(pos) {
    const mark = turnCounter % 2 == 0 ? "x" : "o"
    addMark(pos, mark );
    checkBoard(mark );
}     */

//turn tracker
let turnCounter = 0;

function fillSlot(pos) {
console.log(pos); //slot clicked

if ( turnCounter % 2 == 0) {
	//even number (x) goes first
    let mark = ("x");       
    addMark(pos, mark);
    checkBoard("x");
}else{
    //odd number (o)
    let mark = ("o");       
    addMark(pos, mark);
    checkBoard("o");
}
turnCounter++;
}

function addMark(postion, mark){

    let pos = postion;
    let textnode = document.createTextNode(`${mark}`);

    switch (pos) {
        case 'c1':
    c1.appendChild(textnode);
    c1Mark = mark;
        break;
        case 'c2':
    c2.appendChild(textnode);
    c2Mark = mark;
        break;
        case 'c3':
    c3.appendChild(textnode);
    c3Mark = mark;
        break;
        case 'c4':
    c4.appendChild(textnode);
    c4Mark = mark;
        break;
        case 'c5':
    c5.appendChild(textnode);
    c5Mark = mark;
        break;
        case 'c6':
    c6.appendChild(textnode);
    c6Mark = mark;
        break;
        case 'c7':
    c7.appendChild(textnode);
    c7Mark = mark;
        break;
        case 'c8':
    c8.appendChild(textnode);
    c8Mark = mark;
        break;
        case 'c9':
    c9.appendChild(textnode);
    c9Mark = mark;
        break;
    }
}



function checkBoard(z) {
    if (c1Mark === z && c2Mark === z && c3Mark === z){
        alert(`${z} wins!`);
    } else if (c3Mark === z && c4Mark === z && c5Mark === z){
        alert(`${z} wins!`);
    } else if (c7Mark === z && c8Mark === z && c9Mark === z){
        alert(`${z} wins!`);
    } else if (c1Mark === z && c4Mark === z && c7Mark === z) {
        alert(`${z} wins!`);
    }
}


/* function restartGame(){

        let cellArray = [c1Mark, c2Mark, c3Mark, c4Mark, c5Mark, c6Mark, c7Mark, c8Mark, c9Mark];

        for(i = 0; i< 10; i++){
            if (cellArray[i].hasChildNodes()) {
                //cellArray[i].removeChild(cellArray[i]);
                cellArray[i].removeChild(cellArray[i].firstChild);

            }
        } */

        /* function restartGame() {
            const cellArray = [c1Mark, c2Mark, c3Mark, c4Mark, c5Mark, c6Mark, c7Mark, c8Mark, c9Mark];
          
            for (const cell of cellArray) {
              while (cell.firstChild)
                cell.removeChild(cell.firstChild);
            } */

        /* if (c1.hasChildNodes()) {
            c1.removeChild(c1.childNodes[0]);
        }

        if (c2.hasChildNodes) {
            c2.removeChild(c2.childNodes[0]);
        } 
        
        if (c3.hasChildNodes) {
            c3.removeChild(c3.childNodes[0]);
        }

        if (c4.hasChildNodes) {
            c4.removeChild(c4.childNodes[0]);
        }

        if (c5.hasChildNodes) {
            c5.removeChild(c5.childNodes[0]);
        } 
        
        if (c6.hasChildNodes) {
            c6.removeChild(c6.childNodes[0]);
        } 

        if (c7.hasChildNodes) {
            c7.removeChild(c7.childNodes[0]);
        }

        if (c8.hasChildNodes) {
            c8.removeChild(c8.childNodes[0]);
        } 
        
        if (c9.hasChildNodes) {
            c9.removeChild(c9.childNodes[0]);
        } 
 */
        

    


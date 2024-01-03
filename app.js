let boxes = document.querySelectorAll(".boxes");
let resetBtn = document.querySelector(".reset");
let msg = document.querySelector(".win");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector(".new-btn");

let count = 0;
let turno = true;

const winningpattern = [

    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [3, 4, 5],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [6, 7, 8],
];

let reset = () => {
    turno = true;
    enableboxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            box.style.color="#353535";
            turno = false;
        }
        else {
            // box.style.backgroundColor="yellow";
            box.innerText= "X";
            box.style.color="maroon";
            turno = true;
        }
        box.disabled = true;
        count++
        let iswinner = checkwinner();
        if (count == 9 && !iswinner) {
            draw();
        }

    });
});

let draw = () => {
    msg.innerText = "your game is draw";
    msgContainer.classList.remove("hide");
    disabelboxes();
}

let disabelboxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}


let enableboxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

let showwinner = (winner) => {
    msg.innerText = `congratulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabelboxes();
}

const checkwinner = () => {
    for (let pattern of winningpattern) {
        let posval1 = boxes[pattern[0]].innerText
        let posval2 = boxes[pattern[1]].innerText
        let posval3 = boxes[pattern[2]].innerText

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 == posval2 && posval2 == posval3) {
                showwinner(posval1);
            }
        }
    };
};

resetBtn.addEventListener("click", reset);
newGame.addEventListener("click", reset);
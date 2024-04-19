 let barr = ["red", "blue", "green", "yello"];
    let body = document.querySelector("body");
    let start = false;
    let level = 0;
    let sbod = document.querySelector("h3");
    let btn = document.querySelectorAll(".btn");
    let usersq = [];
    let gameSq = [];
    let score = document.querySelector("#score");
    
    
    function lup() {
        body.style.backgroundColor = "white";
        sbod.innerHTML = `Game Started - Level : ${level}`;
        score.innerText = "";
        usersq = [];
        level++
        let ranindex = Math.floor(Math.random() * 3);
        let randColor = barr[ranindex];
        let randBtns = document.querySelector(`.${randColor}`);
        flash(randBtns);
        gameSq.push(randColor);
    
    
    }
    function userflash(btn) {
        btn.classList.add("userflash");
        setTimeout(function () {
            btn.classList.remove("userflash");
        }, 250);
    
    }
    function flash(btn) {
        btn.classList.add("flash");
        setTimeout(function () {
            btn.classList.remove("flash");
        }, 250);
    
    }
    
    body.addEventListener("keypress", function () {
        if (start == false) {
            lup();
            start = true;
        }
    });
    
    function ans(idx) {
        if (usersq[idx] == gameSq[idx]) {
            if (gameSq.length == usersq.length) {
                setTimeout(lup, 1000);
            }
        }
    
    
    
        else {
    
            sbod.innerText = "Game over ! Press any key to start again.";
            score.innerText = `Your Score is : ${--level}`;
    
            reset();
           
    
    
        }
    }
    
    function btnPress() {
        let btn = this;
        userflash(btn);
        let id = btn.getAttribute("id");
    
        usersq.push(id)
    
        ans(usersq.length - 1);
    
    }
    
    let allBtn = document.querySelectorAll(".btn");
    for (btns of allBtn) {
        btns.addEventListener("click", btnPress);
    }
    function reset() {
         start = false;
         level = 0;
        usersq = [];
        gameSq = [];
        body.style.backgroundColor = "red";
    
    
    
    }

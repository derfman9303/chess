class Chess {
    constructor() {
        this.pieces        = [];
        this.turn          = true;
        this.selectedPiece = null;
        this.squares       = document.getElementsByClassName('square');
        this.grid          = [
            [
                this.squares[0],
                this.squares[1],
                this.squares[2],
                this.squares[3],
                this.squares[4],
                this.squares[5],
                this.squares[6],
                this.squares[7],
            ],
            [
                this.squares[8],
                this.squares[9],
                this.squares[10],
                this.squares[11],
                this.squares[12],
                this.squares[13],
                this.squares[14],
                this.squares[15],
            ],
            [
                this.squares[16],
                this.squares[17],
                this.squares[18],
                this.squares[19],
                this.squares[20],
                this.squares[21],
                this.squares[22],
                this.squares[23],
            ],
            [
                this.squares[24],
                this.squares[25],
                this.squares[26],
                this.squares[27],
                this.squares[28],
                this.squares[29],
                this.squares[30],
                this.squares[31],
            ],
            [
                this.squares[32],
                this.squares[33],
                this.squares[34],
                this.squares[35],
                this.squares[36],
                this.squares[37],
                this.squares[38],
                this.squares[39],
            ],
            [
                this.squares[40],
                this.squares[41],
                this.squares[42],
                this.squares[43],
                this.squares[44],
                this.squares[45],
                this.squares[46],
                this.squares[47],
            ],
            [
                this.squares[48],
                this.squares[49],
                this.squares[50],
                this.squares[51],
                this.squares[52],
                this.squares[53],
                this.squares[54],
                this.squares[55],
            ],
            [
                this.squares[56],
                this.squares[57],
                this.squares[58],
                this.squares[59],
                this.squares[60],
                this.squares[61],
                this.squares[62],
                this.squares[63],
            ],
        ];
    }

    initializeBoard() {
        this.paintBoard();

        this.pieces = [
            new Queen(this.grid, 7, 3, "white"),
        ];
    }

    getValidMoves(r, s) {
        for (let p = 0; p < this.pieces.length; p++) {
            if (this.grid[this.pieces[p].row][this.pieces[p].square] === this.grid[r][s]) {
                this.pieces[p].validMoves();
                this.selectedPiece = p;
            }
        }
    }

    paintBoard() {
        for (let r = 0; r < this.grid.length; r++) {
            for (let s = 0; s < this.grid[r].length; s++) {
                if ((r % 2 === 0 && s % 2 === 1) || (r % 2 === 1 && s % 2 === 0)) {
                    this.grid[r][s].classList.add("dark");
                } else {
                    this.grid[r][s].classList.add("light");  
                }
            }
        }
    }

    switchTurns() {
        this.turn = !this.turn;
    }

    getTurn() {
        let result = "black";

        if (this.turn) {
            result = "white";
        }

        return result;
    }

    getSelectedPiece() {
        return this.pieces[this.selectedPiece];
    }
}

class Queen extends Chess {
    constructor(grid, row, square, color) {
        super(grid);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.icon   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com 
                        License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M256 112c30.88 0 56-25.12 
                        56-56S286.9 0 256 0S199.1 25.12 199.1 56S225.1 112 256 112zM399.1 448H111.1c-26.51 0-48 21.49-48 47.1C63.98 504.8 71.15 512 79.98 512h352c8.837 0 16-7.163 
                        16-16C447.1 469.5 426.5 448 399.1 448zM511.1 197.4c0-5.178-2.509-10.2-7.096-13.26L476.4 168.2c-2.684-1.789-5.602-2.62-8.497-2.62c-17.22 0-17.39 26.37-51.92 
                        26.37c-29.35 0-47.97-25.38-47.97-50.63C367.1 134 361.1 128 354.6 128h-38.75c-6 0-11.63 4-12.88 9.875C298.2 160.1 278.7 176 255.1 176c-22.75 
                        0-42.25-15.88-47-38.12C207.7 132 202.2 128 196.1 128h-38.75C149.1 128 143.1 134 143.1 141.4c0 18.45-13.73 50.62-47.95 50.62c-34.58 0-34.87-26.39-51.87-26.39c-2.909 
                        0-5.805 .8334-8.432 2.645l-28.63 16C2.509 187.2 0 192.3 0 197.4C0 199.9 .5585 202.3 1.72 204.6L104.2 416h303.5l102.5-211.4C511.4 202.3 511.1 199.8 511.1 197.4z"/></svg>`;

        this.initializePiece();
    }

    initializePiece() {
        this.grid[this.row][this.square].innerHTML = this.icon;
        this.grid[this.row][this.square].setAttribute("data-value", "white");
    }

    move(row, square) {
        this.grid[this.row][this.square].innerHTML = "";
        this.grid[this.row][this.square].setAttribute("data-value", "");

        this.row = row;
        this.square = square;

        this.initializePiece();
    }

    validMoves() {
        // up
        let r = this.row;
        let s = this.square;
        while (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            r--;
        }

        // down
        r = this.row;
        s = this.square;
        while (r < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            r++;
        }

        // left
        r = this.row;
        s = this.square;
        while (s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            s--;
        }

        // right
        r = this.row;
        s = this.square;
        while (s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            s++;
        }
        
        // up/left diagonal
        r = this.row;
        s = this.square;
        while (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            r--;
            s--;
        }

        // up/right diagonal
        r = this.row;
        s = this.square;
        while (r >= 0 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            r--;
            s++;
        }

        // down/left diagonal
        r = this.row;
        s = this.square;
        while (r < 8 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            r++;
            s--;
        }

        // down/right diagonal
        r = this.row;
        s = this.square;
        while (r < 8 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            }
            r++;
            s++;
        }
    }
}

let chess = new Chess();

chess.initializeBoard();

for (let r = 0; r < chess.grid.length; r++) {
    for (let s = 0; s < chess.grid[r].length; s++) {
        chess.grid[r][s].addEventListener("click", function() {
            if (chess.selectedPiece !== null) {
                if (chess.grid[r][s].classList.contains("highlighted")) {
                    chess.getSelectedPiece().move(r, s);
                } else {
                    
                }

                // Remove highlighting from all squares
                let squares = document.querySelectorAll(".highlighted");
                [].forEach.call(squares, function(s) {
                    s.classList.remove("highlighted");
                });

                chess.selectedPiece = null;
            } else {
                if (chess.grid[r][s].getAttribute("data-value") === chess.getTurn()) {
                    chess.getValidMoves(r, s);
                } 
            }
        });
    }
}
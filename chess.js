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
            new King(this.grid, 7, 4, "white", this.turn, this.pieces),
            new King(this.grid, 0, 4, "black", this.turn, this.pieces),
            new Queen(this.grid, 7, 3, "white", this.turn, this.pieces),
            new Queen(this.grid, 0, 3, "black", this.turn, this.pieces),
            new Rook(this.grid, 7, 0, "white", this.turn, this.pieces),
            new Rook(this.grid, 7, 7, "white", this.turn, this.pieces),
            new Rook(this.grid, 0, 0, "black", this.turn, this.pieces),
            new Rook(this.grid, 0, 7, "black", this.turn, this.pieces),
            new Bishop(this.grid, 7, 2, "white", this.turn, this.pieces),
            new Bishop(this.grid, 7, 5, "white", this.turn, this.pieces),
            new Bishop(this.grid, 0, 2, "black", this.turn, this.pieces),
            new Bishop(this.grid, 0, 5, "black", this.turn, this.pieces),
        ];
    }

    getValidMoves(r, s) {
        for (let p = 0; p < this.pieces.length; p++) {
            // Only pay attention to pieces still on the board with this variable
            const captured = (this.pieces[p].row === -1 || this.pieces[p].square === -1);

            if (!captured && this.grid[this.pieces[p].row][this.pieces[p].square] === this.grid[r][s]) {
                this.pieces[p].validMoves(this.getTurn());
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

    captureHighlighting(r, s, row, square, turn) {
        // Ignore the square the selected piece is currently on
        if (!(r == row && s == square)) {
            // If the piece belongs to the other player
            if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.grid[r][s].classList.add("capture");
            }
        }
    }

    initializePiece(row, square) {
        this.grid[row][square].innerHTML = this.icon;
        this.grid[row][square].setAttribute("data-value", this.color);
    }

    vacateSquare(row, square) {
        this.grid[row][square].innerHTML = "";
        this.grid[row][square].setAttribute("data-value", "");
    }
}

class King extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.icon   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                        https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M367.1 448H79.97c-26.51 0-48.01 21.49-48.01 47.1C31.96 504.8 
                        39.13 512 47.96 512h352c8.838 0 16-7.163 16-16C416 469.5 394.5 448 367.1 448zM416.1 160h-160V112h16.01c17.6 0 31.98-14.4 31.98-32C303.1 62.4 289.6 48 272 
                        48h-16.01V32C256 14.4 241.6 0 223.1 0C206.4 0 191.1 14.4 191.1 32.01V48H175.1c-17.6 0-32.01 14.4-32.01 32C143.1 97.6 158.4 112 175.1 112h16.01V160h-160C17.34 
                        160 0 171.5 0 192C0 195.2 .4735 198.4 1.437 201.5L74.46 416h299.1l73.02-214.5C447.5 198.4 448 195.2 448 192C448 171.6 430.1 160 416.1 160z"/></svg>`;

        this.initializePiece(this.row, this.square);
    }

    move(row, square, pieces) {
        this.vacateSquare(this.row, this.square);

        // If there is already a piece on the square (capture)
        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].row === row && pieces[p].square === square) {
                pieces[p].row = -1;
                pieces[p].square = -1;
            }
        }

        // Update piece position
        this.row = row;
        this.square = square;

        this.initializePiece(this.row, this.square);
    }

    validMoves(turn) {
        // up
        let r = this.row - 1;
        let s = this.square;
        if (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }

        // down
        r = this.row + 1;
        s = this.square;
        if (r < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }

        // left
        r = this.row;
        s = this.square - 1;
        if (s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }

        // right
        r = this.row;
        s = this.square + 1;
        if (s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }
        
        // up/left diagonal
        r = this.row - 1;
        s = this.square - 1;
        if (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }

        // up/right diagonal
        r = this.row - 1;
        s = this.square + 1;
        if (r >= 0 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }

        // down/left diagonal
        r = this.row + 1;
        s = this.square - 1;
        if (r < 8 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }

        // down/right diagonal
        r = this.row + 1;
        s = this.square + 1;
        if (r < 8 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
            }
        }
    }
}

class Queen extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
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

        this.initializePiece(this.row, this.square);
    }

    move(row, square, pieces) {
        this.vacateSquare(this.row, this.square);

        // If there is already a piece on the square (capture)
        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].row === row && pieces[p].square === square) {
                pieces[p].row = -1;
                pieces[p].square = -1;
            }
        }

        // Update piece position
        this.row = row;
        this.square = square;

        this.initializePiece(this.row, this.square);
    }

    validMoves(turn) {
        // up
        let r = this.row;
        let s = this.square;
        while (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r--;
        }

        // down
        r = this.row;
        s = this.square;
        while (r < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r++;
        }

        // left
        r = this.row;
        s = this.square;
        while (s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            s--;
        }

        // right
        r = this.row;
        s = this.square;
        while (s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            s++;
        }
        
        // up/left diagonal
        r = this.row;
        s = this.square;
        while (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r++;
            s++;
        }
    }
}

class Rook extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.icon   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                        https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M368 32h-56c-8.875 0-16 
                        7.125-16 16V96h-48V48c0-8.875-7.125-16-16-16h-80c-8.875 0-16 7.125-16 16V96H88.12V48c0-8.875-7.25-16-16-16H16C7.125 32 0 39.12 0 48V224l64 32c0 
                        48.38-1.5 95-13.25 160h282.5C321.5 351 320 303.8 320 256l64-32V48C384 39.12 376.9 32 368 32zM224 320H160V256c0-17.62 14.38-32 32-32s32 14.38 32 
                        32V320zM336 448H47.1C21.49 448 0 469.5 0 495.1C0 504.8 7.163 512 16 512h352c8.837 0 16-7.163 16-16C384 469.5 362.5 448 336 448z"/></svg>`;

        this.initializePiece(this.row, this.square);
    }

    move(row, square, pieces) {
        this.vacateSquare(this.row, this.square);

        // If there is already a piece on the square (capture)
        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].row === row && pieces[p].square === square) {
                pieces[p].row = -1;
                pieces[p].square = -1;
            }
        }

        // Update piece position
        this.row = row;
        this.square = square;

        this.initializePiece(this.row, this.square);
    }

    validMoves(turn) {
        // up
        let r = this.row;
        let s = this.square;
        while (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r--;
        }

        // down
        r = this.row;
        s = this.square;
        while (r < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r++;
        }

        // left
        r = this.row;
        s = this.square;
        while (s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            s--;
        }

        // right
        r = this.row;
        s = this.square;
        while (s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            s++;
        }
    }
}

class Bishop extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.icon   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                        https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M272 448h-224C21.49 448 0 469.5 0 496C0 504.8 7.164 
                        512 16 512h288c8.836 0 16-7.164 16-16C320 469.5 298.5 448 272 448zM8 287.9c0 51.63 22.12 73.88 56 84.63V416h192v-43.5c33.88-10.75 56-33 
                        56-84.63c0-30.62-10.75-67.13-26.75-102.5L185 285.6c-1.565 1.565-3.608 2.349-5.651 2.349c-2.036 0-4.071-.7787-5.63-2.339l-11.35-11.27c-1.56-1.56-2.339-3.616-2.339-5.672c0-2.063 
                        .7839-4.128 2.349-5.693l107.9-107.9C249.5 117.3 223.8 83 199.4 62.5C213.4 59.13 224 47 224 32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32c0 
                        15 10.62 27.12 24.62 30.5C67.75 106.8 8 214.5 8 287.9z"/></svg>`;

        this.initializePiece(this.row, this.square);
    }

    move(row, square, pieces) {
        this.vacateSquare(this.row, this.square);

        // If there is already a piece on the square (capture)
        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].row === row && pieces[p].square === square) {
                pieces[p].row = -1;
                pieces[p].square = -1;
            }
        }

        // Update piece position
        this.row = row;
        this.square = square;

        this.initializePiece(this.row, this.square);
    }

    validMoves(turn) {
        // up/left diagonal
        let r = this.row;
        let s = this.square;
        while (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                this.grid[r][s].classList.add("highlighted");
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.captureHighlighting(r, s, this.row, this.square, turn);
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
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
                if (chess.grid[r][s].classList.contains("highlighted") || chess.grid[r][s].classList.contains("capture")) {
                    chess.getSelectedPiece().move(r, s, chess.pieces);
                    chess.switchTurns();
                } else {
                    
                }

                // Remove highlighting from all squares
                let highlighted = document.querySelectorAll(".highlighted");
                [].forEach.call(highlighted, function(s) {
                    s.classList.remove("highlighted");
                });

                let capture = document.querySelectorAll(".capture");
                [].forEach.call(capture, function(s) {
                    s.classList.remove("capture");
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
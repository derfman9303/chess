class Chess {
    constructor() {
        this.pieces        = [];
        this.turn          = true;
        this.selectedPiece = null;
        this.squares       = document.getElementsByClassName('square');
        this.singlePlayer  = true; 
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
            new Knight(this.grid, 7, 1, "white", this.turn, this.pieces),
            new Knight(this.grid, 7, 6, "white", this.turn, this.pieces),
            new Knight(this.grid, 0, 1, "black", this.turn, this.pieces),
            new Knight(this.grid, 0, 6, "black", this.turn, this.pieces),
            new Bishop(this.grid, 7, 2, "white", this.turn, this.pieces),
            new Bishop(this.grid, 7, 5, "white", this.turn, this.pieces),
            new Bishop(this.grid, 0, 2, "black", this.turn, this.pieces),
            new Bishop(this.grid, 0, 5, "black", this.turn, this.pieces),
            new Pawn(this.grid, 6, 0, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 1, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 2, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 3, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 4, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 5, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 6, "white", this.turn, this.pieces),
            new Pawn(this.grid, 6, 7, "white", this.turn, this.pieces),
            new Pawn(this.grid, 1, 0, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 1, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 2, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 3, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 4, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 5, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 6, "black", this.turn, this.pieces),
            new Pawn(this.grid, 1, 7, "black", this.turn, this.pieces),
        ];
    }

    getValidMoves(r, s) {
        for (let p = 0; p < this.pieces.length; p++) {
            // Only pay attention to pieces still on the board with this variable
            const captured = (this.pieces[p].row < 0 || this.pieces[p].square < 0);

            if (!captured && this.grid[this.pieces[p].row][this.pieces[p].square] === this.grid[r][s]) {
                let validMoves = this.pieces[p].validMoves(this.getTurn(), this.pieces);

                if (validMoves) {
                    Object.keys(validMoves).forEach(key => {
                        let r = key.split(',')[0];
                        let s = key.split(',')[1];

                        this.grid[r][s].classList.add(validMoves[key]);
                    });
                }

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

    getIcon(piece, color) {
        let result = "";

        switch (piece) {
            case "king":
                result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                            https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M367.1 448H79.97c-26.51 0-48.01 21.49-48.01 47.1C31.96 504.8 
                            39.13 512 47.96 512h352c8.838 0 16-7.163 16-16C416 469.5 394.5 448 367.1 448zM416.1 160h-160V112h16.01c17.6 0 31.98-14.4 31.98-32C303.1 62.4 289.6 48 272 
                            48h-16.01V32C256 14.4 241.6 0 223.1 0C206.4 0 191.1 14.4 191.1 32.01V48H175.1c-17.6 0-32.01 14.4-32.01 32C143.1 97.6 158.4 112 175.1 112h16.01V160h-160C17.34 
                            160 0 171.5 0 192C0 195.2 .4735 198.4 1.437 201.5L74.46 416h299.1l73.02-214.5C447.5 198.4 448 195.2 448 192C448 171.6 430.1 160 416.1 160z"/></svg>`
                break;
            case "queen":
                result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com 
                            License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M256 112c30.88 0 56-25.12 
                            56-56S286.9 0 256 0S199.1 25.12 199.1 56S225.1 112 256 112zM399.1 448H111.1c-26.51 0-48 21.49-48 47.1C63.98 504.8 71.15 512 79.98 512h352c8.837 0 16-7.163 
                            16-16C447.1 469.5 426.5 448 399.1 448zM511.1 197.4c0-5.178-2.509-10.2-7.096-13.26L476.4 168.2c-2.684-1.789-5.602-2.62-8.497-2.62c-17.22 0-17.39 26.37-51.92 
                            26.37c-29.35 0-47.97-25.38-47.97-50.63C367.1 134 361.1 128 354.6 128h-38.75c-6 0-11.63 4-12.88 9.875C298.2 160.1 278.7 176 255.1 176c-22.75 
                            0-42.25-15.88-47-38.12C207.7 132 202.2 128 196.1 128h-38.75C149.1 128 143.1 134 143.1 141.4c0 18.45-13.73 50.62-47.95 50.62c-34.58 0-34.87-26.39-51.87-26.39c-2.909 
                            0-5.805 .8334-8.432 2.645l-28.63 16C2.509 187.2 0 192.3 0 197.4C0 199.9 .5585 202.3 1.72 204.6L104.2 416h303.5l102.5-211.4C511.4 202.3 511.1 199.8 511.1 197.4z"/></svg>`;
                break;
            case "rook":
                result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                            https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M368 32h-56c-8.875 0-16 
                            7.125-16 16V96h-48V48c0-8.875-7.125-16-16-16h-80c-8.875 0-16 7.125-16 16V96H88.12V48c0-8.875-7.25-16-16-16H16C7.125 32 0 39.12 0 48V224l64 32c0 
                            48.38-1.5 95-13.25 160h282.5C321.5 351 320 303.8 320 256l64-32V48C384 39.12 376.9 32 368 32zM224 320H160V256c0-17.62 14.38-32 32-32s32 14.38 32 
                            32V320zM336 448H47.1C21.49 448 0 469.5 0 495.1C0 504.8 7.163 512 16 512h352c8.837 0 16-7.163 16-16C384 469.5 362.5 448 336 448z"/></svg>`;
                break;
            case "bishop":
                result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                            https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M272 448h-224C21.49 448 0 469.5 0 496C0 504.8 7.164 
                            512 16 512h288c8.836 0 16-7.164 16-16C320 469.5 298.5 448 272 448zM8 287.9c0 51.63 22.12 73.88 56 84.63V416h192v-43.5c33.88-10.75 56-33 
                            56-84.63c0-30.62-10.75-67.13-26.75-102.5L185 285.6c-1.565 1.565-3.608 2.349-5.651 2.349c-2.036 0-4.071-.7787-5.63-2.339l-11.35-11.27c-1.56-1.56-2.339-3.616-2.339-5.672c0-2.063 
                            .7839-4.128 2.349-5.693l107.9-107.9C249.5 117.3 223.8 83 199.4 62.5C213.4 59.13 224 47 224 32c0-17.62-14.38-32-32-32H128C110.4 0 96 14.38 96 32c0 
                            15 10.62 27.12 24.62 30.5C67.75 106.8 8 214.5 8 287.9z"/></svg>`;
                break;
            case "knight":
                result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                            https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M19 272.5l40.62 18C63.78 292.3 68.25 293.3 72.72 
                            293.3c4 0 8.001-.7543 11.78-2.289l12.75-5.125c9.125-3.625 16-11.12 18.75-20.5L125.2 234.8C127 227.9 131.5 222.2 137.9 219.1L160 208v50.38C160 276.5 
                            149.6 293.1 133.4 301.2L76.25 329.9C49.12 343.5 32 371.1 32 401.5V416h319.9l-.0417-192c0-105.1-85.83-192-191.8-192H12C5.375 32 0 37.38 0 44c0 2.625 
                            .625 5.25 1.75 7.625L16 80L7 89C2.5 93.5 0 99.62 0 106V243.2C0 255.9 7.5 267.4 19 272.5zM52 128C63 128 72 137 72 148S63 168 52 168S32 159 32 148S41 
                            128 52 128zM336 448H47.1C21.49 448 0 469.5 0 495.1C0 504.8 7.163 512 16 512h352c8.837 0 16-7.163 16-16C384 469.5 362.5 448 336 448z"/></svg>`
                break;
            case "pawn":
                result = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - 
                            https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path fill="` + color + `" d="M105.1 224H80C71.12 224 64 231.1 64 240v32c0 8.875 7.125 
                            15.1 16 15.1L96 288v5.5C96 337.5 91.88 380.1 72 416h176C228.1 380.1 224 337.5 224 293.5V288l16-.0001c8.875 0 16-7.125 16-15.1v-32C256 231.1 248.9 224 240 
                            224h-25.12C244.3 205.6 264 173.2 264 136C264 78.5 217.5 32 159.1 32S56 78.5 56 136C56 173.2 75.74 205.6 105.1 224zM272 448H47.1C21.49 448 0 469.5 0 495.1C0 
                            504.8 7.163 512 16 512h288c8.837 0 16-7.163 16-16C320 469.5 298.5 448 272 448z"/></svg>`;
                break;
        }

        return result;
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

    // This function needs to be refactored. Probably isn't needed
    captureHighlighting(r, s, row, square, turn) {
        // Ignore the square the selected piece is currently on
        if (!(r == row && s == square)) {
            // If the piece belongs to the other player
            if (this.grid[r][s].getAttribute("data-value") !== turn) {
                this.grid[r][s].classList.add("capture");
            }
        }
    }

    initializePiece(row, square, icon = this.icon) {
        this.grid[row][square].innerHTML = icon;
        this.grid[row][square].setAttribute("data-value", this.color);
    }

    vacateSquare(row, square) {
        this.grid[row][square].innerHTML = "";
        this.grid[row][square].setAttribute("data-value", "");
    }
}

class Ai extends Chess {
    constructor() {
        super();
    }

    getMove(pieces) {
        let blackPieces = [];

        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].color === "black" && pieces[p].row >= 0 && pieces[p].square >= 0 && Object.keys(pieces[p].validMoves("black", pieces)).length > 0) {
                blackPieces.push(pieces[p]);
            }
        }

        const randomIndex = Math.floor(Math.random() * blackPieces.length);
        const validMoves  = blackPieces[randomIndex].validMoves("black", pieces);

        let correctIndex = randomIndex; 
        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p] === blackPieces[randomIndex]) {
                correctIndex = p;
            }
        }

        return (correctIndex + "," + Object.keys(validMoves)[0]);
    }
}

class King extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.moved  = false;
        this.type   = 'king';
        this.icon   = this.getIcon(this.type, color);

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
        this.moved = true;
    }

    castle(row, square, pieces) {
        this.vacateSquare(this.row, this.square);

        // Move the rook
        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].row === row && pieces[p].square === square) {
                this.vacateSquare(pieces[p].row, pieces[p].square);
                if (square === 7) {
                    pieces[p].square -= 2;
                } else if (square === 0) {
                    pieces[p].square += 2;
                }
                this.initializePiece(pieces[p].row, pieces[p].square, pieces[p].icon);
                pieces[p].moved = true;
            }
        }

        // Move the king
        if (square === 7) {
            this.square += 2;
        } else if (square === 0) {
            this.square -= 3;
        }

        this.initializePiece(this.row, this.square);
        this.moved = true;
    }

    validMoves(turn, pieces) {
        let validMoves = {};
        // up
        let r = this.row - 1;
        let s = this.square;
        if (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // down
        r = this.row + 1;
        s = this.square;
        if (r < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // left
        r = this.row;
        s = this.square - 1;
        if (s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // right
        r = this.row;
        s = this.square + 1;
        if (s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }
        
        // up/left diagonal
        r = this.row - 1;
        s = this.square - 1;
        if (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // up/right diagonal
        r = this.row - 1;
        s = this.square + 1;
        if (r >= 0 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // down/left diagonal
        r = this.row + 1;
        s = this.square - 1;
        if (r < 8 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // down/right diagonal
        r = this.row + 1;
        s = this.square + 1;
        if (r < 8 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        if (!this.moved) {
            r = this.row;
            s = this.square;
            // left castle
            if (this.grid[r][s - 1].getAttribute("data-value") == "" && this.grid[r][s - 2].getAttribute("data-value") == "" && this.grid[r][s - 3].getAttribute("data-value") == "" && this.grid[r][s - 4].getAttribute("data-value") === turn) {
                for (let p = 0; p < pieces.length; p++) {
                    if (pieces[p].row === r && pieces[p].square === s - 4 && pieces[p].type === 'rook' && !pieces[p].moved) {
                        this.grid[r][s - 4].classList.add("castle");
                    }
                }    
            }
    
            // right castle
            if (this.grid[r][s + 1].getAttribute("data-value") == "" && this.grid[r][s + 2].getAttribute("data-value") == "" && this.grid[r][s + 3].getAttribute("data-value") === turn) {
                for (let p = 0; p < pieces.length; p++) {
                    if (pieces[p].row === r && pieces[p].square === s + 3 && pieces[p].type === 'rook' && !pieces[p].moved) {
                        this.grid[r][s + 3].classList.add("castle");
                    }
                }
            }
        }

        return validMoves;
    }
}

class Queen extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.type   = 'queen';
        this.icon   = this.getIcon(this.type, color);

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
        let validMoves = {};

        // up
        let r = this.row;
        let s = this.square;
        while (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r++;
            s++;
        }

        return validMoves;
    }
}

class Rook extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.moved  = false;
        this.type   = 'rook';
        this.icon   = this.getIcon(this.type, color);

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
        this.moved = true;
    }

    validMoves(turn) {
        let validMoves = {};

        // up
        let r = this.row;
        let s = this.square;
        while (r >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            s++;
        }

        return validMoves;
    }
}

class Knight extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.type   = 'knight';
        this.icon   = this.getIcon(this.type, color);

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
        let validMoves = {};

        // up 1
        let r = this.row - 2;
        let s = this.square - 1;
        if (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // up 2
        r = this.row - 2;
        s = this.square + 1;
        if (r >= 0 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // down 1
        r = this.row + 2;
        s = this.square - 1;
        if (r < 8 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // down 2
        r = this.row + 2;
        s = this.square + 1;
        if (r < 8 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // left 1
        r = this.row + 1;
        s = this.square - 2;
        if (r < 8 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // left 2
        r = this.row - 1;
        s = this.square - 2;
        if (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // right 1
        r = this.row - 1;
        s = this.square + 2;
        if (r >= 0 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        // right 2
        r = this.row + 1;
        s = this.square + 2;
        if (r < 8 && s < 8) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
            }
        }

        return validMoves;
    }
}

class Bishop extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.type   = 'bishop';
        this.icon   = this.getIcon(this.type, color);

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
        let validMoves = {};

        // up/left diagonal
        let r = this.row;
        let s = this.square;
        while (r >= 0 && s >= 0) {
            if (this.grid[r][s].getAttribute("data-value") == "") {
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
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
                validMoves[r + ',' + s] = 'highlighted';
            } else if (this.grid[r][s].getAttribute("data-value") !== turn) {
                validMoves[r + ',' + s] = 'capture';
                break;
            } else if (this.grid[r][s].getAttribute("data-value") === turn && (r !== this.row || s !== this.square)) {
                break;
            }
            r++;
            s++;
        }

        return validMoves;
    }
}

class Pawn extends Chess {
    constructor(grid, row, square, color, turn, pieces) {
        super(grid, turn, pieces);
        this.row    = row;
        this.square = square;
        this.color  = color;
        this.moved  = false;
        this.type   = 'pawn';
        this.icon   = this.getIcon(this.type, color);

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

        // Pawn made it across the board. Open modal to select new piece
        if ((row === 0 && this.color === "white") || (row === 7 && this.color === "black")) {
            this.selectNewPiece(pieces);
        }

        // Update piece position
        this.row = row;
        this.square = square;

        this.initializePiece(this.row, this.square);
        this.moved = true;
    }

    selectNewPiece(pieces) {
        this.openModal();

        let queen  = document.getElementById("queen");
        let rook   = document.getElementById("rook");
        let knight = document.getElementById("knight");
        let bishop = document.getElementById("bishop");

        queen.innerHTML  = this.getIcon("queen", this.color);
        rook.innerHTML   = this.getIcon("rook", this.color);
        knight.innerHTML = this.getIcon("knight", this.color);
        bishop.innerHTML = this.getIcon("bishop", this.color);

        let ogThis = this;

        queen.addEventListener("click", function() {
            ogThis.newPiece(pieces, ogThis.color, "queen");
        });

        rook.addEventListener("click", function() {
            ogThis.newPiece(pieces, ogThis.color, "rook");
        });

        knight.addEventListener("click", function() {
            ogThis.newPiece(pieces, ogThis.color, "knight");
        });

        bishop.addEventListener("click", function() {
            ogThis.newPiece(pieces, ogThis.color, "bishop");
        });
    }

    newPiece(pieces, color, type) {
        this.addNewPiece(pieces, color, type);
        this.removePiece();
        this.closeModal();
        this.switchTurns();
    }

    openModal() {
        document.getElementById("overlay").classList.remove("hidden");
        document.getElementById("modal").classList.remove("hidden");
    }

    closeModal() {
        document.getElementById("overlay").classList.add("hidden");
        document.getElementById("modal").classList.add("hidden");
    }

    removePiece() {
        this.row = -2;
        this.square = -2;
    }

    addNewPiece(pieces, turn, type) {
        switch (type) {
            case 'queen':
                pieces.push(new Queen(this.grid, this.row, this.square, turn, turn, pieces));
                break;
            case 'rook':
                pieces.push(new Rook(this.grid, this.row, this.square, turn, turn, pieces));
                break;
            case 'knight':
                pieces.push(new Knight(this.grid, this.row, this.square, turn, turn, pieces));
                break;
            case 'bishop':
                pieces.push(new Bishop(this.grid, this.row, this.square, turn, turn, pieces));
                break;
        }
    }

    validMoves(turn) {
        let validMoves = {};

        if (turn === "white") {
            // forward 1
            let r = this.row - 1;
            let s = this.square;
            if (r >= 0) {
                if (this.grid[r][s].getAttribute("data-value") == "") {
                    validMoves[r + ',' + s] = 'highlighted';
                }
            }

            if (!this.moved) {
                // forward 2
                r = this.row - 2;
                s = this.square;
                if (r >= 0) {
                    if (this.grid[r][s].getAttribute("data-value") == "") {
                        validMoves[r + ',' + s] = 'highlighted';
                    }
                }
            }

            // capture left
            r = this.row - 1;
            s = this.square - 1;
            if (r >= 0 && s >= 0) {
                if (this.grid[r][s].getAttribute("data-value") === "black") {
                    validMoves[r + ',' + s] = 'capture';
                }
            }

            // capture right
            r = this.row - 1;
            s = this.square + 1;
            if (r >= 0 && s < 8) {
                if (this.grid[r][s].getAttribute("data-value") === "black") {
                    validMoves[r + ',' + s] = 'capture';
                }
            }
        } else {
            // forward 1
            let r = this.row + 1;
            let s = this.square;
            if (r < 8) {
                if (this.grid[r][s].getAttribute("data-value") == "") {
                    validMoves[r + ',' + s] = 'highlighted';
                }
            }

            if (!this.moved) {
                // forward 2
                r = this.row + 2;
                s = this.square;
                if (r < 8) {
                    if (this.grid[r][s].getAttribute("data-value") == "") {
                        validMoves[r + ',' + s] = 'highlighted';
                    }
                }
            }

            // capture left
            r = this.row + 1;
            s = this.square - 1;
            if (r < 8 && s >= 0) {
                if (this.grid[r][s].getAttribute("data-value") === "white") {
                    validMoves[r + ',' + s] = 'capture';
                }
            }

            // capture right
            r = this.row + 1;
            s = this.square + 1;
            if (r < 8 && s < 8) {
                if (this.grid[r][s].getAttribute("data-value") === "white") {
                    validMoves[r + ',' + s] = 'capture';
                }
            }
        }

        return validMoves;
    }
}


let chess = new Chess();
let ai    = new Ai();

chess.initializeBoard();


for (let r = 0; r < chess.grid.length; r++) {
    for (let s = 0; s < chess.grid[r].length; s++) {
        chess.grid[r][s].addEventListener("click", function() {
            if (chess.selectedPiece !== null) {
                if (chess.grid[r][s].classList.contains("highlighted") || chess.grid[r][s].classList.contains("capture")) {
                    chess.getSelectedPiece().move(r, s, chess.pieces);
                    chess.switchTurns();
                } else if (chess.grid[r][s].classList.contains("castle")) {
                    chess.getSelectedPiece().castle(r, s, chess.pieces);
                    chess.switchTurns();
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

                let castle = document.querySelectorAll(".castle");
                [].forEach.call(castle, function(s) {
                    s.classList.remove("castle");
                });

                // Have AI make its move for black
                if (chess.singlePlayer && chess.getTurn() === "black") {
                    let aiMove = ai.getMove(chess.pieces).split(",");

                    // Ai move comes back as a string, with the index of the piece, followed by the row and square coords separated by commas
                    const aiPiece  = aiMove[0];
                    const aiRow    = aiMove[1];
                    const aiSquare = aiMove[2];

                    setTimeout(function() {
                        chess.pieces[aiPiece].move(aiRow, aiSquare, chess.pieces);
                    }, 1000);

                    chess.switchTurns();
                }

                chess.selectedPiece = null;
            } else {
                if (chess.grid[r][s].getAttribute("data-value") === chess.getTurn()) {
                    chess.getValidMoves(r, s);
                } 
            }
        });
    }
}
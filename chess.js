class Board {
    constructor() {
        this.turn          = true;
        this.squares       = document.getElementsByClassName('square');
        this.whiteCaptured = document.getElementById('white-captured');
        this.blackCaptured = document.getElementById('black-captured');
        this.selectedPiece = null;
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
        this.board = [
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
            ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
        ];
        this.pieces = [
            this.newPiece('king', 'white', 7, 4),
            this.newPiece('king', 'black', 0, 4),
            this.newPiece('queen', 'white', 7, 3),
            this.newPiece('queen', 'black', 0, 3),
            this.newPiece('rook', 'white', 7, 0),
            this.newPiece('rook', 'white', 7, 7),
            this.newPiece('rook', 'black', 0, 0),
            this.newPiece('rook', 'black', 0, 7),
            this.newPiece('knight', 'white', 7, 1),
            this.newPiece('knight', 'white', 7, 6),
            this.newPiece('knight', 'black', 0, 1),
            this.newPiece('knight', 'black', 0, 6),
            this.newPiece('bishop', 'white', 7, 2),
            this.newPiece('bishop', 'white', 7, 5),
            this.newPiece('bishop', 'black', 0, 2),
            this.newPiece('bishop', 'black', 0, 5),
            this.newPiece('pawn', 'white', 6, 0),
            this.newPiece('pawn', 'white', 6, 1),
            this.newPiece('pawn', 'white', 6, 2),
            this.newPiece('pawn', 'white', 6, 3),
            this.newPiece('pawn', 'white', 6, 4),
            this.newPiece('pawn', 'white', 6, 5),
            this.newPiece('pawn', 'white', 6, 6),
            this.newPiece('pawn', 'white', 6, 7),
            this.newPiece('pawn', 'black', 1, 0),
            this.newPiece('pawn', 'black', 1, 1),
            this.newPiece('pawn', 'black', 1, 2),
            this.newPiece('pawn', 'black', 1, 3),
            this.newPiece('pawn', 'black', 1, 4),
            this.newPiece('pawn', 'black', 1, 5),
            this.newPiece('pawn', 'black', 1, 6),
            this.newPiece('pawn', 'black', 1, 7),
        ];

        this.paintBoard();
        this.loadBoard();
        this.reloadGrid();
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

    /**
     * Colors the board squares light/dark alternating. Called once at beginning of game
     */
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

    /**
     * Takes the piece's initial positions, and adds them to the board array. Called once at beginning of game.
     * @param {*} board 
     * @param {*} pieces 
     * @returns 
     */
    loadBoard(board = this.board, pieces = this.pieces) {
        for (let p = 0; p < pieces.length; p++) {
            board[pieces[p].row][pieces[p].square] = p;
        }

        return board;
    }

    /**
     * Takes the board, and updates the DOM board (this.grid) that the user sees
     * @param {*} board 
     * @param {*} pieces 
     */
    reloadGrid(board = this.board, pieces = this.pieces) {
        for (let r = 0; r < board.length; r++) {
            for (let s = 0; s < board[r].length; s++) {
                if (board[r][s] !== 'empty') {
                    this.grid[r][s].innerHTML = this.getIcon(pieces[board[r][s]].type, pieces[board[r][s]].color);
                    this.grid[r][s].setAttribute("data-value", pieces[board[r][s]].color);
                } else {
                    this.grid[r][s].innerHTML = "";
                    this.grid[r][s].setAttribute("data-value", "");
                }
            }
        }

        // Update the captured pieces
        this.whiteCaptured.innerHTML = '';
        this.blackCaptured.innerHTML = '';

        for (let p = 0; p < pieces.length; p++) {
            if (pieces[p].captured) {
                let icon = this.getIcon(pieces[p].type, pieces[p].color);
                if (pieces[p].color === 'white') {
                    this.blackCaptured.innerHTML += icon;
                } else {
                    this.whiteCaptured.innerHTML += icon;
                }
            }
        }
    }

    newPiece(type, color, row, square) {
        return {
            type: type,
            color: color,
            row: row,
            square: square,
            moved: false,
            captured: false,
        };
    }

    validCastle(piece, pieces, board, r, s) {
        let result = false;

        if (r === 0 && s === 0) {
            result = this.validLeftCastle(piece, pieces, board, r, s);
        } else if (r === 0 && s === 7) {
            result = this.validRightCastle(piece, pieces, board, r, s);
        }

        return result;
    }

    validLeftCastle(piece, pieces, board) {
        let r = piece.row;
        let s = piece.square;

        if (
            !piece.moved &&
            board[r][s - 1] === "empty" &&
            board[r][s - 2] === "empty" &&
            board[r][s - 3] === "empty" &&
            board[r][s - 4] !== "empty" &&
            this.getPiece(board, pieces, r, s - 4).color === piece.color &&
            this.getPiece(board, pieces, r, s - 4).type === 'rook' &&
            this.getPiece(board, pieces, r, s - 4).moved === false
        ) {
            return true;
        }

        return false;
    }

    validRightCastle(piece, pieces, board) {
        let r = piece.row;
        let s = piece.square;

        if (
            !piece.moved &&
            board[r][s + 1] === "empty" &&
            board[r][s + 2] === "empty" &&
            board[r][s + 3] !== "empty" &&
            this.getPiece(board, pieces, r, s + 3).color === piece.color &&
            this.getPiece(board, pieces, r, s + 3).type === 'rook' &&
            this.getPiece(board, pieces, r, s + 3).moved === false
        ) {
            return true;
        }

        return false;
    }

    getValidMoves(board, pieces, row, square) {
        let result;
        let piece = this.getPiece(board, pieces, row, square);

        switch (piece.type) {
            case 'king':
                result = this.kingValidMoves(board, piece, pieces, row, square);
                break;
            case 'queen':
                result = this.queenValidMoves(board, piece, pieces, row, square);
                break;
            case 'rook':
                result = this.rookValidMoves(board, piece, pieces, row, square);
                break;
            case 'bishop':
                result = this.bishopValidMoves(board, piece, pieces, row, square);
                break;
            case 'knight':
                result = this.knightValidMoves(board, piece, pieces, row, square);
                break;
            case 'pawn':
                result = this.pawnValidMoves(board, piece, pieces, row, square);
                break;
        }

        return result;
    }

    kingValidMoves(board, piece, pieces, row, square, opponentPieces, king = false) {
        let result = {};

        // up
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 1, square, result);

        // down
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 1, square, result);

        // left
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row, square - 1, result);

        // right
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row, square + 1, result);
        
        // up/left diagonal
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 1, square - 1, result);

        // up/right diagonal
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 1, square + 1, result);

        // down/left diagonal
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 1, square - 1, result);

        // down/right diagonal
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 1, square + 1, result);

        if (!piece.moved) {
            // left castle
            if (this.validLeftCastle(piece, pieces, board, row, square)) {
                result[row + ',' + (square - 4)] = 'castle';
            }
    
            // right castle
            if (this.validRightCastle(piece, pieces, board, row, square)) {
                result[row + ',' + (square + 3)] = 'castle';
            }
        }

        return result;
    }

    queenValidMoves(board, piece, pieces, row, square, opponentPieces, king = false) {
        let result = {};

        // up
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'up');

        // down
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'down');

        // left
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'left');

        // right
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'right');

        // up/right diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'up/right');

        // up/left diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'up/left');

        // down/right diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'down/right');

        // down/left diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'down/left');

        return result;
    }

    rookValidMoves(board, piece, pieces, row, square, opponentPieces, king = false) {
        let result = {};

        // up
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'up');

        // down
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'down');

        // left
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'left');

        // right
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'right');

        return result;
    }

    bishopValidMoves(board, piece, pieces, row, square, opponentPieces, king = false) {
        let result = {};

        // up/right diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'up/right');

        // up/left diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'up/left');

        // down/right diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'down/right');

        // down/left diagonal
        this.addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, 'down/left');

        return result;
    }

    knightValidMoves(board, piece, pieces, row, square, opponentPieces, king = false) {
        let result = {};

        // up 1
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 2, square - 1, result);

        // up 2
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 2, square + 1, result);

        // down 1
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 2, square - 1, result);

        // down 2
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 2, square + 1, result);

        // left 1
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 1, square - 2, result);

        // left 2
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 1, square - 2, result);

        // right 1
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row - 1, square + 2, result);

        // right 2
        this.addSquareHighlighting(board, king, piece, pieces, opponentPieces, row + 1, square + 2, result);

        return result;
    }

    pawnValidMoves(board, piece, pieces, row, square, opponentPieces, king = false) {
        let result = {};

        if (piece.color === "white") {
            // forward 1
            this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row - 1, square, result);

            if (!piece.moved) {
                // forward 2
                this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row - 2, square, result);
            }

            // capture left
            this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row - 1, square - 1, result, true);

            // capture right
            this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row - 1, square + 1, result, true);
        } else {
            // forward 1
            this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row + 1, square, result);

            if (!piece.moved) {
                // forward 2
                this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row + 2, square, result);
            }

            // capture left
            this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row + 1, square - 1, result, true);

            // capture right
            this.addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, row + 1, square + 1, result, true);
        }

        return result;
    }

    addSquareHighlighting(board, king, piece, pieces, opponentPieces, r, s, result) {

        // Check if r/s coordinates are within the board
        if (r >= 0 && r < 8 && s >= 0 && s < 8) {
            // If king is set, check if the move in question would result in the king being targeted. Otherwise, equate to true so that the checkmate logic is ignored.
            // We can ignore it because if you can make a move on your turn to capture the opponent's king, you don't need to worry about putting yourself in check or checkmate because the game ends.
            if (!king ? true : (this.doesMoveCauseCheck(board, king, piece, pieces, opponentPieces, r, s) == false)) {
                if (board[r][s] === "empty") {
                    result[r + ',' + s] = 'highlighted';
                } else if (this.getPiece(board, pieces, r, s).color !== piece.color) {
                    result[r + ',' + s] = 'capture';
                }
            }
        }
    }

    /**
     * The same as the above function, except it works for pieces that can move in unobstructed lines
     */
    addSquareHighlightingLoop(board, king, piece, pieces, opponentPieces, row, square, result, direction) {
        let r = row;
        let s = square;

        while (r >= 0 && r < 8 && s >= 0 && s < 8) {
            if (!king ? true : (this.doesMoveCauseCheck(board, king, piece, pieces, opponentPieces, r, s) == false)) {
                if (board[r][s] === "empty") {
                    result[r + ',' + s] = 'highlighted';
                } else if (this.getPiece(board, pieces, r, s).color !== piece.color) {
                    result[r + ',' + s] = 'capture';
                    break;
                } else if (this.getPiece(board, pieces, r, s).color === piece.color && (r !== row || s !== square)) {
                    break;
                }
            }
            
            switch (direction) {
                case 'up':
                    r--;
                    break;
                case 'down':
                    r++;
                    break;
                case 'left':
                    s--;
                    break;
                case 'right':
                    s++;
                    break;
                case 'up/left':
                    r--;
                    s--;
                    break;
                case 'up/right':
                    r--;
                    s++;
                    break;
                case 'down/left':
                    r++;
                    s--;
                    break;
                case 'down/right':
                    r++;
                    s++;
                    break;
            }
        }
    }

    addSquareHighlightingPawn(board, king, piece, pieces, opponentPieces, r, s, result, capture = false) {

        // Check if r/s coordinates are within the board
        if (r >= 0 && r < 8 && s >= 0 && s < 8) {
            if (capture) {
                if (!king ? true : (this.doesMoveCauseCheck(board, king, piece, pieces, opponentPieces, r, s) == false)) {
                    if (board[r][s] !== "empty" && this.getPiece(board, pieces, r, s).color !== piece.color) {
                        result[r + ',' + s] = 'capture';
                    }
                }
            } else {
                if (!king ? true : (this.doesMoveCauseCheck(board, king, piece, pieces, opponentPieces, r, s) == false)) {
                    if (board[r][s] === "empty") {
                        result[r + ',' + s] = 'highlighted';
                    }
                }
            }
        }
    }

    /**
     * Returns the piece object, given its location on the board
     * @param {*} board 
     * @param {*} pieces 
     * @param {*} row 
     * @param {*} square 
     * @returns 
     */
    getPiece(board, pieces, row, square) {
        return pieces[board[row][square]];
    }

    selectPiece(row, square) {
        let index = this.board[row][square];

        if (index !== 'empty') {
            this.selectedPiece = index;
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns the turn color string, given the boolean turn value
     * @param {*} turn 
     * @returns 
     */
    getTurn(turn = this.turn) {
        let result = "black";

        if (turn) {
            result = "white";
        }

        return result;
    }

    switchTurns() {
        this.turn = !this.turn;
    }

    getSelectedPiece() {
        return this.pieces[this.selectedPiece];
    }

    /**
     * Remove highlighting from all squares
     */
    removeHighlighting() {
        let highlighted = document.querySelectorAll(".highlighted");
        let capture     = document.querySelectorAll(".capture");
        let castle      = document.querySelectorAll(".castle");

        [].forEach.call(highlighted, function(s) {
            s.classList.remove("highlighted");
        });
        [].forEach.call(capture, function(s) {
            s.classList.remove("capture");
        });
        [].forEach.call(castle, function(s) {
            s.classList.remove("castle");
        });
    }

    showLoadingAnimation() {
        document.getElementById('loader-container').classList.add('active-loader');
    }

    hideLoadingAnimation() {
        document.getElementById('loader-container').classList.remove('active-loader');
    }

    castle(row, square, piece = this.selectedPiece, board = this.board, pieces = this.pieces, recursive = false) {

        // Identify the rook to be castled
        const rookIndex = board[row][square];

        // Vacate squares
        board[pieces[piece].row][pieces[piece].square] = 'empty';
        board[row][square] = 'empty';

        if (square === 7) {
            // Move the king
            this.movePiece(row, square - 1, pieces[piece], pieces, piece, board);

            // Move the rook
            this.movePiece(row, square - 2, pieces[rookIndex], pieces, rookIndex, board);
        } else if (square === 0) {
            // Move the king
            this.movePiece(row, square + 2, pieces[piece], pieces, piece, board);

            // Move the rook
            this.movePiece(row, square + 3, pieces[rookIndex], pieces, rookIndex, board);
        }

        if (!recursive) {
            this.reloadGrid();
        }
    }

    unCastle(king, rook, rookOldRow, rookOldSquare, kingOldRow, kingOldSquare, board, pieces) {
        const rookIndex = board[rook.row][rook.square];
        const kingIndex = board[king.row][king.square];

        this.movePiece(rookOldRow, rookOldSquare, rook, pieces, rookIndex, board);
        this.movePiece(kingOldRow, kingOldSquare, king, pieces, kingIndex, board);

        rook.moved  = false;
        king.moved  = false;

    }

    capturePiece(row, square, board, pieces, turn) {
        let result = false;

        // If piece exists on row/square, and belongs to the opposite turn
        if (board[row][square] !== 'empty' && this.getPiece(board, pieces, row, square).color !== this.getTurn(turn)) {
            result = board[row][square];

            this.getPiece(board, pieces, row, square).captured = true;
            this.getPiece(board, pieces, row, square).row      = -1;
            this.getPiece(board, pieces, row, square).square   = -1;
        }

        return result;
    }

    unCapturePiece(captured, newData, board, pieces) {
        if (captured !== false) {
            let piece   = pieces[captured];
            const moved = piece.moved;

            this.movePiece(newData['row'], newData['square'], piece, pieces, captured, board);

            pieces[captured].moved    = moved;
            pieces[captured].captured = false;
        }
    }

    /**
     * Moves the piece. Must provide the piece, pieces, index and board params if calling function from recursive AI algorithm.
     * Otherwise, uses the default chess game variables to simplify things for the logic at the bottom of the file.
     * @param {*} row 
     * @param {*} square 
     * @param {*} piece 
     * @param {*} pieces 
     * @param {*} index 
     * @param {*} board 
     */
    movePiece(row, square, piece = this.pieces[this.selectedPiece], pieces = this.pieces, index = this.selectedPiece, board = this.board) {
        // Check if capture
        if (board[row][square] !== 'empty') {
            let capturedPiece      = this.getPiece(board, pieces, row, square);
            capturedPiece.captured = true;
            capturedPiece.row      = -1;
            capturedPiece.square   = -1;
        }

        // Move piece on board
        board[row][square] = index;
        if (piece.row >= 0 && piece.square >= 0) {
            // Only vacate the square if the piece is currently on one
            board[piece.row][piece.square] = 'empty';
        }

        // Update piece's coords
        piece.row    = row;
        piece.square = square;
        piece.moved  = true;
    }
}

class Ai extends Board {
    constructor() {
        super();

        this.kingVal   = 900;
        this.queenVal  = 90;
        this.rookVal   = 50; 
        this.bishopVal = 30;
        this.knightVal = 30;
        this.pawnVal   = 10;
    }

    getMove(board, pieces, turn, steps) {
        let validPieces = this.getValidPieces(board, pieces, false);
        let availableMoves = {};

        if (validPieces.length > 0) {
            for (let p = 0; p < validPieces.length; p++) {
                let piece        = pieces[validPieces[p]];
                const oldRow     = piece.row;
                const oldSquare  = piece.square;
                const validMoves = this.getValidMoves(board, pieces, oldRow, oldSquare);
                const moveKeys   = Object.keys(validMoves);

                for (let v = 0; v < moveKeys.length; v++) {
                    const newData = this.getNewData(moveKeys[v]);

                    if (validMoves[moveKeys[v]] !== 'castle') {

                        // Move piece temporarily
                        const captured = this.capturePiece(newData['row'], newData['square'], board, pieces, turn);
                        const moved    = piece.moved;
                        this.movePiece(newData['row'], newData['square'], piece, pieces, validPieces[p], board);

                        // Get value of updated board, save to availableMoves
                        availableMoves[oldRow + ',' + oldSquare + ',' + newData['row'] + ',' + newData['square']] = this.maxi(board, pieces, steps);

                        // Move piece back to original position, and un-capture the piece if one was captured in the previous temporary move
                        this.movePiece(oldRow, oldSquare, piece, pieces, validPieces[p], board);
                        piece.moved = moved;

                        // If a piece was captured, un-capture it
                        this.unCapturePiece(captured, newData, board, pieces);
                    } else {
                        let rook            = pieces[board[newData['row']][newData['square']]];
                        const rookOldRow    = rook.row;
                        const rookOldSquare = rook.square;

                        // Castle temporarily
                        this.castle(newData['row'], newData['square'], validPieces[p], board, pieces, true);

                        availableMoves[oldRow + ',' + oldSquare + ',' + newData['row'] + ',' + newData['square']] = this.maxi(board, pieces, steps);

                        // Un-castle
                        this.unCastle(piece, rook, rookOldRow, rookOldSquare, oldRow, oldSquare, board, pieces);
                    }
                }
            }
        } else {
            return false;
        }

        let min = Math.min(...Object.values(availableMoves));
        let preferredMoves = {};

        for (const move in availableMoves) {
            if (availableMoves[move] === min) {
                preferredMoves[move] = availableMoves[move];
            }
        }

        const preferredMoveKeys = Object.keys(preferredMoves);
        const randomIndex       = Math.floor(Math.random() * preferredMoveKeys.length);
        const selectedMove      = preferredMoveKeys[randomIndex].split(',');
        
        return [board[selectedMove[0]][selectedMove[1]], selectedMove[2], selectedMove[3]];
    }

    mini(board, pieces, steps) {
        if (steps === 0) {
            return this.getBoardValue(pieces);
        } else {
            let validPieces = this.getValidPieces(board, pieces, false);
            let min = Infinity;
            if (validPieces.length > 0) {
                for (let p = 0; p < validPieces.length; p++) {
                    let piece        = pieces[validPieces[p]];
                    const oldRow     = piece.row;
                    const oldSquare  = piece.square;
                    const validMoves = this.getValidMoves(board, pieces, oldRow, oldSquare);
                    const moveKeys   = Object.keys(validMoves);
    
                    for (let v = 0; v < moveKeys.length; v++) {
                        const newData = this.getNewData(moveKeys[v]);
    
                        if (validMoves[moveKeys[v]] !== 'castle') {
    
                            // Move piece temporarily
                            const captured = this.capturePiece(newData['row'], newData['square'], board, pieces, false);
                            const moved    = piece.moved;
                            this.movePiece(newData['row'], newData['square'], piece, pieces, validPieces[p], board);
    
                            // Get value of updated board, save to availableMoves
                            let score = this.maxi(board, pieces, steps - 1);

                            if (score < min) {
                                min = score;
                            }
    
                            // Move piece back to original position, and un-capture the piece if one was captured in the previous temporary move
                            this.movePiece(oldRow, oldSquare, piece, pieces, validPieces[p], board);
                            piece.moved = moved;
    
                            // If a piece was captured, un-capture it
                            this.unCapturePiece(captured, newData, board, pieces);
                        } else {
                            let rook            = pieces[board[newData['row']][newData['square']]];
                            const rookOldRow    = rook.row;
                            const rookOldSquare = rook.square;
    
                            // Castle temporarily
                            this.castle(newData['row'], newData['square'], validPieces[p], board, pieces, true);
    
                            let score = this.maxi(board, pieces, steps - 1);

                            if (score < min) {
                                min = score;
                            }
    
                            // Un-castle
                            this.unCastle(piece, rook, rookOldRow, rookOldSquare, oldRow, oldSquare, board, pieces);
                        }
                    }
                }
                return min;
            } else {
                return false;
            }
        }
    }

    maxi(board, pieces, steps) {
        if (steps === 0) {
            return this.getBoardValue(pieces);
        } else {
            let validPieces = this.getValidPieces(board, pieces, true);
            let max = -Infinity;
            if (validPieces.length > 0) {
                for (let p = 0; p < validPieces.length; p++) {
                    let piece        = pieces[validPieces[p]];
                    const oldRow     = piece.row;
                    const oldSquare  = piece.square;
                    const validMoves = this.getValidMoves(board, pieces, oldRow, oldSquare);
                    const moveKeys   = Object.keys(validMoves);
    
                    for (let v = 0; v < moveKeys.length; v++) {
                        const newData = this.getNewData(moveKeys[v]);
    
                        if (validMoves[moveKeys[v]] !== 'castle') {
    
                            // Move piece temporarily
                            const captured = this.capturePiece(newData['row'], newData['square'], board, pieces, true);
                            const moved    = piece.moved;
                            this.movePiece(newData['row'], newData['square'], piece, pieces, validPieces[p], board);
    
                            // Get value of updated board, save to availableMoves
                            let score = this.mini(board, pieces, steps - 1);

                            if (score > max) {
                                max = score;
                            }
    
                            // Move piece back to original position, and un-capture the piece if one was captured in the previous temporary move
                            this.movePiece(oldRow, oldSquare, piece, pieces, validPieces[p], board);
                            piece.moved = moved;
    
                            // If a piece was captured, un-capture it
                            this.unCapturePiece(captured, newData, board, pieces);
                        } else {
                            let rook            = pieces[board[newData['row']][newData['square']]];
                            const rookOldRow    = rook.row;
                            const rookOldSquare = rook.square;
    
                            // Castle temporarily
                            this.castle(newData['row'], newData['square'], validPieces[p], board, pieces, true);
    
                            let score = this.mini(board, pieces, steps - 1);

                            if (score > max) {
                                max = score;
                            }
    
                            // Un-castle
                            this.unCastle(piece, rook, rookOldRow, rookOldSquare, oldRow, oldSquare, board, pieces);
                        }
                    }
                }
                return max;
            } else {
                return false;
            }
        }
    }

    /**
     * I'm pretty sure this function is returning a fresh copy of some data that isn't by reference, so no risk changing the original
     * 
     * @param {*} moveKey 
     * @returns 
     */
    getNewData(moveKey) {
        const validMove = moveKey.split(",");

        return {
            row: parseInt(validMove[0]),
            square: parseInt(validMove[1]),
        };
    }

    getValidPieces(board, pieces, turn = false) {
        let result = [];

        for (let p = 0; p < pieces.length; p++) {
            // If piece's color matches the turn, not captured, and has at least 1 valid move
            if (
                pieces[p].color === this.getTurn(turn) &&
                !pieces[p].captured && Object.keys(this.getValidMoves(board, pieces, pieces[p].row, pieces[p].square)).length > 0
            ) {
                result.push(p);
            }
        }

        return result;
    }

    /**
     * Adds up the total value of all pieces on the board
     * @param {*} pieces 
     * @returns 
     */
        getBoardValue(pieces) {
        let result = 0;

        for (let p = 0; p < pieces.length; p++) {
            if (!pieces[p].captured) {
                switch (pieces[p].type) {
                    case "king":
                        result += pieces[p].color === "white" ? this.kingVal : -Math.abs(this.kingVal);
                        break;
                    case "queen":
                        result += pieces[p].color === "white" ? this.queenVal : -Math.abs(this.queenVal);
                        break;
                    case "rook":
                        result += pieces[p].color === "white" ? this.rookVal : -Math.abs(this.rookVal);
                        break;
                    case "bishop":
                        result += pieces[p].color === "white" ? this.bishopVal : -Math.abs(this.bishopVal);
                        break;
                    case "knight":
                        result += pieces[p].color === "white" ? this.knightVal : -Math.abs(this.knightVal);
                        break;
                    case "pawn":
                        result += pieces[p].color === "white" ? this.pawnVal : -Math.abs(this.pawnVal);
                        break;
                    default:
                        break;
                }
            }
        }

        return result;
    }
}

let ai = new Ai();

for (let r = 0; r < ai.grid.length; r++) {
    for (let s = 0; s < ai.grid[r].length; s++) {
        const clickedSquare = ai.grid[r][s];

        clickedSquare.addEventListener("click", function() {
            if (ai.selectedPiece !== null) {
                if (clickedSquare.classList.contains("highlighted") || clickedSquare.classList.contains("capture")) {
                    ai.showLoadingAnimation();
                    ai.movePiece(r, s);
                    ai.reloadGrid();
                    ai.switchTurns();
                } else if (clickedSquare.classList.contains("castle")) {
                    ai.showLoadingAnimation();
                    ai.castle(r, s);
                    ai.switchTurns();
                }

                ai.selectedPiece = null;
                ai.removeHighlighting();

                // AI makes move
                if (!ai.turn) {
                    setTimeout(function() {
                        const move   = ai.getMove(ai.board, ai.pieces, ai.turn, 3);
                        const index  = parseInt(move[0]);
                        const row    = parseInt(move[1]);
                        const square = parseInt(move[2]);

                        if (move !== false) {
                            // Wait 1 second before moving piece on the screen, to make it feel more natural
                            setTimeout(function() {
                                if (ai.validCastle(ai.pieces[ai.board[0][4]], ai.pieces, ai.board, row, square)) {
                                    ai.castle(row, square, ai.board[0][4], ai.board, ai.pieces);
                                } else {
                                    ai.movePiece(row, square, ai.pieces[index], ai.pieces, index, ai.board);
                                }

                                ai.switchTurns();
                                ai.reloadGrid();
                                ai.hideLoadingAnimation();
                            }, 1000);
                        } else {
                            // Checkmate by white? Stalemate?
                        }
                    }, 10);
                }
            } else if (ai.selectPiece(r, s)) {
                if (ai.getSelectedPiece().color === 'white' && ai.getTurn() === 'white') {
                    let validMoves = ai.getValidMoves(ai.board, ai.pieces, r, s);

                    if (Object.keys(validMoves).length > 0) {
                        Object.keys(validMoves).forEach(key => {
                            let vr = key.split(',')[0];
                            let vs = key.split(',')[1];
    
                            ai.grid[vr][vs].classList.add(validMoves[key]);
                        });
                    } else {
                        ai.selectedPiece = null;
                    }
                } else {
                    ai.selectedPiece = null;
                }
            }
        });
    }
}
var board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true
  })
  
  $('#startBtn').on('click', board.start)
  $('#clearBtn').on('click', board.clear)
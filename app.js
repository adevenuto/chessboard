
$(function(){
  // generate row nums and column letters
  var cell = $('td');
  var column = ['a','b','c','d','e','f','g','h'];
  var counter = 8;
  var counter1 = 8;
  cell.each(function(i,cell){
    if (counter % 8 == 0) {
      counter = 0;
      counter1 --;
    }
  $(cell).attr("id",column[counter]+(counter1+1));
  counter ++;
  });
  // end

  // show moves
  function displayNewCell(x) {
    if (x) {
      var newCell = x;
    $('#newRankLocation').text(newCell);
    }
  };

  $('td').mousedown(function(){
    $("#rankLocation").text($(this).attr("id"));
  });

  $('img').mousedown(function(){
    $('#rank').text($(this).attr("id"));
  });
  // end

  // drag and drop code
  $('img').draggable({ containment: "table", revert: 'invalid' });
  storeTiles = $('td').droppable({
    drop: function(ev, ui) {
      var dropped = ui.draggable;
      var droppedOn = $(this);
      displayNewCell(droppedOn.attr('id'));
      $(droppedOn).droppable("disable");
      $(dropped).parent().droppable("enable");
      $(dropped).detach().css({top: 0, left: 0}).appendTo(droppedOn);
    }
  });
  $('td').not('td:empty').droppable("disable");
  // end
});




























































































// $(function(){
//   var column = ['a','b','c','d','e','f','g','h'];
//     for(var i = 0; i < 8; i++) {
//       for (var j = 0; j < 8; j++) {
//         var tile = $("<div class='space'></div>");
//         tile.addClass( i % 2 === 0 ? 'even' : 'odd' );
//         tile.addClass(column[i] + (j + 1));
//         console.log(i)
//         $('.chessboard').append(tile);
//       }
//     }
// });
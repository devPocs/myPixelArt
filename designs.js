function makeGrid() {
	
	// Select size input
	
	var canvas, myCell, Height, Width, Rows;
	
	canvas = $('#pixelCanvas');
	Height = $('#inputHeight').val();
	Width = $('#inputWeight').val();
	
	canvas.children().remove();
	
	for (x = 0; x < Height; x++) {
		canvas.append('<tr></tr>');
	}
	
	Rows = $('tr');
	
	for (y = 0; y < Width; y++) {
		Rows.append('<td></td>');
	} 
	
	myCell = canvas.find('td');
	
	
	myCell.click(function(e) {
		e.preventDefault();
	
		var myColor;
		myColor = $("#colorPicker").val();
		$(this).attr('bgcolor', myColor);
	});
	
}


// When size is submitted by the user, call makeGrid()
var submitVal;

submitVal = $('input[type="submit"]')

submitVal.click(function(event) {
  event.preventDefault();
  makeGrid();
});


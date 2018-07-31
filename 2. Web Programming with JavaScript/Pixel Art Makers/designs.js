// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid(rows, cols){
	var grid = document.createElement('tbody');
	for (r=0; r<rows; r++){
		var tr = grid.appendChild(document.createElement('tr'));
		for (c=0; c<cols; c++){
			var cell = tr.appendChild(document.createElement('td'));			
		}	
	}
	var pixelCanvas = document.getElementById('pixelCanvas');
	pixelCanvas.appendChild(grid);
	return pixelCanvas;
	
};


document.getElementById("numberSubmit").addEventListener("click", function(e){
	e.preventDefault();
	let inputheight = document.getElementById('inputHeight').value;
	let inputwidth = document.getElementById('inputWidth').value;
	makeGrid(inputheight, inputwidth);
});

document.getElementById('colorPicker').addEventListener("change", function(event){
	const color = event.target.value;
	let tds = document.getElementsByTagName('td');
	for(i=0; i<tds.length; i++){
		tds[i].addEventListener("click", function(){
				if(this.style.backgroundColor !== ""){
					this.style.backgroundColor = ""; 
				}else{
					this.style.backgroundColor = color;
		}});

	};
});





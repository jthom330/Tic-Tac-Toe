//arrays to keep track of wins and draws
var xboard = [0,0,0,0,0,0,0,0,0];
var oboard = [0,0,0,0,0,0,0,0,0];
boardtotal = [0,0,0,0,0,0,0,0,0];

//global variables
var xscore=0;
var oscore=0;
var moves=1;
var i;
var sum;

//function handles changing board symbols when clicked and updating visual information
function change(clicked_id)
{
    //O's move 
	if (moves%2 == 0)
	{
		$('#'+clicked_id).removeClass('btn btn-lg btn-default').addClass('btn btn-lg btn-danger');
		document.getElementById(clicked_id).innerHTML = '<font size="100">O</font>';
		$('#'+clicked_id).prop('disabled', true);
		
		document.getElementById("turn").innerHTML = "Player X's Turn";
		
		//updates arrays
		oboard[parseInt(clicked_id)-1] = 1;
		boardtotal[parseInt(clicked_id)-1] = 1;
	}
	
	//X's move 
	else
	{
		$('#'+clicked_id).removeClass('btn btn-lg btn-default').addClass('btn btn-lg btn-primary');
		document.getElementById(clicked_id).innerHTML = '<font size="100">X</font>';
		$('#'+clicked_id).prop('disabled', true);
		
		document.getElementById("turn").innerHTML = "Player O's Turn";
		
		//updates arrays
		xboard[parseInt(clicked_id)-1] = 1;
		boardtotal[parseInt(clicked_id)-1] = 1;
	}
	
	moves++; // increments move variable so that turns will alternate 
	
	checkWin(); //checks if a player has won or a draw has taken place
	
}

function checkWin()
{
    //checks if player x has won.  if so, increment score, displays alert, and clear the board
	if(xboard[0]+xboard[4]+xboard[8] == 3 || xboard[6]+xboard[4]+xboard[2] == 3 ||	xboard[0]+xboard[1]+xboard[2] == 3 || xboard[3]+xboard[4]+xboard[5] == 3 ||	xboard[6]+xboard[7]+xboard[8] == 3 || xboard[0]+xboard[3]+xboard[6] == 3 ||	xboard[1]+xboard[4]+xboard[7] == 3 || xboard[2]+xboard[5]+xboard[8] == 3)
	{
		xscore++;
		$("#xwin").fadeIn(1000);
		$("#xwin").fadeOut(5000);
		
		//disables all buttons 
		for (i = 1; i <= boardtotal.length; i++) {
			$('#'+i).prop('disabled', true);
		}
		
		document.getElementById("x").innerHTML = "<center>"+xscore+"</center>";
		
	}
	
	//checks if player o has won.  if so, increment score, displays alert, and clear the board
	else if(oboard[0]+oboard[4]+oboard[8] == 3 || oboard[6]+oboard[4]+oboard[2] == 3 ||	oboard[0]+oboard[1]+oboard[2] == 3 || oboard[3]+oboard[4]+oboard[5] == 3 ||	oboard[6]+oboard[7]+oboard[8] == 3 || oboard[0]+oboard[3]+oboard[6] == 3 ||	oboard[1]+oboard[4]+oboard[7] == 3 || oboard[2]+oboard[5]+oboard[8] == 3)
	{
		oscore++;
		$("#owin").fadeIn(1000);
		$("#owin").fadeOut(5000);
		
		//disables all buttons 
		for (i = 1; i <= boardtotal.length; i++) {
			$('#'+i).prop('disabled', true);
		}
		
		document.getElementById("o").innerHTML = "<center>"+oscore+"</center>";
		
	}
	
	//checks if a draw has occurred.  if so, displays alert, and clear the board
	else 
	{
		sum = 0;
		for (i = 0; i < boardtotal.length; i++) {
			sum = sum + boardtotal[i];
		}
		
		if(sum == 9)
		{
			$("#draw").fadeIn(1000);
			$("#draw").fadeOut(5000);
			
		}
	}
}

//clears the board and resets all icons and needed variables 
function clearBoard()
{
	//resets buttons 
	$("button").removeClass('btn btn-lg btn-default  btn btn-lg btn-danger btn  btn-lg btn-primary').addClass('btn btn-lg btn-default');
	for (i = 1; i <= boardtotal.length; i++) {
		document.getElementById(""+i).innerHTML = "<span class='text-muted'><h1><font size='20'>+</font></h1></span>";
		}
	
	//resets the array for tracking player x's moves
	for (i = 0; i < xboard.length; i++) {
			xboard[i] = 0;
		}
	
	//resets the array for tracking player o's moves
	for (i = 0; i < oboard.length; i++) {
			oboard[i] = 0;
		}
	
	//resets the array for tracking draws
	for (i = 0; i < boardtotal.length; i++) {
			boardtotal[i] = 0;
		}
	
	//reinables all buttons 
	for (i = 1; i <= boardtotal.length; i++) {
		$('#'+i).prop('disabled', false);
		}
		
	
	
	//Alternates if O or X goes first.  If a draw occurs, same players goes first again
	if((xscore+oscore)%2 == 0)
	{
		moves=1;
		//sets player X up for first move.
		document.getElementById("turn").innerHTML = "Player X's Turn";
	}
	else
	{
		moves=0;
		//sets player O up for first move.
		document.getElementById("turn").innerHTML = "Player O's Turn";
	}
}

//clears board 
function reset()
{
	clearBoard();
		
}






    

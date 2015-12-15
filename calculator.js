var first_num_filled = false;
var mathMethod = "none";
var first_num = "";
var sec_num = "";
var total_num = 0;


$( document ).ready(function(){
	$('.button').click(function(){

		var num0 = $(this).html();




		if (isNaN(num0)){

			if (num0 == "+"){

				console.log("will add");
				first_num_filled = !first_num_filled;
				mathMethod = "plus";
	

			} else if ( num0 == "-"){

				console.log("will subtract");
				first_num_filled = !first_num_filled;
				mathMethod = "subtract";
				

			} else {

				console.log("equals");
				if (mathMethod == "plus"){
					total_num = Number(first_num) + Number(sec_num);
				} else if (mathMethod == "subtract") {
					total_num = Number(first_num) - Number(sec_num);
				}

				console.log(total_num);
				$('#display').empty();
				$('#display').append(Number(total_num));
				clearVars();




			}

		} else if (!first_num_filled) {

			firstFunction(num0);

		} else {

			secondFunction(num0);

		}

	});
});


function firstFunction(num1) {
	
	first_num = first_num.concat(num1);
	console.log(first_num);
	$('#display').empty();
	$('#display').append(Number(first_num));

}

function secondFunction(num2) {
	sec_num = sec_num.concat(num2);
	console.log(sec_num);
	$('#display').empty();
	$('#display').append(Number(sec_num));

}

function clearVars(){
	first_num_filled = false;
	first_num = "";
	sec_num = "";
	total_num = 0;
	mathMethod = "none";
}

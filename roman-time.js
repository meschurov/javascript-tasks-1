var hour = process.argv[2];
var min = process.argv[3];
var mas = [1, 4, 5, 9, 10, 40, 50];
var oneRome = ['DDD',' D ',' D ',' D ',' D ',' D ','DDD'];
var fiveRome = ['D     D','D     D','D     D','D     D',' D   D ','  D D  ','   D   '];
var tenRome = ['D     D',' D   D ','  D D  ','   D   ','  D D  ',' D   D ','D     D'];
var fiftyRome = ['D    ','D    ','D    ','D    ','D    ','D    ','DDDDD'];
var toch = ['  ','OO','OO','  ','OO','OO','  '];

function translation(number)
{
	var otv = ['','','','','','',''];
	var i = mas.length - 1;
	while(number > 0)
	{
		if(number >= mas[i])
		{
			otv = sbRome(otv,st(mas[i]));
			number -= mas[i];
		}
		else
		{
			i--;
		}
	
	}
	return otv;
}
function st (n){
    switch (n){
	case 1:
	    return oneRome;
		break;
	case 4:
        return sbRome(oneRome, fiveRome);
		break;
	case 5:
        return fiveRome;
        break;
 	case 9:
        return sbRome(oneRome, tenRome);
        break;
    case 10:
        return tenRome;
		break;
	case 40:
	    return sbRome(tenRome, fiftyRome);
		break;
	case 50:
	    return fiftyRome;
		break;
	}
 
}
function sbRome (mas1, mas2){
    var ot = [];
    for(var i=0; i<7; i++){
	    ot[i] = mas1[i] + ' ' + mas2[i];
		}
	return ot;	
}

if (hour >= 0 && hour < 24 && min >= 0 && min < 60){
var a = (sbRome(sbRome(translation(hour), toch), translation(min)));
for(var i=0; i<7; i++) {
	console.log(a[i]);
}
}
else console.log('Время указано не верно');

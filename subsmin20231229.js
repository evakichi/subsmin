let busStop = Array.of(
	"つくば駅(Tsukuba station)",
	"千現(Sengen site)",
	"並木(Namiki site)",
	"桜(Sakura site)"
	);

let timeTableTsukuba = Array.of(
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",06],["Min",05]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",06],["Min",32]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",06],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",07],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",07],["Min",35]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",07],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",08],["Min",39]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",09],["Min",07]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",09],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",10],["Min",22]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",10],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",11],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",11],["Min",55]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",12],["Min",22]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",12],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",13],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",13],["Min",59]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",14],["Min",25]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",14],["Min",52]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",15],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",15],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",16],["Min",17]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",16],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",17],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",17],["Min",42]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",18],["Min",05]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",18],["Min",27]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",18],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",19],["Min",10]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",19],["Min",32]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",19],["Min",57]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",20],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",21],["Min",00]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",21],["Min",42]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",06],["Min",47]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",07],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",07],["Min",32]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",07],["Min",53]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",08],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",09],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",09],["Min",40]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",10],["Min",10]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",10],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",11],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",11],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",12],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",12],["Min",52]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",13],["Min",25]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",13],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",14],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",14],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",15],["Min",20]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",15],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",16],["Min",21]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",16],["Min",50]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",17],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",17],["Min",40]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",18],["Min",30]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",18],["Min",57]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",19],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",19],["Min",53]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",20],["Min",15]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None" ],["Dst","Arakawaoki"],["Hour",21],["Min",00]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",03],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",08],["Min",11]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",08],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",08],["Min",20],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",08],["Min",28]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",40],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",08],["Min",48]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",08],["Min",50],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",1],["Hour",08],["Min",58]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",09],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",09],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",15],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",09],["Min",23]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",09],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",45],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",09],["Min",58]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",09],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",10],["Min",02],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",10],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",10],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",10],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",10],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",10],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",11],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",11],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",11],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",11],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",12],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",12],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",12],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",12],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",12],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",12],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",13],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",13],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",13],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",13],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",14],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",14],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",14],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",14],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",14],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",15],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",15],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",15],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",15],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",16],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",16],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",16],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",16],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",16],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",16],["Min",43],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",16],["Min",53]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",16],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",17],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",17],["Min",15],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",17],["Min",23]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",17],["Min",38]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",45],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",17],["Min",53]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",17],["Min",50],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",00],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",18],["Min",08]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",18],["Min",10],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",18],["Min",15],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",18],["Min",33]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",30],["Dst",2],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",18],["Min",48]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",18],["Min",50],["Dst",3]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",18],["Min",55],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",19],["Min",10],["Dst",1]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",18],["Min",20],["Dst",1]])
	);

let timeTableSengen = Array.of(
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",08],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",08],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",11],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",08],["Min",13],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",08],["Min",28],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",48],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",33],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",48],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",08],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",09],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",09],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",08],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",23],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",38],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",53],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",10],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",10],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",10],["Min",10],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",10],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",10],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",10],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",11],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",11],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",12],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",12],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",12],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",12],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",12],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",12],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",13],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",13],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",14],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",14],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",14],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",14],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",14],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",14],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",15],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",15],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",16],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",16],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",16],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",16],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",16],["Min",36],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",16],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",16],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",16],["Min",53],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",17],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",17],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",08],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",23],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",38],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",38],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",53],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",53],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",18],["Min",03],["Dst",3],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",18],["Min",10]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",08],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",33],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",18],["Min",23],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",33],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",18],["Min",48],["Dst",0]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",48],["Dst",2]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",19],["Min",03],["Dst",0]])
	);

let timeTableNamiki = Array.of(
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",06],["Min",29]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",07],["Min",11]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",07],["Min",29]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",07],["Min",31]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",07],["Min",49]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",07],["Min",54]]),	
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",08],["Min",08],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",08],["Min",13]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Kenchiku" ],["Hour",08],["Min",10]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",08],["Min",11]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",08],["Min",16]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",21],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",08],["Min",26]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",08],["Min",29]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","Hospital"],["Dst","Center"   ],["Hour",08],["Min",31]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",08],["Min",37]]),	
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",08],["Min",38],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",08],["Min",43]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",08],["Min",56]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",08],["Min",58],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",09],["Min",03]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",09],["Min",01]]),	
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",18],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",09],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",09],["Min",24]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",09],["Min",33],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",09],["Min",38]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",09],["Min",36]]),	
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",09],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",09],["Min",53]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",10],["Min",01]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",10],["Min",03],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",10],["Min",08]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",10],["Min",14]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",10],["Min",18],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",10],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",10],["Min",44]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",10],["Min",46]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",10],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",10],["Min",53]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",18],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",11],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","Hospital"],["Dst","Center"   ],["Hour",11],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",11],["Min",21]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",11],["Min",44]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",11],["Min",46]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",11],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",11],["Min",53]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",12],["Min",15],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",12],["Min",20]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",12],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",12],["Min",21]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",12],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",12],["Min",53]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","Hospital"],["Dst","Center"   ],["Hour",12],["Min",51]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",12],["Min",56]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",13],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",13],["Min",46]]),	
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",18],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",13],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",13],["Min",19]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",13],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",13],["Min",44]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",13],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",13],["Min",53]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",14],["Min",15],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",14],["Min",20]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",14],["Min",19]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",14],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",14],["Min",44]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",14],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",14],["Min",53]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",14],["Min",58]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",18],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",15],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",15],["Min",19]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",15],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",15],["Min",44]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","Hospital"],["Dst","Center"   ],["Hour",15],["Min",46]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",15],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",15],["Min",53]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",16],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",16],["Min",46]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",16],["Min",15],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",16],["Min",20]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",16],["Min",19]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",16],["Min",21]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","Purple"  ],["Dst","Center"   ],["Hour",16],["Min",29]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",16],["Min",44]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",16],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",16],["Min",53]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",16],["Min",46]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",03],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",17],["Min",08]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",17],["Min",14]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",18],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",17],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",17],["Min",19]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",17],["Min",33],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",17],["Min",38]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",17],["Min",44]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",17],["Min",44]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",17],["Min",48],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",17],["Min",53]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",17],["Min",49]]),	
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",18],["Min",03],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",18],["Min",08]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",18],["Min",14]]),
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",18],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",18],["Min",23]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",18],["Min",24]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",18],["Min",36]]),
	new Map([["Type","Shuttle"],["CarNo.",1],["Hour",18],["Min",43],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",1],["Dst",1],["Hour",18],["Min",48]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",18],["Min",44]]),	
	new Map([["Type","Shuttle"],["CarNo.",2],["Hour",18],["Min",58],["Dst",0],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",2],["Dst",1],["Hour",19],["Min",03]]))]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","Purple"  ],["Dst","Shimoduma"],["Hour",18],["Min",59]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",19],["Min",01]]),
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",19],["Min",24]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",19],["Min",26]]),	
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",19],["Min",46]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",19],["Min",49]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",20],["Min",06]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",20],["Min",19]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",20],["Min",36]]),	
	new Map([["Type","Kantetsu"],["Operation","Holiday"],["Option","None"    ],["Dst","Center"   ],["Hour",20],["Min",49]]),
	new Map([["Type","Kantetsu"],["Operation","Weekday"],["Option","None"    ],["Dst","Center"   ],["Hour",21],["Min",19]])	
	);

let timeTableSakura = Array.of(
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",08],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",08],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",09],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",09],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",10],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",10],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",11],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",11],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",12],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",12],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",13],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",13],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",14],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",14],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",15],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",15],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",16],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",16],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",17],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",17],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",18],["Min",35],["Dst",1],["Via",Array.of(
		new Map([["Type","Shuttle"],["CarNo.",3],["Dst",0],["Hour",18],["Min",50]]))]]),
	new Map([["Type","Shuttle"],["CarNo.",3],["Hour",19],["Min",05],["Dst",1]])
	);

let timeTableShuttle = Array.of(timeTableTsukuba,
								timeTableSengen,
								timeTableNamiki,
								timeTableSakura
								);


let specialHoliday = Array.of(
	new Map([["Type","General" ],["Month",1],["Date",1],["Reason","元日"]]),
	new Map([["Type","General" ],["Month",1],["Date",2],["Reason","年始休暇"]]),
	new Map([["Type","General" ],["Month",1],["Date",3],["Reason","年始休暇"]]),
	new Map([["Type","General" ],["Month",1],["Date",9],["Reason","成人の日"]]),
	new Map([["Type","General" ],["Month",2],["Date",11],["Reason","建国記念の日"]]),
	new Map([["Type","General" ],["Month",2],["Date",23],["Reason","天皇誕生日"]]),
	new Map([["Type","General" ],["Month",3],["Date",21],["Reason","春分の日"]]),
	new Map([["Type","General" ],["Month",4],["Date",29],["Reason","昭和の日"]]),
	new Map([["Type","General" ],["Month",5],["Date",3],["Reason","憲法記念日"]]),
	new Map([["Type","General" ],["Month",5],["Date",4],["Reason","みどりの日"]]),
	new Map([["Type","General" ],["Month",5],["Date",5],["Reason","こどもの日"]]),
	new Map([["Type","General" ],["Month",7],["Date",18],["Reason","海の日"]]),
	new Map([["Type","General" ],["Month",8],["Date",11],["Reason","山の日"]]),
	new Map([["Type","Kantetsu"],["Month",8],["Date",13],["Reason","休日ダイヤ"]]),
	new Map([["Type","Kantetsu"],["Month",8],["Date",14],["Reason","休日ダイヤ"]]),
	new Map([["Type","Kantetsu"],["Month",8],["Date",15],["Reason","休日ダイヤ"]]),
	new Map([["Type","Kantetsu"],["Month",8],["Date",16],["Reason","休日ダイヤ"]]),
	new Map([["Type","General" ],["Month",9],["Date",19],["Reason","敬老の日"]]),
	new Map([["Type","General" ],["Month",9],["Date",23],["Reason","秋分の日"]]),
	new Map([["Type","General" ],["Month",10],["Date",10],["Reason","スポーツの日"]]),
	new Map([["Type","General" ],["Month",11],["Date",3],["Reason","文化の日"]]),
	new Map([["Type","General" ],["Month",11],["Date",23],["Reason","勤労感謝の日"]]),
	new Map([["Type","General" ],["Month",12],["Date",29],["Reason","年末休暇"]]),
	new Map([["Type","Kantetsu"],["Month",12],["Date",29],["Reason","休日ダイヤ"]]),
	new Map([["Type","General" ],["Month",12],["Date",30],["Reason","年末休暇"]]),
	new Map([["Type","Kantetsu"],["Month",12],["Date",30],["Reason","休日ダイヤ"]]),
	new Map([["Type","General" ],["Month",12],["Date",31],["Reason","年末休暇"]]),
	new Map([["Type","Kantetsu"],["Month",12],["Date",31],["Reason","休日ダイヤ"]])
);

function fontColorRed(msg){
	return "<span style=\"color:red;\">"+ msg +"</span>";
}

function getFrom() {
    return document.getElementById("src").value;
}
 
function getTo() {
    return document.getElementById("dst").value;
}

function twoDigit(num) {
	let ret;
	if( num < 10 ) 
		return "0" + num; 
	return num; 
}


function getDay()
{
	let nowTime = new Date();
	let nowDay = nowTime.getDay();
	let day="";

	switch(nowDay){
		case 0:
			day = "日曜日";
			break;
		case 1:
			day = "月曜日";
			break;
		case 2:
			day = "火曜日";
			break;
		case 3:
			day = "水曜日";
			break;
		case 4:
			day = "木曜日";
			break;
		case 5:
			day = "金曜日";
			break;
		case 6:
			day = "土曜日";
			break;
	}

	if(isSpecialHoliday())
		day += "("+ getSpecialHoliday()+")";

	return day;
}

function getCurrentTime()
{
	let nowTime = new Date();
	let nowMonth = nowTime.getMonth()+1;
	let nowDate = nowTime.getDate();

	return twoDigit(nowMonth)+"月"+twoDigit(nowDate)+"日 ("+getDay()+") 現在の時刻は " + twoDigit( nowTime.getHours() ) + ":" + twoDigit( nowTime.getMinutes() ) + ":" + twoDigit( nowTime.getSeconds() ) + " です。 ";
}

function isSpecialHoliday(KantetsuSwitch)
{
	let nowTime = new Date();
	let nowDay = nowTime.getDay();
	let nowMonth = nowTime.getMonth()+1;
	let nowDate = nowTime.getDate();

	if(KantetsuSwitch)
		if( specialHoliday.find(n => (n.get("Month") == nowMonth && n.get("Date") == nowDate ) != undefined))
			return true;		
	else
		if( specialHoliday.find(n => (n.get("Type") == "General" && n.get("Month") == nowMonth && n.get("Date") == nowDate ) != undefined))
			return true;

	return false;
}

function getSpecialHoliday(KantetsuSwitch)
{
	let nowTime = new Date();
	let nowMonth = nowTime.getMonth()+1;
	let nowDate = nowTime.getDate();

	if(KantetsuSwitch)
		return specialHoliday.find(n => ((n.get("Type") == "Kantestu" || n.get("Type") == "General") && n.get("Month") == nowMonth && n.get("Date") == nowDate )).get("Reason");
	else
		return specialHoliday.find(n => (n.get("Type") == "General" && n.get("Month") == nowMonth && n.get("Date") == nowDate )).get("Reason");
}

function isHoliday()
{
	let nowTime = new Date();
	let nowDay = nowTime.getDay();

	if(nowDay == 0 || nowDay == 6)
		return true;
	return false;
}

function getHoliday()
{
	let nowTime = new Date();
	let nowDay = nowTime.getDay();

	switch(nowDay){
		case 0:
			return "日曜日";
		case 6:
			return "土曜日";
	}
}

function getKantetsuDstAndOption(Dst,Option)
{
	let msg = "";
	switch(Dst)
	{
		case "Center":
			msg += "つくばセンター行き";
			break;
		case "Hospiutal":
			msg += "筑波大学病院行き";
			break;
		case "Shimoduma":
			msg += "下妻駅行き";
			break;
		case "Kenchiku":
			msg += "建築研究所行き";
			break;
		case "Sakura":
			msg +="桜ニュータウン行き";
			break;
		case "Arakawaoki":
			msg += "荒川沖駅行き";
			break;
	}
	switch (Option)
	{
		case "None":
			msg += "です。";
			break;
		case "Purple":
			msg += "パープルバスで運行します(筑波大学病院経由)。";
			break;
		case "Small":
			msg += "小型バスで運行します。";
			break;
		case "Hospital":
			msg += "(筑波大学病院行)です。";
			break;
	}	
	return msg;
}

function getTime(from,to,KantetsuSwitch){
	let nowTime = new Date();

	const currentBusStop = timeTableShuttle[from];	

	let currentTime = nowTime.getHours() * 60 + nowTime.getMinutes();
	
	let nextKantetsuBus = (isSpecialHoliday() || isHoliday())? 
							currentBusStop.find	(n =>(n.get("Type") == "Kantetsu" && n.get("Operation") == "Holiday" && n.get("Hour") * 60 + n.get("Min")  > currentTime )) : 
							currentBusStop.find	(n =>(n.get("Type") == "Kantetsu" && n.get("Operation") == "Weekday" && n.get("Hour") * 60 + n.get("Min")  > currentTime ))

	let nextShuttleBus = (isSpecialHoliday() || isHoliday()) ? undefined : 
								currentBusStop.find( n =>(n.get("Type") == "Shuttle" && n.get("Hour") * 60 + n.get("Min")  > currentTime && 
								(parseInt(n.get("Dst")) == to ||
	   							(n.has("Via") && n.get("Via").find( m => parseInt(m.get("Dst")) == to) !=undefined ))));

	let nextNextKantetsuBus = (nextKantetsuBus ==undefined)? undefined:
						(isSpecialHoliday() || isHoliday())? 
						currentBusStop.find	(n =>(n.get("Type") == "Kantetsu" && n.get("Operation") == "Holiday" && n.get("Hour") * 60 + n.get("Min")  > nextKantetsuBus.get("Hour") * 60 + nextKantetsuBus.get("Min"))) : 
						currentBusStop.find	(n =>(n.get("Type") == "Kantetsu" && n.get("Operation") == "Weekday" && n.get("Hour") * 60 + n.get("Min")  > nextKantetsuBus.get("Hour") * 60 + nextKantetsuBus.get("Min") ))

	let nextNextShuttleBus = (nextShuttleBus == undefined)? undefined:
								(isSpecialHoliday() || isHoliday()) ? undefined : 
									currentBusStop.find( n =>(n.get("Type") == "Shuttle" && n.get("Hour") * 60 + n.get("Min")  > nextShuttleBus.get("Hour") * 60 + nextShuttleBus.get("Min") && 
									(parseInt(n.get("Dst")) == to ||
									(n.has("Via") && n.get("Via").find( m => parseInt(m.get("Dst")) == to) !=undefined ))));
   
	msg = "<HR>";
	if(nextShuttleBus == undefined)
		msg += fontColorRed("本日のNIMSバスは終了しました。");
	else
		if(nextShuttleBus.get("Hour") * 60 + nextShuttleBus.get("Min") <= currentTime +5)
			msg += fontColorRed("次のNIMSバスは"+twoDigit(nextShuttleBus.get("Hour"))+":"+twoDigit(nextShuttleBus.get("Min"))+"("+nextShuttleBus.get("CarNo.")+"号車)です。")
		else
			msg += "次のNIMSバスは"+twoDigit(nextShuttleBus.get("Hour"))+":"+twoDigit(nextShuttleBus.get("Min"))+"("+nextShuttleBus.get("CarNo.")+"号車)です。";

	if(nextNextShuttleBus == undefined)
		msg += fontColorRed("その次のNIMSバスはありません。");
	else
		if(nextNextShuttleBus.get("Hour") * 60 + nextNextShuttleBus.get("Min") <= currentTime +5)
			msg += fontColorRed("その次のNIMSバスは"+twoDigit(nextNextShuttleBus.get("Hour"))+":"+twoDigit(nextNextShuttleBus.get("Min"))+"("+nextNextShuttleBus.get("CarNo.")+"号車)です。")
		else
			msg += "その次のNIMSバスは"+twoDigit(nextNextShuttleBus.get("Hour"))+":"+twoDigit(nextNextShuttleBus.get("Min"))+"("+nextNextShuttleBus.get("CarNo.")+"号車)です。";
	
	

	if(KantetsuSwitch)
	{
		msg += "<HR>";
		if(nextKantetsuBus == undefined)
			msg += fontColorRed("本日の関鉄バスは終了しました。");
		else
			if(nextKantetsuBus.get("Hour") * 60 + nextKantetsuBus.get("Min") <= currentTime +8)
				msg += fontColorRed("次の関鉄バスは"+twoDigit(nextKantetsuBus.get("Hour"))+":"+twoDigit(nextKantetsuBus.get("Min"))+getKantetsuDstAndOption(nextKantetsuBus.get("Dst"),nextKantetsuBus.get("Option")));
			else
				msg += "次の関鉄バスは"+twoDigit(nextKantetsuBus.get("Hour"))+":"+twoDigit(nextKantetsuBus.get("Min"))+getKantetsuDstAndOption(nextKantetsuBus.get("Dst"),nextKantetsuBus.get("Option"));

		if(nextNextKantetsuBus == undefined)
			msg += fontColorRed("その次の関鉄バスはありません。");
		else
			if(nextNextKantetsuBus.get("Hour") * 60 + nextNextKantetsuBus.get("Min") <= currentTime +8)
				msg += fontColorRed("その次の関鉄バスは"+twoDigit(nextNextKantetsuBus.get("Hour"))+":"+twoDigit(nextNextKantetsuBus.get("Min"))+getKantetsuDstAndOption(nextNextKantetsuBus.get("Dst"),nextNextKantetsuBus.get("Option")));
			else
				msg += "その次の関鉄バスは"+twoDigit(nextNextKantetsuBus.get("Hour"))+":"+twoDigit(nextNextKantetsuBus.get("Min"))+getKantetsuDstAndOption(nextNextKantetsuBus.get("Dst"),nextNextKantetsuBus.get("Option"));
		}
	return msg;
}


function getTimeTable(){

	const from = parseInt(getFrom());
	const to = parseInt(getTo());
	
	if(from == to)
		return fontColorRed("発着停留所が同じなようです。");
	if( (from == 2 && to == 3 ) || (from == 3 && to == 2))
		return fontColorRed("直接経路がありません。");	
		
	switch(from){
		case 0:
			switch (to){
				case 1:
				case 3:
					return getTime(from,to);
 				case 2:
					return getTime(from,to,true);
			}
			break;
		case 1:
			switch (to){
				case 0:
				case 2:
				case 3:
					return getTime(from,to);
			}
			break;
		case 2:
			switch (to){
				case 0:
					return getTime(from,to,true);
				case 1:
					return getTime(from,to);
			}
			break;
		case 3:
			switch (to){
				case 0:
				case 1:
					return getTime(from,to);
			}
			break;
	}
	return "Err";
}

function getMsg(){
	let nowTime = new Date();
	let nowHour = twoDigit( nowTime.getHours() );
	let nowMin  = twoDigit( nowTime.getMinutes() );
	let nowSec  = twoDigit( nowTime.getSeconds() );
	let nowDay = nowTime.getDay();
	let nowMonth = nowTime.getMonth()+1;
	let nowDate = nowTime.getDate();

	document.getElementById("currentTime").innerHTML = getCurrentTime();
	document.getElementById("nextBus").innerHTML = getTimeTable();
}

/*
function showTimeTable() {
	let nowTime = new Date();
	let nowHour = twoDigit( nowTime.getHours() );
	let nowMin  = twoDigit( nowTime.getMinutes() );
	let nowSec  = twoDigit( nowTime.getSeconds() );
	let nowDay = nowTime.getDay();
	let nowMonth = nowTime.getMonth()+1;
	let nowDate = nowTime.getDate();

	let msgCurrent = "現在の時刻は " + nowHour + ":" + nowMin + ":" + nowSec + " です。 ";
	const currentTime = nowTime.getHours()*60 + nowTime.getMinutes();
	const src = getFrom();

	const currentBusStop = timeTableShuttle[src];

	const dst = getDst();
	
	const nextShuttle = currentBusStop.find(n => (n.get("Hour") * 60 + n.get("Min")  > currentTime && 
											(n.get("Dst") == dst || 
											(n.has("Via") && n.get("Via").find( m => m.get("Dst") == dst) !=undefined ))));
    
    const nextTime = nextShuttle != undefined ? nextShuttle.get("Hour")*60+nextShuttle.get("Min")+1 : undefined ;
    
    const nextNextShuttle = currentBusStop.find(n => (n.get("Hour") * 60 + n.get("Min")  > nextTime && 
											(n.get("Dst") == dst || 
											(n.has("Via") && n.get("Via").find( m => m.get("Dst") == dst) !=undefined ))));
    
	const isSpecialHoliday =  specialHoliday.find(n => (n.get("Month") == nowMonth && n.get("Date") == nowDate ));

	let msgNextBus="";
	if(src == dst)
		msgNextBus += "<span style=\"color:red;\">発着停留所が同じなようです。</span>"
	else
		if( (src == 2 && dst == 3) || (src == 3 && dst == 2) )
			msgNextBus += "<span style=\"color:red;\">その直接経路はありません。</span>"
		else
			if(nowDay == 0 || nowDay == 6 ||  isSpecialHoliday != undefined)
				msgNextBus += "<span style=\"color:red;\">本日は運行していません。(" + (isSpecialHoliday != undefined ? isSpecialHoliday.get("Reason") : (nowDay==0 ? "日曜日" : "土曜日")) + ")</span>";
			else
				if(nextShuttle == undefined)
					msgNextBus += "<span style=\"color:red;\">本日のシャトルバスは終了しました。</span>";
				else
					if(nextShuttle.get("Hour")*60+nextShuttle.get("Min") - 5 <= currentTime)
					{
						msgNextBus += "<span style=\"color:red;\">次のシャトルバスは " + twoDigit(nextShuttle.get("Hour"))+ ":" + twoDigit(nextShuttle.get("Min")) + busStop[nextShuttle.get("Dst")] +  "行き" + nextShuttle.get("CarNo") + "号車(Car No."+ nextShuttle.get("CarNo") +") です。</span>";
						if(nextNextShuttle == undefined)
							msgNextBus += "<BR><span style=\"color:red;\">その次のシャトルバスは無いようです。</span>";
						else
							msgNextBus += "<BR>その次のシャトルバスは " + twoDigit(nextNextShuttle.get("Hour"))+ ":" + twoDigit(nextNextShuttle.get("Min")) + busStop[nextNextShuttle.get("Dst")] +  "行き" + nextNextShuttle.get("CarNo") + "号車(Car No."+ nextNextShuttle.get("CarNo") +") です。 ";
					}
					else
						msgNextBus += "次のシャトルバスは " + twoDigit(nextShuttle.get("Hour"))+ ":" + twoDigit(nextShuttle.get("Min")) + busStop[nextShuttle.get("Dst")] +  "行き" + nextShuttle.get("CarNo") + "号車(Car No."+ nextShuttle.get("CarNo") +") です。 ";

	document.getElementById("currentTime").innerHTML = msgCurrent;
	document.getElementById("nextBus").innerHTML = msgNextBus;
}
*/

setInterval('getMsg()',1000);

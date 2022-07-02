var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
//var col1 ='DarkOliveGreen';
//var col2='';
//var col3='Red';
//var y=100;
var timer;
var myX;
var myY;

function drawDot(){
	ctx.clearRect(0,0, 1300, 700);
  ctx.beginPath();
  ctx.fillStyle='LemonChiffon';
  ctx.fillRect(0,0,1300,700);
	//резервуарний парк
  ctx.beginPath();
  ctx.fillStyle='DarkOliveGreen';
  ctx.moveTo(100,134);
  ctx.lineTo(555,134);
  ctx.lineTo(555,590);
  ctx.lineTo(100,590);
  ctx.lineTo(100,134);
  ctx.fill()
  //ділянка автоналиву
  ctx.beginPath();
  ctx.fillStyle='Grey';
  ctx.moveTo(784,180);
  ctx.lineTo(1218,180);
  ctx.lineTo(1218,700);
  ctx.lineTo(784,700);
  ctx.lineTo(784,180);
  ctx.fill();

  //Функція резервуар РВС
    function tank(x,y,r,name,fuel,num,h,v,isMore,isLess){
	ctx.beginPath();
  ctx.fillStyle='WhiteSmoke';
	ctx.lineWidth = 5;
	ctx.strokeStyle='DarkGray';
    ctx.arc(x,y,r,0,Math.PI*2,true); 
    ctx.fill();
	ctx.stroke();
  ctx.beginPath();
	ctx.font = "20px serif";
	ctx.fillStyle='Black';
  ctx.fillText(fuel, x-25, y-35);
  ctx.fillText(name+' №'+num, x-60, y-12 );
  ctx.font="14px serif";
  ctx.fillText('H= '+h, x-30,y+30 );
  ctx.fillText('V='+v,x-30,y+45);
  if(isMore){
    ctx.beginPath();
	ctx.lineWidth = 6;
	ctx.strokeStyle='#cc9900';
    ctx.moveTo(x-10,y);
    ctx.lineTo(x+10,y);
    ctx.moveTo(x,y-10);
    ctx.lineTo(x,y+10);
    ctx.stroke();
     }
  if(isLess){
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle='#cc9900';
  ctx.moveTo(x-10,y);
  ctx.lineTo(x+10,y);
  ctx.stroke();
      }
    
}
  
  
  
  //Залізна дорога
  ctx.strokeStyle='Black';
  ctx.lineWidth='1';
  ctx.moveTo(1284,45);
  ctx.lineTo(0,45);
  ctx.moveTo(1284,55);
  ctx.lineTo(0,55);
ctx.moveTo(1284,37);
ctx.lineTo(1284,62);
ctx.stroke();
ctx.beginPath
var i=0;
while(i<1284){
  ctx.beginPath();
  ctx.fillRect(i,41,3,18);
ctx.fill();
i=i+8;
}
  //Функція автоцистерна
  function car_tank (x,y,tankNumber,section){
    ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle='Black';
  ctx.fillStyle='#ff9900';
  ctx.strokeRect(x-10,y-45,20,85);
  if(x>1000){
  ctx.fillRect(x-8,y-41,16,12);
  ctx.fillStyle='#339933';
  ctx.fillRect(x-10,y-25,20,65);
  ctx.fillStyle='#ccff99';
  ctx.fillRect(x-4,y-23,8,60);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle='Black';
  ctx.arc(x,y-15,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y-5,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y+3,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y+10,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y+17,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y+24,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y+32,2,0,Math.PI*2,true);
  ctx.fill();
  }else{
    ctx.fillRect(x-8,y+24,16,12);
  ctx.fillStyle='#339933';
  ctx.fillRect(x-10,y-45,20,65);
  ctx.fillStyle='#ccff99';
  ctx.fillRect(x-4,y-43,8,60);
  ctx.stroke();
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.fillStyle='Black';
  ctx.arc(x,y+15,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y+5,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y-3,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y-10,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y-17,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y-24,2,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x,y-32,2,0,Math.PI*2,true);
  ctx.fill();
  }
  ctx.font = "10px serif";
	ctx.fillText(tankNumber, x-15, y+56);
  }
  car_tank(1174,488,'AI6482KM',7);//ДП"А"
  car_tank(1174,290,'AA5763HH',7);//ДП"З"
  car_tank(824,290,'КК5632ВС',7);//А-92
  car_tank(824,488,'AA6789AO',7);//A-95

  //Функція насос ЗД x,y -координати, number-номер на схемі, isRight-(true,false) надпис зправа на схемі, isActive-(true,false),P-тиск на манометрі
  function pump(x,y,namber,isRight,isActive,P){
    ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle='Black';
    ctx.arc(x,y,15,0,Math.PI*2,true); 
	ctx.stroke();
  ctx.beginPath(x-6,y+4);
  ctx.lineTo(x+6,y+4);
  ctx.lineTo(x,y+13);
  ctx.lineTo(x-6,y+4);
  fillStyle='Black';
  ctx.fill();
    if(isRight){
		ctx.font = "14px serif";
	   if(isActive){
		ctx.fillStyle='Lime';
	ctx.fillText(namber, x+20, y);
	ctx.fillText('P='+P,x+20,y+10);
	ctx.fill();
  }else{
	ctx.fillStyle='Black';
	ctx.fillText(namber, x+20, y);
	ctx.fill();
	  }
}else{
	ctx.font = "14px serif";
	 if(isActive){
	ctx.fillStyle='Lime';
	ctx.fillText(namber, x-33, y);
	ctx.fillText('P='+P,x-50,y+10);
	ctx.fill();
  }else{
	ctx.fillStyle='Black';
	ctx.fillText(namber, x-33, y);
	ctx.fill();
  }
}
  }
  // Функція насос автоналивний x,y-координати, isAbove-надпис над насосом, isActive-насос працює.
function pumpPouring(x,y,isAbove,nam,isActive){
     ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle='Black';
    ctx.arc(x,y,12,0,Math.PI*2,true); 
	ctx.stroke();
  ctx.beginPath(x+3,y+4);
  ctx.lineTo(x+3,y-4);
  ctx.lineTo(x+10,y);
  ctx.lineTo(x+3,y+4);
  fillStyle='Black';
  ctx.fill();
  if(isAbove){
		ctx.font = "14px serif";
	   if(isActive){
		ctx.fillStyle='Lime';
	ctx.fillText(nam, x-10, y-15);
		ctx.fill();
  }else{
	ctx.fillStyle='Black';
	ctx.fillText(nam, x-10, y-15);
	ctx.fill();
	  }
}else{
	ctx.font = "14px serif";
	 if(isActive){
	ctx.fillStyle='Lime';
	ctx.fillText(nam, x-10, y+25);
		ctx.fill();
  }else{
	ctx.fillStyle='Black';
	ctx.fillText(nam, x-10, y+20);
	ctx.fill();
  }
}
  }
  


  //Автоналивний стояк (функція) x,y координати центру, isRight-напрям автоналивного стояка, isFuel,isActive-заливається пальне, released-видано,capacity-доза
  function pouring_pipe(x,y,isRight,fuel,isActive,released,capacity){
    ctx.beginPath();
    ctx.strokeRect(x-10, y-40, 20, 80);
    ctx.strokeRect(x-7,y-20,14,40);
    ctx.strokeRect(x-5,y-35,10,15);
    ctx.strokeRect(x-5,y+20,10,15);
    ctx.fillStyle='Black';
    if(isRight){
      ctx.strokeRect(x+7,y+4,14,8);//перехідний місток
      ctx.clearRect(x+7,y+4,14,8);//перехідний місток
      ctx.moveTo(x,y);//труба автоналиву
      ctx.lineTo(x+24,y);//труба автоналив
      ctx.font = "14px serif"
      ctx.fillText(fuel, x-50, y-20);
      ctx.stroke();
      if(isActive){
        ctx.beginPath();
        ctx.fillStyle='Lime';
      ctx.fillText(released, x-50,y);
      ctx.fillText(capacity,x-50,y+16);
      ctx.stroke();
      }
    
    }else{
      ctx.strokeRect(x-21,y+4,14,8);//перехідний місток
    ctx.clearRect(x-21,y+4,14,8);//перехідний місток
    ctx.moveTo(x,y);//труба автоналиву
    ctx.lineTo(x-24,y);//труба автоналив
    ctx.stroke();
      ctx.font = "14px serif"
      ctx.fillText(fuel, x+20, y-20);
      if(isActive){
        ctx.beginPath();
        ctx.fillStyle='Lime';
      ctx.fillText(released, x+20,y);
      ctx.fillText(capacity,x+20,y+16);
      
    }
  }

  }
  //Трубопроводи
  function drain_pipe(x){
    ctx.beginPath();
    ctx.strokeStyle='Black';
    ctx.lineWidth = 3;
    ctx.moveTo(x, 82); 
  ctx.lineTo(x, 104);
  ctx.moveTo(x,104);
  ctx.bezierCurveTo(x+5, 104, x+10, 114, x, 115);
  ctx.lineTo(x, 150);
  ctx.stroke();
  }
  //Бензиновий зливний трубопровід
  function drain_pipe_petrol(x){
    ctx.beginPath();
    ctx.strokeStyle='Black';
    ctx.lineWidth = 3;
    ctx.moveTo(x, 90); 
    ctx.lineTo(x-60, 90);
    ctx.lineTo(x-60, 110);
    ctx.stroke();
  }

  ctx.beginPath();
    ctx.strokeStyle='Black';
    ctx.lineWidth = 3;
    drain_pipe(670);//Між засувками 1-7
    drain_pipe(780);//Між засувками 2-9
    drain_pipe(890);//Між засувками 3-11
    drain_pipe(1000);//Між засувками 4-13
    drain_pipe(1110);//Між засувками 5-17
    drain_pipe_petrol(1220);//Між засувками 6-18
    drain_pipe_petrol(1110);//Між засувками 5-16
    drain_pipe_petrol(1000);//Між засувками 4-14
    drain_pipe_petrol(890);//Між засувками 3-12
    drain_pipe_petrol(780);//Між засувками 2-10
    drain_pipe_petrol(670);//Між засувками 1-16
    //Дизельна зливна труба до насосу 41
ctx.moveTo(1220, 82); //Між засувками 6-15
ctx.lineTo(1220, 150);//Між засувками 6-15
ctx.lineTo(670,150);//Дизельна зливна труба
ctx.lineTo(670,205);//Дизельна зливна труба
//Бензинова зливна труба ЗД естакади від засувок 8,10,12,14,16,18 дл насосу 42.
ctx.moveTo(1160,110);
ctx.lineTo(610,110);
ctx.lineTo(610,160);
//Зливна труба резервуару №1
ctx.moveTo(210,434);
ctx.lineTo(210,400);
ctx.lineTo(600,400);
ctx.lineTo(600,243);
ctx.lineTo(610,220);
ctx.lineTo(610,190);
//Зливна труба резервуару №2
ctx.moveTo(460,435);
ctx.lineTo(460,407);
ctx.lineTo(620,407);
ctx.lineTo(620,243);
ctx.lineTo(610,220);
//Зливна труба резервуару №3
ctx.moveTo(210,321);
ctx.lineTo(210,354);
ctx.lineTo(594,354);
ctx.moveTo(607,354);
ctx.lineTo(613,354);
ctx.moveTo(627,354);
ctx.lineTo(680,354);
ctx.lineTo(680,292);
ctx.lineTo(670,268);
ctx.lineTo(670,235);
//Зливна труба резервуару №4
ctx.moveTo(460,321);
ctx.lineTo(460,345);
ctx.lineTo(594,345);
ctx.moveTo(607,345);
ctx.lineTo(613,345);
ctx.moveTo(627,345);
ctx.lineTo(660,345);
ctx.lineTo(660,292);
ctx.lineTo(670,268);
//Напорна труба резервуару №1
ctx.moveTo(190,436);
ctx.lineTo(190,392);
ctx.lineTo(594,392);
ctx.moveTo(607,392);
ctx.lineTo(613,392);
ctx.moveTo(653,392);
ctx.lineTo(800,392);
ctx.lineTo(800,448);
//Напорна труба резервуару №2
ctx.moveTo(440,434);
ctx.lineTo(440,406);
ctx.moveTo(440,383);
ctx.lineTo(594,382);
ctx.moveTo(607,382);
ctx.lineTo(613,382);
ctx.moveTo(627,380);
ctx.lineTo(670,380);
ctx.moveTo(693,380);
ctx.lineTo(800,380);
ctx.lineTo(800,346);
//Напорна труба резервуару №3
ctx.moveTo(190,321);
ctx.lineTo(190,362);
ctx.lineTo(594,362);
ctx.moveTo(607,362);
ctx.lineTo(613,362);
ctx.moveTo(627,362);
ctx.lineTo(702,362);
ctx.moveTo(726,360);
ctx.lineTo(794,360);
ctx.stroke();
//Прокладка труби під землею (пунктиром) ДП"З".
ctx.beginPath();
ctx.setLineDash([5]);
ctx.moveTo(808,360);
ctx.lineTo(1200,360);
ctx.lineTo(1200,346);
ctx.stroke();
//Напорна труба резервуару №4 ДП "А"
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(440,321);
ctx.lineTo(440,348);
ctx.moveTo(440,370);
ctx.lineTo(593,370);
ctx.moveTo(607,370);
ctx.lineTo(613,370);
ctx.moveTo(626,370);
ctx.lineTo(749,370);
ctx.moveTo(772,370);
ctx.lineTo(794,370);

ctx.stroke();
//Прокладка труби під землею (пунктиром) ДП"А".
ctx.beginPath();
ctx.setLineDash([5]);
ctx.moveTo(807,370);
ctx.lineTo(1200,370);
ctx.lineTo(1200,449);
ctx.stroke();


//
ctx.beginPath();
ctx.setLineDash([]);
ctx.arc(600,354,7,0, Math.PI,true);//Переходи зливної труби 4-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(620,354,7,0, Math.PI,true);//Переходи зливної труби 4-резервуару над трубами
ctx.stroke();
ctx.beginPath();
ctx.arc(600,345,7,0, Math.PI,true);//Переходи зливної труби 3-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(620,345,7,0, Math.PI,true);//Переходи зливної труби 3-резервуару над трубами
ctx.stroke();
ctx.beginPath();
ctx.arc(600,392,7,0, Math.PI,true);//Переходи напорної труби 1-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(620,392,7,0, Math.PI,true);//Переходи напорної труби 1-резервуару над трубами
ctx.stroke();
ctx.beginPath();
ctx.arc(600,382,7,0, Math.PI,true);//Переходи напорної труби 2-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(620,382,7,0, Math.PI,true);//Переходи напорної труби 2-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(440,395,11,-0.5*Math.PI, -1.5*Math.PI,true);//Переходи напорної труби 2-резервуару над трубами
ctx.stroke();
ctx.beginPath();
ctx.arc(600,360,6,0, Math.PI,true);//Переходи напорної труби 3-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(620,360,6,0, Math.PI,true);//Переходи напорної труби 3-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(800,360,7,0, Math.PI,true);//Переходи напорної труби 3-резервуару над трубами
ctx.stroke();
ctx.beginPath();
ctx.arc(440,360,11,-0.5*Math.PI, -1.5*Math.PI,true);//Переходи напорної труби 4-резервуару над трубами
ctx.stroke();
ctx.beginPath();
ctx.arc(600,370,6,0, Math.PI,true);//Переходи напорної труби 4-резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(620,370,6,0, Math.PI,true);//Переходи напорної труби 4 -резервуару над трубами
ctx.stroke();
ctx.beginPath()
ctx.arc(800,370,7,0, Math.PI,true);//Переходи напорної труби 4-резервуару над трубами
ctx.stroke();
 //Засувка вертикальна-функція. x,y-координати центру засувки, 
  //namber-номер, isRight-маркування справа від засувки, isActive- засувка відкрита.
  function gate_valveV(x,y,namber,isRight,isActive){
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.moveTo(x-8, y-8); 
ctx.lineTo(x+8, y-8);
ctx.lineTo(x, y);
ctx.lineTo(x-8, y+8);
ctx.lineTo(x+8, y+8);
ctx.lineTo(x-8,y-8);
if(isRight){
		ctx.font = "14px serif";
	   if(isActive){
		ctx.fillStyle='Lime';
	ctx.fillText(namber, x+10, y);
		ctx.fill();
  }else{
	ctx.fillStyle='Black';
	ctx.fillText(namber, x+10, y);
	ctx.fill();
	  }
}else{
	ctx.font = "14px serif";
	 if(isActive){
	ctx.fillStyle='Lime';
	ctx.fillText(namber, x-23, y);
	ctx.fill();
  }else{
	ctx.fillStyle='Black';
	ctx.fillText(namber, x-23, y);
	ctx.fill();
  }
}
  }
//Засувка горизонтальна функція
   function gate_valveH(x,y,namber,isAbove,isActive){
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.moveTo(x-8, y-8); 
ctx.lineTo(x-8, y+8);
ctx.lineTo(x, y);
ctx.lineTo(x+8, y-8);
ctx.lineTo(x+8, y+8);
ctx.lineTo(x-8,y-8);
if(isAbove){
  ctx.font = "14px serif";
 if(isActive){
ctx.fillStyle='Lime';
ctx.fillText(namber, x-6, y-7);
ctx.fill();
}else{
ctx.fillStyle='Black';
ctx.fillText(namber, x-6, y-7);
ctx.fill();
}
}else{
ctx.font = "14px serif";
if(isActive){
ctx.fillStyle='Lime';
ctx.fillText(namber, x-6, y+22);
ctx.fill();
}else{
ctx.fillStyle='Black';
ctx.fillText(namber, x-6, y+22);
ctx.fill();
}
}
}
  //Вагоноцистерна-функція
   function rail_tank(x,y,Number,fuel){
    if(Number){
      ctx.fillStyle='Black';
	ctx.beginPath();
	ctx.strokeStyle='Gold';
    ctx.lineWidth = 23; // толщина линии
ctx.moveTo(x+40, y); //передвигаем перо
ctx.lineTo(x-40, y);
ctx.lineCap = 'round'; 
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle='Black';
ctx.arc(x,y,3,0,Math.PI*2,true);
ctx.stroke();
ctx.font = "12px serif"
ctx.fillText(fuel, x-38, y);
ctx.fillText(Number,x-38,y-15);
ctx.fill();
  }}
  
  //Засувки
  gate_valveV(670,75,1,true,false);//Засувка 1
  gate_valveV(780,75,2,true,true);//Засувка 2
  gate_valveV(890,75,3,true,true);//Засувка 3
  gate_valveV(1000,75,4,true,false);//Засувка 4
  gate_valveV(1220,75,6,true,true);//Засувка 6
  gate_valveV(1110,75,5,true,false);//Засувка 5
  gate_valveV(670,130,7,true,false);//Засувка 7
  gate_valveH(640,90,8,false,false);//Засувка 8
  gate_valveV(780,130,9,true,false);//Засувка 9
  gate_valveH(750,90,10,false,true);//Засувка 10
  gate_valveV(890,130,11,true,false);//Засувка 11
  gate_valveH(860,90,12,false,true);//Засувка 12
  gate_valveV(1000,130,13,true,false);//Засувка 13
  gate_valveH(970,90,14,false,false);//Засувка 14
  gate_valveV(1220,130,15,true,false);//Засувка 15
  gate_valveH(1080,90,16,false,false);//Засувка 16
  gate_valveV(1110,130,17,true,false);//Засувка 17
  gate_valveH(1190,90,18,false,true);//Засувка 18
  gate_valveV(670,260,19,true,false);//Засувка 19
  gate_valveV(610,210,20,false,true);//Засувка 20
  gate_valveV(660,300,21,false,false);//Засувка 21
  gate_valveV(680,300,22,true,false);//Засувка 22
  gate_valveV(620,250,23,true,false);//Засувка 23
  gate_valveV(600,250,24,false,true);//Засувка 24
  gate_valveV(190,420,25,false,true);//Засувка 25
  gate_valveV(210,420,26,true,true);//Засувка 26
  gate_valveV(440,420,27,false,true);//Засувка 27
  gate_valveV(460,420,28,true,false);//Засувка 28
  gate_valveV(190,333,29,false,true);//Засувка 29
  gate_valveV(210,333,30,true,false);//Засувка 30
  gate_valveV(440,333,31,false,true);//Засувка 31
  gate_valveV(460,333,32,true,false);//Засувка 32
  gate_valveH(662,392,33,false,true);//Засувка 33
  gate_valveV(800,435,34,false,false);//Засувка 34
  gate_valveH(707,380,35,false,true);//Засувка 35
  gate_valveV(800,340,36,false,true);//Засувка 36
  gate_valveH(736,360,37,true,true);//Засувка 37
  gate_valveV(1200,340,38,true,true);//Засувка 38
  gate_valveH(782,370,39,false,true);//Засувка 39
  gate_valveV(1200,435,40,true,true);//Засувка 40
  ctx.beginPath();
  //Виклик насосів
  pump(610,175,42,false,true,0.1);//Бензиновий насос
  pump(670,220,41,true,false,0.2);//Дизельний насос
  pumpPouring(640,392,false,43,false);//Насос на выдачу А-95 №43
  pumpPouring(682,380,false,44,true);//Насос на видачу А-92 №44
  pumpPouring(714,359,true,45,true);//Насос на видачу ДП"З"№45
  pumpPouring(760,370,true,46,true);//Насос на видачу ДП"А"№46  

  //Автоналивні стояки
  ctx.beginPath();
  pouring_pipe(1200,290,false,'ДП"З"',true,1300,3084)//Автоналивний стояк ДП"З".
  pouring_pipe(1200,490,false,'ДП"А"',true,1060,5048)//Автоналивний стояк ДП"A".
  pouring_pipe(800,290,true,'А-92',true,544,2048)//Автоналивний стояк А-92.
  pouring_pipe(800,490,true,'A-95',false,3060,6050)//Автоналивний стояк A-95.
	timer = setTimeout(drawDot, 100);
  //Вагоноцистерни
  rail_tank(1220,50,88888888,'А-95');
  rail_tank(1110,50,undefined,'А-95');
  rail_tank(1000,50,undefined,'А-95');
  rail_tank(890,50,77777777,'А-95');
  rail_tank(780,50,88888881,'А-95');
  rail_tank(670,50,undefined,'А-95');
  //Резервуари
  tank(200,500,65,'РВС-1000','A-95',1,2068,248.16,true,false);//резервуар №1
  tank(450,500,65,'РВС-1000','A-92',2,4065,483.735,false,true);//Резервуар №2.
  tank(200,240,80,'РВС-2000','ДП-"З"',3,7890,1514.880,false,true);//Резервуар №"3
  tank(450,240,80,'РВС-2000','ДП-"А"',4,9805,1882.560,false,true);//Резервуар №4
}
drawDot();
// Ця функція необхідна дня отримання необхідних координат программісту.
/*canvas.onmousemove = function (event){
	myX = event.offsetX;
	myY = event.offsetY;
	console.log('x='+myX+' y='+myY);
}*/
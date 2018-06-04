var songList = JSON.parse(songList);
var open = 0;
var song1 = document.getElementById("audio1");
var song2 = document.getElementById("audio2");
var song3 = document.getElementById("audio3");
var song4 = document.getElementById("audio4");
var song5 = document.getElementById("audio5");
var songChoice = 0;

$("#songs").click(function(){
	if(open == 0){
		$("#song1").animate({top:"10px"},100);
		$("#song2").delay(50).animate({top:"10px"},100);
		$("#song3").delay(100).animate({top:"10px"},100);
		$("#song4").delay(150).animate({top:"10px"},100);
		$("#song5").delay(200).animate({top:"10px"},100);
		open = 1;
	} 
	else if(open == 1){
		$("#song5").animate({top:"-155px"},100);
		$("#song4").delay(50).animate({top:"-122px"},100);
		$("#song3").delay(100).animate({top:"-89px"},100);
		$("#song2").delay(150).animate({top:"-56px"},100);
		$("#song1").delay(200).animate({top:"-23px"},100);
		open = 0;
	}
});

$("#song1").click(function(){
	$("#songInfo").html(songList[0].songName + " by " + songList[0].artist + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: " + songList[0].duration);	
	$("#song5").animate({top:"-155px"},100);
	$("#song4").delay(50).animate({top:"-122px"},100);
	$("#song3").delay(100).animate({top:"-89px"},100);
	$("#song2").delay(150).animate({top:"-56px"},100);
	$("#song1").delay(200).animate({top:"-23px"},100);
	open = 0;
	$("#play").css("display","inline");
	$("#stop").css("display","none");
	songChoice = 1;

	if(song2.duration > 0){
		song2.pause();
		song2.currentTime = 0;
	}
	if(song3.duration > 0){
		song3.pause();
		song3.currentTime = 0;
	}
	if(song4.duration > 0){
		song4.pause();
		song4.currentTime = 0;
	}
	if(song5.duration > 0){
		song5.pause();
		song5.currentTime = 0;
	}
});

$("#song1").hover(function(){
	$("#song1").html(">>>> SONG ONE <<<<");
});

$("#song1").mouseleave(function(){
	$("#song1").html("Song One");
});

$("#song2").click(function(){
	$("#songInfo").html(songList[1].songName + " by " + songList[1].artist + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: " + songList[1].duration);
	$("#song5").animate({top:"-155px"},100);
	$("#song4").delay(50).animate({top:"-122px"},100);
	$("#song3").delay(100).animate({top:"-89px"},100);
	$("#song2").delay(150).animate({top:"-56px"},100);
	$("#song1").delay(200).animate({top:"-23px"},100);
	open = 0;
	$("#play").css("display","inline");
	$("#stop").css("display","none");
	songChoice = 2;
	
	if(song1.duration > 0){
		song1.pause();
		song1.currentTime = 0;
	}
	if(song3.duration > 0){
		song3.pause();
		song3.currentTime = 0;
	}
	if(song4.duration > 0){
		song4.pause();
		song4.currentTime = 0;
	}
	if(song5.duration > 0){
		song5.pause();
		song5.currentTime = 0;
	}
	
});

$("#song2").hover(function(){
	$("#song2").html(">>>> SONG TWO <<<<");
});

$("#song2").mouseleave(function(){
	$("#song2").html("Song Two");
});

$("#song3").click(function(){
	$("#songInfo").html(songList[2].songName + " by " + songList[2].artist + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: " + songList[2].duration);
	$("#song5").animate({top:"-155px"},100);
	$("#song4").delay(50).animate({top:"-122px"},100);
	$("#song3").delay(100).animate({top:"-89px"},100);
	$("#song2").delay(150).animate({top:"-56px"},100);
	$("#song1").delay(200).animate({top:"-23px"},100);
	open = 0;
	$("#play").css("display","inline");
	$("#stop").css("display","none");
	songChoice = 3;
	
	if(song1.duration > 0){
		song1.pause();
		song1.currentTime = 0;
	}
	if(song2.duration > 0){
		song2.pause();
		song2.currentTime = 0;
	}
	if(song4.duration > 0){
		song4.pause();
		song4.currentTime = 0;
	}
	if(song5.duration > 0){
		song5.pause();
		song5.currentTime = 0;
	}
	
});

$("#song3").hover(function(){
	$("#song3").html(">>>> SONG THREE <<<<");
});

$("#song3").mouseleave(function(){
	$("#song3").html("Song Three");
});

$("#song4").click(function(){
	$("#songInfo").html(songList[3].songName + " by " + songList[3].artist + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: " + songList[3].duration);
	$("#song5").animate({top:"-155px"},100);
	$("#song4").delay(50).animate({top:"-122px"},100);
	$("#song3").delay(100).animate({top:"-89px"},100);
	$("#song2").delay(150).animate({top:"-56px"},100);
	$("#song1").delay(200).animate({top:"-23px"},100);
	open = 0;
	$("#play").css("display","inline");
	$("#stop").css("display","none");
	songChoice = 4;
	
	if(song1.duration > 0){
		song1.pause();
		song1.currentTime = 0;
	}
	if(song2.duration > 0){
		song2.pause();
		song2.currentTime = 0;
	}
	if(song3.duration > 0){
		song3.pause();
		song3.currentTime = 0;
	}
	if(song5.duration > 0){
		song5.pause();
		song5.currentTime = 0;
	}
	
});

$("#song4").hover(function(){
	$("#song4").html(">>>> SONG FOUR <<<<");
});

$("#song4").mouseleave(function(){
	$("#song4").html("Song Four");
});

$("#song5").click(function(){
	$("#songInfo").html(songList[4].songName + " by " + songList[4].artist + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: " + songList[4].duration);
	$("#song5").animate({top:"-155px"},100);
	$("#song4").delay(50).animate({top:"-122px"},100);
	$("#song3").delay(100).animate({top:"-89px"},100);
	$("#song2").delay(150).animate({top:"-56px"},100);
	$("#song1").delay(200).animate({top:"-23px"},100);
	open = 0;
	$("#play").css("display","inline");
	$("#stop").css("display","none");
	songChoice = 5;

	if(song1.duration > 0){
		song1.pause();
		song1.currentTime = 0;
	}
	if(song2.duration > 0){
		song2.pause();
		song2.currentTime = 0;
	}
	if(song3.duration > 0){
		song3.pause();
		song3.currentTime = 0;
	}
	if(song4.duration > 0){
		song4.pause();
		song4.currentTime = 0;
	}

});

$("#song5").hover(function(){
	$("#song5").html(">>>> SONG FIVE <<<<");
});

$("#song5").mouseleave(function(){
	$("#song5").html("Song Five");
});


$("#stop").click(function(){

	song1.pause();
	song1.currentTime = 0
	song2.pause();
	song2.currentTime = 0
	song3.pause();
	song3.currentTime = 0
	song4.pause();
	song4.currentTime = 0
	song5.pause();
	song5.currentTime = 0


	$("#stop").css("display","none");
	$("#play").css("display","inline");
});

$("#play").click(function(){

	if(songChoice == 1){
		song1.play();
	}

	else if(songChoice == 2){
		song2.play();
	}

	else if(songChoice == 3){
		song3.play();
	}

	else if(songChoice == 4){
		song4.play();
	}

	else if(songChoice == 5){
		song5.play();
	}

	$("#stop").css("display","inline");
	$("#play").css("display","none");
});
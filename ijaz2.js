name1 = localStorage.getItem("name1");
name2 = localStorage.getItem("name2");

a1 = 0;
a2 = 0;

document.getElementById("player_name1").innerHTML = name1 + " : "  ;
document.getElementById("player_name2").innerHTML= name2 + " : " ;

document.getElementById("player_score1").innerHTML = a1 ;
document.getElementById("player_score2").innerHTML = a2 ;

document.getElementById("player_Question").innerHTML = "Question Turn : " + name1; 
document.getElementById("player_Answer").innerHTML = "Answer Turn : " + name2;

function send() {

Number1 = document.getElementById("number1").value; 
Number2 =document.getElementById("number2").value; 
actual_Answer = parseInt(Number1) * parseInt(Number2);
console.log(actual_Answer);

name3 = "<h6>" + Number1+ " X " + Number2 +"</h6>";

input_box = "<br>Answer: <input type='text' id='input_check_box'>";

check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";

row= name3 + input_box + check_button; 
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value ="";
}

question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer==actual_Answer)
        {
            if(answer_turn== "player1"){
                a1=a1+1;
                document.getElementById("player_score1").innerHTML=a1;
        }
            else{
                a2=a2+1;
                document.getElementById("player_score2").innerHTML=a2;
            }
}
    if(question_turn=="player1")
        {
            question_turn= "player2"
            document.getElementById("player_Question").innerHTML = "Question Turn -" + name2;
        }
    else{
        question_turn= "player1"
        document.getElementById("player_Question").innerHTML = "Question Turn-" + name1;
    }
    if(answer_turn=="player1")
        {
            answer_turn= "player2"
            document.getElementById("player_Answer").innerHTML = "Answer Turn-" + name2;
        }
    else{
        answer_turn="player1"
        document.getElementById("player_Answer").innerHTML = "Answer Turn-" + name1;
    }
    document.getElementById("output").innerHTML = "";
}

function adduser() {

 name1 = document.getElementById("player1_name").value; 
 name2 = document.getElementById("player2_name").value;

    
localStorage.setItem("name1", name1); 
localStorage.setItem("name2", name2);

window.location = "ijaz2.html";
}
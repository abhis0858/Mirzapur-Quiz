var readlineSync =require('readline-sync');
var score = 0;
var questions = [{
  ques: "1. Who plays the role of Guddu Pandit ? \n a.  Divyendu Sharma  \n b.  Vikrant Massey \n c.  Ali Fazal  \n "
         ,
  ans: "c"
},
{
    ques: "2. Who plays the role of Munna's father in Mirzapur \n a. Rajesh Tailang \n b. Pankaj Tripathi \n c. Ali Fazal  \n  ",
    ans: "b"
},

{
  ques: "3. Who said, \"Agli baar Munna Bhaiya ghar aayein, zinda wapas nahi laute toh ?\" \n a. Guddu Pandit \n b. Bablu Pandit  \n c. Dimpy  \n ",
  ans: "a"
},

{
  ques: "4. To whom did Kaleen Bhaiya said,\" Aap Jis Sheher Mein Naukar hain, hum malik hain us sheher ke?\" \n a.  Ratan Singh \n b.  Madhuri  \n c.  Maurya Ratan Singh  \n  ",
  ans: "c"
},

{
  ques: "5. To whom did Sweety say, \"Chuna Nahi Humko Bina Permission Ke.\" \n a. Munna  \n b. Guddu  \n c. Bablu  \n ",
  ans: "b"
},

{
  ques: "6. What is being referred to as bawal ,\" Abe bawal chij hai be sara system hil jata hai.\"  \n a. Goli  \n b. Bullet \n c. Gun  \n ",
  ans : "c"
},

{
  ques: "7. Who said , \"Guns ki madad se dar nahi badhana hai dar ki madad se guns bdhani hai \" \n a. Maqsood  \n b. Babloo Pandit \n c. Munna Bhaia  \n ",
  ans : "b"
},
{
  ques: "8. Who said ,\" Fat gayi hai uski jane dijiy.\"  \n  a. Ramakant Pandit  \n  b. Judge  \n  c. Lawyer \n  ",
  ans : "b"
},
{
  ques: "9. Who said , \"Shadi koi khana khana thodi na hai ki karna hi hai\" \n  a. Dimpy  \n  b. Golu  \n  c. Guddu  \n ",

  ans : "c"
},
{
  ques: "10. Tripathi ke Pehle kin logo ka raaz tha Mirzapur pe \n  a. Choudhary Ka  \n  b. Rama Singh Kant Ka \n  c. Maurya Ka \n  ",

  ans : "a"
}]



  userName = readlineSync.question("Enter Your Name? ");
  console.log("Welcome! " + userName + " Let's test your Mirzapur Knowledge");
  function quiz(ques,ans){
      var userAns = readlineSync.question(ques);
           if(userAns.toUpperCase() === ans.toUpperCase()){
               console.log("Correct Answer");
               console.log("---------------");
               score = score + 1;
               console.log("current score : " + score);
               console.log("  ");
              }else{
        console.log("Oops! Incorrect Answer");
        console.log("----------------------");
        console.log("current score : " + score);
        console.log(" ");
      }
      
  }





for(var i=0;i<questions.length;i++){
  curQues = questions[i];
  quiz(curQues.ques,curQues.ans);
}

    console.log("Thanks for playing this Mirzapur quiz");
    console.log("Final Score : " + score);
    
 
      console.log("Congratulations " + userName + " you scored " + (score/questions.length)*100 +"% ");

      if((score/questions.length)*100 >= 95){
        console.log("You are true Mirzapur Fan");
      }else{
        console.log("Go and watch both the seasons again");
      }
  console.log("quiz successfully ended");
    
 

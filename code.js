var user=0,comp=0;
const user_score=document.getElementById("user-score");
const comp_score=document.getElementById("comp-score");
const move_r=document.getElementById("r");
const move_p=document.getElementById("p");
const move_s=document.getElementById("s");
const result_msg=document.getElementById("result");

function getcomp_move()
{
var move=Math.random()*2;
move=Math.round(move);
return move;
}

function result(user_move)
{
   var comp_move=getcomp_move();
    if(user_move==comp_move)
    {
        user_score.innerHTML=user;
        comp_score.innerHTML=comp;
        result_msg.innerHTML="It's a draw";
    } 
    else
    { 
        if(user_move==0 && comp_move==1) 
        {comp++;
            comp_score.innerHTML=comp;
            user_score.innerHTML=user;
            result_msg.innerHTML="Paper covers rock. You Loose";}
        else if(user_move==1 && comp_move==2)
        {comp++;
            comp_score.innerHTML=comp;
            user_score.innerHTML=user;
            result_msg.innerHTML="Scissor cuts Paper. You Loose";} 
        else if(user_move==2 && comp_move==0)
        {comp++;
            comp_score.innerHTML=comp;
            user_score.innerHTML=user;
            result_msg.innerHTML="Rock destroys Scissors. You Loose";}
        else if(user_move==1 && comp_move==0) 
        {user++;
            user_score.innerHTML=user;
            comp_score.innerHTML=comp;
            result_msg.innerHTML="Paper covers rock. You Win";}
        else if(user_move==2 && comp_move==1)
        {user++;
            user_score.innerHTML=user;
            comp_score.innerHTML=comp;
            result_msg.innerHTML="Scissor cuts Paper. You Win";} 
        else if(user_move==0 && comp_move==2)
        {user++;
            user_score.innerHTML=user;
            comp_score.innerHTML=comp;
            result_msg.innerHTML="Rock destroys Scissors. You Win";}    
        
    } 
}

move_r.addEventListener('click',function()
{result(0);})
move_p.addEventListener('click',function()
{result(1);})
move_s.addEventListener('click',function()
{result(2);})


 
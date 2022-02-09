import React from "react"
import Square from '../Square';
// import Move from "./Move"

export default function Board(){
    let player = true
    var move = "x"
    function playerMove({value}) {
        if (player===true) {
            move = "x"
        } else if(player===false) {
            move = "o"
        }
        player = player ? false:true;
        console.log([move, value]) 
    }


//take in a player's click. DONE ALREADY
//record the number and x/o of the click. DONE
//toggle over from x/o to o/x for the next move. DONE 


    return (
        <div>
            <Square value="1" onClick={playerMove("")}/>
            <Square value="2" onClick={() => playerMove("")}/>
            <Square value="3" onClick={() => playerMove("")}/>
            <Square value="4" onClick={() => playerMove("")}/>
            <Square value="5" onClick={() => playerMove("")}/>
            <Square value="6" onClick={() => playerMove("")}/>
            <Square value="7" onClick={() => playerMove("")}/>
            <Square value="8" onClick={() => playerMove("")}/>
            <Square value="9" onClick={() => playerMove("")}/>
        </div>
    )
    }
import React from "react";

function TeamMember(props){
    return(
        <div key={props.id} id={props.id} className="member cursor-pointer">
        <h3 className="font-bold text-[#025594]">{props.name}</h3>
        <p className="text-[#025594]">{props.position}</p>
    </div>
    )
}

export default TeamMember;
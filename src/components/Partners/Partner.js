import React from "react";

function Partner(props){
    return (
          <div key={props.key} id={props.id} className="flex justify-center flex-wrap flex-row gap-6">
              <a href={props.website} className="flex justify-center"><img className="w-[25%] text-center" src={props.img} alt='carousel'/></a>
          </div>

    );
}

export default Partner;
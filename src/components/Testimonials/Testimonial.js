import React from "react";

export default function Testimonial(props){

      return (
        <div key={props.key} id={props.id} className="flex flex-col space-y-2 justify-center items-left text-left mt-6">
            <p className="md:w-1/2 md:m-auto text-center">{props.testimonial}</p>
                <div className="md:m-auto">
                <h3 className="text-gray-500 text-center">{props.source},</h3>
                <h3 className="text-gray-500 text-center">{props.srcPos}</h3>
            </div>
        </div>

    
      );
}


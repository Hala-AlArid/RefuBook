import React from "react";

function Testimonial(){
    return(
        <div className="flex flex-col space-y-2 justify-center items-left text-left mt-6">
        <p className="md:w-1/2 md:m-auto text-center">Two lines of a short testimonial from someone want to say something, and can say more to explain.</p>
        <div className="md:m-auto">
            <h3 className="text-gray-500 text-center">Louis Li,</h3>
            <h3 className="text-gray-500 text-center">Trainer at Recoded</h3>
        </div>
    </div>
    );
}

export default Testimonial;
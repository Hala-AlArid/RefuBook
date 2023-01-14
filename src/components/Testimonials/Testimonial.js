import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";

export default function Testimonial(){
    const query = fsQuery(
        collection(db, "testimonials")
      );
    
      const [testimonials, loading, error] = useCollection(query);
    
      if (loading) {
        return <p>Loading testimonials...</p>;
      }
    
      if (error) {
        return <p>An error occured: {error?.message}</p>;
      }

    
      return (
        <div>
            {testimonials.docs.map((doc) => (
        <div key={doc.id} id={doc.id} className="flex flex-col space-y-2 justify-center items-left text-left mt-6">
            <p className="md:w-1/2 md:m-auto text-center">{doc.data().testimonial}</p>
                <div className="md:m-auto">
                <h3 className="text-gray-500 text-center">{doc.data().source},</h3>
                <h3 className="text-gray-500 text-center">{doc.data().source_position}</h3>
            </div>
        </div>
        ))}
        </div>
    
      );
}


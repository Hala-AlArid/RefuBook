import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import Carousel from 'react-elastic-carousel';
import { db } from "../../firebase/firebase";
import Testimonial from "./Testimonial";
import WorldMap from "../../images/world_map1.jpg"

function Testimonials(){
    return (
            <div className="flex md:flex-row flex-col justify-center items-center">
            <div>
                <img src={WorldMap}  alt="WorldMap"/>
            </div>
            <div className="flex w-1/2">
                <TestimonialsList/>
            </div>
        </div>
        
    )
}

const TestimonialsList = () => {
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
        <Carousel showArrows={false} enableAutoPlay className="flex justify-center">
        {testimonials.docs.map((doc) => (
            <Testimonial key={doc.id} id = {doc.id} testimonial= {doc.data().testimonial} source = {doc.data().source} srcPos = {doc.data().source_position} />
            ))}
        </Carousel>
      )
}
export default Testimonials;

import React from "react";
import "./Partners.css";
import Carousel from "react-elastic-carousel";
import Partner from "./Partner";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Partners (){
    return <div>
        <h3 className="text-center text-2xl	font-medium font-bold py-6">Our Partners</h3>
        <PartnersList/>
 
    </div>
};

const PartnersList = () => {
    const query = fsQuery(
        collection(db, "partners")
      );
    
      const [partners, loading, error] = useCollection(query);
    
      if (loading) {
        return <p className="text-center text-lg font-medium font-bold py-6">Loading partners...</p>;
      }
    
      if (error) {
        return <p className="text-center text-lg font-medium font-bold py-6">An error occured: {error?.message}</p>;
      } 

    return (
    <Carousel showArrows={false} enableAutoPlay className="">
            {partners.docs.map((doc) => (
                <Partner key={doc.id} id={doc.id} website = {doc.data().partner_website} img = {doc.data().partner_img} />
            ))}
    </Carousel>


    );
}

export default Partners;


import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Partner(){
    const query = fsQuery(
        collection(db, "partners")
      );
    
      const [partners, loading, error] = useCollection(query);
    
      if (loading) {
        return <p>Loading partners...</p>;
      }
    
      if (error) {
        return <p>An error occured: {error?.message}</p>;
      }

    return (
        <div>
            {partners.docs.map((doc) => (
                <div key={doc.id} id={doc.id} className="flex justify-center flex-wrap flex-row gap-6">
                <a href={doc.data().partner_website}><img src={doc.data().partner_img} alt='carousel'/></a>
            </div>
            ))}
        </div>

    );
}

export default Partner;
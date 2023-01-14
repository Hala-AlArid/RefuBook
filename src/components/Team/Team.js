import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";

function Team(){
    const query = fsQuery(
        collection(db, "team")
      );
    
      const [team, loading, error] = useCollection(query);
    
      if (loading) {
        return <p>Loading team...</p>;
      }
    
      if (error) {
        return <p>An error occured: {error?.message}</p>;
      }
 
    return (
        <div>
            {team.docs.map((doc) => (
                <div key={doc.id} id={doc.id} className="member cursor-pointer">
                <h3 className="font-bold text-[#025594]">{doc.data().member_name}</h3>
                <p className="text-[#025594]">{doc.data().position}</p>
            </div>
            ))}
        </div>
    );
}

export default Team;
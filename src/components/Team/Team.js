import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import TeamMember from "./TeamMember";

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
            <TeamMember key={doc.id} id={doc.id} name = {doc.data().member_name} position = {doc.data().position}/>
            ))}
        </div>
    );
}

export default Team;
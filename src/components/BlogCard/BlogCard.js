import React from "react";
import "./BlogCard.css"
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query as fsQuery, where} from "firebase/firestore";
import { db } from "../../firebase/firebase";
// import DefaultPhoto from "../ProfileInfo/DefaultPhoto.jpg"

function BlogCard(props) {

    const query = fsQuery(collection(db, "blogs"), where("user_email", "==", localStorage.getItem("email")));

    const [blogs, loading, error] = useCollection(query);

    if (loading) {
        return <div className='flex justify-center items-center'><p>Loading...</p></div>
      }
    
      if (error) {
        return <div className='flex justify-center items-center'><p>An error occured: {error?.message}</p></div>
      }

    if(blogs){
        return (
            <div className="w-[100%] flex flex-wrap p-6 justify-center items-center">
            {
                blogs.docs.map((doc)=>(
                    <button key={doc.id} id={doc.id} className='card flex flex-col justify-center items-center' type="button">
                    <img className="w-48" src={doc.data().image}/>
                    <h3><b>{doc.data().title}</b></h3>
                    <div className="userinfo flex flex-col">
                    <h2 className="text-gray-600">#{doc.data().category}</h2>
                    <h2 className="text-gray-600">{doc.data().created_at}</h2>
                    </div>
                </button>
                ))
            }
            </div>
        );
    }

}

export default BlogCard;
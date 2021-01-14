import React from "react";
import Navbar from "./Navbar";
import 'font-awesome/css/font-awesome.min.css';
import Carddata from "./Carddata";
import Card from "./Card"

const Home = () => {
  return (
    <>
    <div className="hh">
    
       <Navbar />

       <div className="headd"> 
            <p className="head1">Vaibhav Vemula</p>
            <p className="head2">Thoughts, Stories and Blog</p>
       </div>
       </div>


       <div className="bod">

       <div className="grid">
    
    {
        Carddata.map((data,key)=>{
           return <Card key={key} data={data} />;
        })
    }
   </div>
     </div> 
    

    </>
  );
};
 
export default Home;
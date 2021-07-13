import React from "react";

export default function Photos (props){
if (props.photos) {
    return (
        <section className="Photos">
            <div className="Row"> 
          {props.photos.map(function(photo, index){
              return (
                  <div className="col-3" key={index}>
                  <img src={photo.src.landscape} key={ index} alt="searcing...🔎" className="img-fluid" />)
                  </div>
              );  
        })}  
    </div>
        </section>
    );
    } else {
        return null
    }
}
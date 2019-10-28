import React from 'react';


const User=(props)=>{
    return(
        <div>

            <p>Name{props.name}</p>
            <p>Goals{props.age}</p>
        </div>
    );
};


export default User;

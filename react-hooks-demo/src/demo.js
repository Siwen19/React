// import React, { useState, useEffect, useRef } from "react";

// export const MyComponent = () => {
//   const [message, setMessage] = useState("initial message");
//   const [seconds, setSeconds] = useState(0);
//   const secondsRef = useRef(seconds)

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(seconds);
//       setSeconds(1);
//       secondsRef.current = 1
//     }, 1000);
//     // closure
//     setTimeout(() => {
//       setMessage(`Total seconds: ${secondsRef.current}`);
//     }, 2000);
//   }, []);
//   return (
//     <>
//       <h3>{message}</h3>
//       <h4>{seconds}</h4>
//     </>
//   );
// };

// import React, { useState, useEffect, useRef } from 'react';

// export const MyComponent = () => {
//     const [visible, setVisible] = useState(false)

//     return (
//         <>
//             {visible && <MyChildComponent />}
//             <button
//             onClick={() => setVisible(!visible)}>Toggle Child component visibility:</button>
//         </>
//     )
// }

// export const MyChildComponent = () => {
//     const [filter, setFilter] = useState('')
//     const [userCollection, setUserCollection] = useState([])
//     const mountedRef = useRef(false)

//     useEffect(() => {
//         mountedRef.current = true
//         return () => (mountedRef.current = false)
//     }, [])

//     const setSafeUserCollection = userCollection => mountedRef.current && setUserCollection(userCollection)
//     React.useEffect(() => {
//         const timer = setTimeout(() => {
//             fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//             .then(response => response.json())
//             .then(json => setSafeUserCollection(json))
//         }, 2500);
//         // return (
//         //     () => {
//         //         clearTimeout(timer)
//         //     }
//         // )
//     }, [filter])

//     return (
//         <div>
//             <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />
//             <ul>
//                 {
//                     userCollection.map((user, index) =>
//                         <li key={index}>{user.name}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }

import React, { useReducer } from "react";

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case "setusername":
      return {
        ...state,
        name: action.payload,
      };
    case "setlastname":
      return {
        ...state,
        lastname: action.payload,
      };
    default:
      return state;
  }
};

export const MyComponent = () => {
  const [reducer, dispatch] = useReducer(userInfoReducer, {
    name: "John",
    lastname: "Doe",
  });
  return (
    <>
      <h3>
        {reducer.name} {reducer.lastname}
      </h3>
      <EditUsername name={reducer.name} dispatch={dispatch} />
      <input
        type="text"
        value={reducer.lastname}
        onChange={(e) =>
          dispatch({
            type: "setlastname",
            payload: e.target.value,
          })
        }
      />
    </>
  );
};

const EditUsername = React.memo((props) => {
  console.log(
    "Hey I'm only rerendered when name gets updated, check React.memo"
  );
  return (
    <input
      type="text"
      value={props.name}
      onChange={(e) =>
        props.dispatch({
          type: "setusername",
          payload: e.target.value,
        })
      }
    />
  );
});

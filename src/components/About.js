// import React, { useState } from 'react'

// export default function About() {

//     const [myStyle, setMyStyle] = useState(
//         {
//             color: 'black',
//             backgroundColor: 'white',

//         }
//     )

//     const [btntext,setBtnText] = useState("enable dark mode")
//     const toggleStyle = () => {
//         if (myStyle.color === 'white') {
//             setMyStyle(
//                 {
//                     color: 'black',
//                     backgroundColor: 'white',
//                 }
//             )
//             setBtnText("enable dark mode");
//         }
//         else{
//             setMyStyle(
//                 {
//                     color: 'white',
//                     backgroundColor: 'black',
//                 }
//             )
//             setBtnText("enable light mode")
//         }
//     }
//     return (
//         <div className="container my-3" style={myStyle}>
//             <h2 className='my-2'>About us</h2>
//             <div className="accordion" id="accordionExample">
//                 <div className="accordion-item" style={myStyle}>
//                     <h2 className="accordion-header" id="headingOne">
//                         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
//                             Accordion Item #1
//                         </button>
//                     </h2>
//                     <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item" style={myStyle}>
//                     <h2 className="accordion-header" id="headingTwo">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
//                             Accordion Item #2
//                         </button>
//                     </h2>
//                     <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//                 <div className="accordion-item" style={myStyle}>
//                     <h2 className="accordion-header" id="headingThree">
//                         <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
//                             Accordion Item #3
//                         </button>
//                     </h2>
//                     <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//                         <div className="accordion-body" style={myStyle}>
//                             <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <button type="button" class="btn btn-primary my-3" onClick={toggleStyle}>{btntext}</button>

//         </div>
//     )
// }


//                -------------------------------------------------------------------             //

import React from 'react'
import { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: "white",
        color: "black",
    });

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        // console.log("toggle button clicked");

        if (toggle === false) {
            setMyStyle({
                backgroundColor: "black",
                color: "white",
            })
        }
        else {
            setMyStyle({
                backgroundColor: "white",
                color: "black",
            })
        }
        setToggle(!toggle);
    }

    return (
        <div className='container my-3'>
            <div className="accordion" id="accordionExample">

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Feature - 1 ( converting to uppercase )
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            converts entire text into uppercase
                        </div>
                    </div>
                </div>

                <div className="accordion-item " style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Feature - 2 ( converting to lowercase )
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            converts entire text into lowercase
                        </div>
                    </div>
                </div>

                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Feature - 3 ( clear text )
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            clears the whole input field
                        </div>
                    </div>
                </div>


                <div className='container my-2'>
                    <button type="button" className="btn btn-primary" onClick={handleToggle}>Toggle dark/light mode</button>
                </div>

            </div>
        </div>
    )
}

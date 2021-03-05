import React from 'react';

// // functional component - arrow function
// WHEN TO USE: 
// 1. for smaller components
// 2. resuable components
// 3. presentational components , partially right, we can use hooks and specify state
// const About = () => {
//     return (
//         <h1>About page</h1>
//     )
// }

//functional component - normal function
// function About() {
//     return (
//         <h1> About page</h1>
//     )
// }



class About extends React.Component{

    render() {

        return (
            <h1>About page Class Component</h1>
        )
    }

}



export default About
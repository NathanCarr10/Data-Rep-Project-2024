import React from "react";

/**
 * Footer component is a simple functional component
 * that displays a footer message.
 */

const Footer = () => {
      return (
        <footer style={{
          backgroundColor: "#333",
          color: "white",
          textAlign:"center",
          padding: "sticky",
          bottom: 0,
          width: "100%",
        }}>
          Your Personal Video Games Tracker!
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </footer>
      );
    };
    
    export default Footer;
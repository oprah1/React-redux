import React from 'react';
import { connect } from "react-redux";



const mapStateToProps = state => ({
    Counter: state
  });

const mapDispatchToProps = dispatch => ({
    ADD1: () => dispatch({ type: "ADD1" }),
    REMOVE1: () => dispatch({ type: "REMOVE1" }), 
    ADD10: () => dispatch({ type: "ADD10" }),
    REMOVE10: () => dispatch({ type: "REMOVE10" }),
    RESET: () => dispatch({ type: "RESET" }), 

  });


const CounterComponent = ({ Counter, ADD1, ADD10, REMOVE1, REMOVE10, RESET }) => (
    <div>
      <p>{Counter}</p>
      
        <button onClick={ADD1}>+ add 1</button>
        <button onClick={REMOVE1}>+ REMOVE 1</button>
        <button onClick={ADD10}>+ add 10</button>
        <button onClick={REMOVE10}>+ REMOVE 10</button>
        <button onClick={RESET}>+ RESET</button>
        
       
    </div>
  );


export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(
    CounterComponent
)

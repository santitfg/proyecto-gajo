import React from "react";
//un radio donde label coidice con el valor o uno que discrepa

const InputRadio = ({ label, name, msg, options, onChange }) => {
  // const listItems = Object.entries(numbers).map((par, i) =>
  // <>  <li>{par[0]}</li> <li>{par[1]}</li> </>);

  //no creo q el forEach funcione
  //esto podria hacerlo uno y el if(convertir a ternaria?) lejos del return

  var componente = null; //antes me tomaba un const en cada if
  if (Array.isArray(options)) {
    // const
    componente = options.map((option, i) => (
      <li key={option}>
        <label>{option}</label>{" "}
        <input type="radio" value={option} name={name} onChange={onChange} />
      </li>
    ));
  } else {
    // const
    componente = Object.entries(options).map((par, i) => (
      <li key={par[1]}>
        <label>{par[0]}</label>{" "}
        <input type="radio" value={par[1]} name={name} onChange={onChange} />
      </li>
    ));
  }
  return (
    <div>
      <label>{label}</label>
      <ul>{componente}</ul>
      <div>{msg}</div>
    </div>
  );
};

export default InputRadio;
/* const InputRadio = ({ label, name, msg, options, onChange }) => {
  // const listItems = Object.entries(numbers).map((par, i) =>
  // <>  <li>{par[0]}</li> <li>{par[1]}</li> </>);
  //no creo q el forEach funcione
  //esto podria hacerlo uno y el if(convertir a ternaria?) lejos del return
  if (Array.isArray(options)) {
    return (
      <div>
        <label>{label}</label>
        <ul>
          {options.map((option, i) => (
            <li>
              <label>{option}</label>{" "}
              <input
                type="radio"
                value={option}
                name={name}
                onChange={onChange}
              />
            </li>
          ))}
        </ul>
        <div>{msg}</div>
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <ul>
          {Object.entries(options).map((par, i) => (
            <li>
              <label>{par[0]}</label>{" "}
              <input
                type="radio"
                value={par[1]}
                name={name}
                onChange={onChange}
              />
            </li>
          ))}
        </ul>
        <div>{msg}</div>
      </div>
    );
  }
}; */
/*
function NumberList(props) {
  const numbers = props.numbers;
    if(Array.isArray(numbers)){
       return (
         <div>  
        <label>{"esto"}</label>, <ul>
 
        { numbers.map((number, i) =>
      <li>  <label>{number}</label> <input type="radio" value={number}/> </li>)}
     
      </ul>

    </div>)
      }
  else{
    return (
    <div>  
        <label>{"esto"}</label>, <ul>
 
        { Object.entries(numbers).map((par, i) =>
      <li>  <label>{par[0]}</label> <input type="radio" value={par[1]}/> </li>)}
     
      </ul>

    </div>
      )
      
}
}*/

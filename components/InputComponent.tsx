import styled from "styled-components"


export function InputComponent(props:any) { 

  return (
    <Component>
        <label htmlFor="email">{props.label}</label>
        <input
            type={props.type}
            name={props.name}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
        {props.error && <span>{props.error}</span>}
    </Component>
  );
}

const Component = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column; 
margin: 15px 0;
input {
    margin: 5px 0;
    height: 40px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    color: #000;
    border: solid 1px #ddd;
    padding: 4px 15px;
    &::placeholder {
        color: #ccc;
    }
}
span {
    color: red;
    font-size: 12px; 
}
`
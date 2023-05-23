import React from "react";
import { useDispatch } from "react-redux";

import {
  registerDocument,
  updateDocument,
} from "../../redux/actions/documentActions";
import send from "../../assets/images/send.svg";
import xbutton from "../../assets/images/x.svg";

function CreateText(props) {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
   
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    dispatch(registerDocument(props.title, props.text, currentDate, props.tag,props.user));

    props.getDocument();
    props.setDisplay("none");
  };

  const submitEditHandler = (e) => {
    
    dispatch(
      updateDocument(props.title, props.text, props.actualEdit, props.tag, props.user)
    );
    props.getDocument();
    props.setDisplay("none");
  };

  const closeFunction = () => {
    if(props.text.length > 0 && props.editOrCreate === "create"){
      props.setAlertWindowText("flex")
    }else{
      props.setDisplay("none")
    }
  }
  return (
    <div className={`createDocument ${props.display}`}>
      <form
        onSubmit={
          props.editOrCreate === "create" ? submitHandler : submitEditHandler
        }
      >
        <div>
          <input
            placeholder="Título"
            type="text"
            required
            value={props.title}
            onChange={(e) => props.setTitle(e.target.value)}
          ></input>
          <select
            value={props.tag ? props.tag : 0}
            onChange={(e) => props.setTag(e.target.value)}
          >
            <option value={0}>Tag name</option>
            {props.tagList.data.map((item, index) => (
              <option key={index} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <button className="xbutton" type="button" onClick={() => closeFunction() }>
            <img src={xbutton} alt="img"></img>
          </button>
        </div>
        <textarea
          value={props.text}
          onChange={(e) => props.setText(e.target.value)}
          placeholder="What are you studyng?"
          type="text"
          required
        ></textarea>
        <button className="submit" type="submit">
          <img src={send} alt="img"></img>
          <p>Enviar</p>
        </button>
      </form>
    </div>
  );
}

export default CreateText;

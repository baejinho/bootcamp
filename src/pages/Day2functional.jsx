import React, { useState, useEffect } from 'react';

import {
  Upload,
  Icon,
  Button,
  Switch,
  Input,
  Modal,
  Form,
  Select,
  Table,
  Card,
  Col,
  Row,
  Checkbox
} from "antd";
 
import "./Day2functional.scss";  
  
export const Day2functional  = () => {

  const [test, setTest] = useState(0);
  const [testStr, setTestStr] = useState("");
  const [testArray, setTestArray] = useState([]);


  useEffect(() => {
    setTest(100);
    setTestStr("TEST");
    setTestArray(['test4','test5','test6']);

  },[]);


  return (<div style={{color:"white", fontSize:20, margin:"10px auto", width: 1200}}>
    <div>함수형 데이터 테스트</div>

    <div style={{display:"flex", marginTop: 50}}> 
      <div>숫자 테스트 :</div><div>{test}</div>
      <Button onClick={()=>{setTest(test+1)}}
      >숫자 증가</Button><Button onClick={()=>{setTest(test-1)}}>숫자 감소</Button>
    </div> 
    <div style={{display:"flex", marginTop: 20}}> 
      <div>문자 테스트 :</div><div>{testStr}</div><Button
       onClick={()=>{setTestStr("team111")}}
       >문자열 바꾸기</Button>
    </div> 
    <div style={{display:"flex", marginTop: 20}}> 
      <div>배열 테스트 :</div><div>{testArray.map((title)=>{
        return <div style={{marginLeft:100, marginTop: 20}}>{title}</div>
      })}</div>
    </div> 
    <Button
    onClick={()=>{
      const newArray = [...testArray];
      newArray.push("team");
      setTestArray(newArray)}}
    >배열 추가</Button>
    <Button
     onClick={()=>{
     
      const newArray = [...testArray];
      newArray.pop();
      setTestArray(newArray)}}
      >배열 삭제</Button>

  </div>)
  

}

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
 
import "./TypeScriptDay2.scss";  
  
export const TypeScriptDay2  = () => {

  const [test, setTest] = useState(0);
  const [testStr, setTestStr] = useState("");
  const [testArray, setTestArray] = useState([]);


  useEffect(() => {
    setTest(100);
    setTestStr("TEST");
    setTestArray(['test4','test5','test6']);

  },[]);


  return (<div style={{color:"white", fontSize:20, margin:"10px auto", width: 1200}}>
    <br/>
    <div style={{fontWeight:"bolt"}}>1. 클래스와 상속 (1시간)</div><br/>
      * 클래스 선언과 인스턴스 생성<br/>
      * 접근 제한자와 읽기 전용 속성<br/>
      * 상속과 다형성<br/>
      * 추상 클래스와 인터페이스 구현<br/><br/>
      <div style={{fontWeight:"bolt"}}>2. 모듈 시스템 (1시간)</div><br/>
        * 모듈의 개념과 사용법<br/>
        * 내보내기와 가져오기 구문<br/>
        * 네임스페이스 활용<br/>
        * 모듈 로더와 번들러 소개<br/><br/>
        <div style={{fontWeight:"bolt"}}>3. 타입스크립트 활용 (1시간)</div><br/>
        * 타입스크립트와 함께하는 프로젝트 구성<br/>
        * 타입 정의 파일 활용<br/>
        * 타입 가드와 타입 호환성<br/>
        * 에러 처리와 예외 처리 방법<br/>
 
  </div>)
  

}

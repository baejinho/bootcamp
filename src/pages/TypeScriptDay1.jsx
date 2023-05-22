import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

 
import "./TypeScriptDay1.scss";  
  
export const TypeScriptDay1  = () => {
  const [type, setType] = useState("");

  let code1 = `let numbers: number[] = [1, 2, 3, 4, 5]; 
let fruits: Array<string>  = ["apple", "banana", "cherry"]; `;
  let enumtype = `enum Color { 
  Red, 
  Green, 
  Blue, 
} 
let color: Color = Color.Red;`;
let fun = `function throwError(message: string): never { 
  throw new Error(message); 
}`;

let func1 = `function greet(name: string): string {
  return "Hello, $ {name}!";
}  
`;
let func2 = `function greet(name?: string): string {
  if (name) {
    return "Hello, $ {name}!";
  } else {
    return "Hello!";
  }`;

  return (<div style={{color:"white", fontSize:20, margin:"10px auto", width: 1200, display:"flex"}}>
    <div style={{width:600}}>
    <br/>
    <div style={{fontWeight:"bolt"}}>1. TypeScript 소개 (1시간)</div> <br/>
    <div style={{cursor:"pointer"}} onClick={()=>{setType(1)}}>* TypeScript의 개요와 특징 소개</div>  
    <div style={{cursor:"pointer"}} onClick={()=>{setType(2)}}>* JavaScript와의 차이점과 장점 설명 </div>
    <div style={{cursor:"pointer"}} onClick={()=>{setType(3)}}>* TypeScript의 장점을 활용한 실제 사례 </div>
    <div style={{cursor:"pointer"}}  onClick={()=>{window.open("/typescript1_t")}}>타입 스크립트 예제 소스</div>
    <br/>
    <div style={{fontWeight:"bolt"}}>2. 기본 타입과 변수 (1시간)</div> <br/>
    <div style={{cursor:"pointer"}} onClick={()=>{setType(4)}}>* 기본 데이터 타입: 숫자, 문자열, 불리언, 배열, 객체 등 </div>
    <div style={{cursor:"pointer"}} onClick={()=>{setType(5)}}>* 변수 선언과 타입 주석 활용</div>
    <div style={{cursor:"pointer"}} onClick={()=>{setType(6)}}>* 타입 추론과 타입 단언</div><br/>
      <div style={{fontWeight:"bolt"}}>3. 함수와 인터페이스 (1시간)</div> <br/>
      <div style={{cursor:"pointer"}} onClick={()=>{setType(7)}}>* 함수 선언과 호출 방법</div>
      <div style={{cursor:"pointer"}} onClick={()=>{setType(8)}}>* 선택적 매개변수와 기본 매개변수</div>
      <div style={{cursor:"pointer"}} onClick={()=>{setType(9)}}>* 함수 오버로드</div>
      <div style={{cursor:"pointer"}} onClick={()=>{setType(10)}}>* 인터페이스 소개와 활용법</div>
    </div>
    <div style={{width:500, borderRadius:5, border:"2px solid white", overflow:"auto"}}>
      {type==1?<div style={{padding:30}} >
        TypeScript는 Microsoft에서 개발한 프로그래밍 언어로, JavaScript에 정적 타입 체크 기능을 추가하여 JavaScript 코드를 개선하고 확장하는 역할을 합니다. TypeScript는 오픈 소스 프로젝트로 개발되고 있으며, JavaScript와의 호환성을 지원하면서도 정적 타입 검사와 객체 지향 프로그래밍 기능 등을 제공합니다.
  <br/>
다음은 TypeScript의 주요 특징들입니다: <br/> <br/>

정적 타입 체크: TypeScript는 변수, 매개변수, 반환값 등에 타입을 명시할 수 있습니다. 이는 코드 작성 시 타입 오류를 사전에 검출할 수 있도록 도와줍니다. 컴파일러가 코드를 분석하여 타입 오류를 찾고 보고해줌으로써 디버깅 시간을 단축시키고 코드의 안정성을 높일 수 있습니다. <br/> <br/>

객체 지향 프로그래밍: TypeScript는 클래스, 인터페이스, 상속, 제네릭 등의 객체 지향 프로그래밍 개념을 지원합니다. 이를 통해 코드의 모듈화와 재사용성을 높일 수 있습니다. 또한, 타입 시스템을 활용하여 인터페이스를 통한 명시적인 타입 체크를 할 수 있습니다. <br/> <br/>

JavaScript와의 호환성: TypeScript는 JavaScript의 상위 집합 언어로 개발되었기 때문에 JavaScript 코드를 그대로 TypeScript 코드로 사용할 수 있습니다. 이는 기존 JavaScript 프로젝트에 점진적으로 TypeScript를 도입할 수 있도록 해줍니다. TypeScript는 JavaScript 라이브러리 및 프레임워크와 함께 작동하며, 대부분의 JavaScript 코드를 TypeScript로 마이그레이션하는 것이 가능합니다. <br/> <br/>

도구 지원: TypeScript는 강력한 개발 도구 지원을 제공합니다. TypeScript 컴파일러는 TypeScript 코드를 JavaScript로 변환해주며, 정적 타입 검사와 관련된 경고 및 오류 메시지를 제공합니다. 대부분의 통합 개발 환경(IDE)에서는 TypeScript의 타입 추론, 자동 완성, 리팩토링 등을 지원하여 개발 생산성을 향상시킵니다. <br/> <br/>

확장 가능성: TypeScript는 확장 가능한 언어로써, 사용자 정의 타입, 데코레이터, 타입 제약 등 다양한 기능을 추가할 수 있습니다. 이를 통해 개발자는 프로젝트의 특정 요구사항에 맞게 TypeScript를 확장하거나 커스터마이징할 수 있습니다. <br/> <br/>

      </div>:null}
      {type==2?<div style={{padding:30}} >
        정적 타입 검사: 가장 큰 차이점은 정적 타입 검사 기능입니다. JavaScript는 동적 타입 언어로 변수의 타입을 런타임 시점에 결정합니다. 반면에 TypeScript는 정적 타입 언어로 코드 작성 시점에 타입을 명시하고 타입 검사를 수행합니다. 이를 통해 컴파일러가 코드를 분석하여 타입 오류를 사전에 확인할 수 있습니다. 정적 타입 검사는 디버깅 시간을 단축시키고 코드의 안정성을 높이는 장점을 가지고 있습니다.<br/> <br/>

객체 지향 프로그래밍: TypeScript는 클래스, 인터페이스, 상속, 제네릭 등의 객체 지향 프로그래밍 개념을 지원합니다. 이는 코드의 모듈화와 재사용성을 높이는 데 도움을 줍니다. JavaScript는 프로토타입 기반의 객체 지향 프로그래밍을 지원하지만, TypeScript는 보다 명확하고 강력한 객체 지향 프로그래밍 패턴을 사용할 수 있습니다.<br/> <br/>

타입 주석과 가독성: TypeScript는 변수, 함수의 인자, 반환 값 등에 타입 주석을 추가할 수 있습니다. 이는 코드를 읽는 사람에게 더 명확한 의도를 전달하고 코드의 가독성을 높이는 데 도움을 줍니다. JavaScript는 타입 정보가 주석 없이 코드에 포함되어 있기 때문에 가독성이 상대적으로 낮을 수 있습니다.<br/> <br/>

ECMAScript 지원: TypeScript는 ECMAScript 표준을 준수하며, JavaScript의 최신 기능을 지원합니다. 즉, TypeScript로 작성한 코드는 JavaScript로 변환될 때 최신 기능을 사용할 수 있습니다. 이는 개발자가 최신 JavaScript 기능을 활용하면서도 정적 타입 검사 등 TypeScript의 장점을 활용할 수 있음을 의미합니다.<br/> <br/>

도구 지원과 생태계: TypeScript는 강력한 개발 도구 지원을 제공합니다. TypeScript 컴파일러는 코드 변환과 타입 검사를 수행하며, 대부분의 통합 개발 환경(IDE)에서는 코드 완성, 리팩토링, 타입 추론 등의 기능을 제공합니다. 또한, TypeScript는 널리 사용되는 JavaScript 라이브러리와 프레임워크와 함께 작동하며, 타입 정의 파일을 통해 외부 라이브러리의 타입 정보를 제공받을 수 있습니다. 이는 개발 생산성을 향상시키고 기존 JavaScript 프로젝트에 TypeScript를 쉽게 통합할 수 있는 장점을 가지고 있습니다.<br/> <br/>

에러 예방과 유지 보수성: TypeScript의 정적 타입 검사 기능은 코드 작성 시 타입 오류를 사전에 방지해주므로 런타임 에러를 줄일 수 있습니다. 이는 코드의 안정성을 향상시키고 버그를 줄이는 데 도움을 줍니다. 또한, 타입 주석과 강력한 타입 시스템을 통해 코드의 가독성을 높이고 유지 보수성을 향상시킬 수 있습니다.<br/> <br/>

커뮤니티와 지원: TypeScript는 Microsoft를 중심으로 활발한 개발자 커뮤니티와 지원을 받고 있습니다. TypeScript의 공식 문서와 온라인 자료, 개발자 컨퍼런스 등이 많이 제공되어 있어 학습과 문제 해결에 도움을 받을 수 있습니다. 또한, 타입스크립트 컴파일러의 지속적인 업데이트와 개선이 이루어지고 있으며, 사용자 요구 사항에 대한 피드백을 적극적으로 수용하는 개발 팀이 있는 것도 장점 중 하나입니다.<br/> <br/>

요약하면, TypeScript는 JavaScript에 정적 타입 검사와 객체 지향 프로그래밍 기능을 추가하여 코드의 안정성과 가독성을 높이는 장점을 가지고 있습니다. 정적 타입 검사, ECMAScript 지원, 객체 지향 프로그래밍 패턴, 도구 지원, 생태계 및 커뮤니티 지원 등이 TypeScript의 주요 장점으로 꼽힙니다. 이러한 장점들은 대규모 프로젝트에서 특히 유용하며, 개발 생산성과 코드의 유지 보수성을 향상시킬 수 있습니다.<br/> <br/>

      </div>:null}
      {type==3?<div style={{padding:30}} >
      TypeScript의 장점을 활용한 여러 실제 사례와 사례 연구가 있습니다. 이러한 사례들은 TypeScript를 도입함으로써 개발 생산성을 향상시키고 코드의 유지 보수성을 높였습니다. 몇 가지 대표적인 사례를 살펴보겠습니다:<br/><br/>

Angular 프레임워크: Angular는 TypeScript를 기반으로 개발된 대규모 웹 애플리케이션 프레임워크입니다. TypeScript의 정적 타입 검사, 객체 지향 프로그래밍 기능, 강력한 타입 시스템 등을 활용하여 Angular 프로젝트의 개발 생산성과 유지 보수성을 크게 향상시켰습니다. TypeScript는 Angular의 주요 언어로 사용되며, 개발자들은 타입 검사와 코드 완성 등의 도움을 받아 안정적이고 확장 가능한 애플리케이션을 개발할 수 있습니다.<br/><br/>

Microsoft Office 365: Microsoft Office 365는 TypeScript를 적극적으로 활용한 대규모 프로젝트입니다. TypeScript를 사용하여 Office 365의 웹 기반 애플리케이션을 개발하고 있으며, 정적 타입 검사와 타입 주석 등을 통해 안정성과 가독성을 높이고 개발자 간의 협업을 강화하였습니다. TypeScript의 장점을 활용하여 Office 365는 복잡한 업무 요구 사항을 충족시키는 안정적이고 효율적인 솔루션을 제공하고 있습니다.<br/><br/>

Slack: Slack은 실시간 팀 커뮤니케이션 도구로 TypeScript를 사용하여 개발되었습니다. TypeScript의 타입 검사와 강력한 타입 시스템은 대규모 코드베이스에서 신뢰할 수 있는 통신 및 데이터 처리를 제공하는 데 큰 도움을 주었습니다. Slack은 TypeScript를 통해 코드의 안정성과 가독성을 향상시키고, 유지 보수성을 높이며 개발자 간의 협업을 강화하는 데 성공했습니다.<br/><br/>

이외에도 많은 기업과 프로젝트에서 TypeScript의 장점을 활용하고 있습니다. Facebook의 React Native, Vue.js, Netflix, Shopify, Lyft, Airbnb 등 다양한 기업과 프로젝트에서 TypeScript를 사용하여 개발 생산성과 코드의 유지 보수성을 향상시키는 사례가 있습니다.<br/><br/>

      </div>:null}
      {type==4?<div style={{padding:30}}>
        TypeScript는 JavaScript의 상위 집합 언어로서 정적 타입을 지원합니다. TypeScript에서 사용할 수 있는 기본 데이터 타입에는 다음과 같은 것들이 있습니다:<br/><br/>

Boolean: true 또는 false 값을 가지는 논리 데이터 타입입니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let isDone: boolean = false; 
    </SyntaxHighlighter>
<br/><br/>
 
Number: 부동 소수점 숫자를 나타내는 데이터 타입입니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let decimal: number = 6;<br/><br/>
let hex: number = 0xf00d;<br/><br/>
let binary: number = 0b1010;<br/><br/>
let octal: number = 0o744;<br/><br/>
</SyntaxHighlighter>
String: 문자열 데이터 타입으로, 작은따옴표(')나 큰따옴표(")로 둘러싸인 텍스트입니다.<br/><br/>

<SyntaxHighlighter language="javascript" style={solarizedlight}> 
let name: string = "John";

let greeting: string = `Hello, !`; 
</SyntaxHighlighter>
Array: 배열을 나타내는 데이터 타입입니다. 배열 요소는 동일한 데이터 타입을 가질 수 있습니다.<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>
{code1}
</SyntaxHighlighter>
Tuple: 고정된 요소 수와 타입을 가지는 배열입니다. 각 요소는 지정된 타입에 해당해야 합니다.<br/><br/>
 
let person: [string, number] = ["John", 30];<br/><br/>
Enum: 열거형 데이터 타입으로, 숫자 값 집합에 이름을 부여합니다.<br/><br/>
<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
{enumtype} 

</SyntaxHighlighter>
<br/><br/>
Any: 모든 타입을 허용하는 동적 타입입니다. 타입 검사를 회피하고자 할 때 사용할 수 있지만, 타입 안정성을 잃을 수 있습니다.<br/><br/>
<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let value: any = "Hello"; 
value = 42; 
</SyntaxHighlighter>

Void: 아무 값도 가지지 않는 데이터 타입입니다. 주로 반환 값이 없는 함수에서 사용됩니다.<br/><br/>
<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
function sayHello(): void {
   
}
</SyntaxHighlighter>
<br/><br/> 
Null 및 Undefined: 값이 없음을 나타내는 데이터 타입입니다. 각각 null과 undefined라는 값만을 가질 수 있습니다. 
 
<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let n: null = null; 
let u: undefined = undefined; 
</SyntaxHighlighter>
Never: 결코 발생하지 않는 값을 나타내는 데이터 타입입니다. 주로 예외 처리나 무한 반복문 등에서 사용됩니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
{fun}
</SyntaxHighlighter>
<br/><br/>

<SyntaxHighlighter language="javascript" style={solarizedlight}>
function infiniteLoop(): never { 
  //while (true) { 
    // ... 
  //} 
} 
</SyntaxHighlighter>


위의 예제들은 TypeScript에서 사용할 수 있는 몇 가지 기본 데이터 타입들을 보여주고 있습니다.
<br/><br/>
      </div>:null}
      {type==5?<div style={{padding:30}}>
        TypeScript에서 변수를 선언하고 타입을 주석으로 명시하는 방법은 다음과 같습니다:<br/><br/>

변수 선언: let 또는 const 키워드를 사용하여 변수를 선언합니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let num: number;
const str: string = "Hello"; 
</SyntaxHighlighter><br/>
위의 예제에서 num은 number 타입의 변수로 선언되었고, str은 string 타입의 상수로 선언되었습니다.<br/><br/>

타입 주석: 변수 선언 시, 콜론(:) 뒤에 타입 주석을 추가하여 변수의 타입을 명시합니다.<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let num: number;
</SyntaxHighlighter>
<br/><br/>
위의 예제에서 number는 변수 num의 타입을 명시하는 타입 주석입니다.<br/><br/>

타입 추론: 타입 주석을 생략하면 TypeScript는 할당된 값의 형태를 분석하여 변수의 타입을 추론합니다.<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let num = 10; 
</SyntaxHighlighter>
// 타입 추론에 의해 num은 number 타입으로 추론됨<br/><br/>
위의 예제에서 변수 num은 초기값 10의 형태로부터 number 타입으로 추론됩니다.<br/><br/>

초기값 할당: 변수 선언과 동시에 초기값을 할당할 수 있습니다. TypeScript는 초기값을 통해 변수의 타입을 추론합니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let num = 10; // num은 number 타입으로 추론됨
const str = "Hello"; // str은 string 타입으로 추론됨 
</SyntaxHighlighter><br/><br/>
위의 예제에서 num 변수는 초기값 10에 의해 number 타입으로 추론되고, str 변수는 초기값 "Hello"에 의해 string 타입으로 추론됩니다.<br/><br/>

변수 선언과 타입 주석을 활용한 예제를 하나 더 보여드리겠습니다:<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
let name: string; 
let age: number; 
let isStudent: boolean; 

name = "John"; 
age = 30; 
isStudent = true; 
</SyntaxHighlighter> 

위의 예제에서 name 변수는 string 타입으로, age 변수는 number 타입으로, isStudent 변수는 boolean 타입으로 선언되었습니다. 각 변수에는 해당하는 타입의 값을 할당할 수 있습니다.<br/><br/>

TypeScript에서 변수 선언과 타입 주석을 사용하면 변수의 타입을 명확하게 지정하여 코드의 가독성과 안정성을 높일 수 있습니다.<br/><br/>

      </div>:null}
      {type==6?<div></div>:null}
      {type==7?<div style={{padding:30}}>
      TypeScript에서 함수를 선언하고 호출하는 방법은 JavaScript와 유사합니다. 다음은 TypeScript에서 함수를 선언하고 호출하는 방법에 대한 예제입니다:<br/><br/>

함수 선언: function 키워드를 사용하여 함수를 선언합니다. 함수의 매개변수와 반환 타입을 명시할 수 있습니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>
{func1}
</SyntaxHighlighter>
위의 예제에서 greet 함수는 name이라는 string 타입의 매개변수를 받고, string 타입의 값을 반환합니다.<br/><br/>

함수 호출: 함수를 호출할 때는 함수 이름과 인수를 전달합니다. 반환값을 변수에 할당하거나, 그냥 호출 결과를 사용할 수 있습니다.<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>

let greeting: string = greet("John"); 
console.log(greeting); // "Hello, John!"  

console.log(greet("Alice")); // "Hello, Alice!"
</SyntaxHighlighter>
<br/><br/>
위의 예제에서 greet 함수를 "John"과 "Alice" 인수와 함께 호출하고 있습니다. 반환값은 greeting 변수에 할당되고, 콘솔에 출력됩니다.<br/><br/>

선택적 매개변수: 함수의 매개변수를 선택적으로 만들고 싶다면 매개변수 이름 뒤에 물음표(?)를 추가합니다. 선택적 매개변수는 값을 제공하지 않을 수도 있습니다.<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>
{func2}
</SyntaxHighlighter>

console.log(greet()); // "Hello!"<br/><br/>
console.log(greet("John")); // "Hello, John!"<br/><br/>
위의 예제에서 name 매개변수는 선택적으로 지정되어 있습니다. 매개변수를 제공하지 않으면 "Hello!"를 반환하고, 매개변수를 제공하면 해당 이름과 함께 "Hello, name!"을 반환합니다.<br/><br/>

기본 매개변수: 함수의 매개변수에 기본값을 설정하여 매개변수를 생략할 수 있습니다.<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>

{
  `function greet(name: string = "Guest"): string {
  return "Hello, $ {name}!";
} ` 
}
</SyntaxHighlighter>

console.log(greet()); // "Hello, Guest!"<br/><br/>
console.log(greet("John")); // "Hello, John!"<br/><br/>
위의 예제에서 name 매개변수에 기본값으로 "Guest"를 설정했습니다. 매개변수를 생략하면 기본값이 사용되고, 매개변수를 제공하면 해당 값이 사용됩니다.<br/><br/>

TypeScript에서 함수 선언과 호출은 JavaScript와 유사하지만, 매개변수와 반환 타입을 명시하여 정적 타입 검사를 수행할 수 있습니다. 이를 통해 코드의 안정성과 가독성을 향상시킬 수 있습니다.<br/><br/>

      </div>:null}
      {type==8?<div style={{padding:30}}>
        <div style={{fontWeight:"bold"}}>선택적 매개변수 (Optional Parameters)</div>

선택적 매개변수는 함수 호출 시 매개변수를 생략할 수 있는 매개변수입니다. 매개변수 이름 뒤에 물음표(?)를 붙여서 지정합니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>

 {`
function greet(name?: string): string {
  if (name) {
    return "Hello, $ {name}!";
  } else {
    return "Hello!";
  }
}`}

</SyntaxHighlighter>

console.log(greet()); // "Hello!"<br/><br/>
console.log(greet("John")); // "Hello, John!"<br/><br/>
위의 예제에서 name 매개변수는 선택적 매개변수로 선언되어 있습니다. 함수 내부에서 name이 존재하는지 확인하고, 값이 있다면 Hello, name!을 반환하고 값이 없다면 "Hello!"를 반환합니다. 함수 호출 시 name 매개변수를 생략하거나 값을 제공할 수 있습니다.<br/><br/>
<br/><br/>
기본 매개변수 (Default Parameters)<br/><br/>

기본 매개변수는 함수에 매개변수를 생략했을 때 사용되는 기본값을 설정하는 매개변수입니다. 매개변수 이름 뒤에 등호(=)를 사용하여 기본값을 할당합니다.<br/><br/>
<SyntaxHighlighter language="javascript" style={solarizedlight}>

 {`
function greet(name: string = "Guest"): string {
  return "Hello, $ {name}!";
}`}
</SyntaxHighlighter>

console.log(greet()); // "Hello, Guest!"<br/><br/>
console.log(greet("John")); // "Hello, John!"<br/><br/>
위의 예제에서 name 매개변수에 기본값으로 "Guest"를 설정했습니다. 함수 호출 시 name 매개변수를 생략하면 기본값으로 "Guest"가 사용되고, name 매개변수에 값을 제공하면 해당 값이 사용됩니다.<br/><br/>

선택적 매개변수와 기본 매개변수를 함께 사용할 수도 있습니다:<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>

 {`
function greet(name: string = "Guest", age?: number): string {
  if (age) {
    return "Hello, $ {name}! You are $ {age} years old.";
  } else {
    return "Hello, $ {name}!";
  }
}
`} 
</SyntaxHighlighter>

console.log(greet()); // "Hello, Guest!"<br/><br/>
console.log(greet("John")); // "Hello, John!"<br/><br/>
console.log(greet("Alice", 25)); // "Hello, Alice! You are 25 years old."<br/><br/>
위의 예제에서 name 매개변수는 기본값으로 "Guest"를 가지고 있고, age 매개변수는 선택적 매개변수입니다. age 값이 존재하면 name! You are age years old. 형식의 메시지를 반환하고, 값이 없으면 name! 형식의 메시지를 반환합니다.<br/><br/>

      </div>:null}
      {type==9?<div style={{padding:30 }}>
        TypeScript에서 함수 오버로드(Overload)를 선언하는 방법은 함수가 동일한 이름을 가지고 다양한 매개변수와 반환 타입 조합을 처리할 수 있도록 하는 것입니다
      </div>:null}
      {type==10?<div style={{padding:30}}>
        <div style={{fontWeight:"bold"}}>인터페이스의 선언</div>

인터페이스는 interface 키워드를 사용하여 선언합니다. 인터페이스 이름은 관례적으로 대문자로 시작합니다.

<SyntaxHighlighter language="javascript" style={solarizedlight}>

 {`interface Person {
  name: string;
  age: number;
  greet(): void;
} `}
</SyntaxHighlighter>

위의 예제에서 Person 인터페이스는 name과 age라는 프로퍼티를 가지고 있으며, greet라는 메서드를 정의하고 있습니다.
<br/>
<div style={{fontWeight:"bold"}}>인터페이스의 활용</div>

객체의 형태를 명시하기 위해 사용하기:<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>

{`
interface Person {
  name: string;
  age: number;
}

function sayHello(person: Person): void {
  console.log("Hello, $ {person.name}! You are $ {person.age} years old.");
}

let john: Person = {
  name: "John",
  age: 30,
};

sayHello(john); // "Hello, John! You are 30 years old."
`}
</SyntaxHighlighter>

위의 예제에서 Person 인터페이스를 사용하여 sayHello 함수의 매개변수 person이 name과 age 프로퍼티를 가진 객체임을 명시하고 있습니다.<br/><br/>

클래스에 인터페이스를 구현하기:<br/><br/>
 
<SyntaxHighlighter language="javascript" style={solarizedlight}>

{`
interface Printable {
  print(): void;
}

class Book implements Printable {
  title: string;
  author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  print(): void {
    console.log("Book: $ {this.title} by $ {this.author}");
  }
}

let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
book1.print(); // "Book: The Great Gatsby by F. Scott Fitzgerald"
`}
</SyntaxHighlighter>

위의 예제에서 Printable 인터페이스를 Book 클래스에서 구현하고 있습니다. Book 클래스는 print 메서드를 정의하고 있으며, Printable 인터페이스의 요구사항을 충족시킵니다.<br/><br/>

인터페이스를 사용하여 코드의 구조를 정의하고 형식을 명시함으로써 코드의 가독성을 높일 수 있습니다. 인터페이스를 활용하면 코드의 일관성과 유연성을 향상시킬 수 있으며, 타입 검사를 통해 오류를 사전에 방지할 수 있습니다.<br/><br/>

      </div>:null}
    </div>
    
  </div>)
  

}

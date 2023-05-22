import React, { useState, useEffect } from 'react';

//import './TypeScriptDayT.scss';
 

interface Person {
  name: string;
  age: number;
}

function sayHello(person: Person): void {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}


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
    console.log(`Book: ${this.title} by ${this.author}`);
  }
}



function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
  return a + b;
}


function greet(name: string = "Guest", age?: number): string {
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  } else {
    return `Hello, ${name}!`;
  }
}

function calculateArea(width: number, height: number = 10): number {
  return width * height;
}

const TypeScriptDayT: React.FC = () => {
  let str: string = "글씨를 작성하는 예제";
  let number: number = 10;

  let name: string;
  let age: number;
  let isStudent: boolean;

  name = "John";
  age = 30;
  isStudent = true;


  let cal = calculateArea(8, 6);


  let john: Person = {
    name: "John",
    age: 30,
  };

  sayHello(john); // "Hello, John! You are 30 years old."


  let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  book1.print(); // "Book: The Great Gatsby by F. Scott Fitzgerald"


  return ( <div style={{color:"white", width:700, margin:"30px auto"}}>
      문자: {str}<br/>
      숫자: {number}

      {greet("John")}
      {greet("Alice", 25)}
      calculateArea : {cal}

      {combine("Hello", "World")}
      {combine(5, 3)}
    </div>
  );
};

export default TypeScriptDayT;
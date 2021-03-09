import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Miraj', 'Golap', 'Razzak', 'Salmal', 'Sakib', 'Shuvo', 'Sakib Khan']
  const mans = [
    { name: 'Nur Nobi Miraj', kaj: 'student', Shopno: 'Wanna be a programer' },
    { name: 'Mostafa Faruk Prince', kaj: 'student', Shopno: 'Wanna be a Enginier' },
    { name: 'Tahsan', kaj: 'student', Shopno: 'Wanna be a police' },

  ]
  const products = [
    { name: 'banglar zuta', price: '$99' },
    { name: 'laxary zuta', price: '$119' },
    { name: 'desi zuta', price: '$199' },
    { name: 'bidesi zuta', price: '$250' },
    { name: 'japan zuta', price: '$250' },
    , { name: 'caina zuta', price: '$299' }
  ]

  return (
    <div className="App">

      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
        <MIraj></MIraj>
        <MIraj></MIraj>
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })
  return(
    <div>
      <h1>Dynamic Users</h1>
      <ul>
        {
          users.map(user => <li><span style={{color:'orange'}}><b>Name</b></span> : {user.name}, <b style={{color:'lightblue'}}>Phone</b> : {user.phone}, <b style={{color:'orangered'}}>Email</b> : {user.email}</li>)
        }
      </ul>

    </div>
  )
}
function Counter() {
  const [count, setcount] = useState(0);
  
  
  
  return (
    <div>
      <h1>Post : {count}</h1>
      <button onClick={() => setcount(count + 1 )}  style={{  color: 'blue', width: '90px', height: '35px', borderRadius: '5px', fontSize: '20px' }}><b>Like</b></button>
      <button onClick={() => setcount(count - 1)}  style={{  color: 'blue', width: '90px', height: '35px', borderRadius: '5px', fontSize: '20px' }}><b>Unlike</b></button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'orange',
    height: '300px',
    width: '300px',
    color: 'black',
    margin: '20px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>

      <h3>{name}</h3>
      <h5>{price}</h5>
      <button><b>Buy Now</b></button>





    </div>
  )
}





function MIraj() {
  const personStyle = {
    color: 'aquamarine',
    backgroundColor: 'chocolate',
    boxShadow: '5px 5px 10px grey',
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px'
  }
  const divstyle = {
    backgroundColor: 'blanchedalmond',
    border: '1px solid black',
    borderRadius: '20px',
    margin: '50px',
    padding: '10px',
    width: '500px',

  }
  return (
    <div style={divstyle}>
      <h3 style={personStyle}>Name: Nur Nobi MIraj</h3>
      <p style={{ color: 'blue' }}>wanna be a programer</p>

    </div>
  )
}


export default App;

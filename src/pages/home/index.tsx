import React from 'react';
const Home = (props) => {
  return <>
  <div onClick={()=>props.history.push('/home')}>home</div>home</>
};
export default Home;
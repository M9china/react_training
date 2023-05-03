function App({Title, Description}) {
  return (
    <>
      <h1 className="description">{Title}</h1>
      <p className="description">{Description}</p>
      <img src='../src/assets/pic.jpg' alt='pic' className="myPic"/>
    </>
  )
}

export default App

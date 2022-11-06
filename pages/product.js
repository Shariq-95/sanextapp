import Navbar from "../components/Navbar";
const product = () => {
  return (
    <>
      <Navbar />
      <h1 style={{color: "green"}}>Product page Heading</h1>
      <h2>Second Heading</h2>
      <style jsx>
        {`
          h2{
            color : orange
          }
        `}
      </style>
    </>
  )
}

export default product;
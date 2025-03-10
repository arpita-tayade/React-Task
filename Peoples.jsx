
function Peoples({ id,name,age,email }) {
  

    return (
      <>
     
        <div>
          <h1>{id ? `id : ${id}` : ``} </h1>
          <h1>{name ? `name : ${name}` : ``}</h1>
          <h1>{age ? `age : ${age}` : ``}</h1>
          <h1>{email ? `email : ${email}` : ``}</h1>
          <hr />
        </div>
        
      </>
    )
  }
  
  export default Peoples
  
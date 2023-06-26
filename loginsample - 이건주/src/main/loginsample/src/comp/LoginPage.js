const LoginPage = () => {
  return (
    <div>
      <form action="#" method="get">
        <p>user Id : </p>
        <input type="text" id="userId" name="userId"></input>
        <p>user Password : </p>
        <input type="password" id="userPw" name="userPw"></input>
        <p>user Email : </p>
        <input type="email" id="userEmail" name="userEmail"></input>
        <button>login</button>
        <button>join us</button>
      </form>
    </div>
  )
}

export default LoginPage;
import { useNavigate } from "react-router-dom";
import { Button } from "../../Component";
import logo from "../../Style/images/logo.png";
import image from "../../Style/images/Background.png";



function Home() {
  const navigate = useNavigate();
  const onNavigate = (url) => {
    navigate(url);
  };
  return (
    <div style={{
      display : 'flex' ,
      justifyContent : "center" ,
      alignItems : "center" ,
      flexDirection: "column",
    }}>
      <div style={{
         marginTop : 20,
        // marginBottom : 20,
      }}>
      <img src={logo} alt="" />
      </div>
      <div>
      <img src={image} alt="" />
      </div>
    <div className="w-25"
    style={{
      // marginTop : 30 ,
      display : 'flex' ,
      justifyContent : "center" ,
      alignItems : "center" ,
      flexDirection: "column",
      // gap : 20 ,
      // marginBottom : 50,
          }}>
      <Button
        value={"Login"}
        type={"primary"}
        className={"w-100"}
        onClick={() => {
          onNavigate("/login");
        }}
      />
      <Button
        value={"Register"}
        type={"primary"}
        className={"w-100"}
        onClick={() => {
          onNavigate("/inscri");
        }}
      />
    </div>
    </div>
  );
}

export default Home;

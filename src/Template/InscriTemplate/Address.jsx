import { Button, Input } from "../../Component";
import logo from "../../Style/images/logo.png";


function Address(props) {
    return ( 
        <div
        className="w-30"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
        }}
      >
        <div style={{
        marginTop : 50,
      }}>
      <img src={logo} alt="" />
      </div>

        <Input
          label={"Start Address"}
          type={"primary"}
          onChange={(e) => {
            props.onChange(e, "startAddress");
          }}
          value={props.form?.startAddress?.value}
          error={props.form?.startAddress?.errorMessage}
          isInvalid={props.form?.startAddress?.isInvalid}
        />
        <Input
          label={"End Address"}
          type={"primary"}
          onChange={(e) => {
            props.onChange(e, "endAddress");
          }}
          value={props.form?.endAddress?.value}
          error={props.form?.endAddress?.errorMessage}
          isInvalid={props.form?.endAddress?.isInvalid}
        />
        
        
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Button
            value={"< Back"}
            type={"primary"}
            className={"w-40"}
            onClick={()=>props.setStep(1)}
            
          />
          <Button
          value={"Register"}
          type={"primary"}
          className={"w-40"}
          onClick={props.submitAddress}
          
        />
        </div>
        </div>

     );
}

export default Address;
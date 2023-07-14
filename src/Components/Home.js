import { Link } from "react-router-dom";
import Conditional from "./LoginBtnDemo";
import Parent from "../PassingDataBtwnSiblings/Parent";
import RadionBtnDemo from "../ReadFromRadioBtn/RadioBtnDemo";
import GenerateRadioBtnDynamically from "../ReadFromRadioBtn/GenerateRadioBtnDynamically";
import Checkboxdemo from "../CheckBoxDemo/CheckBodDemo-Mam";
import UseCallBackDemo from "../UseCallBack&Memoise/UseCallbackDemo";
import UseEffectDemo_1 from "../UseEffectDemo/demo-1";
import UseEffectDemo_2 from "../UseEffectDemo/demo-2";
import MultipleReturns from "../ConditionalRendering/MultipleReturns";
import MemoDemo from "../MemoDemo/MemoDemo";


export default function Home() {
    return(
            <section className="section">
                <h1>Home Page</h1>
                <br/> 
                <br/> 
                
                {/* <Conditional /> */}

                
                {/* <Parent/> 
                <br/> 
                <br/>  */}
                
                {/* <RadionBtnDemo/> 
                <br/> 
                <br/>  */}

                {/* <GenerateRadioBtnDynamically/> 
                <br/> 
                <br/>  */}


                {/* <Checkboxdemo/> 
                <br/> 
                <br/>  */}


                {/* <UseCallBackDemo/>  */}

 
                {/* <UseEffectDemo_1/> */}

                {/* <UseEffectDemo_2/>  */}


                {/* <MultipleReturns/>  */}


                <MemoDemo/> 


            </section>
    )
}
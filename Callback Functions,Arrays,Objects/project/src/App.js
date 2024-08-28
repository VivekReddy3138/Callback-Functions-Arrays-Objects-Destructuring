import logo from "./logo.svg";
import "./App.css";

function App() {
  let calculateResult = (
    telMarks,
    hindiMarks,
    engMarks,
    mathsMarks,
    sciMarks,
    socMarks,
    studentName,
    passFn,
    failFn

  ) => {
    let passMarks = 35;

    if (
      telMarks >= passMarks &&
      hindiMarks >= passMarks &&
      engMarks >= passMarks &&
      mathsMarks >= passMarks &&
      sciMarks >= passMarks &&
      socMarks >= passMarks
    ) {
      passFn();
    } else {
      failFn();
    }
  };

  calculateResult(90, 91, 92, 93, 94, 96, "vivek",
    ()=>{
   console.log("student passed in Tenth");
  },()=>{
    console.log("student failed in Tenth");
  });

  let vivekFirstName = "vivek";
  let vivekLastName = "Reddy";
  let vivektelMarks = 61;
  let vivekhindiMarks = 61;
  let vivekengMarks = 61;
  let vivekmathsMarks = 61;
  let viveksciMarks = 61;
  let viveksocMarks = 61;


  let viratTenthDetails = {
    firstName: "virat",
    lastName: "kohli",
    telMarks:81,
    hindiMarks:82,
    engMarks:83,
    mathsMarks:84,
    sciMarks:85,
    socMarks:86,
  };
    console.log(viratTenthDetails.engMarks);
   
    
  let dhoniTenthDetails = {
    firstName: "Dhoni",
    lastName: "MS",
    telMarks:71,
    hindiMarks:72,
    engMarks:73,
    mathsMarks:74,
    sciMarks:75,
    socMarks:76,
  };

   console.log(dhoniTenthDetails["mathsMarks"]);
   console.log(dhoniTenthDetails.hindiMarks);
   
  let rohitTenthDetails = {
    firstName: "Rohit",
    lastName: "Sharma",
    telMarks:91,
    hindiMarks:92,
    engMarks:93,
    mathsMarks:94,
    sciMarks:95,
    socMarks:96,
  };
 
  console.log(rohitTenthDetails["sciMarks"]);
   console.log(rohitTenthDetails.socMarks);

   let suryaTenthDetails = ["Surya","KumarYadav",90,91,92,93,94,95];

   console.log(suryaTenthDetails[0]);
   console.log(suryaTenthDetails[1]);
   console.log(suryaTenthDetails[7]);

   let bumrahTenthDetails = ["Jasprit","Bumrah",90,91,92,93,94,95];

   console.log(bumrahTenthDetails[0]);
   console.log(bumrahTenthDetails[1]);
   console.log(bumrahTenthDetails[7]);

   let studentsArr = [viratTenthDetails,dhoniTenthDetails,rohitTenthDetails];

   console.log(studentsArr);


   let{
    firstName:viratFN,
    lastName:viratLN,
    telMarks,
    hindiMarks,
    engMarks,
    mathsMarks,
    sciMarks,
    socMarks,
   } = viratTenthDetails;
    
   console.log(viratFN,viratLN,telMarks);

   let suryaDetails = ["Surya","KumarYadav",90,91,92,93,94,95];

   let[fn,ln,tel,hin,eng,maths,sci,soc] = suryaTenthDetails;

   console.log(fn,ln,tel,hin,eng,maths,sci,soc)

  return (
    <div className="App">
      <h2>Learning Callback functions,Arrays,Objects,Destructuring</h2>
    </div>
  );
}

export default App;

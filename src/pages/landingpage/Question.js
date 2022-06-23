// import classes from "../../components/landing_page/Accordion.module.css";
// import { Accordion } from "react-bootstrap";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { data1, data2, data1Ru, data2Ru } from "./QuestionData";

// function Question({ data }) {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);
//   const lang = useSelector((state) => state.langReducer.language);
//   let lanData = [];
//   if (lang === "uz") {
//     lanData = [...data1];
//   } else {
//     lanData = [...data1Ru];
//   }

//   let NewLanData = [];
//   if (lang === "uz") {
//     NewLanData = [...data2];
//   } else {
//     NewLanData = [...data2Ru];
//   }
//   return (
//     <div className={classes.ac} id="questions">
//       <h3>{data.title}</h3>
//       <div className={classes.container_accordion}>
//         {lanData.map((item) => {
//           return (
//             <div key={item.id}>
//               <Accordion defaultActiveKey>
//                 <div className={classes.ac_item} data-aos="slide-up">
//                   <Accordion.Item
//                     eventKey={data1.id}
//                     style={{
//                       margin: "20px auto",
//                       padding: "10px 0",
//                     }}
//                   >
//                     <div className={classes.it_savol}>
//                       <Accordion.Header>{item.savol}</Accordion.Header>
//                     </div>
//                     <div className={classes.it_javob}>
//                       <Accordion.Body>{item.javob}</Accordion.Body>
//                     </div>
//                   </Accordion.Item>
//                 </div>
//               </Accordion>
//             </div>
//           );
//         })}
//       </div>
//       <div className={classes.container_accordion1}>
//         {NewLanData.map((item) => {
//           return (
//             <div key={item.id}>
//               <Accordion defaultActiveKey>
//                 <div className={classes.ac_item} data-aos="slide-up">
//                   <Accordion.Item
//                     eventKey={data2.id}
//                     key={item.id}
//                     style={{
//                       margin: "20px auto",
//                       padding: "10px 0",
//                     }}
//                   >
//                     <div className={classes.it_savol}>
//                       <Accordion.Header>{item.savol}</Accordion.Header>
//                     </div>
//                     <div className={classes.it_javob}>
//                       <Accordion.Body>{item.javob}</Accordion.Body>
//                     </div>
//                   </Accordion.Item>
//                 </div>
//               </Accordion>
//             </div>
//           );
//         })}
//       </div>
//       <div className={classes.ac_margin}></div>
//     </div>
//   );
// }

// export default Question;

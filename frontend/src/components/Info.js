import React ,{useState}from 'react'
import '../css/info.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom"
import * as yup from "yup";
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';
import axios from "axios"



export default function Info() {
    const navigate = useNavigate();
    const defaultvalue = {
        conditions: false
    }
     
    const [ checkmodel, setcheckmodel] = useState({
       
        email:localStorage.getItem('email')
        
    })
    const validationSchema = yup.object().shape({
        conditions: yup.boolean().oneOf([true], "please accept conditions")
    })
    const handleonsubmit = () => {
        console.log("ok");
        const { email} = checkmodel
    if(email){
    axios.post("http://localhost:9000/finduser2",checkmodel)
    .then( res => {  
      if(res.data.message==="User not found"){
          navigate("/form/personaldetails")
      }
      else{
        navigate("/formsubmitted")
      }
    })
  } else {
    alert("invlid input")
  }
    }
    const name = localStorage.getItem("Name");
    return (
        <motion.div id="information" initial={{ width: 0 }}
            animate={{ width: "75%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <nav id='naved'>
                <ul >
                    <li>
                    <Link  className='scrool' to='advertismnet' smooth={true} duration={1000} >Advertisment</Link>
                    </li>
                    <li>
                    <Link className='scrool' to='areaofspecialization' smooth={true} duration={1000} >Specialization</Link>
                    </li>
                    <li>
                    <Link className='scrool' to='SelectionProcedure' smooth={true} duration={1000} >Selection Procedure</Link>
                    </li>
                    <li>
                    <Link className='scrool' to='guidelines' smooth={true} duration={1000} >Guidelines</Link>
                    </li>
                    <li>
                    <Link className='scrool' to='apply' smooth={true} duration={1000} >Apply</Link>
                    </li>
                </ul>
            </nav>
            <br />
            <br />
            <div>
            <h1><p>
                <TypewriterComponent onInit={(typewriter) => {
                    typewriter.typeString("Welcome to IIIT Lucknow recruitment portal " + name + "...")
                        .start();
                }} ></TypewriterComponent>
            </p></h1>
            <br />
            <br /><hr />
            <section id='advertismnet' className='common'><br />
                <h1>Advertisement Number: IIITL/Recruitment/ 2021/RA-02 </h1>
                <hr id='hrtag' />
                <p>Indian Institute of Information Technology Lucknow (IIIT- Lucknow) is an Institute of National Importance established by an Act of Parliament in Public Private Partnership (PPP) Model under the Ministry of Education, Government of India. The Institute offers B.Tech., M.Tech., M.B.A., Ph.D. and PG Diploma Programmes. The Institute invites online applications from meritorious and highly qualified Indian nationals including the Persons of Indian Origin (PIOs) and Overseas Citizens of India (OCIs) for the faculty positions (under Four-Tier-Faculty-Structure) in the Departments of Computer Science (CS), Information Technology (IT), Management & Humanities (M&H) and Mathematics. Guidelines for reservations as per Government of India Norms will be followed.
                </p>
                <p>
                    Post-Doctoral Experience in reputed institutions in India and abroad will be an added advantage for faculty positions. Industry professionals having substantial professional and R&D experience with good number of quality publications in leading Journals or patents in relevant field can also apply. </p>
            </section>
            <br /><hr />
            <section id='areaofspecialization' className='common' ><br />
                <h1>Department Specific Areas of specialization sought</h1>
                <hr id='hrtag' />
                <h3>Computer Science / Information Technology</h3>
                <p>Advanced Computer Algorithm and Analysis, Artificial Intelligence, Big Data Analytics, Block Chain, Computer Architecture, Computer Music, Cyber Security, Data Science, Data Visualization, Edutech, Game Development, Graphic & Visual Computing, Image Processing and Computer Vision, Internet of Things, Modelling and Simulation, Natural Language Processing, Network Security, Operating Systems, Pattern Recognition, Software Product Development, Programming Languages (Python, R), Quantum Computing, Quantum Communications, Quantum Cryptography, Reinforcement Learning, Software Engineering, Social Networking, System Programming & Scripting, Virtual Reality, Web Design & Application Development, Wireless Communication </p>
                <h3> Mathematics</h3>
                <p>Applied Mathematics, Computational Finance, Data Science, Fractal Geometry, Game Theory, Graph Theory, Machine Learning, Mathematical Analysis, Modelling and Simulation, Optimization Techniques, Post-Quantum Cryptography, Probability and Statistics for Machine Learning and Data Science, Topology for Data Mining </p>
                <h3>Management & Humanities</h3>
                <p>Algorithmic Trading, Business Analytics, Digital Banking and Financial Technologies, Human Psychology, Innovation and Design Thinking, Product Development and Management, Quantitative Finance, Strategy and Entrepreneurship </p>
                <br />
                <hr />
            </section>
            <section id='SelectionProcedure' className='common'><br />
                <h1>Mode of selection</h1>
                <hr id='hrtag' />
                <ul>
                    <li className='points '>The candidates as recommended by the shortlisting committee shall be invited for the interview before the Statutory Selection Committee. </li>
                    <li className='points'>The candidate invited for IT/CS and Management/ Humanities should present his/her own PhD thesis and the PhD thesis supervised/guided by him/her before the committee for the perusal by the committee</li>
                    <li className='points'>Based on the recommendations of the statutory Selection Committee and approval of Board of Governors the appointment letters shall be issued. </li></ul>
            </section>
            <br /><hr />
            <section id='fee' className='common'>
                <h1>Application Fee</h1>
                <hr id='hrtag' />

                <ul><li className='points'>Rs. 1500/- for UR and OBC   and   Rs. 750/- for SC/ST/Women/PwD </li>
                    <li className='points'>Candidates desirous of applying for more than one post should submit separate application for each post alongwith requisite application fee. The envelope containing complete application should be superscribed as “Application for the post of ..........................................” and must be sent to Assistant Registrar(Administration), IIIT Lucknow, Chak Ganjaria (CG City), Near HCL, Lucknow-226002. </li></ul>
            </section>
            <br />
            <br /><hr />
            <section id='guidelines' className='common'><br />
              <h1>Guidelines</h1>
              <hr  id='hrtag'/>
               <ul>
                 <li className="points">Only applications received through the ONLINE RECRUITMNET PORTAL, will be considered. For submission of application through online mode, please visit link provided on the website
                 </li>
                 <li className="points">Candidates applying for more than one post/department have to submit separate application form for each post.</li>
                 <li className="points">For each of the qualifications, professional experiences, achievements, etc., documentary proof in the form of self-attested photo-copies are to be attached with the application and original document is to be produced, if called for interview. </li>
                 <li className="points">The originals documents must be produced at the time of interview and at the time of joining. </li>
                 <li className="points">Incomplete application(s) / application(s) without necessary enclosures may not be accepted.</li>
                 <li className="points">Copy of the category certificate (OBC / SC / ST/ PwD), issued by the competent authority, not below the rank of a Tahsildar must be attached. In case of OBC candidates, the certificate indicating the status regarding creamy layer must be issued on or after 01.01.2021. PWD certificate must have been issued by the competent authority as per Government of India norms.</li>
                 <li className="points">The vacancies under EWS Category would be filled as per the instructions issued by DoPT, Ministry of Personnel, Public Grievances & Pension, Govt. of India, vide OM. No. 36039/1/2019-Estt (Res), dated 31.01.2019. EWS vacancies are tentative and subject to further directives of Gol and outcome of any litigation. The appointment against EWS category shall be provisional and is subject to the Income and Asset certificate being verified through the proper channels and if the verification reveals that the claim of belonging to EWS is fake/false, the services will be terminated forthwith without assigning any further reasons and without prejudice to such further action as may be taken under the provisions of the Indian Penal Code for production of fake/false certificate. The Income and Asset Certificate issued by any of the authorities mentioned in the prescribed format shall only be accepted as proof of candidate’s claim as belonging to EWS.
                 </li>
                 <li className="points">The eligibility, qualification, experience and requirements for the posts notified shall be governed by the guidelines issued by MHRD letter no. F.No.27-11/2011- TS.I, dated 23.04.2014</li>
                 <li className="points">The vacancies advertised are indicative and subject to variation at the time of interview. The Institute reserves the right to fill or not to fill any of the vacancies advertised. The Institute reserves the right to reject any or all applications without assigning any reason.</li>
                 <li className="points">The Screening committee shall short-list the eligible and desirable candidates, to be called for interview from amongst the applicants, based on specialization, availability of candidates, and requirements of the departments. In doing so it shall not be bound by the options exercised by the applicants</li>
                  <li className="points">Any misleading wrong information supplied by the candidates may lead to summarily rejection of the application, if found subsequently, also the appointment will be cancelled.</li>
                  <li className="points">Mere fulfillment of minimum qualification and experience requirements for the post does not entitle the candidate to be called for an interview. The Institute reserves the right to restrict the number of candidates for interview to reasonable limit, on the basis of qualification and experience higher than those prescribed in this advertisement.</li>
                  <li className="points">The Institute reserves the right not to fill up the posts, cancel the Advt. in whole or in part without assigning any reason and its decision in this regard shall be final.</li>
                  <li className="points">No interim queries regarding interview / selection process will be entertained.</li>
                  <li className="points">Canvassing in any form will lead to rejection of application form.</li>
                  <li className="points">Decision of the Selection Committee and the Board of Governors of IIIT Lucknow with respect to the selection process is final.
                  </li>
                  <li className="points">Legal disputes, if any with IIIT Lucknow are restricted to the jurisdiction of Lucknow Court only.</li>
                  <li className="points">The maximum age limit will be considered on the last date of receipt of applications. The relaxation 05 years for SC/ST candidates and 03 years for OBC candidates with additional 10 years age relaxation to persons with disabilities will be given in accordance with the Government of India Rules. Relaxation in upper age limit for those applicants, who are in Central Government or central Government Autonomous body, Ex-Servicemen, shall be admissible as per the Government of India rules. Further, the institute may consider relaxation in upper age limit in case of highly experienced and deserving candidate.</li>
                  <li className="points">Person employed in Govt./Semi-Govt./Autonomous/PSU should also apply online and send the print out of completed application form along with all the relevant supporting documents and transaction slip with date, duly self-attested, THROUGH PROPER CHANNEL. Candidate may produce the NOC from their organization at the time of interview with an unambiguous certificate that (i) no vigilance case is pending/being contemplated against him/her. (ii) the applicant will be relieved within one month of receipt of appointment offer, if he selected. List of Major/Minor penalties, if any, imposed during the last 10 years may be asked to submit at any time. Such persons are also advised to send an advance copy of their application, if applicable.</li>
                  <li className="points">Candidates must ensure before applying that they are eligible according to the criteria stipulated in the advertisement. The date of submission of the application form, shall be considered to calculate the relevant experience and other eligibility. If the candidate is found ineligible at any stage of recruitment process, he/she will be disqualified and their candidature will be cancelled. Hiding of information or submitting false information will lead to cancellation of candidature at any stage of recruitment. The Institute reserves the right to reject any application without assigning any reason whatsoever.</li>
                  <li className="points">The online portal shall be made available from 24.11.2021 onwards. The hard copy of the applications completed in all aspects should reach the Institute within 15 days from the date of final submission of online application to the Institute.

                  This is a rolling advertisement. There is no last date. However, applications will be considered periodically as per requirement of the institute. For details, any update and application, please visit www.iiitl.ac.in. </li>
                 </ul>
            </section>
            <br /><hr />
            <section id='apply' className='common'><br />
                <h1>Apply for Faculty Recruitment</h1>
                <hr id='hrtag' />
                <p>Only online applications through the given link will be accepted.

                    (It is adviced to use Google Chrome for seamless and best experience.)

                    (Login with a Google account only.)</p>

                <Formik initialValues={defaultvalue} validationSchema={validationSchema} onSubmit={handleonsubmit}>
                    <Form>
                        <p>I have read all the conditions</p>
                        <Field type="checkbox" name="conditions" >
                        </Field>
                        <span id='errormeassgae'>
                        <ErrorMessage  name="conditions" />
                        </span>
                        <button  id='formbutton' type='submit'> Apply </button>

                    </Form>
                </Formik>
            </section>
             </div>

        </motion.div>

    )
}

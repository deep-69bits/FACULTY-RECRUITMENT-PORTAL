import React from 'react'
import '../css/info.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom"
import * as yup from "yup";
import TypewriterComponent from 'typewriter-effect';
import { motion } from 'framer-motion'
import { Link } from 'react-scroll';


export default function Info() {
    const navigate = useNavigate();
    const defaultvalue = {
        conditions: false
    }
    const validationSchema = yup.object().shape({
        conditions: yup.boolean().oneOf([true], "please accept conditions")
    })
    const handleonsubmit = () => {
        navigate("/form")
    }
    const name = localStorage.getItem("Name");
    return (
        <motion.div id="information" initial={{ width: 0 }}
            animate={{ width: "75%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}>
            <nav id='naved'>
                <ul >
                    <Link  className='scrool' to='Advertismnet' smooth={true} duration={1000} >Advertismnet</Link>
                     <Link className='scrool' to='areaofspecialization' smooth={true} duration={1000} >Area of Specialization</Link>
                    <Link className='scrool' to='SelectionProcedure' smooth={true} duration={1000} >Selection Procedure</Link>
                    <Link className='scrool' to='apply' smooth={true} duration={1000} >Apply</Link>
                </ul>
            </nav>
            <br />
            <br />
            <h1><p>
                <TypewriterComponent onInit={(typewriter) => {
                    typewriter.typeString("Welcome to IIIT Lucknow recurtment portal " + name + "...")
                        .start();
                }} ></TypewriterComponent>
            </p></h1>
            <br />
            <br /><hr />
            <section id='Advertismnet ' className='common'>
                <h1>Advertisement Number: IIITL/Recruitment/ 2021/RA-02 </h1>
                <hr id='hrtag' />
                <p>Indian Institute of Information Technology Lucknow (IIIT- Lucknow) is an Institute of National Importance established by an Act of Parliament in Public Private Partnership (PPP) Model under the Ministry of Education, Government of India. The Institute offers B.Tech., M.Tech., M.B.A., Ph.D. and PG Diploma Programmes. The Institute invites online applications from meritorious and highly qualified Indian nationals including the Persons of Indian Origin (PIOs) and Overseas Citizens of India (OCIs) for the faculty positions (under Four-Tier-Faculty-Structure) in the Departments of Computer Science (CS), Information Technology (IT), Management & Humanities (M&H) and Mathematics. Guidelines for reservations as per Government of India Norms will be followed.
                </p>
                <p>
                    Post-Doctoral Experience in reputed institutions in India and abroad will be an added advantage for faculty positions. Industry professionals having substantial professional and R&D experience with good number of quality publications in leading Journals or patents in relevant field can also apply. </p>
            </section>
            <br /><hr />
            <section id='areaofspecialization' className='common' >
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
            <section id='SelectionProcedure' className='common'>
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
            <section id='apply' className='common'>
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
                        <ErrorMessage name="conditions" />
                        <button  id='formbutton' type='submit'> Apply </button>

                    </Form>
                </Formik>
            </section>


        </motion.div>

    )
}
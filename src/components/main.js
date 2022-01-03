import React, {Component} from 'react';
import styles from '../styles.css';
import {css, StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations';
import Carousel from 'react-bootstrap/Carousel';

import ResumePdf from '../attachments/Chabrielle_Allen_Resume.pdf';
import Headshot from '../images/headshot.jpg';
import Cruise from '../images/cruise.jpg';
import Cncd from '../images/cncd.jpg';


const fadeImages = [
    {
        url: Headshot
    },
    {
        url: Cruise
    },
    {
        url: Cncd
    }
];

const animate = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '2s'
    }
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideEd: true,
            hideCert: true,
            hideSkill: true,
            hideWork: true,
            hideVol: true,
        };

        this.showEducation = this.showEducation.bind(this);
        this.showCertificates = this.showCertificates.bind(this);
        this.showSkills = this.showSkills.bind(this);
        this.showWork = this.showWork.bind(this);
        this.showVolunteering = this.showVolunteering.bind(this);
    }

    showEducation() {
        this.setState(prevState => ({
            hideEd: !prevState.hideEd,
            hideCert: true,
            hideSkill: true,
            hideWork: true,
            hideVol: true,
        }));
    }

    showCertificates() {
        this.setState(prevState => ({
            hideCert: !prevState.hideCert,
            hideEd: true,
            hideSkill: true,
            hideWork: true,
            hideVol: true,
        }));
    }

    showSkills() {
        this.setState(prevState => ({
            hideSkill: !prevState.hideSkill,
            hideCert: true,
            hideEd: true,
            hideWork: true,
            hideVol: true,
        }));
    }

    showWork() {
        this.setState(prevState => ({
            hideWork: !prevState.hideWork,
            hideCert: true,
            hideSkill: true,
            hideEd: true,
            hideVol: true,
        }));
    }

    showVolunteering() {
        this.setState(prevState => ({
            hideVol: !prevState.hideVol,
            hideCert: true,
            hideSkill: true,
            hideWork: true,
            hideEd: true,
        }));
    }

    render() {
        return (
            <div className={styles.container}>
                <div className='header'>
                    <a href='/'><h1>Chabrielle Allen</h1></a>
                    <div className='navBar'>
                        <ul className='nav'>
                            <li><a href='/portfolio' className='nav'>Portfolio</a></li>
                            <li><a href='https://linkedin.com/in/chabrielle-allen' target="_blank" className='nav'>LinkedIn</a></li>
                            <li><a href='https://github.com/chaballen' target="_blank" className='nav'>GitHub</a></li>
                            <li><a href={ResumePdf} className='nav' download={'Chabrielle_Allen_Resume'}>Download Resume</a></li>
                        </ul>
                    </div>
                </div>
                <div className='body'>
                    <div className='about'>
                        <Carousel fade controls={false}>
                            {fadeImages.map((fadeImage, index) => (
                                <Carousel.Item key={index} className='slideshow' interval={3000}>
                                    <img src={fadeImage.url}/>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <p>Hello, I'm Chabrielle. Currently, I am a support 
                            analyst at Onit, a legal tech startup that provides 
                            custom Enterprise Legal Management and Contract 
                            Lifecycle Management solutions.</p>
                    </div>
                    <div className='menu'>
                        <div className='section' onClick={this.showEducation}>
                            <h3>Education</h3>
                            <div className='entries' hidden={this.state.hideEd} display={this.state.hideEd ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>Rice University | B.A. in Religion | AUG 2016 - AUG 2020</h5>
                                    <ul className='details'>
                                        <li>
                                            <h5>Relevant Coursework</h5>
                                            <ul>
                                                <li>Computational Thinking</li>
                                                <li>Cross-Training in Data Science</li>
                                                <li>Algorithmic Thinking & Discrete Math</li>
                                                <li>Computer Science Projects</li>
                                                <li>Intro to Object-Oriented Programming</li>
                                                <li>Ethics & Accountability in Computer Science</li>
                                                <li>Web Development</li>
                                            </ul>
                                        </li>
                                        
                                        <li>
                                            <h5>Extracurriculars</h5>
                                            <ul>
                                                <li>Rice QuestBridge Chapter</li>
                                                <li>Student Government</li>
                                                <li>Intramural/Club Basketball</li>
                                                <li>Rice Black Student Association</li>
                                                <li>Rice for Black Life</li> 
                                                <li>Women in Computer Science</li>
                                                <li>Tapia Center for Excellence & Equity in Education</li>
                                            </ul>
                                        </li>

                                        <li>
                                            <h5>Awards & Honors</h5>
                                            <ul>
                                                <li>QuestBridge Scholar | DEC 2015
                                                    <ul className='description'>
                                                        <li>Received full-ride scholarship to Rice University based on high academic achievement and community and school involvement.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section' onClick={this.showCertificates}>
                            <h3>Certificates</h3>
                            <div className='entries' hidden={this.state.hideCert} display={this.state.hideCert ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>Onit | Apptitude Developer Level 2 | 2021</h5>
                                    <ul className='description'>
                                        <li>Completed level 1 certification October 21, 2020.</li>
                                        <li>Completed level 2 certification May 14, 2021.</li>
                                    </ul>
                                    <h5>Onit | Enterprise Legal Management (ELM) - Apptitude Level 1 | 2021</h5>
                                    <ul className='description'>
                                        <li>Completed level 1 certification October 22, 2020.</li>
                                    </ul>
                                    <h5>AT&T Summer Learning Academy | Certificate of Completion | JUN 2020 - JUL 2020</h5>
                                    <ul className='description'>
                                        <li>Finished 80 hours of online learning through 26 live sessions and 51  self-paced courses to further business and technical acumen alongside personal and professional development.</li>
                                        <li>Completed section-level training in human resources, finance, advertising, media and technology, communication, and leadership.</li>
                                        <li>Expanded client-focused skillset through courses on effective listening, asking discovery questions, exploring solutions, and implementing with end users in mind.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section' onClick={this.showSkills}>
                            <h3>Skills</h3><span className='sideNote' hidden={this.state.hideSkill} display={this.state.hideSkill ? 'none' : 'block'}>1 star: novice - 5 stars: expert</span>
                            <div className='entries' hidden={this.state.hideSkill} display={this.state.hideSkill ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>Languages</h5>
                                    <ul className='details'>
                                        <li>Python
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>C#
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>HTML5/CSS3
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>JavaScript/React JS/React Native/Node JS
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Liquid Templating Language
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Java
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>SQL
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Ruby
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star-half'></span>
                                            </span>
                                        </li>
                                        <li>C++
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                    </ul>
                                    <h5> Tools</h5>
                                    <ul className='details'>
                                        <li>Visual Studio Code
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Git/GitHub
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Azure
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star-half'></span>
                                            </span>
                                        </li>
                                        <li>Power BI
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>SQL Server/SQL Data Warehouse
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Trello
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Amazon Web Services
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                        <li>Postman
                                            <span className='stars'>
                                                <span className='fa fa-star'></span>
                                                <span className='fa fa-star'></span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section' onClick={this.showWork}>
                            <h3>Work</h3>
                            <div className='entries' hidden={this.state.hideWork} display={this.state.hideWork ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>Onit</h5>
                                    <ul className='details'>
                                        <li>
                                            <h5>Support Analyst | SEPT 2020 - CURRENT</h5>
                                            <ul>
                                                <li>
                                                    Since graduating, I have been a Support Analyst at Onit. I provide front-line and ongoing technical support for clients' customized Contract Lifecycle Management, Enterprise Legal Management, Legal Holds, and Apptitude solutions. I regularly work directly with clients to ensure a smooth user experience. My responsibilities include, but are not limited to: 
                                                    <ul className='description'>
                                                        <li>Communicating technical information to clients and internal teams to address client questions and concerns.</li>
                                                        <li>Scoping client asks to customize workflows or improve product performance and usability.</li>
                                                        <li>Debugging and developing custom workflows, maintaining data integrity using Liquid Templating Language, and administering user access with security requirements in mind.</li>
                                                        <li>Using Sidekiq, Mailgun, Kibana, Datadog, and client-level integration logs to troubleshoot data discrepancies, workflow issues, and potential bugs.</li>
                                                        <li>Developing Ruby scripts to pull data from Onit's API for analysis and client data returns.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <h5>Microsoft</h5>
                                    <ul className='details'>
                                        <li>
                                            <h5>Software Engineering Intern | M365 IDEAs | MAY 2019 - AUG 2019</h5>
                                            <ul>
                                                <li>
                                                    As a Software Engineering Intern on the M365 Core Insights, Data Engineering, & Analytics (IDEAs) Team, I developed a data pipeline solution for long-term storage and analysis of Azure telemetry data for the internal website my team managed, Lynx, which tracks tenants' M365 usage and subscription information. I also presented analyses of the data in an administrator page on the Lynx website. For this project, I:
                                                    <ul className='description'>
                                                        <li>Wrote a detailed technical spec outlining the pipeline process, work items, data points for analysis, and overall goals for my prototype.</li>
                                                        <li>Developed the telemetry data pipeline using Azure Blob Storage, Azure Data Lake Storage, Cosmos Database, Azure Data Factory, Databricks, and Databuild.</li>
                                                        <li>Implemented the schema for the data in the Data Lake and Cosmos DB.</li>
                                                        <li>Wrote C# processors to read and format the data and Scope scripts to aggregate and analyze it.</li>
                                                        <li>Developed an administrator page in Lynx presenting visualizations of user behavior analyses using React.js, Redux, and TypeScript.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5>Explorer Intern | O365 Security | MAY 2018 - AUG 2018</h5>
                                            <ul>
                                                <li>
                                                    During my first internship, I was part of the Explorer program, and
                                                    I worked in a pod with two other interns and gained experience in both
                                                    project management and software engineering. As part of the O365 Core
                                                    Security Engineering Team, my pod developed a data pipeline for storing,
                                                    analyzing, and presenting CIS (Center for Internet Security) configuration
                                                    scans and STIGs (Security Technical Implementation Guides) so that teams
                                                    across Microsoft could view vulnerabilities in configurations of hosts
                                                    running Office 365. In this internship, I:
                                                    <ul className='description'>
                                                        <li>Developed a technical spec outlining the pipeline process, work items, data points for analysis, and overall goals for our prototype.</li>
                                                        <li>Created a PowerBI report to present and visualize our analyses.</li>
                                                        <li>Implemented the schema for and C# scripts to normalize and insert our data into a SQL Data Warehouse.</li>
                                                        <li>Pulled processed data from the Data Warehouse to Azure Analysis services to create relationships in the data and connect to Power BI for presenting.</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul> 

                                    <h5>Rice University</h5>
                                    <ul className='details'>
                                        <li>
                                            <h5>Bioinformatics Research Assistant | Rice University Data Sciences Student Program (RUDSSP) | MAY 2017 - MAY 2018</h5>
                                            <span>
                                                During my second year at Rice, I was a Research Assistant in the computer
                                                science department working on a bioinformatics project with two other students. Initially, our project was to develop a GUI, called <a href='https://github.com/chilleo/ALPHA'>ALPHA,</a> for biologists to more easily analyze large amounts of DNA data in the form of phylogenetic trees through RaxML and create standardized visualizations. After this was completed, we pivoted our focus to generalizing the D-statistic beyond four taxa, which biologists use to understand rates of hybridization between species, and we were successful in generalizing it up to seven taxa. In this position, I:
                                                <ul className='description'>
                                                    <li>Wrote detailed documentation for downloading and using ALPHA.</li>
                                                    <li>Created graphics displaying statistical analyses and comparisons using analysis software such as BioPython, Dendropy, ETE Toolkit, PhyloNet, and RAxML.</li>
                                                    <li>Planned out the interface to make it user-friendly and efficient using PyQt.</li>
                                                    <li>Ran simulations to develop and confirm a generalized D-statistic using MakeSample (MS), Seq-Gen, and ALPHA.</li>
                                                    <li>Co-authored <a href='https://www.biorxiv.org/content/biorxiv/early/2018/06/17/348649.full.pdf'>DGEN: A Test Statistic for Detection of General Introgression Scenarios</a> and <a href='https://academic.oup.com/bioinformatics/advance-article-abstract/doi/10.1093/bioinformatics/bty173/4944244?redirectedFrom=fulltext'>ALPHA: a toolkit for Automated Local Phylogenenomic Analyses</a>.</li> 
                                                </ul>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section' onClick={this.showVolunteering}>
                            <h3>Volunteering</h3>
                            <div className='entries' hidden={this.state.hideVol} display={this.state.hideVol ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5><a href='https://hanszen.rice.edu/about/history/'>Hanszen College, Rice University</a></h5>
                                    <ul className='details'>
                                        <li>
                                            <h5>College Night Committee Head | AUG 2017 - MAY 2018, AUG 2019 - MAR 2020</h5>
                                            <span>
                                                Hanszen has two College Nights and one Crane Day per year, and they
                                                provide a way for students to relax, enjoy the outdoors, and socialize.
                                                As a committee head, I worked with other students and the Rice Student
                                                Activities Center to ensure that our plans met safety standards. In 
                                                particular, I:
                                                <ul>
                                                    <li>Planned the themes and logistics of, publicized, and hosted these events celebrating Hanszen culture and facilitating bonding between students at Hanszen.</li>
                                                    <li>Managed the budget and documented details of itineraries, food/drink sources, layout of the events, volunteers, and backup to ensure safety.</li>
                                                    <li>Oversaw team of coordinators and volunteers and communicated their roles in College Night.</li>
                                                </ul>
                                            </span>
                                        </li>
                                        <li>
                                            <h5>Orientation Week Advisor | AUG 2018 - MAY 2019</h5>
                                            <span>
                                                Orientation (O-Week) at Rice is an intensive, week-long introduction to the
                                                university. At Hanszen, O-Week groups consist of three advisors, one co-advisor from another residential college, and eight to ten new students. As an advisor, I:
                                                <ul>
                                                    <li>Participated in co-advisor interviews and assisted in second-round interview selection.</li>
                                                    <li>Informed new students of resources, clubs, and events at Rice.</li>
                                                    <li>Assisted new students in moving into their dorms, structuring short and long-term class schedules, and finding class and office locations.</li>
                                                    <li>Provided ongoing support after the conclusion of O-Week to help new students adjust more smoothly through regular individual check-ins and weekly group lunches.</li>
                                                </ul>
                                            </span>
                                        </li>
                                        <li>
                                            <h5>Junior Class Representative | AUG 2018 - MAY 2019</h5>
                                            <span>
                                                As a representative of my class in Hanszen's student government, I:
                                                <ul>
                                                    <li>Planned class-oriented events to facilitate bonding and culture.</li>
                                                    <li>Gathered opinions on student-government decisions and issues from other juniors.</li>
                                                    <li>Voted in line with juniors' opinions at government cabinet meetings.</li>
                                                </ul>
                                            </span>
                                        </li>
                                        <li>
                                            <h5>College Representative | <a href='https://riceprogramcouncilsite.wordpress.com/'>Rice Program Council (RPC)</a> | AUG 2017 - MAY 2018</h5>
                                            <span>
                                                RPC is an organization at Rice that coordinates various events throughout
                                                the year, such as our fall and spring dances. In this position, I:
                                                <ul>
                                                    <li>Communicated information regarding RPC events to students at Hanszen.</li>
                                                    <li>Provided RPC with feedback on events and provided information gathered from Hanszen students.</li>
                                                </ul>
                                            </span>
                                        </li>
                                    </ul>
                                    <h5><a href='https://www.hoby.org/about/vision-mission/'>Hugh O'Brian Youth Leadership (HOBY)</a></h5>
                                    <ul className='details'>
                                        <li>
                                            <h5>Community Leadership Workshop (CLeW) Coordinator | AUG 2015 - DEC 2015</h5>
                                            <span>
                                                As a facilitator at HOBY NM, I received a scholarship to attend
                                                HOBY's Advanced Leadership Academy (ALA), where I learned how to
                                                put my leadership skills to work through helping others. After
                                                returning from ALA, a fellow student and I hosted Roswell's first
                                                CLeW, a one day seminar to jumpstart high school freshmen's
                                                interest in leadership. As a CLeW Coordinator, I:
                                                <ul>
                                                    <li>Planned and hosted a program consisting of community service, teamwork, and leadership activities based on the HOBY curriculum.</li>
                                                    <li>Corresponded with various businesses to secure a venue for the workshop and donations for shirts, food, and other supplies.</li>
                                                    <li>Managed the budget and documented details of the itinerary, food/drink sources, layout of the event, volunteers, and attendees.</li>
                                                    <li>Recruited and oversaw volunteers for facilitation, recruitment, and operations.</li>
                                                    <li>Corresponded with schools in Roswell and surrounding areas to recruit student ambassadors.</li>
                                                </ul>
                                            </span>
                                        </li>
                                        <li>
                                            <h5>HOBY-NM Facilitator | May 2015, May 2016</h5>
                                            <span>
                                                HOBY's state seminars are three-day conferences meant to teach high school
                                                sophomores how to use and expand on their skills, personalities, and passions
                                                to lead and help others. Ambassadors are split into groups facilitated by two
                                                student facilitators and an adult mentor. After attending New Mexico's HOBY 
                                                Seminar as an ambassador, I returned as a facilitator, where I:
                                                <ul>
                                                    <li>Assisted ambassadors in goal-setting, reflection exercises, and learning how to become better leaders.</li>
                                                    <li>Showed ambassadors how to practice HOBY's core values through engaging them in various leadership activities based on the HOBY curriculum.</li>
                                                    <li>Motivated ambassadors to step out of their comfort zones by encouraging them and creating a safe space for exploration and vulnerability.</li>
                                                    <li>Recommended and recruited students from my high school to attend the seminar and grow their leadership potential.</li>
                                                </ul>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <p>chabrielle.allen@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Main;
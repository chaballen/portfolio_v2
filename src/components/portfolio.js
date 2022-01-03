import React, {Component} from 'react';
import styles from "../styles.css";
import {css, StyleSheet} from 'aphrodite';
import {fadeIn} from 'react-animations';
import Carousel from 'react-bootstrap/Carousel';

import ResumePdf from '../attachments/Chabrielle_Allen_Resume.pdf';
import ProductivityPdf from '../attachments/Chabrielle_Allen_Productivity.pdf';
import CultsPdf from '../attachments/Chabrielle_Allen_Empty_Self_Cults.pdf';
import CrusadesPdf from '../attachments/Chabrielle_Allen_Women_Crusades.pdf';
import RevelationPdf from '../attachments/Chabrielle_Allen_Violence_Revelation.pdf';
import FelliniPdf from '../attachments/Chabrielle_Allen_New_Beginning.pdf';

import SelfCare from '../images/self-care.jpg';
import Diver from '../images/scuba.jpg';
import Odd from '../images/odd.jpg';
import Seashells from '../images/seashells.jpg';

const fadeImages = [
    {
        url: SelfCare
    },
    {
        url: Diver
    },
    {
        url: Odd
    },
    {
        url: Seashells
    },
];

const animate = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '2s'
    }
});

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hideCs: true,
            hideArt: true,
            hideReli: true,
        };

        this.showCs = this.showCs.bind(this);
        this.showArt = this.showArt.bind(this);
        this.showReli = this.showReli.bind(this);
    }

    showCs() {
        this.setState(prevState => ({
            hideCs: !prevState.hideCs,
            hideArt: true,
            hideReli: true,
        }));
    }

    showArt() {
        this.setState(prevState => ({
            hideArt: !prevState.hideArt,
            hideCs: true,
            hideReli: true,
        }));
    }

    showReli() {
        this.setState(prevState => ({
            hideReli: !prevState.hideReli,
            hideCs: true,
            hideArt: true,
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
                        <p>Check out my projects, paintings, and papers here!</p>
                    </div>
                    <div className='menu'>
                        <div className='section' onClick={this.showCs}>
                            <h3>Software Development</h3>
                            <div className='entries' hidden={this.state.hideCs} display={this.state.hideCs ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>ALPHA | Rice University Data Sciences Student Program (RUDSSP)</h5>
                                    <ul className='details'>
                                        <li>
                                            ALPHA is a python-based toolkit for automated local phylogenomic analyses.
                                            It provides functionalities for automated inference of local genealogies
                                            and analyses based on them through using sliding windows to create the
                                            local genealogies. ALPHA has a GUI, several import and export
                                            functionalities, and is freely available for installation and use. In this
                                            project, I planned the interface, developed many of the visualizations, and
                                            wrote the documentation for downloading and using ALPHA.</li>
                                        <li><span className='sideNote'><a href='https://github.com/chilleo/ALPHA' target="_blank">See Repo</a></span></li>
                                    </ul>
                                    <h5>Battleship | Web Development</h5>
                                    <ul className='details'>
                                        <li>
                                            This game was developed based on a homework prompt in my Web Development
                                            class. Using Javascript, I created a simple, one-player version of the
                                            Battleship board game that tracks players' best scores (minimum number of
                                            moves) through cookies and is hosted on Surge.</li>
                                        <li><span className='sideNote'><a href='http://caa-battleship.surge.sh' target="_blank">Play Game</a></span></li>
                                    </ul>
                                    <h5>ALPHA: a toolkit for Automated Local Phylogenomic Analyses</h5>
                                    <ul className='details'>
                                        <li>
                                            Abstract: The evolutionary histories of individual regions across a
                                            genomic alignment—called ‘local genealogies’—can differ from each
                                            other, due to processes such as recombination. Elucidating and analyzing
                                            these local genealogies are important for a large number of inference
                                            tasks, including those pertaining to species phylogenies, evolutionary
                                            processes and trait mapping. In this paper, we present a toolkit for
                                            automated local phylogenomic analyses, or ALPHA. The purpose of this
                                            toolkit is to provide a wide array of functionalities for automated
                                            inference of local genealogies as well as analyses based on these local
                                            genealogies. The toolkit uses sliding windows to construct local genealogies
                                            and can compute a wide array of local phylogeny based statistics, such as the
                                            D-statistic. The toolkit comes with a graphical user interface and several
                                            import/export functionalities. Over the last few decades, much emphasis in
                                            phylogenomics has been put on developing tools for inferring species phylogenies.
                                            This toolkit complements those efforts by emphasizing the ‘local’ aspect of
                                            phylogenomics.</li>
                                        <li><span className='sideNote'><a href='https://doi.org/10.1093/bioinformatics/bty173' target="_blank">Read Paper</a></span></li>
                                    </ul>
                                    <h5>D<sub>GEN</sub>: A Test Statistic for Detection of General Introgression
                                        Scenarios</h5>
                                    <ul className='details'>
                                        <li>
                                            Abstract: When two species hybridize, one outcome is the integration of genetic
                                            material from one species into the genome of the other, a process known as
                                            introgression. Detecting introgression in genomic data is a very important question
                                            in evolutionary biology. However, given that hybridization occurs between closely
                                            related species, a complicating factor for introgression detection is the presence
                                            of incomplete lineage sorting, or ILS. The D-statistic, famously referred to as the
                                            “ABBA-BABA” test, was pro-posed for introgression detection in the presence of ILS
                                            in data sets that consist of four genomes. More recently, D<sub>FOIL</sub> — a set
                                            of statistics — was introduced to extend the D-statistic to data sets of five
                                            genomes. The major contribution of this paper is demonstrating that the invariants
                                            underlying both the D-statistic and D<sub>FOIL</sub> can be derived automatically
                                            from the probability mass functions of gene tree topologies under the null species
                                            tree model and alternative phylogenetic network model. Computational requirements
                                            aside, this automatic derivation provides a way to generalize these statistics to
                                            data sets of any size and with any scenarios of introgression. We demonstrate the
                                            accuracy of the general statistic, which we call D<sub>GEN</sub>, on simulated data
                                            sets with varying rates of introgression, and apply it to an empirical data set of
                                            mosquito genomes.</li>
                                        <li><span className='sideNote'><a href='https://doi.org/10.1101/348649' target="_blank">Read Paper</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section' onClick={this.showReli}>
                            <h3>Religious Studies</h3>
                            <div className='entries' hidden={this.state.hideReli} display={this.state.hideReli ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>Subjectivity and the Productivity Movement</h5>
                                    <ul className='details'>
                                        <li>
                                            My senior thesis class was on Michel Foucault's hermeneutics of the
                                            self, where I read and discussed many of his lectures and writings
                                            from 1975 to 1982. I chose to apply Foucault's conceptions of
                                            subjectivity, self-examination, confession, and self-actualization
                                            to the productivity and digital wellness movements fueled by
                                            technological advancement and discuss how doing so transforms them.
                                            In this paper, I examine Apple and Android's screen time tracking
                                            features, Microsoft Outlook's MyAnalytics, and bullet journaling as
                                            forms through which the techniques of self-examination and confession
                                            act to render individuals as subjects of productivity, and I argue
                                            that self-actualization is transformed in that reaching it means
                                            becoming one's most productive self rather than uncovering what is
                                            hidden about oneself.</li>
                                        <li><span className='sideNote'><a href={ProductivityPdf} download='Chabrielle_Allen_Subjectivity_Productivity'>Download Paper</a></span></li>
                                    </ul>
                                    <h5>The 'Empty Self' in Relation to Cult Development</h5>
                                    <ul className='details'>
                                        <li>
                                            I wrote this paper for a class called "The Psychology of Religion."
                                            In it, I discuss how psychological conceptions of the self changed
                                            to form the "Empty Self", and I argue that this conception contributed
                                            to the rise of cults in the 1960s through examining the psychology
                                            of cult leaders, members, and recruitment methods.</li>
                                        <li><span className='sideNote'><a href={CultsPdf} download='Chabrielle_Allen_Empty_Self_Cults'>Download Paper</a></span></li>
                                    </ul>
                                    <h5>Women's Roles in the Crusades</h5>
                                    <ul className='details'>
                                        <li>
                                            For a course I took on the history of the Crusades, I decided to
                                            examine prominent Christian and Muslim female leaders of the
                                            Crusader period and discuss how they came into power, obstacles
                                            they faced, and their impact on women's societal roles thereafter.</li>
                                        <li><span className='sideNote'><a href={CrusadesPdf} download='Chabrielle_Allen_Women_Crusades'>Download Paper</a></span></li>
                                    </ul>
                                    <h5>Violence in the Book of Revelation</h5>
                                    <ul className='details'>
                                        <li>
                                            In my final paper for a class I took on apocalyptic literature, I compared
                                            how interpreting the Book of Revelation's imagery literally offered
                                            a much more violent understanding of the end-time than the metaphorical
                                            interpretation. I concluded that the metaphorical interpretation offers
                                            a much more nuanced, nonviolent depiction of both God and the apocalypse.</li>
                                        <li><span className='sideNote'><a href={RevelationPdf} download='Chabrielle_Allen_Violence_Revelation'>Download Paper</a></span></li>
                                    </ul>
                                    <h5>Fellini and Bergman's Searches for a New Beginning</h5>
                                    <ul className='details'>
                                        <li>
                                            In a class called "Losing Your Religion in Film," I wrote my final
                                            paper on the authors of the films "8 &frac12;" and "Wild Strawberries"
                                            and their searches for new beginnings through the film's protagonists.
                                            In this paper, I conclude that both Federico Fellini and Ingmar Bergman's
                                            pursuits of a new beginning were fueled by internal conflict about
                                            finding happiness in spite of having chaotic, fragmented lives, and they
                                            found closure by reflecting on their turmoils through their films'
                                            protagonists.</li>
                                        <li><span className='sideNote'><a href={FelliniPdf} download='Chabrielle_Allen_Women_Crusades'>Download Paper</a></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section' onClick={this.showArt}>
                            <h3>Artwork</h3>
                            <div className='entries' hidden={this.state.hideArt} display={this.state.hideArt ? 'none' : 'block'}>
                                <div className={css(animate.fadeIn)}>
                                    <h5>'Self Care' | 2019, Oil on Panel</h5>
                                    <ul className='details'>
                                        <li><p>For my first assignment in Beginning Painting, I selected a candle,
                                        mug, and face mask, and my professor provided the image on the left.</p></li>
                                    </ul>
                                    <h5>'The Diver' | 2019, Oil on Cardstock</h5>
                                    <ul className='details'>
                                        <li><p>In this painting, I transformed a man holding a strange contraption
                                        on a cardstock print of a book cover into an underwater scuba diver.</p></li>
                                    </ul>
                                    <h5>'An Odd Arrangement' | 2019, Oil on Panel</h5>
                                    <ul className='details'>
                                        <li><p>Here, I painted an arrangement of items set up by fellow students in
                                        my class.</p></li>
                                    </ul>
                                    <h5>'Seashells' | 2019, Oil on Panel</h5>
                                    <ul className='details'>
                                        <li><p>This was my final painting for my Beginning Painting class that 
                                            was inspired by Charline von Heyl's style.</p></li>
                                    </ul>
                                    <span className='sideNote'><a href={'https://www.petzel.com/artists/charline-von-heyl'}
                                    id={'goTo'} target="_blank">See Charline von Heyl's Art</a></span>
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
export default Portfolio;
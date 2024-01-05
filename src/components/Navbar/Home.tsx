import '../../styles/Home.scss'
import crop1 from '../../images/crop1.png'
import spockhands from '../../images/spockhands.png'
import 'bootstrap/dist/css/bootstrap.min.css'; //


const Home = () => {
    return (
        <div className="home-container">
            <div className="box-one">
                <div className="img-color">
                    <div className="text-bubble">
                        <p>
                            {/* lets make a jokes api in the text bubble */}
                            <img className="spockhands"src={spockhands} alt="" />
                            Greetings! 
                            I'm a Developer
                        </p>
                    </div>
                    <div className="img-background">
                        <img src={crop1} alt="seattle rooftop" />
                    </div>
                </div>
                <ul>
                    <h2>
                        Greetings !
                    </h2>
                    <li>I am an Korean American and I am your guy when you want to talk about anything and everything. I love to know a little about a lot and in most cases, doing a deep dive to understand how something works. When something is broken I have to learn why, or I cannot feel at ease. </li>
                    <br />
                    <li>I have been a fitness person ever since I joined the football team. I use to be the small scrawny kid who gets bullied everyday and after studying how to properly conduct myself while exercising, I became much more confident in my everyday actions and loved it so much I decided to help others be more confident in themselves.</li>
                    <br />
                    <li>If anybody has information about anything I enjoy listening and soaking in the data. I enjoy listen to many podcasts, my favorite being on the topic of economic market trends, it is an easy way to understand why the stock market works the way that it does. </li>
                    <br />
                    <li>Im a big football person, we can go back and forth all day specially when it comes to fantasy</li>
                    <br />
                    <li>I started my tech Journey since 2020. Ive always had an interest for code but never thought I had it in me to pursue it. I have many friends in the industry and decided to shoot for the sky and ended up joining the first Code In Place program created by Stanford Professors and graduates. Now I feel like I can let my imagination go wild. </li>
                    <br />
                    <li>I am interested in having all kinds of conversations, I find it a pleasure people are willing to share what they know with me. Get to know me and I look forward to having a conversation with you</li>

                </ul>



                {/* <img className="coolines-one" src={coollines} alt="" /> */}
                {/* <img className="coolines-two" src={coollines} alt="" /> */}

            </div>

        </div>
    )
}

export default Home
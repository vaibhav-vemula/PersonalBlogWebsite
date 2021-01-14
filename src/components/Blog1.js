import React from "react";
import Navbar2 from "./Navbar2";
import gaming from "../images/gaming.jpg"
import covid from "../images/covid.png"
import cloud from "../images/cloud.jpg"
import v from "../images/v.png"

const Blog1 = () => {
    return(
        <>
        <div className="hello">
            <Navbar2 />
        </div>
        <div className="blo">
            <div className="foralign">
                <h1 className="title">The Future of Online Gaming...</h1>
                
                <img src={v} height="50px" alt="Vaibhav Vemula" align="left"/>
                <p className="written">Written by <b>Vaibhav Vemula</b> <span className="read">4 min read</span></p>
                <br />
                
                
                <h2 className="quotes">"We don’t stop playing because we grow old, We grow old because we stop playing”</h2>
            </div>  

            <img className="img" src={gaming}  alt="gaming room" />
            
            <div className="foralign">
                <p className="para"><span className="bold">In layman’s terms,</span> playing video games directly affects and impacts regions of the brain responsible for memory, spatial orientation, information organisations, and fine motor skills.The study also reinforces the claim that, like exercise, playing games for as little as 30 minutes a day, can improve your life.</p>
               
                <p className="heading">The following are some of the benefits of playing video games -</p>
                    <ul className="listitems">
                        <li>Improves <span className="bold">communication</span> skills</li>
                        <li>Improves <span className="bold">coordination</span></li>
                        <li>Improves <span className="bold">problem-solving</span> skills</li>
                        <li>Enhances <span className="bold">memory</span></li>
                        <li>Improves <span className="bold">attention</span> and <span className="bold">concentration</span></li>
                        <li>It is a great source of learning</li>
                        <li>Improves the <span className="bold">brain’s speed</span></li>
                        <li>Enhances <span className="bold">multitasking skills</span></li>
                        <li>Improves <span className="bold">social</span> skills</li>
                    </ul>
                
                <h2 className="quotes">“Success is not final, failure is not fatal; it is the courage to continue that counts" — Call of duty Modern Warfare</h2>
                <h2 className="title2">Online Gaming</h2>
                <p className="para">Gaming has evolved from single-player arcade games, to multiplayer consoles, to mobile gaming where players can take to the streets with their smartphones to seek out elusive augmented reality (AR) characters like <span className="bold">Pokémon</span> and person perspective games like <span className="bold">PUBG</span>. Over time, online gaming has increased the number of interactive players worldwide, making it most loved type of gaming, estimated <span className="bold">495 million eSports audience globally in 2020.</span></p>
                <h2 className="title2">Impact of COVID-19 on Gaming</h2>
                <img className="co" src={covid} height="360px" alt="covid" align="left" />
                <p className="para">COVID-19 has made a <span className="bold">dramatic increase</span> in the audience available to publishers, and all the giants of the video games industry — including, Microsoft, Nintendo and Twitch — have thrived in the conditions created by the pandemic.</p>
                <p className="para">The release of games like <span className="bold">Fall Guys, Among Us</span> and <span className="bold">LUDO king</span> during the pandemic has received huge success with a total downloads of <span className="bold">11M+</span>(Steam), <span className="bold">217M+</span>(mobile) and <span className="bold">500M+</span>(mobile) respectively.</p>
                <p className="para"><span className="bold">Nintendo</span> and <span className="bold">Tencent</span> also saw an increase in sales during their first quarter. The former experienced around 41.85% increase in profits, while Tencent’s year-on-year online games revenue increased by 32%. Even games released during the pandemic have performed well.</p>
                <p className="para">The <span className="bold">Cloud Gaming market</span> is expected to grow by <span className="bold">USD 2.75 billion</span>, progressing at a CAGR of over 29.5% during 2020–2024. The report offers a detailed analysis of the impact of the COVID-19 pandemic on the cloud gaming market in optimistic, probable, and pessimistic forecast scenarios. The market is expected to have a positive impact due to the spread of COVID-19. The imposition of lockdown by governments across the world led to a spike in online gaming, thereby resulting in a huge short-term growth of vendors. Besides, the rising adoption of smart TVs and the proliferation of mobile devices and the internet will present significant opportunities for vendors during the forecast period.</p>
                
                <h2 className="title2">Cloud Gaming</h2>
                <img className="img2" src={cloud} alt="Cloud Gaming" width="700" />
                <p className="para">Nowadays, gamers are preferring gaming laptop and customized build computers, primarily laptop owing to portability and convenience. However, the cost of gaming laptops and computers are increasing due to high hardware prices such as GPU and motherboard. This is giving rise to the need for low-cost gaming solutions for the users thereby fueling the market growth. There are many advantages and disadvantages of gaming laptops and consoles, however, according to an ESA study on gamers, laptops and computers are ahead of consoles and is expected that similar trend will continue over the next few years creating opportunities for cloud gaming companies to penetrate the market.</p>
                <p className="para"><span className="bold">Cloud Gaming</span> makes the next evolutionary leap by streaming games from any device with an internet connection (including smart watches and mixed reality glasses), just like music and video. Cloud gaming platforms can provide much needed compute and storage resources for open source gaming, which enables game developers to modify existing games and create new variants of games. This will remove the barriers to entry for smaller, niche game developers.</p>
                <p className="para">These innovations in gaming all have one critical dependency that could be a gaming experience killer: <span className="bold">Latency</span>.</p>

                <h4 className="heading">Some of the best Cloud Gaming Services available right now-</h4>
                    <ul className="listitems" style={{fontStyle:"italic"}}>
                        <li>Microsoft Project xCloud</li>
                        <li>PlayStation Now</li>
                        <li>Nvidia GeForce Now</li>
                        <li>Google Stadia</li>
                        <li>Vortex</li>
                        <li>Steam Link</li>
                        <li>Shadow</li>
                        <li>Parsec</li>
                    </ul>
                <h5 className="heading">Advantages of cloud gaming -</h5>
                    <ul className="listitems">
                        <li>Don’t need to buy a high budget gaming machine. You would not need to upgrade your PC or console</li>
                        <li>You can play on a Windows PC, Mac, Linux or Mobile according to your choice. No matter what type of computer you have. Cloud gaming makes the game platform-independent.</li>
                        <li>No maintenance required. In cloud gaming, you don’t need to maintaining anything.</li>
                        <li>Some games require a download of 20GB 30GB or even more. With cloud gaming, you can play instantly without download anything.</li>
                    </ul>
                <h5 className="heading">Disadvantages of cloud gaming -</h5>
                    <ul className="listitems">    
                        <li>Gamers need a good internet connection without any issue.</li>
                        <li>A high internet connection is not available in some areas. with affordable price, that might be a problem</li>
                        <li>Gamer can’t play if the connectivity fails for some reason</li>
                        <li>There are no many companies provided cloud gaming service, but there are few options like Gaikai, Onlive, etc</li>
                        <li>Cloud gaming service charge applicable to playing games</li>
                    </ul>

                    <hr className="divi" />

                <h4 className="heading">Will Cloud Gaming kill consoles?</h4>
                <p className="para">Cloud gaming is rapidly improving and can eventually kill consoles. But since the overall technology is still in its beta stage, while depending on the most current internet capabilities that are in place, cloud gaming is still not as reliable as console or PC gaming right now.</p>
                <hr className="divi" />
                <br />
                
                <h3 className="quotes">“Games always believe that an epic win is possible and that it’s always worth trying and trying now”</h3>                
                
                <h1 className="dot">...</h1>
            </div>

        </div>



        </>
    );
};

export default Blog1;
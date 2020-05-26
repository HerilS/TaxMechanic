import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>The Tax Gap- and how it relates to you</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 22, 2019" title="The Tax Gap- and how it relates to you" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            As a leading tax consultant in Canada, I deal with the tax gap in some way every single day. And if you’re on our website looking for help, it could mean you’re floundering right in that opening.

            So just what is the tax gap? It’s the difference between the total amount of taxes owed to the government, and the taxes that are actually paid, collected and received.
            </p>
            <span>What Creates The Tax Gap?</span>
            <p>Many things.  Tax evasion and fraud are definitely a part of it – but regular late-paying taxpayers contribute to this gap too. The gap is created by actions both intentional and unintentional. That includes overstating deductions and understating income, but also honest mistakes in filing and payment obligations, or a plain inability to comply due to illness or financial hardship.</p>
            <span>Comply, Don’t Lie</span>
            <p>Overall, Canada has quite a high level of compliance, with 93% of individuals filing their taxes as they should. However, many Canadians default. And the CRA – especially if you try to deal with them on your own –  can be very stern with those ‘naypayers.’ Sometimes they will even go as far as to make a severe example of someone who hasn’t been forthcoming but is now trying to do the right thing.

            Between $800 million and $3 billion in tax revenue is lost annually through offshore avoidance schemes. CRA reports from 2014 indicated figures of $4.9 billion in uncollected GST/HST and $8.7 billion in the domestic underground economy.

            That’s $14.6 billion of lost government revenues, revenue that is used to fund all of our national and provincial programs. It’s no wonder that the Trudeau government is investing serious dough into cracking down on tax delinquents.

            The government committed almost $1 billion in the 2016 budget for investigation and enforcement into closing the tax gap. Their slogan for the crackdown is “better data, better approaches and better results.”

            At the Tax Mechanic, we’re seeing the results of the broadened investigations. The number of clients that come to us after being audited and charged by the CRA is growing exponentially. More houses liened, bank accounts frozen, and wages garnished, and it’ll only get worse. The Trudeau government has pledged even more money this year to increase tax compliance, especially investing into the use of artificial intelligence to make the system more effective- and make it harder for delinquent taxpayers to hide.</p>
            <span>Your Own Personal Tax Gap – And How To Close It</span>
            <p>
            So – what’s your tax gap? Now’s the time to get ahead of the issue before the CRA digs their hands into your file.

            You need a tax expert who will take care of you, and represent you effectively with the CRA. Once you get your tax issues sorted out, returns filed, back taxes paid – and yourself back within the watchful fold of the CRA – you’ll be helping to minimize the tax gap that affects us all.

            Sometimes I come across what I might call a ‘reverse tax gap.’ That’s clients who haven’t filed for many years, only to find out: “Hey – I actually don’t owe any taxes (because I made so little income). And what’s more, I have lots of money coming back from the government!” This kind of good news might be yours, but you’ll never know until you file.

            Whatever your situation is, don’t let the situation get out of control. We can help you close that crucial gap – and get you back to a worry-free life.
            </p>
            <p>
            <span>Contact</span>
            <br/>
            I have successfully filed hundreds of VDP applications with a 100% success rate!
            <br/>
            If you have any questions about the process you can contact;
            <br/><br/>
            Tax Mechanic<br/>
            180 John St<br/>
            Toronto, ON<br/>
            M5T 1X5<br/>
            taxmechanic.ca<br/>
            647-499-5693<br/>
            david@taxmechanic.ca<br/>
            </p>
            </div>
            }/>
        </div>
    )
}

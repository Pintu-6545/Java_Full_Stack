import React from 'react'
import Header from '../Reuse/Header'
import Footer from '../Reuse/Footer'

function Data() {
    return (
        <div>
            < Header />
            <div >
                <h1 className='mx-5 my-4 bg-danger text-light ' style={{ border: "2px solid", textAlign: "center" }}>Pizza Hut</h1>
                <h2 className='text-dark' style={{ marginLeft: "175px", fontWeight: "600" }}>Pizza Hut History </h2>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Pizza_Hut_Athens_OH_USA.JPG/500px-Pizza_Hut_Athens_OH_USA.JPG" style={{ paddingLeft: "550px", marginLeft: "70px" }} alt="" />
                <div className='container my-4'>
                    <p className='text-dark'> <b> Pizza Hut, LLC</b> is an American multinational pizza restaurant chain and international franchise founded in 1958 in Wichita, Kansas, by brothers Dan and Frank Carney. The chain, headquartered in Plano, Texas, operates 19,866 restaurants worldwide as of 2023. While studying at Wichita State University, the Carneys opened their first location, which quickly expanded to six outlets within a year. The brand began franchising in 1959, and its distinctive building style was designed by Chicago architect George Lindstrom in 1963. Pizza Hut experienced significant growth, including the acquisition by PepsiCo in 1977, followed by a spin-off into Tricon Global Restaurants, Inc., later renamed Yum! Brands[5] in 2002, who are the current owners.</p>
                    <p className='text-dark'>Pizza Hut introduced PizzaNet in 1994, an early internet ordering experiment, and continued innovation with offerings like stuffed crust pizza introduced in 1995. Pizza Hut has adapted its model to include various restaurant formats, including the family-style dine-in locations, carry-out, and hybrid locations. It has ventured into international markets, tailoring its menu to local tastes. The brand faced challenges, including the closure of numerous dine-in locations in the US and adjustments to its franchise operations. Despite these hurdles, Pizza Hut remains a significant player in the global fast-food industry, known for its innovative products and marketing strategies.</p>
                </div>
                <div className='container my-4 ' style={{ fontSize: "27px", fontWeight: "600" }}>History
                    <div className='container' style={{ height: "2px", border: "2px solid" }}></div>
                    <p className='text-dark my-2' style={{fontSize:"16px", fontWeight:"500"}}>Pizza Hut was launched on May 31, 1958, by two brothers, Dan and Frank Carney, both Wichita State students, as a single location in Wichita, Kansas. Six months later they opened a second outlet, and within a year they were operating six locations.One early employee was future Pro Football Hall of Fame head coach Bill Parcells, who had worked for the company while a college student and football player at Wichita State University. Parcells was considering a franchise for a career (as well as law school), but instead chose to enter coaching, eventually becoming a head coach in the National Football League.</p>
                    <p className='text-dark my-2' style={{fontSize:"16px", fontWeight:"500"}}>The brothers began franchising in 1959. The iconic Pizza Hut building style was designed in 1963 by Chicago architect George Lindstrom and was implemented in 1969.PepsiCo acquired Pizza Hut in November 1977. On May 30, 1997, PepsiCo spun off Pizza Hut, along with Taco Bell and Kentucky Fried Chicken, into a new company named Tricon Global Restaurants, Inc. The company assumed the name of Yum! Brands on May 22, 2002.The first Pizza Hut restaurant east of the Mississippi River was opened in Athens, Ohio, in 1966 by Lawrence Berberick and Gary Meyers.</p>
                    <p className='text-dark my-2' style={{fontSize:"16px", fontWeight:"500"}}>In the early 1970s, Pizza Hut opened several other chains to diversify its menu. These included the fast-food Mexican eatery Taco Kid; hamburger restaurant Next Door; steakhouse Flaming Steer; and barbecue restaurant Sutphen's. All four ventures were unsuccessful and closed by the end of the decade.In August 1994, Pizza Hut and the Santa Cruz Operation (SCO) announced PizzaNet, a pilot program in the Santa Cruz area that allowed consumers to use their own computer to order pizza delivery from a local Pizza Hut restaurant, with connection being made over the Internet to a central Pizza Hut server in Wichita, Kansas. The PizzaNet application software was developed by SCO's Professional Services group. PizzaNet was based on the first commercially licensed and bundled Internet operating system, SCO Global Access</p>
                    <p className='text-dark my-2' style={{fontSize:"16px", fontWeight:"500"}}>On March 31, 2011, Priszm, owner of Pizza Hut in Canada, went into bankruptcy protection in Ontario and British Columbia.In 2015, the oldest continuously operating Pizza Hut, which was the restaurant located in the Aggieville District of Manhattan, Kansas, closed after having opened as the 8th location in 1960. The company announced a rebrand that began on November 19, 2014, in an effort to increase sales, which had dropped in the previous two years. The menu was expanded to introduce various items such as crust flavors and 11 new specialty pizzas, and the company's employee uniforms were redesigned. In 2017, Pizza Hut was listed by UK-based company Richtopia at number 24 in the list of 200 Most Influential Brands in the World.</p>
                    <p className='text-dark my-2' style={{fontSize:"16px", fontWeight:"500"}}>On June 25, 2019, Pizza Hut announced it was bringing back the logo and the red roof design that was used from 1976 until 1999.On August 7, 2019, Pizza Hut announced its intention to close about 500 of its 7,496 dine-in restaurants in the US, by the middle of 2021.On August 18, 2020, Pizza Hut announced it would be closing up to 300 restaurants after the bankruptcy of NPC International, one of its largest franchisees. In March 2021, Flynn Restaurant Group acquired NPC's 937 Pizza Hut locations.</p>


                </div>
            </div>
            < Footer />
        </div>
    )
}

export default Data

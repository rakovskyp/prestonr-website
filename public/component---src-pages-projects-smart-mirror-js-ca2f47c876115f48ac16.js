(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"756h":function(e,t,a){e.exports=a.p+"static/spraypaint-29aa14ce3daecf8d5e20e852738d3b76.png"},"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),r=a("q1tI"),i=a.n(r),o=a("Wbzz"),l=a("vOnD"),s=a("QSOs");a("8ypT");function c(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    text-decoration: none;\n    text-decoration-color: initial;\n    text-decoration-style: initial;\n"]);return c=function(){return e},e}var m=Object(l.a)((function(e){return i.a.createElement(o.Link,e)}))(c());t.a=function(e){var t=e.children;n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,i.a.createElement(m,null,i.a.createElement("h1",{className:"headerPreston"},"preston"))),i.a.createElement("div",{className:"headerOther"},i.a.createElement(s.a,null)),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},i.a.createElement("main",null,t),i.a.createElement("footer",null," ")))}},F7Q0:function(e,t,a){e.exports=a.p+"static/diagram-e6325f0991c8df8fab2f21f0cce0ec3d.png"},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Preston Rakovsky"}}}}')},RXPE:function(e,t,a){e.exports=a.p+"static/finalprod-33bab1b38bf3c738f38a277ef7dd1705.png"},e0Zo:function(e,t,a){e.exports=a.p+"static/smNewCover-2be9fb830509588b4c806f0192343866.png"},p1Qr:function(e,t,a){e.exports=a.p+"static/smpulledapart-c52d2b80a635d8a3e7d204d781e25eb4.png"},"tpd/":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),o=a("vrFN"),l=a("vOnD"),s=a("Wbzz"),c=a("e0Zo"),m=a.n(c),h=a("p1Qr"),d=a.n(h),u=a("F7Q0"),p=a.n(u),f=a("756h"),g=a.n(f),w=a("RXPE"),E=a.n(w);function y(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  font-size: 16px;\n  padding: 0 15px;\n  float: right;\n  text-align: right;\n  position: relative;\n  text-decoration: none;\n  text-decoration-color: initial;\n  text-decoration-style: initial;\n  color: black;\n  font-family: georgia, serif;\n"]);return y=function(){return e},e}var b=Object(l.a)((function(e){return r.a.createElement(s.Link,e)}))(y());t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Smart Mirror"}),r.a.createElement("div",{className:"fade-in smart-mirror"},r.a.createElement(b,{to:"/code"},r.a.createElement("h4",null,"back")),r.a.createElement("img",{src:m.a}),r.a.createElement("h3",null,"How it works"),r.a.createElement("img",{src:d.a}),r.a.createElement("p",null,"A two-way mirror, commonly known for its use as one-way glass in interrogation rooms, reflects like a normal mirror in the absence of light. However, when white light is pressed directly against the glass, it is able to shine through."),r.a.createElement("p",null,"With this in mind, I developed a software to create the Smart Mirror. Running on a Raspberry Pi, the program displays widgets on a monitor in the form of white text with a black background."),r.a.createElement("p",null,'By holding the monitor up with wood and running the software behind the mirror and frame, I created a "smart" mirror effect.'),r.a.createElement("h3",null,"Design Process"),r.a.createElement("p",null,"I divided the project into four stages:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Design"),r.a.createElement("li",null,"Development"),r.a.createElement("li",null,"Woodwork"),r.a.createElement("li",null,"Integration")),r.a.createElement("h3",null,"1. Design"),r.a.createElement("p",null,"I first had to decide what features I wanted to implement into the Smart Mirror. To do this, I listed things that would make my morning more efficient by having all of the information in one place to reference:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Checking the time"),r.a.createElement("li",null,"Looking at the weather and temperature outside"),r.a.createElement("li",null,"Going through my calendar to see what meetings/events I have for the day")),r.a.createElement("p",null,"The last thing most people can do in the morning is waste time, as they rush to their first class or to catch the train to their commute. Having all of this information accessible at a quick glance streamlines their mornings exponentially."),r.a.createElement("p",null,"Using Photoshop, I designed a general outline of what the software would look like, with a rough idea of how it would work."),r.a.createElement("img",{src:p.a}),r.a.createElement("h3",null,"2. Development"),r.a.createElement("p",null,"Initially, I struggled in deciding whether to develop the software in Java or Javascript. I decided on Javascript because the front end of this application would be more smoothly designed with HTML and CSS in a locally hosted browser. Additionally, the front end would be much easier and more versatile in terms of design."),r.a.createElement("p",null,"The application would run on my Raspberry Pi's Raspbian OS."),r.a.createElement("p",null,"To generate the weather data, I fetch JSON data from a weather API, known as Dark Sky API. In my Javascript code, I parse the JSON data into an invisible table that is displayed on the right side of my mirror."),r.a.createElement("h3",null,"3. Woodwork"),r.a.createElement("p",null,"In order to maintain the mirror look, I had to make two frames: one for the inside and one for the outside"),r.a.createElement("p",null,"The outside frame was the front frame that was visibile to everyone. This was to emulate the actual mirror frame appearance."),r.a.createElement("p",null,"The inside frame was hidden and its purpose was to hold the mirror in place."),r.a.createElement("img",{src:g.a}),r.a.createElement("p",null,"After gluing and nailing the wood together, I spray-painted the frame black, as seen in the above picture."),r.a.createElement("p",null,"I then glued a blackout curtain to the bottom half of the frame to ensure that, in the case of leakage of light from the monitor, the mirror would still remain perfectly reflective."),r.a.createElement("h3",null,"4. Integration"),r.a.createElement("p",null,'In order to bring the "magic" to the mirror, I had to actually install the Raspberry Pi into the mirror.'),r.a.createElement("p",null,"I plugged in the necessary wires and connected everything. However, one issue I ran into was that the Raspberry Pi was very processor dependent, so it would overheat a few minutes after running. To fix this, I installed a heat sinks on the processor."),r.a.createElement("img",{src:E.a}),r.a.createElement("p",null,"Overall, I am thrilled with the end result of the Smart Mirror. I have not experienced any glitches with it, and I use it every day. Additionally, I accomplished all the goals I set out to, namely utilizing my newfound programming skills, following through and sticking with a project to completion, and contributing a great piece of furniture to my college living room!"),r.a.createElement("p",null,"In the future, I would like to consider implementing a motion sensor for the mirror to turn on whenever I walk by. I would also like to possibly integrate the abilities of Amazon Alexa into the Smart Mirror as well.")))}}}]);
//# sourceMappingURL=component---src-pages-projects-smart-mirror-js-ca2f47c876115f48ac16.js.map
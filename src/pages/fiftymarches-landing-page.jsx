import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ActionNetworkWidget } from "../components/action-network-widget.tsx";
import { ProtestMap } from '../components/protest-map';

export default function FiftyMarchesLandingPage() {
  return (
    <main className="min-h-screen text-gray-800 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Hero Section with Background Image */}
      <section
        className="relative p-8 text-center bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./assets/wontbackdown.png')" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-4/5 max-w-[500px] mx-auto text-white py-16 px-4"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 rounded-xl" /> {/* Dark overlay only behind text */}
          <div className="relative"> {/* Wrapper to keep text above overlay */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
              United Against Project 2025
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow">
              When policies are designed to put Americans last, our voices must rise. Join 50 Marches on 2/5/25 to defend liberty, equality, and justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://linktr.ee/NoVoiceUnheard_2025">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-2xl shadow-xl transition-transform transform hover:scale-105"
                >
                  Organize a Protest
                </Button>
              </a>
              <a href="./protest-map">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-2xl shadow-xl transition-transform transform hover:scale-105"
                >
                  Find a Protest Near You
                </Button>
              </a>
              <a href="/resources" rel="noopener noreferrer">
                <Button
                  variant="default"
                  size="lg"
                  className="rounded-2xl shadow-xl transition-transform transform hover:scale-105"
                >
                  Resources
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Find a Protest Near You</h2>
          <ProtestMap className="h-[400px]" showTable={false} />
        </motion.div>
      </section>
      
      {/* Wave divider */}
      <div className="bg-white">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Why We March */}
      <section className="p-8 bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">
              Why We March
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">
                Oppressive Policies: Project 2025 seeks to reform tax policies, restrict reproductive rights, and slash funding for crucial public services.
              </li>
              <li className="mb-2">
                Eroding Liberties: Heightened surveillance and cuts to education and healthcare dismantle the freedoms we cherish.
              </li>
              <li className="mb-2">
                Dividing Communities: By weaponizing institutions and targeting marginalized groups, this agenda isolates and disempowers everyday Americans.
              </li>
            </ul>
            <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic text-base text-gray-700">
              "It is our duty to rise and reclaim the promise of liberty for every American."
            </blockquote>
          </div>
          <div className="md:w-1/2">
            <img
              src="./assets/50_marches.jpg"
              alt="Why We March"
              className="w-1/2 h-auto mx-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
            />
          </div>
        </motion.div>
      </section>

      {/* Wave divider */}
      <div className="bg-blue-50">
        <svg
          className="w-full h-12 text-blue-50"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Plan Your Protest */}
      <section className="bg-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="./assets/planning_protest.webp"
              alt="Plan Your Protest"
              className="w-2/3 h-auto mx-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">
              Plan Your Protest on 2/5/25
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">
                Show Your Defiance: Prepare to confront policies that silence the people.
              </li>
              <li className="mb-2">
                Craft Your Message: Bring signs that boldly declare our fight for equal liberty.
              </li>
              <li className="mb-2">
                Stand United: Whether in person or in solidarity from afar, every voice strengthens our cause.
              </li>
              <li className="mb-2">
                Amplify the Call: Use #50Marches to broadcast our unwavering commitment to justice.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Wave divider */}
      <div className="bg-white">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Host a Protest */}
      <section className="p-8 bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">
              Lead the Change in Your City
            </h2>
            <p className="mb-4 text-lg">
              If the agenda to put Americans last resonates with you, take a stand.
              Organize a protest in your city and demonstrate that grassroots action can defy oppressive policies.
            </p>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">
                Choose a central landmark that amplifies your message.
              </li>
              <li className="mb-2">
                Mobilize your community through social media and local outreach.
              </li>
              <li className="mb-2">
                Organize a peaceful demonstration that exemplifies unity and resolve.
              </li>
            </ul>
            <a 
              href="https://linktr.ee/NoVoiceUnheard_2025"
            >
              <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl shadow-xl px-6 py-2 font-semibold transition-transform transform hover:scale-105">
                Add your local protest!
              </Button>
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="./assets/protect_democracy.webp"
              alt="Host a Protest"
              className="w-2/3 h-auto mx-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
            />
          </div>
        </motion.div>
      </section>

      {/* Wave divider */}
      <div className="bg-blue-50">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>


      {/* Build Networks & Mutual Aid */}
      <section className="bg-white p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2 order-1">
            <img
              src="./assets/stronger_together.webp"
              alt="Mutual Aid"
              className="w-2/3 h-auto mx-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 order-2 mt-4 md:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Keep the Movement Growing</h2>
            <p className="mb-4 text-lg">
              Collaborate with existing groups, churches, community centers, and grassroots networks. Embrace diversity of tactics
              and people to strengthen our movement. Listen, respect differences, and focus on care and support.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Wave divider */}
      <div className="bg-white">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Manifesto Section */}
      <section className="p-8 bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">
              Project 2025: Putting Americans Last
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-lg">
              <li>
                "Reform tax policies by increasing taxes on lower-income groups"
              </li>
              <li>
                "Restrict access to abortion by limiting medication abortion and mail-order pills"
              </li>
              <li>
                "Enhance public safety by increasing police militarization"
              </li>
              <li>
                "Revise environmental policies by rolling back climate change regulations"
              </li>
              <li>
                "Solve staffing shortages by decriminalizing child labor"
              </li>
              <li>
                "Restructure Homeland Security by increasing surveillance on citizens"
              </li>
              <li>
                "Enhance workforce development by reducing funding for public education"
              </li>
              <li>
                "Reduce rights to contraception by excluding emergency contraceptives from insurance"
              </li>
              <li>
                "Promote innovation by reducing regulations on tech companies"
              </li>
              <li>
                "Increase abortion surveillance and data collection"
              </li>
              <li>
                "Limit Social Security disability benefits to reduce costs"
              </li>
              <li>
                "Weaponize institutions of American civil society against citizens deemed 'woke culture warriors'"
              </li>
            </ul>
            <p className="mt-4 text-lg">
              These are just a handful of ways the current administration plans to increase wealth inequality and strip essential freedoms from the American people.
            </p>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">
              Declaration of Equal Liberty
            </h2>
            <p className="mb-4 text-lg">
              We the people reject the agenda proposed by the Heritage Foundation in its publication of Project 2025. Its rhetoric intends to divide, isolate, and alienate our society, as well as dismantle the foundational liberties of our country by attacking our institutions.
            </p>
            <p className="mb-4 text-lg">
              The authors directly assaulted our individual liberties, targeting citizens by race, gender, sexual orientation, economic status, national origin, or by any means they choose. The policies proposed undermine systemic freedoms such as free education, free speech, labor and employment protections, and affordable healthcare.
            </p>
            <p className="mb-4 text-lg">
              The destructive political ideologies of the Foundation's president were made evident in his book, originally titled Dawn's Early Light: Burning Down Washington to Save America (before it was retitled).
            </p>
            <p className="mb-4 text-lg">
              It has not gone unnoticed that this call to burn down American institutions is idolized within its foreword, written by Vice President J.D. Vance. It is in this same spirit of cowardice that "Project 2025" has rebranded itself as "America First"—the plan so divisive that President Trump distanced himself from the former while duplicitously implementing the latter. We the people reject the spirit of this agenda, regardless of its name.
            </p>
            <p className="mb-4 text-lg">
              We reject the obstruction of our rights, whether through manipulation, coercion, or duress. We believe it is our civic duty to defend our freedoms and support each other's equal treatment.
            </p>
            <p className="mb-4 text-lg">
              We believe in change driven by civil and peaceful discourse, in line with our ideology of constructive reform. We place our faith in self-organization at the local level, united by our shared belief in the fundamental rights of the people and our vision to see the original American ideals of liberty, fairness, and equality truly and fully experienced.
            </p>
            <p className="mb-4 text-lg">
              We aspire to return this country to a state of unity through our civil action. We believe states shall organize independently and be bonded in our perseverance for freedom in the true spirit of 1776.
            </p>
            <p className="mb-4 text-lg italic">
              "Congress shall make no law … prohibiting … the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the government for a redress of grievances."
            </p>
            <p className="mb-4 text-lg">
              We the people recognize this First Amendment constitutional right as a call to advocate for our shared liberty. We hold ourselves responsible for the defense of our institutions and communities. In recognition of our duty, we hold the institutions that facilitate our freedom of speech and peaceful assembly in high regard.
            </p>
            <p className="mb-4 text-lg">
              Understanding this as fundamental to a free society, we demand a platform to safely participate in these freedoms. When congregated in protest, it is our expectation that all sides participate in public discourse with civility. Violence is indicative of both civil and institutional degradation; therefore, it is not representative of the people's will.
            </p>
            <p className="mb-4 text-lg">
              In light of our interdependence, we propose temporary postponement when civility is not facilitated, so that such conditions can be negotiated.
            </p>
            <p className="mb-4 text-lg">
              We view protest as a form of negotiation where best practices leave all parties as beneficiaries. Naturally, civil discourse will continue until a satisfactory compromise is met, the condition of which is our unconditional rights. This process preserves the integrity of all those involved.
            </p>
            <p className="mb-4 text-lg">
              Our concern for the integrity of others is equal to that of our own because our pride rests in a society that reflects goodwill. Martin Luther King said, "The arc of the moral universe is long, but it bends towards justice."
            </p>
            <p className="mb-4 text-lg">
              May we embody the essence of justice and pull that arc closer to our country, for there is no freedom in liberty won at the cost of another's oppression.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Wave divider */}
      <div className="bg-blue-50">
        <svg
          className="w-full h-12 text-blue-50"
          viewBox="0 0 1280 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Disclaimer & Safety */}
      <section className="p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">
            Disclaimer & Safety
          </h2>
          <p className="mb-4 text-lg">
            This is an ad hoc, grassroots event—permits may not be possible in some locations. We encourage peaceful demonstration,
            but remind everyone that civil disobedience can involve legal risks. Know your rights. This website serves only as
            a hub of information; we are not responsible for individual actions at any event.
          </p>
        </motion.div>
      </section>
      
      {/* Connect With Us */}
      <section className="p-8 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Connect With Us</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="text-blue-600 hover:underline" href="https://50501movement.carrd.co/">Website</a>
            <a className="text-blue-600 hover:underline" href="mailto:50501movement@gmail.com">Email</a>
            <a className="text-blue-600 hover:underline" href="https://www.instagram.com/50501movement">Instagram</a>
            <a className="text-blue-600 hover:underline" href="https://www.reddit.com/r/50501/">Reddit</a>
            <a className="text-blue-600 hover:underline" href="https://bsky.app/profile/50501movement.bsky.social">Bluesky</a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="mb-2 font-semibold">
            This site is created by activists who support the 50501 movement but who are not the original organizers.
          </p>
          <p className="text-sm mt-2">
            <a href="/resources" className="underline text-white hover:text-blue-200">
              View Resources
            </a>
          </p>
        </div>
      </footer>


    </main>
  );
} 

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { ActionNetworkWidget } from "../components/action-network-widget.tsx";

export default function FiftyMarchesLandingPage() {
  return (
    <main className="min-h-screen text-gray-800 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      {/* Hero Section with Background Image Placeholder */}
      <section
        className="relative p-8 text-center bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('./assets/wontbackdown.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" /> {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-4/5 max-w-[500px] mx-auto text-white py-16 px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
            50 States <br></br>50 Capitals <br></br>50 Marches
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 drop-shadow">
            On 2/5/25, Americans unite to oppose Project 2025—together, we are #50Marches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://actionnetwork.org/events/a6e8df1602414d3f2cee8e93a0e4398398607189/edit"
              rel="noopener noreferrer"
            >
              <Button variant="default" size="lg" className="rounded-2xl shadow-xl transition-transform transform hover:scale-105">
                Host a March
              </Button>
            </a>
            <a
              href="https://actionnetwork.org/event_campaigns/50-marches"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-2xl shadow-xl transition-transform transform hover:scale-105"
              >
                Find a March Near You
            </Button>
            </a>
            <a
              href="https://actionnetwork.org/event_campaigns/50-marches"
              rel="noopener noreferrer"
            >
              <Button
                variant="default"
                size="lg"
                className="rounded-2xl shadow-xl transition-transform transform hover:scale-105"
              >
                Join Our Mailing List
            </Button>
            </a>
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

      {/* Why We March */}
      <section className="p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Why #50Marches?</h2>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">Democracy at Risk: Project 2025 threatens core democratic principles and civil liberties.</li>
              <li className="mb-2">Human Rights & Equity: We stand for marginalized communities, social justice, and equality.</li>
              <li className="mb-2">Environment & Future: Protecting our planet can't wait—Project 2025 puts crucial safeguards in jeopardy.</li>
            </ul>
            <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic text-base text-gray-700">
              "It's up to everyday people to rise up and say, 'Enough.'"
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
      <section className="bg-blue-50 p-8">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Plan Your Protest on 2/5/25</h2>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">Check Local Start Times: Some marches begin early; others gather after work.</li>
              <li className="mb-2">Bring Signs & Wear Blue: Show your solidarity, even if you can't attend in person.</li>
              <li className="mb-2">Stay Non-Violent & Adaptable: Decentralized protests can vary in size—remain flexible and peaceful.</li>
              <li className="mb-2">Share on Social Media: Use #50Marches to connect with others nationwide.</li>
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

      {/* Host a March */}
      <section className="p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Host a #50Marches Event in Your City</h2>
            <p className="mb-4 text-lg">
              Highlight the ad hoc nature of these protests—anyone can step up. You're not a "top-down" leader;
              you're a facilitator who empowers your community.
            </p>
            <ul className="list-disc list-inside text-lg">
              <li className="mb-2">Choose a central location (often your State Capitol) for maximum visibility.</li>
              <li className="mb-2">Spread the word on social media, local bulletin boards, and through Action Network tools.</li>
              <li className="mb-2">Encourage non-violent action, have a basic safety plan, and be ready to adapt.</li>
            </ul>
            <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700 rounded-2xl shadow-xl px-6 py-2 font-semibold transition-transform transform hover:scale-105">
              Sign Up to Host
            </Button>
          </div>
          <div className="md:w-1/2">
            <img
              src="./assets/protect_democracy.webp"
              alt="Host a March"
              className="w-2/3 h-auto mx-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
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

      {/* Action Network Integration */}
      <section className="bg-blue-50 p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Use Action Network to Mobilize</h2>
          <p className="mb-4 text-lg">
            50 Marches uses Action Network as a tool for organizing. If you're building your own movement, we recommend you work with them as well. 
            Action Network is a powerful platform that helps grassroots organizers host events, track RSVPs,
            send emails, and more. It's an essential tool for bringing people together quickly and effectively.
          </p>
          <a href="https://actionnetwork.org/">
          <img
            src="https://actionnetwork.org/user_files/user_files/000/080/214/original/AN_logo_page.png"
            alt="Action Network Placeholder"
            className="mx-auto rounded-2xl shadow-xl max-w-full transform transition-transform hover:scale-105"
          /></a>
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

      {/* Stay Connected */}
      <section className="p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
        <ActionNetworkWidget />
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

      {/* Build Networks & Mutual Aid */}
      <section className="bg-blue-50 p-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2 order-2 md:order-1 mt-4 md:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Keep the Movement Growing</h2>
            <p className="mb-4 text-lg">
              Collaborate with existing groups, churches, community centers, and grassroots networks. Embrace diversity of tactics
              and people to strengthen our movement. Listen, respect differences, and focus on care and support.
            </p>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-2xl font-semibold transition-transform transform hover:scale-105">
              Join Local Groups
            </Button>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <img
              src="./assets/stronger_together.webp"
              alt="Mutual Aid"
              className="w-2/3 h-auto mx-auto rounded-2xl shadow-xl transform transition-transform hover:scale-105"
            />
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

      {/* Disclaimer & Safety Note */}
      <section className="p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Disclaimer & Safety</h2>
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
          <p className="mb-2 font-semibold">Managed by volunteer organizers of #50Marches—working in service to our communities.</p>
        </div>
      </footer>
    </main>
  );
} 

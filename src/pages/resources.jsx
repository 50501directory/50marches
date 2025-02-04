import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import * as XLSX from 'xlsx';
import { Header } from '../components/Header';

export default function ResourcesPage() {
  const [resources, setResources] = useState({
    redCards: [],
    immigrationResources: [],
    lgbtqResources: [],
    reproductiveResources: []
  });
  const [stateLaws, setStateLaws] = useState({});
  const [selectedState, setSelectedState] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Refs for scroll navigation
  const redCardsRef = useRef(null);
  const immigrationRef = useRef(null);
  const stateLawsRef = useRef(null);
  const lgbtqRef = useRef(null);
  const reproductiveRef = useRef(null);
  
  function scrollToSection(ref) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const loadResources = async () => {
    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/1-rraq_sRU6n-rvGj45AxscxouGVcH03efhMQHJYzc6w/export?format=xlsx&gid=2051882056"
      );
      const arrayBuffer = await response.arrayBuffer();

      const workbook = XLSX.read(arrayBuffer, {
        cellStyles: true,
        cellDates: true,
        cellNF: true,
        sheetStubs: true,
      });

      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(firstSheet);

      // Find where state laws section begins
      const stateLawsStartIndex = data.findIndex((row) =>
        Object.values(row).some(
          (val) =>
            val &&
            typeof val === "string" &&
            val.includes("Protester Rights and Laws by state")
        )
      );

      // Process state laws
      const stateLawsData = data.slice(stateLawsStartIndex + 2); // Skip header rows
      const processedStateLaws = {};
      stateLawsData.forEach((row) => {
        if (row["Immigration Resources"]) {
          processedStateLaws[row["Immigration Resources"]] = {
            permitInfo: row[""],
            unlawfulAssembly: row["_1"],
            failureToDisperse: row["_2"],
          };
        }
      });

      setStateLaws(processedStateLaws);
      setLoading(false);
    } catch (error) {
      console.error("Error loading resources:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResources();
  }, []);

  const immigrationResources = [
    {
      title: "Protecting Immigrant Families Toolkit",
      description: "Comprehensive guide for families facing deportation, including legal rights, counseling resources, and support for children and families.",
      link: "https://childrenthriveaction.org/2025/01/protecting-immigrant-families-toolkit/"
    },
    {
      title: "ConsulApp Contigo",
      description: "Official Mexican Government Emergency App providing immediate support for detentions, legal guidance, and 24/7 consular services. Features emergency alerts and direct connection to CIAM (Centro de Información y Asistencia a Personas Mexicanas).",
      link: "https://apps.apple.com/us/app/consulapp-contigo/id6740634286"
    },
    {
      title: "Juntos Seguros - ICE Raid Alerts",
      description: "Real-time nationwide alerts of ICE raids in your area. Platform for anonymously reporting ICE sightings and activity.",
      link: "https://www.juntosseguros.com/"
    },
    {
      title: "National Immigration Legal Services Directory",
      description: "Comprehensive directory of immigration legal service providers across the United States.",
      link: "https://www.immigrationadvocates.org/legaldirectory/"
    },
    {
      title: "Family Preparedness Plan Guide",
      description: "Step-by-step guide for creating a family preparedness plan in case of immigration enforcement actions.",
      link: "https://www.ilrc.org/resources/step-step-family-preparedness-plan"
    },
    {
      title: "Rapid Response Toolkit",
      description: "Resources and guidance for immediate response to immigration enforcement actions.",
      link: "https://www.cliniclegal.org/toolkits/rapid-response-toolkit"
    },
    {
      title: "Supporting Young Children - Separation & Trauma",
      description: "Guidelines for supporting children experiencing family separation and trauma due to immigration enforcement.",
      link: "https://www.zerotothree.org/resource/supporting-young-children-experiencing-separation-and-trauma"
    },
    {
      title: "School Guidance for Immigrant Families",
      description: "Post-election guidance for schools supporting immigrant students and families.",
      link: "https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:c0e2a016-341c-4c13-87bd-b0a5437053b1"
    },
    {
      title: "AAPI Post-Election Resource Guide",
      description: "Comprehensive resource guide for Asian Americans and Pacific Islanders (AAPIs) addressing immigration concerns.",
      link: "https://aapiequityalliance.org/wp-content/uploads/2025/01/AAPI-Equity-Alliance-Post-Election-Resource-Guide_01.23.2025.pdf"
    },
    {
      title: "BAILA Network",
      description: "Benefits Access for Immigrants Los Angeles - Support for accessing benefits and services in the LA area.",
      link: "https://www.bailanetwork.org/"
    },
    {
      title: "California Primary Care Association - Immigrant Resources",
      description: "Healthcare resources and support services for immigrants in California.",
      link: "https://www.cpca.org/CPCA/CPCA/Health_Center_Resources/IMMIGRANT_RESOURCES/CPCA/HEALTH_CENTER_RESOURCES/Immigration_Resources.aspx"
    }
  ];

  const filteredResources = searchTerm
    ? immigrationResources.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : immigrationResources;

  return (
    <>
      <Header />
      <main className="min-h-screen text-gray-800 bg-gradient-to-br from-white to-blue-50 overflow-hidden">
        {/* Hero Section */}
        <section className="relative p-8 text-center bg-blue-600">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-4/5 max-w-[800px] mx-auto text-white py-16 px-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Resources
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6">
              Access critical information and support services to protect your rights and strengthen our communities.
            </p>
          </motion.div>
        </section>

        {/* Wave divider */}
        <div className="bg-white">
          <svg className="w-full h-12 text-white" viewBox="0 0 1280 40" preserveAspectRatio="none">
            <path d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* New Protester Guide */}
        <section className="bg-blue-50 p-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Important Information for New Protesters</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="mb-4">
                Before attending a protest, it's important to understand both your rights and the potential risks involved. While you have the constitutional right to protest, this doesn't guarantee that law enforcement will respect those rights in the moment. The best way to protect yourself is to be prepared: create a safety plan with a trusted person who isn't attending the protest, memorize important phone numbers including the National Lawyers Guild or legal aid hotline for your area, and be thoughtful about what you bring with you. Don't bring anything you aren't prepared to lose, and consider leaving your primary phone at home or taking digital security measures like disabling biometric unlocking.
              </p>
              
              <p className="mb-4">
                If you interact with law enforcement, remember these key phrases: "Am I free to go?", "I do not consent to this search," and "I am going to remain silent and I want to speak to a lawyer." Police are allowed to lie to you, but it's safer not to lie to them - instead, invoke your right to remain silent. Keep in mind that even if you haven't done anything illegal, resisting arrest can lead to additional charges. If you're arrested, don't discuss your case with anyone except your lawyer, and don't be afraid to ask for medical attention if you need it. Various resources exist to support protesters, including jail support volunteers, bail funds, and legal defense funds - research what's available in your area before attending a protest. For marginalized groups including immigrants, disabled people, and trans people, there may be additional considerations and risks to evaluate when deciding how to participate safely.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation Menu */}
        <div className="sticky top-0 z-50">
          <section className="bg-white/95 backdrop-blur-sm shadow-md border-b border-blue-100">
            <div className="max-w-6xl mx-auto py-3 px-4">
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                <Button 
                  onClick={() => scrollToSection(redCardsRef)}
                  variant="outline"
                  className="text-sm sm:text-base bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-colors"
                >
                  Know Your Rights Cards
                </Button>
                <Button 
                  onClick={() => scrollToSection(immigrationRef)}
                  variant="outline"
                  className="text-sm sm:text-base bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-colors"
                >
                  Immigration Resources
                </Button>
                <Button 
                  onClick={() => scrollToSection(stateLawsRef)}
                  variant="outline"
                  className="text-sm sm:text-base bg-white hover:bg-blue-50 text-blue-600 border-blue-200 transition-colors"
                >
                  Protester Rights by State
                </Button>
                <Button 
                  onClick={() => scrollToSection(reproductiveRef)}
                  variant="outline"
                  className="text-sm sm:text-base bg-white hover:bg-rose-50 text-rose-600 border-rose-200 transition-colors"
                >
                  Reproductive Health
                </Button>
                <Button 
                  onClick={() => scrollToSection(lgbtqRef)}
                  variant="outline"
                  className="text-sm sm:text-base bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 bg-clip-text text-transparent border-red-200 hover:bg-white/10 transition-colors"
                >
                  LGBTQIA+ Resources
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Red Cards Section */}
        <section className="p-8 bg-white" ref={redCardsRef} >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Know Your Rights Cards</h2>
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-lg mb-6">
                Red Cards help you assert your constitutional rights during encounters with immigration officers. 
                Select your language below to download the card:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  { lang: 'English', file: 'red_card-self_srv-english.pdf' },
                  { lang: 'Español', file: 'ilrc-red_card_template-spanish-v2.pdf' },
                  { lang: 'العربية', file: 'red_card-arabic.pdf' },
                  { lang: '中文', file: 'red_card-chinese.pdf' },
                  { lang: 'Português', file: 'red_card-portuguese.pdf' },
                  { lang: 'Français', file: 'red_card-french.pdf' },
                  { lang: 'Kreyòl Ayisyen', file: 'red_card-haitian-creole.pdf' },
                  { lang: 'Hmong', file: 'red_card-hmong.pdf' },
                  { lang: '한국어', file: 'red_card-korean.pdf' },
                  { lang: 'Tagalog', file: 'red_card-tagalog.pdf' },
                  { lang: 'Tiếng Việt', file: 'red_card-vietnamese.pdf' },
                  { lang: 'فارسی', file: 'red_card-farsi.pdf' },
                  { lang: 'ភាសាខ្មែរ', file: 'red_card-khmer.pdf' },
                  { lang: 'پښتو', file: 'red_card-pashto.pdf' },
                  { lang: 'ትግርኛ', file: 'red_card-tigrinya.pdf' },
                  { lang: 'українська мова', file: 'red_card-ukrainian.pdf' },
                  { lang: 'ਪੰਜਾਬੀپنجابی', file: 'red_card-punjabi.pdf' },
                  { lang: 'русский язык', file: 'red_card-russian.pdf' }
                ].map((item, index) => (
                  <motion.div
                    key={item.lang}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={`/assets/${item.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg shadow-md hover:shadow-lg transition-all"
                      >
                        {item.lang}
                      </Button>
                    </a>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-600">
                Note: After downloading, print these cards and keep them with you. You have the right to remain silent and 
                to refuse to answer questions about your immigration status.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="p-8 bg-white" ref={immigrationRef} >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Immigration Resources</h2>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="p-8 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {loading ? (
              <div className="text-center py-12">
                <div className="text-2xl text-gray-600">Loading resources...</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredResources.map((resource, index) => {
                  // Build the content of the resource block.
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-blue-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-bold text-blue-800 mb-3">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {resource.description}
                      </p>
                    </motion.div>
                  );

                  // Wrap the content in a clickable anchor if a link is provided.
                  return resource.link ? (
                    <a
                      key={index}
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </section>

        {/* Wave divider */}
        <div className="bg-blue-50">
          <svg className="w-full h-12 text-blue-50" viewBox="0 0 1280 40" preserveAspectRatio="none">
            <path d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* State Laws Section */}
        <section ref={stateLawsRef} className="p-8 bg-blue-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Protester Rights by State</h2>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-lg mb-6">
                Select your state to view specific information about protest permits, unlawful assembly laws, 
                and failure to disperse regulations:
              </p>
              
              {/* State Selection */}
              <select 
                className="w-full p-4 mb-6 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => setSelectedState(e.target.value)}
                value={selectedState}
              >
                <option value="">Select a State</option>
                {[
                  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 
                  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
                  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
                  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
                  'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
                  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
                  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
                  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
                ].map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>

              {/* State Information Display */}
              {selectedState && stateLaws[selectedState] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Permit Information */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">
                      Protest Permit Information
                    </h3>
                    <p className="whitespace-pre-line">
                      {stateLaws[selectedState].permitInfo}
                    </p>
                  </div>

                  {/* Unlawful Assembly */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">
                      Unlawful Assembly Laws
                    </h3>
                    <p>
                      {stateLaws[selectedState].unlawfulAssembly}
                    </p>
                    <a 
                      href={`https://law.justia.com/codes/${selectedState.toLowerCase().replace(' ', '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-2 inline-block"
                    >
                      View Full State Code →
                    </a>
                  </div>

                  {/* Failure to Disperse */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">
                      Failure to Disperse Laws
                    </h3>
                    <p>
                      {stateLaws[selectedState].failureToDisperse}
                    </p>
                  </div>

                  {/* NLG Link */}
                  <div className="mt-4">
                    <a
                      href={`https://www.nlg.org/chapters/${selectedState.toLowerCase().replace(' ', '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Button className="bg-green-600 text-white hover:bg-green-700 rounded-lg">
                        Contact National Lawyers Guild - {selectedState} Chapter
                      </Button>
                    </a>
                  </div>
                </motion.div>
              )}

              {/* Additional Resources */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">
                  Additional Legal Resources
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <a 
                      href="https://www.nlg.org/know-your-rights/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      National Lawyers Guild - Know Your Rights Materials
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.aclu.org/know-your-rights/protesters-rights/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      ACLU Protester Rights Guide
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Wave divider */}
        <div className="bg-white">
          <svg className="w-full h-12 text-white" viewBox="0 0 1280 40" preserveAspectRatio="none">
            <path d="M0,10 C150,20 350,0 600,10 C850,20 1050,0 1280,10 L1280,40 L0,40 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Reproductive Health Section */}
        <section id="reproductive-health" ref={reproductiveRef} className="p-8 bg-white scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6 text-rose-700">
                Reproductive Health Resources
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-400 mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Access to Care */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-rose-800">Access to Care</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://ineedana.com" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-rose-700">I Need an A</h4>
                      <p className="text-gray-600">Comprehensive, regularly updated resource for abortion seekers in the US. Personalized information and verified providers.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.abortionfinder.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-rose-700">U.S. Abortion Clinic Locator</h4>
                      <p className="text-gray-600">Comprehensive directory of verified abortion service providers and assistance resources in the United States.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.plancpills.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-rose-700">Plan C Pills</h4>
                      <p className="text-gray-600">Information about accessing abortion pills by mail, including safety, legality, and how to find verified providers.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Digital Security & Privacy */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-800">Security & Privacy</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://digitaldefensefund.org/ddf-guides/abortion-privacy" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-purple-700">Digital Defense Fund - Privacy Guide</h4>
                      <p className="text-gray-600">Comprehensive guide to protecting your digital privacy when seeking reproductive healthcare.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.eff.org/deeplinks/2022/06/security-and-privacy-tips-people-seeking-abortion" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-purple-700">EFF Security Tips</h4>
                      <p className="text-gray-600">Digital security guidance for protecting your information and privacy.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal Support & Rights */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Legal Support & Rights</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://www.ifwhenhow.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-blue-700">If/When/How Legal Helpline</h4>
                      <p className="text-gray-600">Free and confidential legal help for people seeking self-managed abortion care.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://reproductiverights.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-blue-700">Center for Reproductive Rights</h4>
                      <p className="text-gray-600">Legal advocacy and resources for reproductive rights.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Financial Assistance */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-emerald-800">Financial Assistance</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://abortionfunds.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-emerald-700">National Network of Abortion Funds</h4>
                      <p className="text-gray-600">Directory of funds providing financial assistance for abortion care.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://brigidalliance.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-emerald-700">The Brigid Alliance</h4>
                      <p className="text-gray-600">Travel, accommodation, and logistical support for people seeking abortion care.</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Emergency Resources */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Emergency Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://www.all-options.org/find-support/talkline/" target="_blank" rel="noopener noreferrer" 
                  className="bg-white/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-lg text-amber-700">All-Options Talkline</h4>
                  <p className="text-gray-600">Judgment-free support for people in all pregnancy situations.</p>
                  <p className="mt-2 font-bold text-amber-600">1-888-493-0092</p>
                </a>
                <a href="https://www.mahotline.org/" target="_blank" rel="noopener noreferrer"
                  className="bg-white/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-lg text-amber-700">M+A Hotline</h4>
                  <p className="text-gray-600">Medical questions about self-managed abortion.</p>
                  <p className="mt-2 font-bold text-amber-600">1-833-246-2632</p>
                </a>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
              <p className="font-semibold mb-2">🔒 Privacy Notice:</p>
              <p>Be aware that your browsing history and search data can be sensitive information. Consider using private browsing mode and a VPN when accessing these resources. For additional privacy, visit the Digital Defense Fund guide above.</p>
            </div>
          </motion.div>
        </section>

        {/* LGBTQIA+ Resources Section */}
        <section id="lgbtq" ref={lgbtqRef} className="p-8 bg-white scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 via-yellow-500 to-violet-500 inline-block text-transparent bg-clip-text">
                LGBTQIA+ Resources
              </h2>
              <div className="flex justify-center gap-4 mb-6">
                {/* Pride Flag */}
                <svg className="w-12 h-8" viewBox="0 0 36 24">
                  <rect width="36" height="4" y="0" fill="#FF0018"/>
                  <rect width="36" height="4" y="4" fill="#FFA52C"/>
                  <rect width="36" height="4" y="8" fill="#FFFF41"/>
                  <rect width="36" height="4" y="12" fill="#008018"/>
                  <rect width="36" height="4" y="16" fill="#0000F9"/>
                  <rect width="36" height="4" y="20" fill="#86007D"/>
                </svg>
                {/* Trans Flag */}
                <svg className="w-12 h-8" viewBox="0 0 36 24">
                  <rect width="36" height="4.8" y="0" fill="#55CDFC"/>
                  <rect width="36" height="4.8" y="4.8" fill="#F7A8B8"/>
                  <rect width="36" height="4.8" y="9.6" fill="#FFFFFF"/>
                  <rect width="36" height="4.8" y="14.4" fill="#F7A8B8"/>
                  <rect width="36" height="4.8" y="19.2" fill="#55CDFC"/>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Health & Support */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-800">Health & Support Services</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://transhealthproject.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-red-700">Trans Health Project</h4>
                      <p className="text-gray-600">Network of attorneys challenging healthcare exclusions, national helpline, and education for providers.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thetrevorproject.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-red-700">The Trevor Project</h4>
                      <p className="text-gray-600">Crisis intervention and suicide prevention services for LGBTQ young people.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.sageusa.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-red-700">SAGE - Services & Advocacy for LGBTQ Elders</h4>
                      <p className="text-gray-600">Housing, community care, hotlines, education and training services for LGBTQ elders.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Advocacy */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-800">Legal Rights & Advocacy</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://www.lambdalegal.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-orange-700">Lambda Legal</h4>
                      <p className="text-gray-600">Free legal representation and policy work for the LGBTQ+ community.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.aclu.org/issues/lgbtq-rights" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-orange-700">ACLU Transgender Rights</h4>
                      <p className="text-gray-600">Legal representation and policy work focused on transgender rights.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nclrights.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-orange-700">National Center for Lesbian Rights</h4>
                      <p className="text-gray-600">Comprehensive legal services covering employment, housing, sports, healthcare, and more.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Community & Education */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-800">Community & Education</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://www.campuspride.org/index" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-green-700">Campus Pride Index</h4>
                      <p className="text-gray-600">Creating safer, more LGBTQ-friendly learning environments at colleges.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pointfoundation.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-green-700">Point Foundation</h4>
                      <p className="text-gray-600">Financial support and mentoring for LGBTQ college students.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://transathlete.com" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-green-700">Trans Athlete</h4>
                      <p className="text-gray-600">Resources for trans inclusion in athletics at various levels.</p>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Organizations & Advocacy */}
              <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Organizations & Movement Building</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="https://www.equalityfederation.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-blue-700">Equality Federation</h4>
                      <p className="text-gray-600">Collaborative work on workplace fairness, family recognition, and policy reform.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thetaskforce.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-blue-700">The National LGBT Task Force</h4>
                      <p className="text-gray-600">Progressive racial, economic, and social justice organization.</p>
                    </a>
                  </li>
                  <li>
                    <a href="https://victoryinstitute.org" target="_blank" rel="noopener noreferrer" className="block">
                      <h4 className="font-semibold text-lg text-blue-700">LGBTQ Victory Fund</h4>
                      <p className="text-gray-600">Supporting pro-equality LGBTQ+ candidates at all levels of government.</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Crisis Hotlines & Immediate Support */}
            <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-800">Crisis Hotlines & Immediate Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a href="https://www.glbthotline.org" target="_blank" rel="noopener noreferrer" 
                  className="bg-white/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-lg text-purple-700">LGBT National Coming Out Hotline</h4>
                  <p className="text-gray-600">Peer support staffed by trained LGBTQIA+ identified community members.</p>
                  <p className="mt-2 font-bold text-purple-600">1-888-843-4564</p>
                </a>
                <a href="https://avp.org" target="_blank" rel="noopener noreferrer"
                  className="bg-white/50 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-semibold text-lg text-purple-700">Anti-Violence Project</h4>
                  <p className="text-gray-600">24/7 English/Spanish hotline for LGBTQ+ experiencing violence.</p>
                  <p className="mt-2 font-bold text-purple-600">212-714-1141</p>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="p-8 bg-blue-50">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Need Additional Help?
            </h2>
            <p className="text-lg mb-6">
              If you can't find what you're looking for or need immediate assistance,
              please reach out to our support team.
            </p>
            <a
              href="mailto:50501movement@gmail.com"
              className="inline-block"
            >
              <Button className="bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
                Contact Support
              </Button>
            </a>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-600 text-white py-6 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <p className="mb-2 font-semibold">
              This resources page is maintained by volunteers. Information may change - please verify details independently.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
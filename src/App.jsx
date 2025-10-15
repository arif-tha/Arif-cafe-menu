import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen";
import Navbar from "./components/Navbar";
import CategoryTabs from "./components/CategoryTabs";
import MenuCard from "./components/MenuCard";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import menu from "./data/menu";

export default function App() {
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [active, setActive] = useState("Drinks");

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#00c6ff] text-white">
      {/* Welcome Screen */}
      {!welcomeDone && <WelcomeScreen onFinish={() => setWelcomeDone(true)} />}

      {/* Actual Content */}
      {welcomeDone && (
        <>
          <div className="max-w-6xl mx-auto px-4 py-6">
            {/* Navbar */}
            <div className="flex items-center justify-between mb-6">
              <Navbar title="Ashif’s Café" />
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl font-extrabold tracking-tight"
            >
              Menu
            </motion.h1>

            {/* Category Tabs */}
            <div className="mt-6">
              <CategoryTabs
                tabs={Object.keys(menu)}
                active={active}
                onChange={setActive}
              />
            </div>

            {/* Horizontal Scroll Menu */}
            <div className="overflow-x-auto mt-6">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex gap-4 sm:gap-6 px-1 sm:px-2"
              >
                {menu[active]?.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                    className="min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] flex-shrink-0"
                  >
                    <MenuCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* QR Code Section */}
            <div className="mt-10">
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
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

            {/* Menu Items */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
              >
                {menu[active]?.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                  >
                    <MenuCard {...item} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* QR Code Section */}
            <div className="mt-10">
              {/* You can add QRCodeSection here if needed */}
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
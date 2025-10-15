import { motion } from "framer-motion";
import MenuCard from "./MenuCard";
import menu from "../data/menu";

export default function HomePage() {
  const categories = Object.keys(menu);
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {categories.map((category) => (
        <motion.section
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {category}
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {menu[category].map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
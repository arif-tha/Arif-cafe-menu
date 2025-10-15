const tabs = ["Starters", "Mains", "Desserts", "Drinks", "Specials"];

export default function CategoryTabs({ active, onChange }) {
  return (
    <div className="sticky top-0 z-10 bg-gradient-to-br from-[#1f1c2c]/80 to-[#928dab]/80 backdrop-blur-md p-2 rounded-xl">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => onChange(t)}
            className={`px-3 py-2 rounded-lg text-sm transition-colors ${
              active === t
                ? "bg-white/30 text-white shadow"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
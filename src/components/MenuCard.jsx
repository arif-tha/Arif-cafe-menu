export default function MenuCard({ name, price, desc, img }) {
  return (
    <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <img src={img} alt={name} className="w-28 h-28 mx-auto mb-4 rounded-xl object-cover shadow-md" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm opacity-80">{desc}</p>
      <p className="mt-3 font-bold text-lg">{price}</p>
    </div>
  );
}
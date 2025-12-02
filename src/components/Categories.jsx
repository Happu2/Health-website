import WeightLossIcon from "../assets/Weightloss.png";
import NervePainIcon from "../assets/Nervepain.png";
import SkinCareIcon from "../assets/SkinCare.png";
import MensHealthIcon from "../assets/MensHealth.png";
import WomensHealthIcon from "../assets/WomensHealth.png";

const categories = [
  { 
    name: "Weight Loss", 
    desc: "Support metabolism and energy",
    icon: WeightLossIcon,
  },
  { 
    name: "Nerve Pain", 
    desc: "Promote nerve comfort and function",
    icon: NervePainIcon,
  },
  { 
    name: "Skin Care", 
    desc: "Glow from within with clean nutrients",
    icon: SkinCareIcon,
  },
  { 
    name: "Men's Health", 
    desc: "Support vitality, strength, and stamina",
    icon: MensHealthIcon,
  },
  { 
    name: "Women's Health", 
    desc: "Balance hormones and enhance wellness",
    icon: WomensHealthIcon,
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-12">
          Nutrition Solutions 
          <br />
          <span className="whitespace-nowrap">
            for Your Complete Well-Being
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map(cat => (
            <div
              key={cat.name}
              className="rounded-xl pt-5 pb-6 bg-green-50 shadow-lg flex flex-col items-center"
            >
              {/* circular image */}
              <div className="w-20 h-20 mb-3 rounded-full overflow-hidden shadow-sm">
                <img
                  src={cat.icon}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold mb-1">{cat.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{cat.desc}</p>

              <button className="mt-auto bg-[#2267e3] text-white px-6 py-2 rounded-full hover:bg-[#1d54b8] transition font-medium">
                Buy now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

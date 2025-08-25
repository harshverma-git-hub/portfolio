import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import S1 from "./Assets/S1.jpg";
import S2 from "./Assets/s2.jpg";
import S3 from "./Assets/s3.jpg";
import V1 from "./Assets/Republic Day.mp4";
import V2 from "./Assets/Raguveera.mp4";
import V3 from "./Assets/AQNJU8NBGiNTQ4Hwb_xlEInw81QwQPct4TM9KleAgf2vfviizBFaLt41SX5nQpyR3_VRcKm4lT1BB1Dc_5a0Fr2mOkPkRpyszBMZkcc.mp4";

export default function Hobbies() {
  const hobbies = [
    {
  title: "🎥 YouTube Videos",
  cards: [
    { title: "Yaar Mod Do || Cover Song ", youtube: "https://www.youtube.com/embed/oJ73Qz6n_vI" },
    { title: "Yeh No. 1 Yaari Hai || Cover Song", youtube: "https://www.youtube.com/embed/BqSaYUYrVFA" },
    { title: "Promo || Yaar Mod Do || Cover Song ) ", youtube: "https://www.youtube.com/embed/1tEyu0XFCS4" },
  ],
},
    {
      title: "✏️ Sketches",
      cards: [
        { title: "Portrait (Me)", img: S1 },
        { title: "Abstract Art", img: S2 },
        { title: "Virat Kohli", img: S3 },
      ],
    },
    {
      title: "🎸 Guitar",
      cards: [
        { title: "Republic Day", video: V1 },
        { title: "Raguveera", video: V2 },
        { title: "Dil Diyan Gallan", video: V3 },
      ],
    },
  ];

  return (
    <section id="hobbies" className="py-20 bg-gray-950 text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">🎨 My Hobbies</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className="w-full"
        >
          {hobbies.map((hobby, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 bg-gray-900 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-semibold mb-8">{hobby.title}</h3>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hobby.cards.map((card, i) => (
                    <div
                      key={i}
                      className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition transform"
                    >
                      {/* Guitar Videos (Local) */}
                      {card.video && (
                        <video
                          controls
                          className="w-full h-[350px] object-cover rounded-t-xl"
                        >
                          <source src={card.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}

                      {/* Sketch Images */}
                      {card.img && (
                        <img
                          src={card.img}
                          alt={card.title}
                          className="h-64 w-full object-cover rounded-t-xl"
                        />
                      )}

                      {/* YouTube Embeds */}
                      {card.youtube && (
                        <iframe
                          width="100%"
                          height="250"
                          src={card.youtube}
                          title={card.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-t-xl"
                        ></iframe>
                      )}

                      <div className="p-4">
                        <h4 className="text-lg font-medium">{card.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
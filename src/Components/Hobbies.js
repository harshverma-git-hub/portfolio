import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Hobbies() {
  const hobbies = [
    {
      title: "🎥 YouTube Videos",
      cards: [
        { title: "Yaar Mod Do || Cover Song", youtube: "https://www.youtube.com/embed/oJ73Qz6n_vI" },
        { title: "Yeh No. 1 Yaari Hai || Cover Song", youtube: "https://www.youtube.com/embed/BqSaYUYrVFA" },
        { title: "Promo || Yaar Mod Do || Cover Song", youtube: "https://www.youtube.com/embed/1tEyu0XFCS4" },
      ],
    },
    {
      title: "✏️ Sketches",
      cards: [
        { title: "Portrait (Me)", img: "https://drive.google.com/file/d/1dOPB2UqEYYDobcDLbt09BijVdr7wHkUM/preview" },
        { title: "Abstract Art", img: "https://drive.google.com/file/d/1jFESdWoZfpRlL88i2gYC1C6dKZw846wU/preview" },
        { title: "Virat Kohli", img: "https://drive.google.com/file/d/1g6uSPGxk4AaK71tEmnl3Rv121isXUG9e/preview" },
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
                      {/* Google Drive Video */}
                      {card.video && (
                        <iframe
                          src={card.video}
                          width="100%"
                          height="350"
                          allow="autoplay"
                          title={card.title}
                          className="rounded-t-xl"
                        ></iframe>
                      )}

                      {/* Google Drive Images (as iframe preview) */}
                      {card.img && (
                        <iframe
                          src={card.img}
                          title={card.title}
                          className="w-full h-64 rounded-t-xl"
                          allow="autoplay"
                        ></iframe>
                      )}

                      {/* YouTube Videos */}
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

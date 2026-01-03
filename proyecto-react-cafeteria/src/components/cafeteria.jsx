export function Cafeteria() {
  return (
    <div className="font-poppins bg-[#F5F5F5] text-[#583B1C] overflow-x-hidden">

      {/* ================= HEADER / PORTADA ================= */}
      <header className="bg-[url('/src/assets/images/Inicio/cafe_portada.png')] bg-cover bg-center lg:bg-bottom lg:bg-right">

        {/* NAVBAR */}
        <nav className="
          flex flex-col items-center gap-6 p-7
          lg:flex-row lg:justify-between lg:px-60 lg:py-16
        ">
          <img
            src="/src/assets/icons/Logo_Quedelidia.png"
            alt="Logo"
            className="w-[200px] lg:h-[61px]"
          />

          <ul className="flex flex-col gap-4 items-center lg:flex-row lg:gap-10">
            {["Inicio", "Cafes", "Pasteleria", "Tienda", "Nosotros", "Contacto"].map(item => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white hover:bg-[#FFB2D3] hover:text-[#583B1C] px-2 py-1 rounded-md transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <img
            src="/src/assets/icons/lupita.png"
            alt="Buscar"
            className="w-10 h-10"
          />
        </nav>

        {/* HERO */}
        <section className="
          text-white flex flex-col gap-6
          px-8 py-8
          lg:px-60 lg:pt-10 lg:pb-32
        ">
          <p className="font-semibold text-lg">Bienvenido</p>

          <h1 className="text-[52px] lg:text-[42px] font-bold lg:w-[20ch]">
            Disfruta nuestros cafés de especialidad y pastelería fina
          </h1>

          <p className="leading-relaxed lg:w-[50ch] mt-4">
            ¡Porque te lo mereces!
          </p>

          <button className="
            bg-[#FFB2D3] text-[#583B1C]
            px-10 py-3 rounded-full text-lg
            hover:scale-105 transition
            w-fit
          ">
            Ordena Ahora
          </button>
        </section>
      </header>

      {/* ================= ICONOS ================= */}
      <section className="bg-[#E2D9C8] flex justify-center gap-8 py-8">
        {[
          { img: "cafe_caliente.png", text: "Café Caliente" },
          { img: "cafe_frio.png", text: "Café Frío" },
          { img: "pastel.png", text: "Postre" },
        ].map(item => (
          <div key={item.text} className="flex flex-col items-center p-6">
            <div className="flex flex-col items-center w-[180px] p-4">
              <img
                src={`/src/assets/icons/Cafeteria2/${item.img}`}
                className="w-[61px] h-[61px]"
              />
              <h3 className="mt-2 font-semibold">{item.text}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* ================= CAFÉS ================= */}
      <section className="flex flex-col items-center gap-6 px-8 py-10">
        <h2 className="text-[32px] font-semibold">Cafes</h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          {[
            "Cafe_1.png",
            "Cafe_2.png",
            "Cafe_3.png",
            "Cafe_4.png",
          ].map((img, i) => (
            <div
              key={img}
              className="
                bg-[#E2D9C8] text-[#583B1C]
                w-[260px] rounded-xl p-4
              "
            >
              <img
                src={`/src/assets/images/Tipos_Cafes/${img}`}
                className="h-[35vh] w-full object-cover rounded-xl"
              />
              <h3 className="pt-2 font-semibold">
                {["Capuccino", "Cafe Latte", "Mocaccino", "Flat White"][i]}
              </h3>
              <p className="pt-2 pb-9 text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PASTELERÍA ================= */}
      <section className="flex flex-col items-center gap-6 px-8 py-10">
        <h2 className="text-[32px] font-semibold">Pastelería</h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          {[
            { img: "Clasicas/Torta_Chocolate.jpg", name: "Torta de Chocolate" },
            { img: "Clasicas/Tres_Leches2.jpg", name: "Torta Tres Leches" },
            { img: "Especiales/Torta_Quedelidia.jpg", name: "Torta Quedelidia" },
            { img: "Especiales/Torta-choco-oreo.jpg", name: "Torta Choco-Oreo" },
          ].map(item => (
            <div
              key={item.name}
              className="
                bg-[#E2D9C8] text-[#583B1C]
                w-[260px] rounded-xl p-4
              "
            >
              <img
                src={`/src/assets/images/Tipos_Tortas/${item.img}`}
                className="h-[35vh] w-full object-cover rounded-xl"
              />
              <h3 className="pt-2 font-semibold">{item.name}</h3>
              <p className="pt-2 pb-9 text-sm">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-12">
        <div className="
          h-[40vh]
          bg-[url('/src/assets/images/Seccion_Inferior/Cafeteria1/image 8.png')]
          bg-cover bg-center
          flex flex-col items-center justify-center gap-6
        ">
          <nav className="flex flex-col gap-6 lg:flex-row lg:gap-10">
            {["Inicio", "Cafes", "Pasteleria", "Tienda", "Nosotros", "Contacto"].map(item => (
              <a
                key={item}
                href="#"
                className="hover:bg-[#FFB2D3] px-2 py-1 rounded-md"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            <img src="/src/assets/icons/facebook.svg" className="w-8" />
            <img src="/src/assets/icons/instagram.svg" className="w-8" />
            <img src="/src/assets/icons/tiktok.svg" className="w-8" />
          </div>
        </div>

        <div className="bg-[#121212] text-center py-6">
          <p className="text-white">
            © 2026 <span className="text-[#FFB2D3]">Quedelidia Cafe</span> All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  )
}

import Head from 'next/head'

export default function Home() {
  const menu = [
    { name: 'Egusi Soup 2.5L', price: 150, image: '/egusi.jpg' },
    { name: 'Jollof + Turkey 5L', price: 300, image: '/jollof.jpg' },
    { name: 'Gizdodo 2.5L', price: 120, image: '/gizdodo.jpg' },
    { name: 'Ofada Sauce 2.5L', price: 150, image: '/ofada.jpg' },
    { name: 'Okro Soup 2.5L', price: 150, image: '/okro.jpg' },
    { name: 'Onugbu Soup 2.5L', price: 150, image: '/onugbu.jpg' }
  ];

  return (
    <>
      <Head>
        <title>Nija Cuisine</title>
      </Head>
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-red-600">Nija Cuisine</div>
        <nav className="space-x-4 text-sm text-gray-800">
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#menu" className="hover:text-red-600">Menu</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </nav>
      </header>

      <main className="bg-yellow-50 text-gray-800 font-sans">
        <section className="h-[400px] bg-orange-800 flex items-center justify-center text-white text-4xl font-bold text-center">
          Authentic Nigerian Flavours, Delivered Fresh
        </section>

        <section id="menu" className="p-6">
          <h2 className="text-3xl font-bold text-red-700 mb-6">Our Menu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {menu.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded shadow text-center">
                <img src={item.image} alt={item.name} className="rounded h-40 w-full object-cover mb-2" />
                <h3 className="font-semibold">{item.name}</h3>
                <p className="mb-2">${item.price}</p>
                <a href={`https://wa.me/61451055419?text=Hi%20Nija%20Cuisine!%20I'd%20like%20to%20order:%20${encodeURIComponent(item.name)}`} className="inline-block bg-green-600 text-white px-3 py-1 rounded text-sm">Order via WhatsApp</a>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="bg-gray-900 text-white p-8 text-center mt-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-bold">Naija Cuisine</h3>
            <p>
              <a href="https://www.google.com/maps?q=60+Inge+King+Crescent,+Whitlam,+ACT+2611" target="_blank" rel="noopener noreferrer" className="hover:underline text-red-400">
                60 Inge King Crescent, Whitlam ACT 2611
              </a>
            </p>
            <p>Phone: <a href="tel:+61451055419" className="hover:underline">+61 451 055 419</a></p>
            <p>Email: <a href="mailto:info@naijacuisine.com.au" className="hover:underline">info@naijacuisine.com.au</a></p>
            <p>Instagram: <a href="https://instagram.com/naija.cuisine" target="_blank" className="hover:underline">@naija.cuisine</a></p>
            <p className="text-sm text-gray-400 mt-4">© 2025 Nija Cuisine. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
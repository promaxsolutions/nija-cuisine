export default function Home() {
  const menu = [
    { name: 'Egusi Soup 2.5L', price: 150 },
    { name: 'Jollof + Turkey 5L', price: 300 },
    { name: 'Gizdodo 2.5L', price: 120 }
  ];

  return (
    <main className="bg-yellow-50 min-h-screen p-6 font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Nija Cuisine</h1>
      <p className="mb-6">Authentic Nigerian Flavours Delivered Fresh</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menu.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="mb-2">${item.price}</p>
            <a href={`https://wa.me/61480040117?text=Hi%20Nija%20Cuisine!%20I'd%20like%20to%20order%3A%20${encodeURIComponent(item.name)}`} className="bg-green-600 text-white px-3 py-1 rounded text-sm">Order via WhatsApp</a>
          </div>
        ))}
      </div>
    </main>
  );
}
import { useItems } from "./hooks/useItems";

function App() {
  const {items} = useItems();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">SavvyTech List Management</h1>
      <button className="mb-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
      transition font-bold cursor-pointer">
        + Create Item
      </button>

      <div className="w-full max-w-2xl space-y-4">
        {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
                No items found. Click "Create Item" to get started.
            </p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;

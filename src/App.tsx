import { useState } from "react";
import { useItems } from "./hooks/useItems";
import type { Item } from "./types/item";
import ItemCard from "./components/ItemCard";
import ItemModal from "./components/ItemModal";

function App() {
  const { items, addItem, updateItem, deleteItem } = useItems();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Item | null>(null);

  const openCreateModal = () => {
    setEditItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: Item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (title: string, subtitle: string) => {
    if (editItem) {
      updateItem(editItem.id, title, subtitle);
    } else {
      addItem(title, subtitle);
    }
    closeModal();
  };

  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      deleteItem(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        SavvyTech List Management
      </h1>
      <button
        onClick={openCreateModal}
        className="mb-6 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 
      transition font-bold cursor-pointer"
      >
        + Create Item
      </button>

      <div className="w-full max-w-2xl space-y-4">
        {items.length > 0 ? (
          items.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              onEdit={() => openEditModal(item)}
              onDelete={() => handleDelete(item.id)}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No items yet. Click “Create Item” to get started.
          </p>
        )}
      </div>
      <ItemModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        defaultValues={editItem || undefined}
      />
    </div>
  );
}

export default App;

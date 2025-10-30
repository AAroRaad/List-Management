import type { Item } from "../types/item";

interface ItemCardProps {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

const ItemCard = ({ item, onEdit, onDelete }: ItemCardProps) => {
  return (
    <div className="flex justify-between items-center border p-4 rounded-lg shadow-sm hover:shadow-ms transition">
      <div>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-gray-600">{item.subtitle}</p>
        <small className="text-gray-400 text-xl">
          Created: {item.createdAt}
        </small>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item)}
          className="px-3 py-1 bg-yellow-400 text-white rounded-md hover:bg-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-yellow-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

import type { Item } from "../types/item";

interface ItemCardProps {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

const ItemCard = ({ item, onEdit, onDelete }: ItemCardProps) => {
  return (
    <div className="flex justify-between items-center border border-gray-200 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div>
        <h3 className="font-semibold text-xl">{item.title}</h3>
        <p className="text-gray-600">{item.subtitle}</p>
        <small className="text-gray-400 text-lg">
          Created: {item.createdAt}
        </small>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

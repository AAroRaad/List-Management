import { useState } from "react";
import type { Item } from "../types/item";
import { v4 as uuidv4 } from "uuid";

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (title: string, subtitle: string) => {
    const newItem: Item = {
      id: uuidv4(),
      title,
      subtitle,
      createdAt: new Date().toLocaleString(),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id: string, title: string, subtitle: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title, subtitle } : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { items, addItem, updateItem, deleteItem };
};

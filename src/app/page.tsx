"use client";
import FruitItem from "@/components/FruitItem";
import { Card } from "@mui/material";
import { useRef, useState } from "react";

type Item = {
  id: string;
  label: string;
  type: "fruit" | "vegetable";
};

export default function Home() {
  const initialItems: Item[] = [
    { id: "1", label: "Apple", type: "fruit" },
    { id: "2", label: "Carrot", type: "vegetable" },
    { id: "3", label: "Banana", type: "fruit" },
    { id: "4", label: "Broccoli", type: "vegetable" },
  ];

  const [mainList, setMainList] = useState<Item[]>(initialItems);
  const [fruitColumn, setFruitColumn] = useState<Item[]>([]);
  const [vegColumn, setVegColumn] = useState<Item[]>([]);
  const timeouts = useRef<Record<string, NodeJS.Timeout>>({});

  const moveToColumn = (item: Item) => {
    setMainList((prev) => prev.filter((i) => i.id !== item.id));

    if (item.type === "fruit") {
      setFruitColumn((prev) => [...prev, item]);
    } else {
      setVegColumn((prev) => [...prev, item]);
    }

    const timeout = setTimeout(() => {
      if (item.type === "fruit") {
        setFruitColumn((prev) => prev.filter((i) => i.id !== item.id));
      } else {
        setVegColumn((prev) => prev.filter((i) => i.id !== item.id));
      }
      setMainList((prev) => [...prev, item]);
    }, 5000);

    timeouts.current[item.id] = timeout;
  };

  const returnToMainList = (item: Item) => {
    if (timeouts.current[item.id]) {
      clearTimeout(timeouts.current[item.id]);
      delete timeouts.current[item.id];
    }

    if (item.type === "fruit") {
      setFruitColumn((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setVegColumn((prev) => prev.filter((i) => i.id !== item.id));
    }

    setMainList((prev) => [...prev, item]);
  };

  return (
    <main className="min-h-screen p-8 bg-red/100">
      <h1 className="text-2xl font-bold mb-4 text-purple-100">Auto Come back to main list. </h1>
      <div className="grid grid-cols-3 gap-8">
        <Card className="p-6 bg-purple-100 shadow-lg h-[300px]">
          <h2 className="text-xl text-purple-600 font-semibold mb-4">Main List</h2>

          <div className="space-y-2">
            {mainList.map((item) => (
              <FruitItem key={item.id} label={item.label} onClick={() => moveToColumn(item)} />
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-purple-100 shadow-lg h-[300px]">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">Fruits</h2>
          <div className="space-y-2">
            {fruitColumn.map((item) => (
              <FruitItem key={item.id} label={item.label} onClick={() => returnToMainList(item)} />
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-purple-100 shadow-lg h-[300px]">
          <h2 className="text-xl font-semibold mb-4 text-purple-600">Vegetables</h2>
          <div className="space-y-2">
            {vegColumn.map((item) => (
              <FruitItem key={item.id} label={item.label} onClick={() => returnToMainList(item)} />
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}

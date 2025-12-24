import { cn } from "@/lib/utils";

interface SidebarProps {
  activePage: string;
}

const menuItems = [
  { id: "overview", label: "Обзор" },
  { id: "ppe", label: "СИЗ и зоны" },
  { id: "cargo", label: "Груз" },
  { id: "loading", label: "Загрузка" },
  { id: "reports", label: "Отчёты" },
  { id: "events", label: "События" },
];

export default function Sidebar({ activePage }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-900">Мониторинг</h1>
        <button className="mt-4 w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium text-gray-700">
          Площадка №1
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={cn(
              "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
              activePage === item.id
                ? "bg-gray-100 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

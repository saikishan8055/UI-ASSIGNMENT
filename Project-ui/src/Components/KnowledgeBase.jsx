import React, { useState, useEffect } from "react";
import CreateButton from "./Button";
import { Search, X, MoreVertical } from "lucide-react";

const initialDB = [];

const KnowledgeBase = () => {
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);
  const [rowsCount, setRowsCount] = useState(0);
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem("knowledgeBase");
    return storedData ? JSON.parse(storedData) : [];
  });
  useEffect(() => {
    localStorage.setItem("knowledgeBase", JSON.stringify(data));
  }, [data]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    vector: "Qdrant",
    model: "text-embedding-ada-002",
    status: "Active",
  });

  const handleCreate = () => {
    if (!form.name) return alert("Name is required");

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = {
        ...form,
        createdAt: updated[editIndex].createdAt,
      };
      setData(updated);
      setEditIndex(null);
    } else {
      const newItem = {
        ...form,
        createdAt: new Date().toLocaleDateString(),
      };
      setData([...data, newItem]);
    }

    setForm({
      name: "",
      description: "",
      vector: "Qdrant",
      model: "text-embedding-ada-002",
      status: "Active",
    });

    setOpen(false);
  };

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    setMenuOpen(null);
  };

  const handleEdit = (item, index) => {
    setForm(item);
    setEditIndex(index);
    setOpen(true);
    setMenuOpen(null);
  };

  useEffect(() => {
    setRowsCount(data.length);
  }, [data]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Knowledge Base</h1>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="border border-gray-300 rounded-lg pl-9 pr-3 py-2 text-sm w-56 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <CreateButton onClick={() => setOpen(true)} />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredData.length === 0 ? (
          <div className="col-span-full border rounded-xl h-40 flex items-center justify-center text-gray-400">
            No Knowledge Bases Found
          </div>
        ) : (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow-sm hover:shadow-md transition relative"
            >
              <div className="flex justify-between items-start">
                <h2 className="font-semibold text-lg">{item.name}</h2>

                <div className="relative">
                  <button
                    onClick={() =>
                      setMenuOpen(menuOpen === index ? null : index)
                    }
                  >
                    <MoreVertical size={18} />
                  </button>

                  {menuOpen === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-md z-10">
                      <button
                        onClick={() => handleEdit(item, index)}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-sm text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {item.description || "No description"}
              </p>

              <div className="mt-3 text-xs text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">Vector:</span> {item.vector}
                </p>
                <p>
                  <span className="font-medium">Model:</span> {item.model}
                </p>
                <p>
                  <span className="font-medium">Created On:</span>{" "}
                  {item.createdAt}
                </p>
              </div>

              <div className="mt-3">
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">
                  {item.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 text-sm text-gray-500">{rowsCount} rows</div>

      {open && (
        <div className="fixed inset-0 bg-black/30 flex justify-end z-50">
          <div className="w-[420px] h-full bg-white shadow-xl p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                {editIndex !== null ? "Edit" : "Create"} Knowledge Base
              </h2>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-4">
              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg p-2"
              />

              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full border rounded-lg p-2"
              />

              <select
                value={form.vector}
                onChange={(e) => setForm({ ...form, vector: e.target.value })}
                className="w-full border rounded-lg p-2"
              >
                <option>Qdrant</option>
                <option>Pinecone</option>
              </select>

              <select
                value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                className="w-full border rounded-lg p-2"
              >
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-large</option>
              </select>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 border-t bg-white">
              <button
                onClick={handleCreate}
                className="w-full bg-indigo-600 text-white py-2 rounded-lg"
              >
                {editIndex !== null ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;

import { useState } from "react";

export default function AddListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/addlisting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({
          title,
          description,
          price,
          category,
          images: [images],
        }),
      });

      const data = await res.json();
      alert(data.message || "Listing added");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-white text-2xl font-semibold text-center">
          Add New Listing
        </h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
          rows="3"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="books">Books</option>
          <option value="fashion">Fashion</option>
          <option value="furniture">Furniture</option>
          <option value="others">Others</option>
        </select>

        <input
          type="text"
          placeholder="Image URL"
          value={images}
          onChange={(e) => setImages(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />

        <button
          type="submit"
          className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded"
        >
          Add Listing
        </button>
      </form>
    </div>
  );
}

const WelcomePage = () => {
  const fieldOptions = [
    { value: "fruitsAndVegetables", label: "Fruits and Vegetables" },
    { value: "dairyProducts", label: "Dairy Products" },
    { value: "meatAndPoultry", label: "Meat and Poultry" },
    { value: "seafood", label: "Seafood" },
    { value: "grainsAndBeans", label: "Grains and Beans" },
    { value: "cereals", label: "Cereals" },
    { value: "oilAndFats", label: "Oil and Fats" },
    { value: "spicesAndSauces", label: "Spices and Sauces" },
    { value: "beverages", label: "Beverages" },
    { value: "bakeryProducts", label: "Bakery Products" },
    { value: "snacksAndConfectionery", label: "Snacks and Confectionery" },
    { value: "packagedFoods", label: "Packaged Foods" },
    { value: "other", label: "Other" },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Welcome to Safety Flow!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop solution for food safety management.
        </p>

        <div className="flex flex-col p-8 gap-4 w-1/2 mx-auto bg-blue-100 rounded-lg">
          <input
            type="text"
            placeholder="Enter Company Name"
            className="company-input border border-gray-300 rounded px-4 py-2"
          />
          <select
            placeholder="Select Industry"
            className="industry-input border border-gray-300 rounded px-4 py-2"
          >
            <option value="" disabled>
              Select Your Industry
            </option>
            {fieldOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button className="start-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;

const WelcomePage = () => {

  const  fieldOptions = [
    {value: 'fruitsAndVegetables', label: 'Fruits and Vegetables'},
    {value: 'dairyProducts', label: 'Dairy Products'},
    {value: 'meatAndPoultry', label: 'Meat and Poultry'},
    {value: 'seafood', label: 'Seafood'},
    {value: 'grainsAndBeans', label: 'Grains and Beans'},
    {value: 'cereals', label: 'Cereals'},
    {value: 'oilAndFats', label: 'Oil and Fats'},
    {value: 'spicesAndSauces', label: 'Spices and Sauces'},
    {value: 'beverages', label: 'Beverages'},
    {value: 'bakeryProducts', label: 'Bakery Products'},
    {value: 'snacksAndConfectionery', label: 'Snacks and Confectionery'},
    {value: 'packagedFoods', label: 'Packaged Foods'},
    {value: 'other', label: 'Other'}
  ];
  return(
    <div className="welcome-page">
      <h1> Welcome to SafetyFlow</h1>
      <p className="welcome-text">Welcome to SafetyFlow, your AI-powered safety management system. </p>
      <p className='subtitle'>Please enter your company name and select your industry to get started.</p>

    <div style={{display:'flex' , flexDirection:'column', padding:'20px' , gap:'10px', width: '50%', margin:'auto '}}  >
    <input type='text' placeholder="Enter Company Name" className="company-input" />
        <select type='select' placeholder="Select Industry" className="industry-input">
        <option value="" disabled>Select Your Industry</option>
          {fieldOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="start-button">Start</button>
      </div>
      </div>
  )
}

export default WelcomePage;



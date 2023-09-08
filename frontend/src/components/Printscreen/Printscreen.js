import React from "react";

function PrintPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <button onClick={handlePrint}>Print Page</button>
      {/* Your component content here */}
      <h1>Component Content</h1>
      <p>This is the content of your component.</p>
    </div>
  );
}

export default PrintPage;

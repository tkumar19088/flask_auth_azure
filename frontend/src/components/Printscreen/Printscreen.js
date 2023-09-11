import React from "react";
import html2canvas from "html2canvas";

function CaptureScreenshot() {
  const handleCaptureClick = () => {
    // Capture the entire document
    html2canvas(document.documentElement).then((canvas) => {
      // Convert the canvas to a data URL
      const screenshotDataUrl = canvas.toDataURL("image/png");

      // Create a link element to download the screenshot
      const a = document.createElement("a");
      a.href = screenshotDataUrl;
      a.download = "screenshot.png";
      a.click();
    });
  };

  return (
    <div>
      <button onClick={handleCaptureClick}>Capture Screenshot</button>
    </div>
  );
}

export default CaptureScreenshot;

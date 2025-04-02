import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function VRImageOverlayTool() {
  const canvasRef = useRef(null);
  const [baseImage, setBaseImage] = useState(null);
  const [overlayImages, setOverlayImages] = useState([]);
  const [currentOverlay, setCurrentOverlay] = useState(null);
  const [mode, setMode] = useState("edit"); // 'edit' or 'vr-preview'

  useEffect(() => {
    if (!canvasRef.current || !baseImage) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = baseImage.width;
    canvas.height = baseImage.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseImage, 0, 0);
    overlayImages.forEach(({ image, x, y }) => {
      ctx.drawImage(image, x, y);
    });
  }, [baseImage, overlayImages]);

  const handleBaseImageUpload = (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.onload = () => setBaseImage(img);
    img.src = URL.createObjectURL(file);
  };

  const handleOverlayImageUpload = (e) => {
    const file = e.target.files[0];
    const img = new Image();
    img.onload = () => setCurrentOverlay(img);
    img.src = URL.createObjectURL(file);
  };

  const handleCanvasClick = (e) => {
    if (!canvasRef.current || !currentOverlay) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setOverlayImages([...overlayImages, { image: currentOverlay, x, y }]);
  };

  const downloadResult = () => {
    const link = document.createElement("a");
    link.download = "result.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">360° Foto Overlay Tool</h1>
      <div className="space-y-2">
        <input type="file" accept="image/*" onChange={handleBaseImageUpload} />
        <input type="file" accept="image/*" onChange={handleOverlayImageUpload} />
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setMode("edit")} variant={mode === "edit" ? "default" : "outline"}>Bewerken</Button>
        <Button onClick={() => setMode("vr-preview")} variant={mode === "vr-preview" ? "default" : "outline"}>VR Preview</Button>
      </div>

      {mode === "edit" && (
        <>
          <p>Klik op de afbeelding om de overlay te plaatsen.</p>
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="border rounded-xl shadow w-full max-w-full h-auto"
          />
          <Button onClick={downloadResult}>Download resultaat</Button>
        </>
      )}

      {mode === "vr-preview" && baseImage && (
        <iframe
          src={`https://pannellum.org/standalone/?panorama=${baseImage.src}`}
          className="w-full h-[500px] border rounded"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

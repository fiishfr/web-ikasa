import imageCompression from "browser-image-compression";

export async function convertToWebP(file: File): Promise<File> {
  const options = {
    fileType: "image/webp",

    maxSizeMB: 0.35,

    maxWidthOrHeight: 800,

    initialQuality: 0.8,

    useWebWorker: true,
  };

  const compressed = await imageCompression(file, options);

  return new File(
    [compressed],
    file.name.replace(/\.[^/.]+$/, ".webp"),
    {
      type: "image/webp",
      lastModified: Date.now(),
    }
  );
}
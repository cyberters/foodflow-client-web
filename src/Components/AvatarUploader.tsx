import React, { useState } from "react";
import AxiosService from "../Services/AxiosService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

interface AvatarUploaderProps {
  initialImage?: string;
  onChange?: (file: File) => void;
}

const AvatarUploader: React.FC<AvatarUploaderProps> = ({ initialImage, onChange }) => {
  const [image, setImage] = useState<string | undefined>(initialImage)
  const [loading, setLoading] = useState(false)

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) return

        const file = e.target.files[0]
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)

        if (onChange) onChange(file)

        const formData = new FormData()
        formData.append("file", file)

        try {
            setLoading(true);
            const res = await AxiosService.post("/FileRecord/Store", formData, {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log("Upload successful:", res.data);
        } catch (error) {
            console.error("Błąd podczas wysyłania pliku:", error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="relative w-[27vh] h-[27vh] flex justify-center items-center">
      <div
        className="w-full h-full rounded-full border border-black bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        {loading && (
          <div className="w-full h-full flex items-center justify-center bg-white/60 rounded-full">
            <span className="text-sm">Wysyłanie...</span>
          </div>
        )}
      </div>

      <label
        htmlFor="upload-photo"
        className="absolute bottom-2 right-2 bg-white border rounded-full px-3 py-2 shadow cursor-pointer hover:bg-gray-100"
      >
        <FontAwesomeIcon icon={faCamera}/>
      </label>

      <input
        type="file"
        id="upload-photo"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default AvatarUploader;

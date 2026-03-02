import React, { useState } from "react";
import { useEffect } from "react";

export default function App() {
    const [preview, setPreview] = useState(null);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(false);
    // const [uploaded, setUploaded] = useState(null);

    const handleFile = (e) => {
        const selectFile = e.target.files[0];
        setFile(selectFile);

        // setUploaded(null);

        if (selectFile) {
            const urlPreview = URL.createObjectURL(selectFile);
            setPreview(urlPreview);
        }
    };

    const getFile = async () => {
        if (!file) {
            // Lưu vào state lưu vào lỗi
            setError("Vui lòng chọn file");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);
            const response = await fetch(
                "https://api.escuelajs.co/api/v1/files/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            setPreview(data.location);
            setError("Upload thành công");
        } catch {
            setError("Tải ảnh thất bại");
            setPreview("");
        }
        setLoading(false);
    };
    useEffect(() => {
        return () => {
            URL.revokeObjectURL(preview);
        };
    }, [preview]);
    return (
        <div>
            <h1>Upload File</h1>
            <input type="file" onChange={handleFile} />

            <div>
                {preview && <img src={preview} alt="preview" width="200px" />}
            </div>
            <button disabled={isLoading} onClick={getFile}>
                {isLoading ? "Đang tải..." : "Upload"}
            </button>

            {error && <p>{error}</p>}
        </div>
    );
}

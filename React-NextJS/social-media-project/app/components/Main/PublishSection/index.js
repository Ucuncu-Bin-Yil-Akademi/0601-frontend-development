"use client";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { youtubeParser } from "../../../utils/youtubeParser";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";

export default function PublishSection() {
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [youtubeVideoUrl, setYoutubeVideoUrl] = useState({
    isModalVisible: false,
    url: "",
  });

  const handlePublishContent = async () => {
    try {
      const requestFormData = new FormData();
      requestFormData.append("content", content);
      requestFormData.append("embedVideo", youtubeVideoUrl?.url);
      //requestFormData.append("image", selectedImage);
      // artan maliyet sebebiyle görsel yüklemeyi kaldırdım.

      const response = await axios.post(
        "http://localhost:3001/publications/publish",
        requestFormData,
        {
          ContentType: "multipart/form-data",
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("İçerik başarıyla paylaşıldı.");
      } else {
        toast.error(
          "İçerik paylaşılırken bir hata oluştu. Lütfen tekrar deneyin."
        );
      }
    } catch (e) {
      toast.error(
        "İçerik paylaşılırken bir hata oluştu. Lütfen tekrar deneyin."
      );
    }
  };
  return (
    <>
      <div className="bg-gray-100 p-5 border-b ">
        <div className="flex justify-between gap-5 items-center">
          <textarea
            className="border p-3 rounded w-full outline-none resize-none"
            type="text"
            placeholder="Yeni bir şeyler paylaş..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center gap-1 my-3">
          <div className="flex items-center">
            <label htmlFor="image-input">
              <AddPhotoAlternateIcon className="text-gray-500 cursor-pointer" />
            </label>
            <input
              id="image-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                setSelectedImage(selectedFile);
              }}
            />
            <IconButton
              onClick={() => {
                setYoutubeVideoUrl({
                  isModalVisible: true,
                  url: "",
                });
              }}
            >
              <YouTubeIcon />
            </IconButton>
            {(selectedImage?.name || youtubeVideoUrl?.url) && (
              <div className="flex gap-2">
                {selectedImage && (
                  <div className="border border-gray-400 px-2 py-1 rounded bg-dark">
                    <div>
                      <span className="text-sm text-gray-400">example.png</span>
                      <IconButton
                        className="p-0 ms-3 text-gray-400"
                        onClick={() => setSelectedImage(null)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                )}

                {youtubeVideoUrl?.url && (
                  <div className="border border-gray-400 px-2 py-1 rounded bg-dark">
                    <div>
                      <span className="text-sm text-gray-400">
                        <a
                          href={`https://www.youtube.com/watch?v=${youtubeVideoUrl.url}`}
                          target="_blank"
                        >
                          YouTube Video
                        </a>
                      </span>
                      <IconButton
                        className="p-0 ms-3 text-gray-400"
                        onClick={() => {
                          setYoutubeVideoUrl({
                            isModalVisible: false,
                            url: "",
                          });
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            className="bg-primary py-1 px-2 rounded text-light text-md"
            onClick={handlePublishContent}
          >
            Paylaş
          </button>
        </div>
      </div>
      <Dialog
        onClose={() => {
          setYoutubeVideoUrl({
            isModalVisible: false,
            url: "",
          });
        }}
        open={youtubeVideoUrl.isModalVisible}
      >
        <div className="p-5">
          <p className="my-3">
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-primary"
            >
              YouTube
            </a>{" "}
            video URL`ini girerek video paylaşabilirsiniz.{" "}
          </p>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="YouTube Video URL (https://www.youtube.com/...)"
              className="w-full border p-2 rounded"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
            <button
              className="w-full bg-primary py-1 px-2 rounded text-light text-md"
              onClick={() => {
                setYoutubeVideoUrl({
                  isModalVisible: false,
                  url: youtubeParser(videoUrl),
                });
              }}
            >
              Ekle
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

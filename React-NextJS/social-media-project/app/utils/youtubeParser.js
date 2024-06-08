export const youtubeParser = (url) => {
  let videoUrl = url;
  if (videoUrl.includes("youtu.be")) {
    url = url.replace("youtu.be/", "youtube.com/watch?v=");
  }

  const videoId = url.split("v=");
  return videoId[1];
};

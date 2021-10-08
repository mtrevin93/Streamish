const baseUrl = '/api/video';

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const getAllVideosWithComments = () => {
  return fetch(`${baseUrl}/GetWithComments`)
    .then((res) => res.json())
};

export const searchVideos = (query, boolean) => {
  return fetch(`${baseUrl}/search?q=${query}&sortDesc=${boolean}`)
    .then((res) => res.json())
};

export const getVideo = (id) => {
  return fetch(`${baseUrl}/GetWithComments/${id}`).then((res) => res.json());
};

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};
const baseUrl = '/api/UserProfile';

export const getUserProfileWithVideos = (id) => {
    return fetch(`${baseUrl}/GetWithVideos/${id}`).then((res) => res.json());
  };
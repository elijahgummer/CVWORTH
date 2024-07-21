// StarButton.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const repoOwner = 'elijahgummer'; // Replace with your GitHub username
const repoName = 'CVWORTH'; // Replace with your repository name
const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const StarButton: React.FC = () => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [isStarred, setIsStarred] = useState<boolean>(false);

  useEffect(() => {
    // Fetch star count
    const fetchStarCount = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/${repoOwner}/${repoName}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setStarCount(response.data.stargazers_count);
        const starredResponse = await axios.get(
          `https://api.github.com/user/starred/${repoOwner}/${repoName}`,
          {
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        setIsStarred(starredResponse.status === 204);
      } catch (error) {
        console.error('Error fetching star count:', error);
      }
    };

    fetchStarCount();
  }, []);

  const handleStar = async () => {
    try {
      const response = await axios({
        method: isStarred ? 'DELETE' : 'PUT',
        url: `https://api.github.com/user/starred/${repoOwner}/${repoName}`,
        headers: {
          Authorization: `token ${token}`,
        },
      });

      if (response.status === (isStarred ? 204 : 204)) {
        setIsStarred(!isStarred);
        setStarCount((prevCount) => (isStarred ? prevCount! - 1 : prevCount! + 1));
      }
    } catch (error) {
      console.error('Error starring repository:', error);
    }
  };

  return (
    <a href={`https://github.com/${repoOwner}/${repoName}`} target="_blank" rel="noopener noreferrer">
      <button
        onClick={handleStar}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 group bg-gray-950 hover:bg-gray-550 transition-all duration-200 ease-in-out hover:ring-2 hover:ring-offset-2 hover:ring-white"
      >
        <svg
          className="mr-2 text-white"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
        <span className="text-white">{isStarred ? 'Unstar' : 'Star'} on GitHub</span>
        <span className="flex items-center ml-4 group-hover:text-yellow-500 transition-colors duration-200 ease-in-out">
          <svg
            className="text-yellow-500"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span className="text-white ml-2">{starCount !== null ? starCount : 'Loading...'}</span>
        </span>
      </button>
    </a>
  );
};

export default StarButton;

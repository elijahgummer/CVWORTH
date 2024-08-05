import React, { useEffect, useState } from 'react';
import ResumeUploader from './ResumeUploader';
import ResumeWorth from './ResumeWorth';
import styles from '../styles/ResumeAnalyzerApp.module.css';
import { useCompletion } from 'ai/react';
import Confetti from 'react-confetti';

const ResumeAnalyzerApp = () => {
  const [showWorth, setShowWorth] = useState(false);
  const [isLoadingResume, setIsLoadingResume] = useState(false);
  const [resumeText, setResumeText] = useState<string>('');
  const [confettiActive, setConfettiActive] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { completion, isLoading, complete, error } = useCompletion({
    api: '/api/resume',
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const getResumeWorth = async (text: string) => {
      const messageToSend = `RESUME: ${text}\n\n-------\n\n`;
      await complete(messageToSend);
      setShowWorth(true);
      setIsLoadingResume(false);
      setConfettiActive(true); // Trigger confetti when resume processing is complete
    };

    if (resumeText !== '') {
      getResumeWorth(resumeText).then();
    }
  }, [resumeText, complete]);

  return (
    <div className={styles.analyzerWrapper}>
      {!showWorth ? (
        <div className={styles.uploaderWrapper}>
          <ResumeUploader setIsLoading={setIsLoadingResume} setResumeText={setResumeText} />
          {(isLoadingResume || isLoading) &&
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
            </div>}
        </div>
      ) : (
        <ResumeWorth resumeWorth={completion} />
      )}
      {error && <p className={styles.errorMessage}>{error.message}</p>}

      {confettiActive && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          onConfettiComplete={() => setConfettiActive(false)} // Stop confetti after it completes
          style={{ position: 'fixed', top: -300, left: -200, zIndex: 1000 }} // Ensure confetti covers entire viewport
        />
      )}
    </div>
  );
};

export default ResumeAnalyzerApp;

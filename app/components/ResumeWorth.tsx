import React from 'react';
import styles from '../styles/ResumeWorth.module.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SparklesText from "../components/magicui/sparkles-text";


interface ResumeWorthProps {
  resumeWorth: string;
}

const ResumeWorth: React.FC<ResumeWorthProps> = ({ resumeWorth }) => {
  // Extract the estimated worth, explanation, and improvements from the analysis result
  const estimatedWorthMatch = resumeWorth.match(/<Estimated Worth>\$(.+?)<\/Estimated Worth>/);
  const explanationMatch = resumeWorth.match(/<Explanation>([\s\S]*?)<\/Explanation>/);
  const improvementsMatch = resumeWorth.match(/<Improvements>([\s\S]*?)<\/Improvements>/);

  const estimatedWorth = estimatedWorthMatch ? estimatedWorthMatch[1] : 'N/A';
  const explanation = explanationMatch ? explanationMatch[1] : '';
  const improvements = improvementsMatch ? improvementsMatch[1] : '';

  // Extract the list items from the explanation and improvements
  const explanationItems = explanation.match(/<li>(.+?)<\/li>/g);
  const improvementItems = improvements.match(/<li>(.+?)<\/li>/g);

  return (
    <div className={styles.container1}>
      <div className={styles.worth}>$<SparklesText className='md:text-[3rem]' text={estimatedWorth} /></div>
      <p className={styles.subtitle}> 💲Resume worth💲</p>
    
      <div className={styles.content}>
        <div className={styles.column}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle> 🔑 Key Elements</CardTitle>
              <CardDescription> Factors influencing your value</CardDescription>
            </CardHeader>
            <CardContent>
              {explanationItems && (
                <ul className={styles.list}>
                  {explanationItems.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      {item.replace(/<\/?li>/g, '')}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
        <div className={styles.column}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>✨Improvements</CardTitle>
              <CardDescription>Ways to increase your value</CardDescription>
            </CardHeader>
            <CardContent>
              {improvementItems && (
                <ul className={styles.list}>
                  {improvementItems.map((item, index) => (
                    <li key={index} className={styles.listItem}>
                      {item.replace(/<\/?li>/g, '')}
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeWorth;
import React from "react";
import "./CSS/QAPage.css";

const QAPage = () => {
  const questions = [
    {
      id: 1,
      question: "What is the stock market?",
      answer:
        "The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. It allows companies to raise capital and provides investors with opportunities to earn returns on their investments.",
    },
    {
      id: 2,
      question: "How does the stock market work?",
      answer:
        "The stock market operates through exchanges like the NYSE and NASDAQ, where stocks are bought and sold. Prices fluctuate based on supply and demand, company performance, and broader economic factors.",
    },
    {
      id: 3,
      question: "What are stocks and shares?",
      answer:
        "Stocks represent ownership in a company, while shares are units of stock. Owning shares in a company means you have a claim on a portion of its profits and assets.",
    },

    {
      id: 5,
      question: "What is a stock index?",
      answer:
        "A stock index is a measure of the performance of a group of stocks, representing a specific market or sector. Examples include the S&P 500, Dow Jones Industrial Average, and NASDAQ Composite.",
    },
    {
      id: 6,
      question: "What is dollar-cost averaging?",
      answer:
        "Dollar-cost averaging is an investment strategy where you consistently invest a fixed amount of money at regular intervals, regardless of market conditions. This helps reduce the impact of market volatility and lowers the average cost per share over time.",
    },
  ];

  return (
    <div>
      <h1>Q&A Page</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h2>{question.question}</h2>
            <p>{question.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QAPage;

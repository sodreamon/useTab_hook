import React, { useState } from "react";

const useTab = (initialTab, allTab) => {
  if (!allTab || !Array.isArray(allTab)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTab[currentIndex],
    changeItem: setCurrentIndex
  };
};

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2"
  }
];

export default function App() {
  const { currentItem, changeItem } = useTab(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";

const names = [
  "Emma S.", "James T.", "Sophie M.", "Oliver W.", "Charlotte B.",
  "Harry P.", "Amelia K.", "George R.", "Isla F.", "Jack H.",
  "Mia L.", "Noah C.", "Ava D.", "Leo J.", "Grace N.",
  "Oscar V.", "Emily R.", "Alfie B.", "Poppy A.", "Charlie G.",
  "Jessica W.", "Thomas E.", "Lily M.", "William S.", "Ruby H.",
  "Henry T.", "Evie P.", "Jacob L.", "Freya C.", "Daniel K.",
];

function getRandomName() {
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomAmount() {
  return Math.floor(Math.random() * 51) + 50; // 50 to 100
}

function getRandomInterval() {
  return Math.floor(Math.random() * 3001) + 5000; // 5000ms to 8000ms
}

export function NotificationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("John D.");
  const [amount, setAmount] = useState(75);

  const showNotification = useCallback(() => {
    setName(getRandomName());
    setAmount(getRandomAmount());
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }, []);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, [showNotification]);

  useEffect(() => {
    if (!isVisible) {
      const nextTimeout = setTimeout(() => {
        showNotification();
      }, getRandomInterval());

      return () => clearTimeout(nextTimeout);
    }
  }, [isVisible, showNotification]);

  return (
    <div
      className={`fixed bottom-5 left-5 bg-white border-2 border-[#D1011B] rounded-[10px] p-[14px_18px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center gap-3 max-w-[320px] z-[1000] transition-all duration-400 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"
      }`}
    >
      <div className="min-w-[36px] h-9 bg-[#D1011B] rounded-full flex items-center justify-center flex-shrink-0">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[18px] fill-white"
        >
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </div>
      <div>
        <p className="text-[13px] font-medium text-[#111111] leading-[1.4] font-[var(--font-barlow)]">
          <strong className="text-[#D1011B] font-bold">{name}</strong> has successfully claimed{" "}
          <strong className="text-[#D1011B] font-bold">£{amount}</strong> gift card
        </p>
        <div className="text-[11px] text-[#888888] mt-[3px]">Just now</div>
      </div>
    </div>
  );
}
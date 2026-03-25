"use client";

import { NotificationPopup } from "@/components/notification-popup";

export default function Home() {
  return (
    <>
      <div className="bg-white w-full max-w-[460px] min-h-screen">
        {/* Header / Logo */}
        <div className="text-center pt-[30px] px-6 pb-[18px]">
          <div className="font-marker text-[34px] font-extrabold text-[#D1011B] inline-block px-4 py-1.5 leading-none tracking-tight uppercase">
            {"Nando's"}
          </div>
        </div>

        {/* Hero headline */}
        <div className="text-center px-7 pt-1.5 pb-7">
          <h1 className="font-marker text-[38px] font-extrabold text-black leading-[1.08] mb-3 tracking-tight inline-block -rotate-3">
            Claim Your <span className="text-[#D1011B]">£100</span>
            <br />
            {"Nando's"} Gift Card
          </h1>
          <p className="text-sm text-[#777777] tracking-wide">
            Follow these simple steps to get started
          </p>
        </div>

        {/* 4 Steps */}
        <div className="px-5 pb-[26px]">
          <div className="flex items-center gap-3.5 border-2 border-black rounded-[10px] p-4 mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-black text-white font-marker text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              1
            </div>
            <p className="text-sm font-medium text-[#111111] leading-relaxed">
              {"Click on \"Claim Now\""}
            </p>
          </div>
          <div className="flex items-center gap-3.5 border-2 border-black rounded-[10px] p-4 mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-black text-white font-marker text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              2
            </div>
            <p className="text-sm font-medium text-[#111111] leading-relaxed">
              Enter your email and basic info
            </p>
          </div>
          <div className="flex items-center gap-3.5 border-2 border-black rounded-[10px] p-4 mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-black text-white font-marker text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              3
            </div>
            <p className="text-sm font-medium text-[#111111] leading-relaxed">
              Complete 4–5 sponsored deals
            </p>
          </div>
          <div className="flex items-center gap-3.5 border-2 border-black rounded-[10px] p-4 mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-[#D1011B] text-white font-marker text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              4
            </div>
            <p className="text-sm font-medium text-[#111111] leading-relaxed">
              {"Enjoy your £100 Nando's gift card!"}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-5 pt-1 pb-3">
          <a
            href="https://giftclick.org/aff_c?offer_id=1080&aff_id=19791&source=uknan"
            className="block w-full bg-[#D1011B] text-white font-marker text-[17px] font-extrabold tracking-[0.14em] text-center py-5 rounded-[10px] border-[3px] border-[#D1011B] cursor-pointer no-underline transition-colors hover:bg-[#ffcd41] hover:text-black hover:border-[#ffcd41]"
          >
            CLAIM NOW
          </a>
        </div>

        {/* Disclaimer */}
        <p className="text-center px-7 pt-2.5 pb-7 text-[11.5px] text-[#888888] leading-relaxed">
          {"By clicking \"Claim Now\", you agree to complete the"}
          <br />
          required steps to receive your gift card.
        </p>

        <hr className="border-0 border-t-[1.5px] border-[#eeeeee] mx-5" />

        {/* FAQ Section */}
        <div className="px-5 pt-6 pb-5">
          <p className="font-marker text-[22px] font-extrabold text-black mb-4 tracking-tight">
            Frequently Asked Questions
          </p>

          <details>
            <summary>How long do the deals take?</summary>
            <div className="faq-answer">
              Most deals take just a few minutes to complete. Some may take up to 24
              hours to verify after submission.
            </div>
          </details>

          <details>
            <summary>What are deals?</summary>
            <div className="faq-answer">
              Deals are sponsored offers from our partners. They may include free
              trials, short surveys, or simple sign-ups with third-party brands.
            </div>
          </details>

          <details>
            <summary>How many deals do I have to do?</summary>
            <div className="faq-answer">
              You are required to complete between 3 and 5 deals to fully qualify for
              your £100 Nando's gift card reward.
            </div>
          </details>

          <details>
            <summary>When will I receive my reward?</summary>
            <div className="faq-answer">
              Rewards are typically sent within 7–14 business days after all your
              deals have been verified and confirmed.
            </div>
          </details>
        </div>

        {/* Footer links */}
        <div className="border-t-[1.5px] border-[#eeeeee] px-6 pt-5 pb-[30px] flex justify-center gap-5 flex-wrap">
          <a href="#" className="text-[11.5px] text-[#555555] underline font-medium hover:text-[#D1011B]">
            User Agreement
          </a>
          <a href="#" className="text-[11.5px] text-[#555555] underline font-medium hover:text-[#D1011B]">
            Privacy Policy
          </a>
          <a
            href="https://www.nandos.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11.5px] text-[#555555] underline font-medium hover:text-[#D1011B]"
          >
            Nandos UK
          </a>
        </div>
      </div>

      <NotificationPopup />
    </>
  );
}

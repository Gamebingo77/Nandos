import { NotificationPopup } from "@/components/NotificationPopup";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex justify-center min-h-screen bg-[#f5f5f5] font-[var(--font-barlow)]">
      <div className="bg-white w-full max-w-[460px] min-h-screen flex flex-col">

        {/* ── HEADER / LOGO ── */}
        <div className="text-center pt-[30px] px-6 pb-[18px]">
          <div className="font-[var(--font-permanent-marker)] text-[34px] font-extrabold text-[#D1011B] inline-block px-4 py-1.5 leading-none tracking-[-0.02em] uppercase">
            Nando&apos;s
          </div>
        </div>

        {/* ── HERO ── */}
        <div className="text-center pt-1.5 px-7 pb-7">
          <h1 className="transform -rotate-3 inline-block font-[var(--font-permanent-marker)] text-[38px] font-extrabold text-black leading-[1.08] mb-3 tracking-[-0.02em]">
            Claim Your <span className="text-[#D1011B]">£100</span>
            <br />
            Nando&apos;s Gift Card
          </h1>
          <p className="text-[14px] text-[#777777] tracking-[0.01em]">
            Follow these simple steps to get started
          </p>
        </div>

        {/* ── STEPS ── */}
        <div className="px-5 pb-[26px]">
          <div className="flex items-center gap-[14px] border-2 border-black rounded-[10px] p-[15px_16px] mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-black text-white font-[var(--font-permanent-marker)] text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              1
            </div>
            <p className="text-[14px] font-medium text-[#111] leading-[1.4]">
              Click on &quot;Claim Now&quot;
            </p>
          </div>
          <div className="flex items-center gap-[14px] border-2 border-black rounded-[10px] p-[15px_16px] mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-black text-white font-[var(--font-permanent-marker)] text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              2
            </div>
            <p className="text-[14px] font-medium text-[#111] leading-[1.4]">
              Enter your email and basic info
            </p>
          </div>
          <div className="flex items-center gap-[14px] border-2 border-black rounded-[10px] p-[15px_16px] mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-black text-white font-[var(--font-permanent-marker)] text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              3
            </div>
            <p className="text-[14px] font-medium text-[#111] leading-[1.4]">
              Complete 4–5 sponsored deals
            </p>
          </div>
          <div className="flex items-center gap-[14px] border-2 border-black rounded-[10px] p-[15px_16px] mb-2.5 bg-white">
            <div className="min-w-[38px] h-[38px] bg-[#D1011B] text-white font-[var(--font-permanent-marker)] text-[17px] font-extrabold rounded-md flex items-center justify-center shrink-0">
              4
            </div>
            <p className="text-[14px] font-medium text-[#111] leading-[1.4]">
              Enjoy your £100 Nando&apos;s gift card!
            </p>
          </div>
        </div>

        {/* ── CTA BUTTON ── */}
        <div className="pt-1 px-5 pb-3">
          <a
            href="https://giftclick.org/aff_c?offer_id=1080&aff_id=19791&source=uknan"
            className="block w-full bg-[#D1011B] text-white font-[var(--font-permanent-marker)] text-[17px] font-extrabold tracking-[0.14em] text-center p-5 rounded-[10px] border-3 border-[#D1011B] cursor-pointer no-underline transition-colors duration-150 hover:bg-[#FFCD41] hover:text-black hover:border-black"
          >
            CLAIM NOW
          </a>
        </div>

        {/* ── DISCLAIMER ── */}
        <p className="text-center pt-2.5 px-7 pb-7 text-[11.5px] text-[#888] leading-[1.6]">
          By clicking &quot;Claim Now&quot;, you agree to complete the
          <br />
          required steps to receive your gift card.
        </p>

        <hr className="border-none border-t-[1.5px] border-[#eeeeee] mx-5" />

        {/* ── FAQ ── */}
        <div className="pt-6 px-5 pb-5">
          <p className="font-[var(--font-permanent-marker)] text-[22px] font-extrabold text-black mb-4 tracking-[-0.01em]">
            Frequently Asked Questions
          </p>

          <details className="border-2 border-[#e0e0e0] rounded-[10px] mb-2.5 overflow-hidden transition-colors duration-150 group open:border-[#D1011B]">
            <summary className="flex items-center justify-between p-[15px_16px] text-[14px] font-semibold text-[#111] cursor-pointer list-none select-none bg-white [&::-webkit-details-marker]:hidden">
              How long do the deals take?
              <div className="w-2.5 h-2.5 border-r-[2.5px] border-b-[2.5px] border-[#D1011B] transform rotate-45 shrink-0 ml-3 transition-transform duration-200 group-open:-rotate-[135deg]" />
            </summary>
            <div className="px-4 pb-[15px] pt-3 text-[13px] text-[#555] leading-[1.7] border-t-[1.5px] border-[#f0f0f0]">
              Most deals take just a few minutes to complete. Some may take up to 24 hours to verify after submission.
            </div>
          </details>

          <details className="border-2 border-[#e0e0e0] rounded-[10px] mb-2.5 overflow-hidden transition-colors duration-150 group open:border-[#D1011B]">
            <summary className="flex items-center justify-between p-[15px_16px] text-[14px] font-semibold text-[#111] cursor-pointer list-none select-none bg-white [&::-webkit-details-marker]:hidden">
              What are deals?
              <div className="w-2.5 h-2.5 border-r-[2.5px] border-b-[2.5px] border-[#D1011B] transform rotate-45 shrink-0 ml-3 transition-transform duration-200 group-open:-rotate-[135deg]" />
            </summary>
            <div className="px-4 pb-[15px] pt-3 text-[13px] text-[#555] leading-[1.7] border-t-[1.5px] border-[#f0f0f0]">
              Deals are sponsored offers from our partners. They may include free trials, short surveys, or simple sign-ups with third-party brands.
            </div>
          </details>

          <details className="border-2 border-[#e0e0e0] rounded-[10px] mb-2.5 overflow-hidden transition-colors duration-150 group open:border-[#D1011B]">
            <summary className="flex items-center justify-between p-[15px_16px] text-[14px] font-semibold text-[#111] cursor-pointer list-none select-none bg-white [&::-webkit-details-marker]:hidden">
              How many deals do I have to do?
              <div className="w-2.5 h-2.5 border-r-[2.5px] border-b-[2.5px] border-[#D1011B] transform rotate-45 shrink-0 ml-3 transition-transform duration-200 group-open:-rotate-[135deg]" />
            </summary>
            <div className="px-4 pb-[15px] pt-3 text-[13px] text-[#555] leading-[1.7] border-t-[1.5px] border-[#f0f0f0]">
              You are required to complete between 3 and 5 deals to fully qualify for your £100 Nando&apos;s gift card reward.
            </div>
          </details>

          <details className="border-2 border-[#e0e0e0] rounded-[10px] mb-2.5 overflow-hidden transition-colors duration-150 group open:border-[#D1011B]">
            <summary className="flex items-center justify-between p-[15px_16px] text-[14px] font-semibold text-[#111] cursor-pointer list-none select-none bg-white [&::-webkit-details-marker]:hidden">
              When will I receive my reward?
              <div className="w-2.5 h-2.5 border-r-[2.5px] border-b-[2.5px] border-[#D1011B] transform rotate-45 shrink-0 ml-3 transition-transform duration-200 group-open:-rotate-[135deg]" />
            </summary>
            <div className="px-4 pb-[15px] pt-3 text-[13px] text-[#555] leading-[1.7] border-t-[1.5px] border-[#f0f0f0]">
              Rewards are typically sent within 7–14 business days after all your deals have been verified and confirmed.
            </div>
          </details>
        </div>

        {/* ── FOOTER ── */}
        <div className="border-t-[1.5px] border-[#eeeeee] pt-5 px-6 pb-[30px] flex justify-center gap-5 flex-wrap mt-auto">
          <Link href="#" className="text-[11.5px] text-[#555] underline font-medium hover:text-[#D1011B]">
            User Agreement
          </Link>
          <Link href="#" className="text-[11.5px] text-[#555] underline font-medium hover:text-[#D1011B]">
            Privacy Policy
          </Link>
          <a href="https://www.nandos.co.uk" target="_blank" rel="noopener noreferrer" className="text-[11.5px] text-[#555] underline font-medium hover:text-[#D1011B]">
            Nandos UK
          </a>
        </div>
      </div>
      <NotificationPopup />
    </main>
  );
}
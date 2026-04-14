"use client";

import { useActionState } from "react";
import { sendBookingRequest } from "./actions";

export default function BookingForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: { success?: boolean; error?: string } | null, formData: FormData) => {
      return sendBookingRequest(formData);
    },
    null
  );

  if (state?.success) {
    return (
      <div className="text-center py-16">
        <p className="font-[family-name:var(--font-headline)] text-3xl tracking-tight mb-4">Thank you.</p>
        <p className="text-black/50 text-sm">We&rsquo;ve received your booking request and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      {state?.error && (
        <p className="text-red-600 text-sm text-center bg-red-50 py-3 px-4">{state.error}</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Full Name</label>
          <input name="name" required type="text" placeholder="Your name" className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Email</label>
          <input name="email" required type="email" placeholder="you@email.com" className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Phone</label>
          <input name="phone" type="tel" placeholder="073 000 0000" className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/20" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Number of Guests</label>
          <select name="guests" required className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors appearance-none">
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Check-in Date</label>
          <input name="checkin" required type="date" className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Check-out Date</label>
          <input name="checkout" required type="date" className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="uppercase tracking-[0.2em] text-[9px] font-bold opacity-40">Message (Optional)</label>
        <textarea name="message" rows={4} placeholder="Anything we should know about your stay..." className="bg-transparent border-b ghost-border py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder:text-black/20 resize-none" />
      </div>
      <button type="submit" disabled={pending} className="w-full bg-black text-white py-5 uppercase tracking-[0.2em] text-[11px] font-bold hover:bg-[#3c3b3b] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
        {pending ? "Sending…" : "Send Booking Request"}
      </button>
    </form>
  );
}

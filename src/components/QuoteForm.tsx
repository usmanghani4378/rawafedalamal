"use client";

/* Quote request form.
   ✏️ No server needed: on submit it opens WhatsApp (if a number is set in
   src/data/site.ts) with the request pre-typed — or falls back to the
   company email via the visitor's mail app. */
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { WhatsAppGlyph } from "@/components/WhatsAppFloat";
import { materialCategories } from "@/data/services";
import { site } from "@/data/site";

export default function QuoteForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const phone = data.get("phone");
    const material = data.get("material");
    const quantity = data.get("quantity");
    const location = data.get("location");
    const message = data.get("message");

    const text = [
      `Hello ${site.brand.name}, I would like a scrap metal quote.`,
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Material: ${material}`,
      `Quantity (approx): ${quantity}`,
      `Location: ${location}`,
      message ? `Details: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    if (site.contact.whatsapp) {
      window.open(
        `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    } else {
      // fallback: open the visitor's email app
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        `Scrap Quote Request — ${material} (${name})`
      )}&body=${encodeURIComponent(text)}`;
    }
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className="label">
            Your Name *
          </label>
          <input id="qf-name" name="name" required className="input" placeholder="e.g. Ahmed Khan" />
        </div>
        <div>
          <label htmlFor="qf-phone" className="label">
            Phone / WhatsApp *
          </label>
          <input
            id="qf-phone"
            name="phone"
            type="tel"
            required
            className="input"
            placeholder="e.g. 050 123 4567"
          />
        </div>
        <div>
          <label htmlFor="qf-material" className="label">
            Material Type *
          </label>
          <select id="qf-material" name="material" required className="input" defaultValue="">
            <option value="" disabled>
              Select a material…
            </option>
            <optgroup label="Ferrous">
              {materialCategories[0].items.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
              <option value="Mixed ferrous scrap">Mixed ferrous scrap</option>
            </optgroup>
            <optgroup label="Non-Ferrous">
              {materialCategories[1].items.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </optgroup>
            <optgroup label="Other">
              {materialCategories[2].items.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
              <option value="Mixed / not sure">Mixed / not sure</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label htmlFor="qf-quantity" className="label">
            Approx. Quantity *
          </label>
          <input
            id="qf-quantity"
            name="quantity"
            required
            className="input"
            placeholder="e.g. ~500 kg / 1 truckload"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-location" className="label">
            Pickup Location *
          </label>
          <input
            id="qf-location"
            name="location"
            required
            className="input"
            placeholder="Area / city, e.g. Al Quoz, Dubai"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-message" className="label">
            Details (optional)
          </label>
          <textarea
            id="qf-message"
            name="message"
            rows={4}
            className="input"
            placeholder="Describe the scrap, site access, preferred time…"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-6 w-full">
        <Send className="h-4 w-4" /> Request My Quote
      </button>

      {sent && (
        <p className="mt-4 rounded-lg bg-eco/10 px-4 py-3 text-center text-sm font-medium text-eco">
          Almost done — your quote request is ready to send. Just press{" "}
          <strong>send</strong> in the app that opened.
        </p>
      )}

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-steel">
        {site.contact.whatsapp ? (
          <>
            <WhatsAppGlyph className="h-3.5 w-3.5 text-eco" />
            Submitting opens WhatsApp with your details pre-filled — just press send.
          </>
        ) : (
          <>
            <Mail className="h-3.5 w-3.5 text-royal" />
            Submitting opens your email app with the request pre-filled.
          </>
        )}
      </p>
    </form>
  );
}

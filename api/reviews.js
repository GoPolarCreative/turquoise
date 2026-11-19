// Live Google reviews for one client site, served at /api/reviews on Vercel.
// Copied from GoPolarCreative/client-sites _kit/reviews_api.js (ES module version for this Vite repo).
//
// Google's Places API terms do not allow review content to be cached or stored (only the place ID),
// so every call fetches live and responses are marked no-store. The page only calls this when a
// visitor scrolls near the reviews section, which keeps usage, and cost, down.
//
// Needs the GOOGLE_PLACES_KEY environment variable in Vercel (a server key with Places API (New) enabled).
const PLACE_ID = "ChIJT7TYNzsBWYERkeyQQBkURr8"; // Turquoise Plumbing Pty Ltd, 35 Phillip Cres, Barrack Heights
const QUERY = "";
const NAME = "Turquoise Plumbing";

const FIELDS = ["id", "displayName", "rating", "userRatingCount", "reviews", "googleMapsUri"];
const norm = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]/g, "");

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  // Only answer this site's own pages, so the endpoint cannot be used to run up the Google bill.
  const ref = req.headers.referer || req.headers.origin || "";
  const host = req.headers.host || "";
  if (!ref || !host || !ref.includes(host)) return res.status(403).json({ error: "forbidden" });

  const key = process.env.GOOGLE_PLACES_KEY;
  if (!key || (!PLACE_ID && !QUERY)) return res.status(503).json({ error: "not configured" });

  try {
    let place;
    if (PLACE_ID) {
      const r = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}?languageCode=en&regionCode=AU`, {
        headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": FIELDS.join(",") },
      });
      if (!r.ok) return res.status(502).json({ error: `google ${r.status}` });
      place = await r.json();
    } else {
      const r = await fetch("https://places.googleapis.com/v1/places:searchText", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": key, "X-Goog-FieldMask": FIELDS.map((f) => "places." + f).join(",") },
        body: JSON.stringify({ textQuery: QUERY, regionCode: "AU", languageCode: "en", pageSize: 1 }),
      });
      if (!r.ok) return res.status(502).json({ error: `google ${r.status}` });
      place = ((await r.json()).places || [])[0];
      // A text search can return a different business. Only accept a name match.
      if (!place || !norm(place.displayName && place.displayName.text).includes(norm(NAME).slice(0, 12))) {
        return res.status(200).json({ reviews: [] });
      }
    }
    const reviews = (place.reviews || [])
      .filter((v) => (v.text || v.originalText))
      .map((v) => ({
        rating: v.rating,
        text: (v.text || v.originalText).text,
        when: v.relativePublishTimeDescription,
        author: v.authorAttribution && v.authorAttribution.displayName,
        authorUrl: v.authorAttribution && v.authorAttribution.uri,
        photo: v.authorAttribution && v.authorAttribution.photoUri,
      }));
    return res.status(200).json({
      name: place.displayName && place.displayName.text,
      rating: place.rating,
      count: place.userRatingCount,
      url: place.googleMapsUri,
      writeUrl: place.id ? `https://search.google.com/local/writereview?placeid=${place.id}` : null,
      reviews,
    });
  } catch (e) {
    return res.status(502).json({ error: "fetch failed" });
  }
}

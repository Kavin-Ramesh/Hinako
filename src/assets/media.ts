/**
 * Optional showcase film (MP4, WebM, or HLS URL).
 *
 * Add `.env` (or `.env.local`):
 *   VITE_HINAKO_SHOWCASE_VIDEO=/videos/hinako-showcase.mp4
 * Then place the file under `public/videos/`. Leave unset for a soft “coming soon” slot.
 */
export const SHOWCASE_VIDEO_SRC =
  (import.meta.env.VITE_HINAKO_SHOWCASE_VIDEO as string | undefined)?.trim() ||
  "/videos/hinako-showcase.mp4";

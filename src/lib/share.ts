/**
 * Sharing the app itself. On iOS and Android the Web Share API opens the
 * system share sheet, which is how someone actually passes a link on from a
 * phone; everywhere else we fall back to the clipboard.
 */

export type ShareResult = 'shared' | 'copied' | 'failed';

/** The canonical public address, independent of where the app is running. */
export const shareUrl = 'https://linuseklund.github.io/artificial-stocks/';

export async function shareApp(title: string, text: string): Promise<ShareResult> {
  if (typeof navigator !== 'undefined' && 'share' in navigator) {
    try {
      await navigator.share({ title, text, url: shareUrl });
      return 'shared';
    } catch (error) {
      // Dismissing the share sheet rejects with AbortError. That is a choice,
      // not a failure, so don't fall through to copying behind their back.
      if (error instanceof Error && error.name === 'AbortError') return 'failed';
    }
  }

  try {
    await navigator.clipboard.writeText(shareUrl);
    return 'copied';
  } catch {
    return 'failed';
  }
}

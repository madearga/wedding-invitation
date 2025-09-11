# Audio Files

Place your background music files here. Supported formats: MP3, WAV, OGG.

## How to Add Music:

1. Add your audio file to this directory (e.g., `wedding-song.mp3`)
2. Update the configuration in `src/config/config.ts`:
   ```typescript
   export const audioConfig = {
     src: "/audio/wedding-song.mp3", // Update this path
     title: "Your Song Title", // Update this title
     autoplay: true,
     loop: true
   };
   ```

## Notes:
- Files should be optimized for web (reasonable file size)
- Consider copyright when choosing music
- Test autoplay behavior across different browsers
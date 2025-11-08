# 📸 Image Assets Guide

Place your 10 images in this folder (`src/assets/`) with these exact filenames:

## Required Images

### 1. hero.jpg
- **Where**: Hero section (left side with mandala overlay)
- **Suggested**: Company logo with mandala pattern or brand identity visual
- **Dimensions**: 400×400px to 600×600px (square)
- **Alt text**: "Varnan Films"

### 2-4. Storyboard Images (Optional - can reuse others)
- **storyboard1.jpg** - Currently not used (can skip)
- **storyboard2.jpg** - Currently not used (can skip)
- **storyboard3.jpg** - Currently not used (can skip)

### 5. reel.jpg
- **Where**: Highlight Reel section (video thumbnail)
- **Suggested**: Behind-the-scenes footage, filming scene, or showcase moment
- **Dimensions**: 1280×720px (16:9 ratio)
- **Alt text**: "Highlight Reel"

### 6. film.jpg
- **Where**: Film Production service block + Storyboard card
- **Suggested**: Filmmaker with camera, film production scene, or cinema equipment
- **Dimensions**: 800×600px (4:3 ratio)
- **Alt text**: "Film Production"
- **Note**: Shows in polaroid frame

### 7. branding.jpg
- **Where**: Branding service block + Storyboard card
- **Suggested**: Design workspace, brand logos, marketing materials, or creative brainstorming
- **Dimensions**: 800×600px (4:3 ratio)
- **Alt text**: "Branding"
- **Note**: Shows in polaroid frame

### 8. art.jpg
- **Where**: Art Curation service block + Storyboard card
- **Suggested**: Art gallery, cultural event, performance, or curated exhibition
- **Dimensions**: 800×600px (4:3 ratio)
- **Alt text**: "Art Curation"
- **Note**: Shows in polaroid frame

### 9-10. Decorative Mosaics (Optional)
- **mosaic-left.png** - Decorative corner element (not currently used)
- **mosaic-right.png** - Decorative corner element (not currently used)
- **Dimensions**: 200×200px (transparent PNG)
- **Note**: Can be added later for extra decoration

## Image Optimization Tips

### Recommended Formats
- **Photos**: JPG (80-85% quality)
- **Graphics/Logos**: PNG (with transparency if needed)
- **Max file size**: ~200KB per image for fast loading

### Tools
- [TinyPNG](https://tinypng.com/) - Compress images
- [Squoosh](https://squoosh.app/) - Advanced compression
- [BIRME](https://www.birme.net/) - Batch resize

## Current Fallbacks

If images are missing, the app shows SVG placeholders with text labels. This is intentional so you can test the app immediately!

### To test without images:
```bash
npm run dev
```

The app will work perfectly with placeholders until you add real images.

## Image Requirements from Screenshots

Based on your design screenshots:

1. **film.jpg**: Should show a filmmaker/videographer (from screenshot 4 - woman in yellow top with camera)
2. **branding.jpg**: Should show brand/design work (from screenshot 4 - woman in beige blazer at table with branding materials)
3. **art.jpg**: Should show cultural/art event (from screenshot 4 - woman in black blazer at conference/gallery)

These three are the MOST IMPORTANT as they appear in both the storyboard AND service blocks.

---

**Quick Checklist:**
- [ ] film.jpg added
- [ ] branding.jpg added
- [ ] art.jpg added
- [ ] reel.jpg added (optional but recommended)
- [ ] hero.jpg added (optional - mandala shows as fallback)

Once you add the images, refresh your browser and they'll load automatically! 🎉

# Website Design Breakdown

This document breaks down the design of the billyracxx.com website into its finest components, as requested in the project outline.

## User Flow Diagram

```mermaid
graph TD
    A[Homepage] --> B{Main Navigation};
    B --> C[Tour];
    B --> D[Shop];
    B --> E[Music];
    A --> F[Email/Text Subscription];

    D --> G[MADDOG Capsule];
    D --> H[AIMC Capsule];
    G --> I[Blurred Product Page - TBA];
    H --> J[Blurred Product Page - TBA];

    E --> K["Cult Leader" DSP Links];
    E --> L["Alien In My City Album"];
    E --> M["AIMC Music Videos"];

    L --> N[Album/Vinyl Purchase Page];
    M --> O[Video Carousel];
    O --> P[Embedded YouTube Video];```

## Page-by-Page Breakdown

### 1. Main Page

*   **Navigation:**
    *   `TOUR` (Top Left)
    *   `SHOP` (Top Right)
    *   `MUSIC` (Bottom Center)
*   **Content:**
    *   Countdown to next single release (`September 12th`) with blurred cover art.
    *   Countdown to next merch release with a blurred picture of the collection.
    *   Most recent single release with embedded YouTube music video or cover art with links to Spotify and Apple Music.
*   **Footer:**
    *   Email and text subscription forms (Bottom Left).

### 2. Tour Page

*   **Layout:** Single page.
*   **Content:**
    *   Blurred tour graphic.
    *   Large "TOUR TBA" text overlaid on the graphic.
    *   Tour dates (to be added later).

### 3. Shop Page

*   **Layout:** Grid or list of capsules.
*   **Content:**
    *   **MADDOG Capsule:**
        *   Cover photo.
        *   Links to a blurred product page with "TBA" text.
    *   **AIMC Capsule:**
        *   Cover photo.
        *   Links to a blurred product page with "TBA" text.

### 4. Music Page

*   **Layout:** Tabbed navigation.
*   **Tabs:**
    *   **"Cult Leader":**
        *   Links to all DSPs (Spotify, Apple Music, etc.).
        *   Placement photos for Spotify, iTunes, and YouTube with actual links.
    *   **"Alien In My City Album":**
        *   Blurred album front and back covers.
        *   Blurred covers for "MADDOG", "Rather Be Alive", "UPTIGHT", and "SLUT TALK".
        *   Tabs under each cover to purchase the vinyl (links to a blurred purchase page).
        *   Tracklist with clickable links to DSPs.
    *   **"AIMC Music Videos":**
        *   Carousel of music videos.
        *   Clicking a video takes the user to a page with the embedded YouTube video.

## Motion Design

*   **Subtle Animations:** Use subtle animations on hover states and page transitions to create a premium feel.
*   **Loading Screens:** Custom loading screens with the artist's logo or other branding elements.
*   **Parallax Scrolling:** Use parallax scrolling on the main page to create a sense of depth.
*   **Video Backgrounds:** Use video backgrounds where appropriate to create a more immersive experience.
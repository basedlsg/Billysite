# BILLYRACXX Website Test Plan

This document outlines the test plan for the billyracxx.com website to ensure a high-quality, bug-free launch.

## 1. Testing Objectives

*   Ensure all functional requirements outlined in `BILLYRACXX WEBSITE OUTLINE.docx` are met.
*   Verify that the website is visually consistent with the designs in the `design` directory.
*   Confirm that the website is responsive and works flawlessly on all major browsers and devices.
*   Validate that all links and navigation elements work as expected.
*   Ensure that the email and text subscription forms are functional.

## 2. Scope of Testing

### In Scope

*   All pages and features of the website:
    *   Main Page
    *   Tour Page
    *   Shop Page (including product pages)
    *   Music Page (including all sub-pages)
*   Cross-browser compatibility (Chrome, Firefox, Safari, Edge).
*   Responsive testing on various devices (desktops, tablets, and mobile phones).
*   Link validation.
*   Form validation and submission.

### Out of Scope

*   Performance and load testing (to be conducted in a separate phase).
*   Security testing (to be conducted by a specialized team).

## 3. Test Cases

| Test Case ID | Page | Feature | Test Steps | Expected Result | Actual Result | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC-001 | Main Page | Navigation | 1. Click on "TOUR" link. <br> 2. Click on "SHOP" link. <br> 3. Click on "MUSIC" link. | 1. Navigates to tour.html. <br> 2. Navigates to shop.html. <br> 3. Navigates to music.html. | | |
| TC-002 | Main Page | Countdown Timers | 1. Verify that the countdown timers for the single and merch release are displayed correctly. | Timers should be counting down to the correct dates. | | |
| TC-003 | Main Page | Subscription Form | 1. Enter a valid email and phone number. <br> 2. Click "SUBSCRIBE". | Form should submit successfully. | | |
| TC-004 | Tour Page | Content | 1. Verify that the blurred tour graphic and "TOUR TBA" text are displayed. | Content should be displayed as per the design. | | |
| TC-005 | Shop Page | Navigation | 1. Click on "MADDOG CAPSULE". <br> 2. Click on "AIMC CAPSULE". | 1. Navigates to shop/maddog.html. <br> 2. Navigates to shop/aimc.html. | | |
| TC-006 | Shop Page | Product Pages | 1. Verify that the product pages are blurred and display "TBA". | Content should be displayed as per the design. | | |
| TC-007 | Music Page | Navigation | 1. Click on each of the music tabs. | Navigates to the correct sub-page. | | |
| TC-008 | Music Page | "Cult Leader" | 1. Verify that the DSP placement photos are displayed and are clickable. | Photos should be displayed and clickable. | | |
| TC-009 | Music Page | "AIMC Album" | 1. Verify that all album and single covers are displayed and blurred. | Content should be displayed as per the design. | | |
| TC-010 | Music Page | "AIMC Videos" | 1. Verify that the video carousel is displayed. <br> 2. Click on a video. | 1. Carousel should be displayed. <br> 2. Navigates to the correct video page. | | |
| TC-011 | Video Pages | Embedded Video | 1. Verify that the YouTube video is embedded and playable. | Video should be playable. | | |
| TC-012 | All Pages | Responsiveness | 1. View all pages on different screen sizes (desktop, tablet, mobile). | The layout should adapt to the screen size without any issues. | | |

## 4. Testing Schedule

*   **Duration:** 1 Week
*   **Start Date:** [Date]
*   **End Date:** [Date]

## 5. Roles & Responsibilities

*   **QA Lead:** Oversee the entire testing process.
*   **QA Testers:** Execute the test cases and report any bugs.
*   **Developers:** Fix any reported bugs.
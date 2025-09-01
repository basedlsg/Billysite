# Main Page Wireframe

```mermaid
graph TD
    subgraph Header
        A[TOUR]
        B[SHOP]
    end

    subgraph Body
        C[Countdown to Next Single<br/>(Blurred Cover Art)]
        D[Countdown to Next Merch Release<br/>(Blurred Collection Pic)]
        E[Most Recent Single<br/>(Embedded YouTube Video or DSP Links)]
    end

    subgraph Footer
        F[MUSIC]
        G[Email & Text Subscription]
    end

    A -- Navigates to --> Tour_Page
    B -- Navigates to --> Shop_Page
    F -- Navigates to --> Music_Page
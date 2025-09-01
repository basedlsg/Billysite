# Music Page Wireframe

```mermaid
graph TD
    subgraph Header
        A[Back to Main Page]
    end

    subgraph Body
        B["Cult Leader" Tab]
        C["Alien In My City Album" Tab]
        D["AIMC Music Videos" Tab]
    end

    A -- Navigates to --> Main_Page
    B -- Displays --> DSP_Links
    C -- Displays --> Album_Info
    D -- Displays --> Video_Carousel
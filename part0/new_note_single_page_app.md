# Diagram for single page app posting a note

```mermaid
  sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: 201 Created
    
```

(function() {
    'use strict';

    // Create dark mode CSS variables
    const darkModeCSS = `
        :root {
            /* Main theme colors - dark */
            --background: oklch(14.5% 0 0) !important;          /* Dark background */
            --foreground: oklch(90% 0 0) !important;             /* Light text */
            --card: oklch(16% 0 0) !important;                   /* Card backgrounds */
            --card-foreground: oklch(90% 0 0) !important;        /* Card text */
            --popover: oklch(16% 0 0) !important;                /* Popover backgrounds */
            --popover-foreground: oklch(90% 0 0) !important;     /* Popover text */
            --primary: oklch(70% 0.1 260) !important;            /* Primary color (indigo) */
            --primary-foreground: oklch(98.5% 0 0) !important;   /* Primary text */
            --secondary: oklch(22% 0 0) !important;              /* Secondary background */
            --secondary-foreground: oklch(85% 0 0) !important;   /* Secondary text */
            --muted: oklch(20% 0 0) !important;                  /* Muted background */
            --muted-foreground: oklch(65% 0 0) !important;       /* Muted text */
            --accent: oklch(25% 0 0) !important;                 /* Accent background */
            --accent-foreground: oklch(85% 0 0) !important;      /* Accent text */
            --destructive: oklch(65% 0.2 20) !important;         /* Destructive color (red) */
            --border: oklch(30% 0 0) !important;                 /* Border color */
            --input: oklch(30% 0 0) !important;                  /* Input border */
            --ring: oklch(60% 0.1 260) !important;               /* Focus ring */

            /* Sidebar colors */
            --sidebar: oklch(16% 0 0) !important;
            --sidebar-foreground: oklch(90% 0 0) !important;
            --sidebar-primary: oklch(85% 0.1 260) !important;
            --sidebar-primary-foreground: oklch(15% 0 0) !important;
            --sidebar-accent: oklch(25% 0 0) !important;
            --sidebar-accent-foreground: oklch(80% 0 0) !important;
            --sidebar-border: oklch(30% 0 0) !important;
            --sidebar-ring: oklch(60% 0.1 260) !important;

            /* Legacy light theme colors - dark versions */
            --lt-color-gray-100: #1a1a1a !important;
            --lt-color-gray-200: #222222 !important;
            --lt-color-gray-300: #2a2a2a !important;
            --lt-color-gray-400: #333333 !important;
            --lt-color-gray-500: #4d4d4d !important;
            --lt-color-gray-600: #666666 !important;
            --lt-color-gray-700: #999999 !important;
            --lt-color-gray-800: #cccccc !important;
            --lt-color-gray-900: #e6e6e6 !important;
            --lt-color-white: #0a0a0a !important;
            --lt-color-black: #f0f0f0 !important;
            --lt-color-background-light: #1a1a1a !important;
            --lt-color-background-default: #222222 !important;
            --lt-color-background-dark: #2a2a2a !important;
            --lt-color-border-light: #222222 !important;
            --lt-color-border-default: #333333 !important;
            --lt-color-border-dark: #4d4d4d !important;
            --lt-color-text-very-light: #666666 !important;
            --lt-color-text-light: #999999 !important;
            --lt-color-text-default: #cccccc !important;
            --lt-color-text-dark: #e6e6e6 !important;
            --lt-color-overlay-default: #000 !important;
            --lt-color-overlay-dark: #000 !important;
            --lt-color-overlay-transparent: rgba(0, 0, 0, 0.7) !important;
        }

        /* Apply dark theme to body */
        body {
            background-color: var(--background) !important;
            color: var(--foreground) !important;
        }

        /* Ensure all elements respect dark theme */
        * {
            background-color: inherit !important;
            color: inherit !important;
            border-color: var(--border) !important;
        }

        /* Preserve colored elements - only target neutral/white backgrounds */
        .bg-white:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]):not([class*="bg-red"]):not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-purple"]):not([class*="bg-pink"]):not([class*="bg-orange"]):not([class*="bg-cyan"]):not([class*="bg-teal"]):not([class*="bg-indigo"]) {
            background-color: var(--card) !important;
        }

        .bg-gray-100:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]) {
            background-color: var(--muted) !important;
        }

        .bg-gray-200:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]) {
            background-color: #2a2a2a !important;
        }

        .bg-gray-300:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]) {
            background-color: #333333 !important;
        }

        /* Text color adjustments - only for neutral colors */
        .text-black:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: #f0f0f0 !important;
        }

        .text-gray-500:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: var(--muted-foreground) !important;
        }

        .text-gray-600:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: #aaaaaa !important;
        }

        .text-gray-700:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: #bbbbbb !important;
        }

        .text-gray-800:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: #cccccc !important;
        }

        .text-gray-900:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: #dddddd !important;
        }

        /* Border color classes - only for neutral borders */
        .border-gray-200:not([class*="border-red"]):not([class*="border-blue"]):not([class*="border-green"]):not([class*="border-yellow"]):not([class*="border-purple"]):not([class*="border-pink"]):not([class*="border-orange"]):not([class*="border-cyan"]):not([class*="border-teal"]):not([class*="border-indigo"]) {
            border-color: var(--border) !important;
        }

        .border-gray-300:not([class*="border-red"]):not([class*="border-blue"]):not([class*="border-green"]):not([class*="border-yellow"]):not([class*="border-purple"]):not([class*="border-pink"]):not([class*="border-orange"]):not([class*="border-cyan"]):not([class*="border-teal"]):not([class*="border-indigo"]) {
            border-color: #333333 !important;
        }

        /* Input and textarea elements */
        input, textarea, select {
            background-color: var(--muted) !important;
            color: var(--foreground) !important;
            border-color: var(--input) !important;
        }

        input:focus, textarea:focus, select:focus {
            outline: 2px solid var(--ring) !important;
            outline-offset: 2px !important;
        }

        /* Buttons - preserve colored buttons */
        button:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]):not([class*="bg-red"]):not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-purple"]):not([class*="bg-pink"]):not([class*="bg-orange"]):not([class*="bg-cyan"]):not([class*="bg-teal"]):not([class*="bg-indigo"]) {
            background-color: var(--secondary) !important;
            color: var(--secondary-foreground) !important;
            border-color: var(--border) !important;
        }

        button:hover:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]):not([class*="bg-red"]):not([class*="bg-blue"]):not([class*="bg-green"]):not([class*="bg-yellow"]):not([class*="bg-purple"]):not([class*="bg-pink"]):not([class*="bg-orange"]):not([class*="bg-cyan"]):not([class*="bg-teal"]):not([class*="bg-indigo"]) {
            background-color: var(--accent) !important;
            color: var(--accent-foreground) !important;
        }

        /* Cards - preserve colored cards */
        [data-slot="card"]:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]) {
            background-color: var(--card) !important;
            border-color: var(--border) !important;
            color: var(--card-foreground) !important;
        }

        /* Top navigation bar */
        [class*="fixed top-0"] {
            background-color: var(--popover) !important;
            border-bottom-color: var(--border) !important;
        }

        /* Textarea in main content */
        [data-slot="textarea"] {
            background-color: var(--muted) !important;
            color: var(--foreground) !important;
        }

        /* Separator lines */
        [data-orientation="horizontal"] {
            background-color: var(--border) !important;
        }

        /* Preserve icon colors but adjust if needed */
        [class*="lucide"] {
            filter: brightness(0.9) !important;
        }

        /* Hover effects for interactive elements - preserve colored elements */
        .hover\\:bg-accent:hover:not([class*="red"]):not([class*="blue"]):not([class*="green"]):not([class*="yellow"]):not([class*="purple"]):not([class*="pink"]):not([class*="orange"]):not([class*="cyan"]):not([class*="teal"]):not([class*="indigo"]) {
            background-color: var(--accent) !important;
        }

        .hover\\:text-accent-foreground:hover:not([class*="text-red"]):not([class*="text-blue"]):not([class*="text-green"]):not([class*="text-yellow"]):not([class*="text-purple"]):not([class*="text-pink"]):not([class*="text-orange"]):not([class*="text-cyan"]):not([class*="text-teal"]):not([class*="text-indigo"]) {
            color: var(--accent-foreground) !important;
        }

        /* Scrollbar styling */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }

        ::-webkit-scrollbar-track {
            background: var(--muted);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--border);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--accent);
        }
    `;

    // Create and inject the CSS
    const style = document.createElement('style');
    style.textContent = darkModeCSS;
    document.head.appendChild(style);

    // Add a class to the body to indicate dark mode is active
    document.body.classList.add('learnaid-dark-mode');

    // Function to apply dark mode to elements without colored classes
    function applyDarkModeToNeutralElements() {
        // Find all elements with background colors but not colored classes
        const elements = document.querySelectorAll('*');

        elements.forEach(el => {
            const computed = window.getComputedStyle(el);
            const className = el.className || '';

            // Check if element has a class that indicates it's intentionally colored
            const hasColorClass = /red|blue|green|yellow|purple|pink|orange|cyan|teal|indigo|bg-red|bg-blue|bg-green|bg-yellow|bg-purple|bg-pink|bg-orange|bg-cyan|bg-teal|bg-indigo/i.test(className);

            // Only modify elements that don't have intentional color classes
            if (!hasColorClass) {
                // If it has a white background, change to dark
                if (computed.backgroundColor === 'rgb(255, 255, 255)' ||
                    computed.backgroundColor === 'rgba(255, 255, 255, 1)' ||
                    computed.backgroundColor === '#ffffff' ||
                    computed.backgroundColor.toLowerCase() === '#fff') {
                    el.style.backgroundColor = 'var(--card)';
                }

                // If it has a black text, change to light
                if (computed.color === 'rgb(0, 0, 0)' ||
                    computed.color === 'rgba(0, 0, 0, 1)' ||
                    computed.color === '#000000' ||
                    computed.color.toLowerCase() === '#000') {
                    el.style.color = 'var(--foreground)';
                }
            }
        });
    }

    // Apply to initial content
    applyDarkModeToNeutralElements();

    // Set up a MutationObserver to handle dynamically added content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1) { // Element node
                        applyDarkModeToNeutralElements();
                    }
                });
            }
        });
    });

    // Start observing
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();

# About
Client-side dark mode script for the LearnAid platform.
This pretty much does the exact same thing Firefox’s Dark Reader does, it turns LearnAid’s light mode into dark mode.

Here’s a pic of before and after for comparison:



# How to use?
You can either do it the manual way or the lazy way:

## Manual:
 Paste it into the browser console, you can do this by opening developer tools (Ctrl Shift I) and navigating to the console tab. 
Note: Every time you reload the page, you will need to re-paste it into console.

## Lazy:
Get an automated tool like Tampermonkey to do the manual work for you each time. 
Note: For these tools, you’d need to add a “userscript header” like this before the code:
// ==UserScript==
// @name         LearnAid Dark Mode
// @version      2.1
// @description  Complete dark mode for LearnAid.
// @match        *https://learnaid.io/*
// @grant        none
// ==/UserScript=

# Want to edit? 
I’ve added comments everywhere for which colours tweak which elements, so just change the hex codes.

Happy late-night studying!

Also, it goes without saying that this was made for **late night** work, please approach me if you use this during daytime.

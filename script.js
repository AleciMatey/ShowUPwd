// ==UserScript==
// @name         Show your password
// @namespace    https://github.com/AleciMatey/ShowUPwd
// @version      0.1
// @description  Try to double click the password input label.
// @author       You
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // Select all input elements of type "password"
    document.querySelectorAll('input[type="password"]').forEach(input => {
        // Add a double-click event listener to each input
        input.addEventListener('dblclick', function() {
            // Toggle the input type between 'password' and 'text'
            this.type = (this.type === 'password') ? 'text' : 'password';
        });
    });
})();

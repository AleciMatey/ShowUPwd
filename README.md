# ShowUPwd

  _ShowUPwd_ is a lightweight userscript that allows you to toggle the visibility of password inputs on any webpage. By simply double-clicking on any password field, the script changes its type from "password" to "text" (and vice versa), letting you see what you have typed. This can be especially useful for debugging login forms or verifying your password entries in a secure environment.

  ## Features

  - **Universal Application:** Runs on any website.
  - **Toggle Visibility:** Double-click a password input field to switch between masked and plain text.
  - **Lightweight:** Consists of a single, self-contained JavaScript file that does not require any additional libraries.
  - **Easy to Install:** Works with popular userscript managers such as **Tampermonkey** and **Greasemonkey**.
  - **No Special Permissions Required:** Uses standard DOM API with no extra grants.

  ## How It Works

  The script searches the current webpage for all `<input>` elements of type `"password"` and attaches a double-click event listener to each one. When you double-click on a password field, the script toggles the input's type:
  - If the field is of type `"password"`, it becomes `"text"`, making the characters visible.
  - If it is already `"text"`, it reverts to `"password"`, hiding the characters.

  ## Installation

  To use _ShowUPwd_, you need a userscript manager. The following instructions assume you are using [Tampermonkey](https://www.tampermonkey.net/), but similar steps apply to Greasemonkey or other managers.

  ### Using Tampermonkey (Chrome, Firefox, etc.)

  1. **Install Tampermonkey:**  
     If you haven’t already, install Tampermonkey from your browser’s extension store.

  2. **Create a New Script:**
     - Click on the Tampermonkey icon in your browser toolbar.
     - Choose **"Create a new script…"** from the dropdown menu.

  3. **Copy and Paste the Code:**
     - Replace any default code in the editor with the content from the repository’s [file](script.js).
     - Save the script.

  4. **Reload or Visit Any Page:**
     - The script will run automatically on all websites.
     - To test it, navigate to any page with a password input (for example, a login page) and double-click on the password field.

  ### Using the "Raw" File

  Alternatively, you can directly load the script from GitHub:

  1. Go to the [Raw version of the script](https://raw.githubusercontent.com/AleciMatey/ShowUPwd/main/script.js).
  2. Click on **"Install"** in your userscript manager’s prompt.
  3. The script will then be added and activated on all domains.

  ## When to Use This Script

  ShowUPwd is useful in several scenarios:

  - **Debugging and Testing:**  
    When developing or testing websites, you may want to verify that the correct password is being entered without the hassle of using the built-in “show password” toggle.

  - **Personal Use:**  
    If you prefer to quickly verify your password entries on websites that do not provide a native option, this script can provide a temporary solution.

  - **Security Considerations:**  
    Use the script only on trusted devices and networks, as toggling password visibility can expose sensitive information to anyone who may be looking at your screen.

  - **Surely Not At All**
    etc.

  ## Customization

  Because the script is very simple and self-contained, you can modify it to suit your needs.

  ## License

  This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

  ## Contributing

  Contributions, bug reports, and feature requests are welcome. Feel free to open an issue or submit a pull request on GitHub.

  ## Acknowledgments

  - Inspired by the need for a simple and universal solution to toggle password visibility.
  - Thanks to the open-source community for providing tools like Tampermonkey that make customizations like this possible.

# Playwright-practice-typescript

# To install Playwright MCP Server - via VS Code CLI:
- Open terminal in VSCode and input the command:

 ```bash
code --add-mcp '{
  "name": "playwright",
  "command": "npx",
  "args": ["@playwright/mcp@latest"]
}'
``` 

# Verify MCP Server is running:
- After installation, you can check again in VS Code:
1. Open the Command Palette using the shortcut: `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac).
2. Type and select the command: `MCP: List Servers`.
3. Check the list — if `Playwright` appears, it means the server has been successfully installed.
4. You can choose `Start Server` to activate it immediately.

# Additional configuration (optional):
- If needed, you can add other configuration parameters such as:
1. `--headless`: Run the browser in headless mode.
2. `--timeout <ms>`: Set the maximum timeout for commands.
3. `--browser <name>`: Select a specific browser (chromium, firefox, webkit, msedge).

- Refer to the official [Playwright MCP documentation](https://github.com/mcp/microsoft/playwright-mcp) for more information.

# Use Playwright MCP Server:
- After successful installation, you can use Playwright MCP Server in VS Code to:
1. Create and run automated test cases.
2. Integrate with language models like ChatGPT or GitHub Copilot to assist in writing test code.
3. Manage and monitor Playwright sessions directly from VS Code.

- Example create automated test case with `Playwright MCP`:
1. Open Github Copilot in VSCode.
2. Type the prompt:

 ```bash
Explore http://practicetestautomation.com/practice-test-login/, and generate Playwright test to fill username "student" into Username field,fill password "incorrectPassword" into Password field, submit, verify error message is displayed, verify error message text is "Your password is invalid!" and take a screenshot of the result.
Note: Avoid hard code and use dynamic incorrectPassword variable input so the test can be reporduce many times to avoid issue.
``` 
- At that time:
1. Copilot Agent will call `Playwright MCP` to initialize the browser (chromium).
2. Automatically write the corresponding test code.
3. Execute the actual test and return the results (including screenshots if available).

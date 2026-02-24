## February 23, 2026

**What I did:** Setup of the Repo.

**What I learned:** How to use git commands and commit project progress.

**What's next:** Hello world extension tomorrow

**Stuck on:** Nothing yet


## February 25, 2026

**What I did:** Scaffolded the VS Code extension using yo code generator, fixed launch configuration issues that were preventing the extension from loading, got the extension running properly in the Extension Development Host, implemented large code paste detection that logs to the debug console.

**What I learned:** VS Code extension development requires the correct workspace folder to be opened — opening the wrong folder breaks everything silently. The activationEvents field in package.json needs to be set to "*" to load the extension on startup. Running npm run watch in a separate terminal keeps webpack rebuilding automatically on every save. node_modules should never be committed — .gitignore handles this. Git on Windows shows LF/CRLF warnings which are harmless.

**What's next:** Install and test Ollama with DeepSeek Coder locally. Connect the paste detection to Ollama so that when large code is detected, it gets sent to the local model and a contextual question comes back.

**Stuck on:** Launch configuration was the biggest blocker today — the extension wasn't showing in running extensions at all. Solved by running npm run watch separately in its own terminal and opening the exact correct folder in VS Code. Took time but understood why it happened.

**Milestone:** Singularity detected its first code paste today. The core loop exists.
// 'vscode' module contains the VS Code extensibility API
import * as vscode from "vscode";

// Method called when extension is activated,
// which is the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // console.log() will show on "DEBUG CONSOLE"
  console.log('"code-tracker" is active!');

  const disposable = vscode.commands.registerCommand(
    // The commandId parameter must match the command field in package.json
    "code-tracker.helloWorld",
    () => {
      vscode.window.showInformationMessage("Hello World from code-tracker!");
    }
  );

  context.subscriptions.push(disposable);
}

// Method called when extension is deactivated
export function deactivate() {}

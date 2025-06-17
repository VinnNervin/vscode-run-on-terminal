import * as vscode from 'vscode';

let terminal: vscode.Terminal | undefined;

export function activate(context: vscode.ExtensionContext) {
  const runCommand = vscode.commands.registerCommand('runOnTerminal.runFile', async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage('No active file.');
      return;
    }

    const document = editor.document;
    const filePath = document.fileName;
    const fileExt = filePath.split('.').pop();

    const config = vscode.workspace.getConfiguration('runOnTerminal');
    const runners = config.get<Record<string, string>>('commands', {});
    const autoSave = config.get<boolean>('autoSave', true);

    if (!fileExt || !runners[fileExt]) {
      vscode.window.showErrorMessage(`No runner found for extension .${fileExt}`);
      return;
    }

    if (autoSave && document.isDirty) {
      await document.save();
    }

    const runnerCmd = runners[fileExt];
    const command = `${runnerCmd} "${filePath}"`;

    if (!terminal) {
      terminal = vscode.window.createTerminal('Runner');
    }

    terminal.show(true);
    terminal.sendText(command, true);
  });

  vscode.window.onDidCloseTerminal(closed => {
    if (closed === terminal) {
      terminal = undefined;
    }
  });

  context.subscriptions.push(runCommand);
}

export function deactivate() {}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
let terminal;
function activate(context) {
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
        const runners = config.get('commands', {});
        const autoSave = config.get('autoSave', true);
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
function deactivate() { }
//# sourceMappingURL=extension.js.map
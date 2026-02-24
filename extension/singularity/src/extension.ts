import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.showInformationMessage('Singularity is active!');
	console.log('Singularity is active!');
	const changeListener = vscode.workspace.onDidChangeTextDocument((event) => {
		const changes = event.contentChanges;
		if(changes.length === 0){
			return;
		}
		for(const change of changes){
			const text = change.text;
			if(text.length > 50){
				console.log('Large text change detected - possible AI code: ');
				console.log(text);
			}
		}
	});
	context.subscriptions.push(changeListener);
}

export function deactivate(){}
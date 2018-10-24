'use babel';

import { CompositeDisposable } from 'atom';
import md5 from 'md5';

export default {

  subscriptions: null,

  activate(state) {
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'file-id-generator:generate': () => this.generate()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {

  },

  generate() {
    debugger;
    const editor = atom.workspace.getActiveTextEditor();

    if (editor) {
      const [, relativePath] = atom.project.relativizePath(editor.getPath());
      const timestamp = date.getTime();
      const fileHash = md5(relativePath+timestamp);
      const file_id = `${fileHash}`;
      editor.insertText(file_id);
    }
  }
};

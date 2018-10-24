# File ID Generator

Automatically generates an MD5 hash using the selected file's relative path along with the current timestamp. Useful for creating unique ID's for files in your project.

## Description

This is a simple package that inserts text for file identification. The text will replace the current selection with a MD5 hash. You can activate it from the context menu, command palette, using `ctrl-cmd-i` (MacOSX) or `ctrl-windows-i` (Windows).

```html
04c6e90faac2675aa89e2176d2eec7d8
```

## Security Caveats ##

The MD5 hash is insecure and using it to verify anything is ill advised. However, for generating a unique id from a small set of file paths, the MD5 is perfect.

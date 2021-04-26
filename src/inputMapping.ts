
// Dev notes:
// This file lets you map specific shortcuts to behaviors.
// As a convention, 'o' is short for "open". "oe" means "open evernote"
// I like to keep my fingers on the home row when possible. Thats why "oa" is used for "open rubymine"
// Lately I've been relying on the "Window_" applescripts a lot so I mapped those directly to numbers.

// General tips:
// Try not to add too many one or two character shortcuts (you'll get accidental matches when typing)


export default [
  // Layouts
  { shortcut: '1', type: 'applescript', name: 'Window_FocusEvernote' },
  { shortcut: '2', type: 'applescript', name: 'Window_FocusRubymine' },
  { shortcut: '3', type: 'applescript', name: 'Window_SplitRubymineChrome' },
  { shortcut: '4', type: 'applescript', name: 'Window_FocusChrome' },
  { shortcut: '5', type: 'applescript', name: 'Window_SplitRubymineEvernote' },
  { shortcut: '6', type: 'applescript', name: 'Window_FocusITerm' },
  { shortcut: '7', type: 'applescript', name: 'Window_SplitEvernoteChrome' },

  { shortcut: '9', type: 'applescript', name: 'Vscode_Open' },
  { shortcut: '0', type: 'applescript', name: 'Window_Meeting' },

  // Evernote
  { shortcut: 'epaste', type: 'applescript', name: 'Everote_PasteToNewNote' },
  { shortcut: 'oe', type: 'applescript', name: 'Evernote_Open' },

  // Rubymine
  { shortcut: 'oa', type: 'applescript', name: 'Rubymine_Open' },

  // Spotify
  { shortcut: 'prev', type: 'applescript', name: 'Spotify_PreviousSong' },
  { shortcut: 'next', type: 'applescript', name: 'Spotify_SkipSong' },
  { shortcut: 'os', type: 'applescript', name: 'Spotify_Open' },

  // Chrome
  { shortcut: 'cw', type: 'applescript', name: 'Chrome_CloseTab' },
  { shortcut: 'oc', type: 'applescript', name: 'Chrome_Activate' },
  { shortcut: 'ct', type: 'applescript', name: 'Chrome_NewTab' },
  { shortcut: 'crt', type: 'applescript', name: 'Chrome_ReopenTab' },
  { shortcut: 'cho', type: 'applescript', name: 'Chrome_HolmesExtension' },
  { shortcut: 'cmp', type: 'applescript', name: 'Chrome_OpenMyPrs' },
  { shortcut: 'ctp', type: 'applescript', name: 'Chrome_OpenTeamPrs' },

  // VS Code
  { shortcut: 'ov', type: 'applescript', name: 'Vscode_Open' },

  // Zulip
  { shortcut: 'oz', type: 'applescript', name: 'Zulip_Open' },

  // Keyboard 
  { shortcut: 'es', type: 'applescript', name: 'Keyboard_SendEsc' },
]

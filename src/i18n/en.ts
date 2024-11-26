export const en = {
  language: {
    flag: "🇺🇸",
    name: "English",
  },
  home: {
    vanity: "Project started in winter 2015 by Maël",
    title: "Secret Santa Planner",
    explanation: [
      "Welcome! This tool will help you arrange your holiday gift exchanges. Simply list all participants, and we'll randomly assign pairings according to the rules you set.",
      "You'll receive a unique link for each participant, which you'll have to share yourself (via email, Slack, etc). [<exampleLink>Example link</exampleLink>]",
      "No accounts, no emails, no hassle, and all hosted on <githubLink>GitHub Pages</githubLink> with no backend!",
    ].map(line => `<p>${line}</p>`).join(''),
    exampleLink: "Example link",
    errors: {
      needMoreParticipants: "Need at least 2 participants!",
      invalidPairs: "Couldn't generate valid pairs with the current rules. Please check the rules and try again."
    }
  },
  pairing: {
    title: "Your Secret Santa Assignment",
    assignment: "Welcome, <name/>! You have been picked to get a gift for:",
    loading: "Loading...",
    error: "Failed to decrypt the message. The link might be invalid.",
    startYourOwn: "Start a Secret Santa!"
  },
  participants: {
    title: "Participants",
    addPerson: "Add Person",
    generatePairs: "Generate Pairings",
    enterName: "Enter participant name",
    editRules: "Edit rules",
    removeParticipant: "Remove participant",
    rulesCount_one: "{{count}} rule set",
    rulesCount_other: "{{count}} rules set"
  },
  rules: {
    title: "Rules for {{name}}",
    mustBePairedWith: "Must be paired with",
    mustNotBePairedWith: "Must not be paired with",
    selectParticipant: "Select another participant",
    removeRule: "Remove rule",
    addMustRule: "Force a Pairing",
    addMustNotRule: "Prevent a Pairing",
    cancel: "Cancel",
    saveRules: "Save Rules"
  },
  links: {
    title: "Links to Share",
    warningParticipantsChanged: "Warning: Participants or rules have changed since the last time these links were generated.",
    resetAssignments: "Regenerate Pairings",
    shareInstructions: "Only share those links with their corresponding gift giver",
    exportCSV: "Export as CSV",
    copySecretLink: "Copy Secret Link",
    linkCopied: "Added to clipboard!",
    for: "for"
  },
  settings: {
    title: "Settings",
    instructions: "Additional Instructions",
    instructionsPlaceholder: "e.g., budget, date, location...",
    instructionsHelp: "They will be shown to all participants on their assignment page. Keep it short: it increases the length of the links."
  },
}; 
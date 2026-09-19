# Connect this site to Firebase

1. Create a Firebase project and add a **Web app** in the Firebase console.
2. Create a **Cloud Firestore** database.
3. In **Authentication → Sign-in method**, enable **Email/Password**.
4. Copy the web configuration object from **Project settings → Your apps** into `firebase-config.js`, replacing `null`.
5. Create exactly one admin account in **Authentication → Users → Add user**. The website does not offer public account creation; only accounts added here can sign in.
6. In Firebase Authentication, copy the admin account's UID. Replace `PASTE_YOUR_CREATOR_UID_HERE` in `firestore.rules` with it, then paste/deploy those rules in **Firestore Database → Rules**.
7. Sign in again and save any edit. The site writes two documents:
   - `sites/una-yaha/public/content` — public pages only; no wallet, client contact, or private queue notes.
   - `sites/una-yaha/private/studio` — the full Creator data, including Wallet.

Keep the Firestore rules restrictive. Do not use an `allow read, write: if true` rule: it would expose private wallet and client data.

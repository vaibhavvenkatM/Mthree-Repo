📌 Git Cheat Sheet Summary

🔹 Basic Commands

git init – Initialize a new repo

git clone <repo_url> – Clone a repo

git status – Show changes

git add <file> – Stage changes

git commit -m "message" – Commit changes

🔹 Branching & Merging

git branch <name> – Create branch

git checkout <name> – Switch branch

git merge <name> – Merge branch

🔹 Remote Repositories

git remote add origin <url> – Link to remote repo

git push origin <branch> – Push changes

git pull origin <branch> – Pull latest changes

🔹 Undoing Changes

git reset --soft HEAD~1 – Undo commit (keep changes)

git reset --hard HEAD~1 – Undo commit (discard changes)

git revert <commit_id> – Create a commit that undoes changes

🔹 Stashing Changes

git stash – Temporarily save changes

git stash list – Show saved changes

git stash apply – Restore stash

git stash drop – Delete stash

🔹 Git Rebase (vs Merge)

git rebase main – Apply commits on top of another branch (clean history)

git rebase -i HEAD~3 – Interactive rebase (edit history)

git rebase --abort – Cancel rebase

git rebase --continue – Continue after resolving conflicts

Use Rebase: When you want a clean commit history

Use Merge: When you need to preserve all branch history

🔹 Git Stash

git stash – Save uncommitted changes

git stash list – View stashes

git stash pop – Restore & delete stash

git stash clear – Delete all stashes

🔹 Forking vs Cloning

Feature

Forking

Cloning

Ownership

Your GitHub account

Local copy only

Usage

Contributing to open source

Team/personal work

Changes

Use pull requests

Direct push (if access)

🔹 Git Reset vs Git Revert

Scenario

git reset

git revert

Remove commits completely

✅ Yes

❌ No

Keep history clean

❌ No

✅ Yes

Undo on shared branches

❌ No

✅ Yes

git reset --hard HEAD~1 – Deletes commit & changes

git revert HEAD~1 – Creates a new commit that undoes changes

💡 Quick Tips✔️ Pull before pushing to avoid conflicts✔️ Use meaningful commit messages✔️ Avoid committing sensitive data✔️ git log --oneline --graph – Visualize commit history

This summary provides a quick reference to essential Git commands and best practices. 🚀


# Feature Branches

In [the real world], it's common to create a branch for each new *feature* (story/card/piece of work). Once development on the feature has been completed, this branch is merged, then deleted.

## Examples

The examples will use work from a Git repository called "branch-demo".

## Creating a Feature Branch

At the moment before work begins on a feature, a branch should be created with a name representing the work to be done.

First (as we should frequently), we verify status:

```bash
brian@Fafhrd:~/demo/branch-demo$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
brian@Fafhrd:~/demo/branch-demo$
```
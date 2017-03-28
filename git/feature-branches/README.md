# Feature Branches

In [the real world], it's common to create a branch for each new *feature* (story/card/piece of work). Once development on the feature has been completed, this branch is merged, then deleted. The [Understanding the GitHub Flow](https://guides.github.com/introduction/flow/) GitHub Guide gives a good overview of how and why we use branches in this context.

The examples will use work from a Git repository called "branch-demo".

## Creating a feature branch

At the moment before work begins on a feature, a branch should be created with a name representing the work to be done. In my examples, I'll create a branch called "create-homepage".

First (as we should frequently), we verify status:

```bash
brian@Fafhrd:~/demo/branch-demo$ git status
On branch master

Initial commit

nothing to commit (create/copy files and use "git add" to track)
brian@Fafhrd:~/demo/branch-demo$
```

Now we need to create a branch and check it out (point HEAD at the branch, so changes will be committed to the branch). (Note: you will not be able to create a branch until something has been committed to master. This is because the master branch doesn't yet exist (no history), so there's nothing to branch *from*.) We can do this the long way, using the `branch` command followed by `checkout`:

```bash
brian@Fafhrd:~/demo/branch-demo$ git branch create-homepage
brian@Fafhrd:~/demo/branch-demo$ git checkout create-homepage
Switched to branch 'create-homepage'
```

But usually it's done in one step, using `checkout` with the `-b` option, like this:

```bash
brian@Fafhrd:~/demo/branch-demo$ git checkout -b create-homepage
Switched to a new branch 'create-homepage'
```

However we do it, `status` will indicate our current branch afterwards:

```bash
brian@Fafhrd:~/demo/branch-demo$ git status
On branch create-homepage
nothing to commit, working directory clean
```

## Committing work to the branch

In the example here, I've created an `index.html` file and want to commit it to my branch. This is just the standard commit process, detailed here to establish context:

```bash
brian@Fafhrd:~/demo/branch-demo$ git add src/main/resources/static/index.html
brian@Fafhrd:~/demo/branch-demo$ git status
On branch create-homepage
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   src/main/resources/static/index.html

brian@Fafhrd:~/demo/branch-demo$ git commit -m "created homepage"
[create-homepage fe3af81] created homepage
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 src/main/resources/static/index.html
```

## Switching between branches

To switch between branches, we `checkout` the branch that we want to work in:

```bash
brian@Fafhrd:~/demo/branch-demo$ git checkout create-homepage 
Switched to branch 'create-homepage'
```

### Shortcut: switching back to previous branch

Use `-` for the branch name.

```bash
brian@Fafhrd:~/demo/branch-demo$ git checkout -
Switched to branch 'master'
```

## Pushing changes

Assuming the `origin` remote has been defined, your first push will need to establish the upstream branch using the `--set-upstream` option:

```bash
brian@Fafhrd:~/demo/branch-demo$ git push --set-upstream origin create-homepage
Username for 'https://github.com': btforsythe
Password for 'https://btforsythe@github.com': 
Counting objects: 10, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (10/10), 638 bytes | 0 bytes/s, done.
Total 10 (delta 0), reused 0 (delta 0)
To https://github.com/btforsythe/branch-demo
 * [new branch]      create-homepage -> create-homepage
Branch create-homepage set up to track remote branch create-homepage from origin.
```

Your results should indicate that a new branch was created and it will be tracking the remote branch. After your upstream has been established, just push your branch as usual.

## Creating a pull request (PR)

You'll create and merge pull requests from GitHub. Navigate to your repository, select your branch, then hit the **New pull request** button next to it.

![Creating a pull request](new-pull-request.png)

This will take you to **Open a pull request**. You'll usually be merging to `master`, so this should be selected as *base:* and your branch should be selected as *compare:*.

![Open a pull request](open-a-pull-request.png)

The title for your PR will default to the most recent commit comment. Enter a title and a description, then click **Create pull request**.

## Listing branches

Your current branch is indicated with `*` (here, that's `master`):

```bash
brian@Fafhrd:~/demo/branch-demo$ git branch
  create-homepage
* master
```

## Renaming (moving) a branch

We rename (move) branches using the `-m` option. In this example, I want to fix a typo in my branch name:

```bash
brian@Fafhrd:~/demo/branch-demo$ git branch
* create-hoempage
  master
brian@Fafhrd:~/demo/branch-demo$ git branch -m create-hoempage create-homepage
brian@Fafhrd:~/demo/branch-demo$ git branch
* create-homepage
  master
```

## Deleting a branch

Usually, you'll merge and delete a feature branch from GitHub. If you decide to stop work on a branch or clean up your local branches, you can delete a branch:

```bash
brian@Fafhrd:~/demo/branch-demo$ git branch -d create-homepage 
Deleted branch create-homepage (was d16b826).
```

## References

- [git-branch documentation](https://git-scm.com/docs/git-branch) (or type `git help branch`)
- [git-checkout documentation](https://git-scm.com/docs/git-checkout) (or type `git help checkout`)
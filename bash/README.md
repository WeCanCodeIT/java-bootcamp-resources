# Git Bash

## The Bash Prompt

The bash prompt will display your current directory (`~/wcci/code/example` in the example below). It will also display your current branch (`(master)` in the example below).

```bash
WeCanCodeIT@WeCanCodeIT-69 MINGW64 ~/wcci/code/example (master)
$
```

## Common Commands

### Listing directory (aka folder) contents (`ls`)

|command	|description
|-------	|-----------
|`ls`		|simple listing of directory contents
|`ls -l`	|the `-l` switch gives a **long** listing of directory contents, including date, permissions, etc
|`ls -a`	|the `-a` switch lists **all** directory contents, including those starting with a period("."), which bash considers hidden
|`ls -al`	|combination of the `-a` and `-l` switches, a long listing of all contents<br>*Mnemonic tip:* `ls -al` gives you "all" the info. `ls -all` works just as well and may be easier to remember. (Just don't confuse it with `-a`.)

### Print Working Directory (`pwd`)

Prints the current (working) directory

|command	|description				|location		|output
|-------	|-----------				|---------------|--------------
|`pwd`		|prints current directory	|`~/wcci/code`	|`/c/Users/WeCanCodeIT/wcci/code`

### Change Directory (`cd`)

|command	|description				|location before|location after
|-------	|-----------				|---------------|--------------
|`cd`		|change to home directory	|`~/wcci/code`	|`~`	
|`cd ..`	|change to parent directory	|`~/wcci/code`	|`~/wcci`
|`cd code`	|change to specified directory|`~/wcci`|`~/wcci/code`

### Open Windows File Explorer (`explorer`)

|command 		|target				|location		|opens File Explorer window pointed to…
|-----------	|-----------		|---------------|---------------------------------------
|`explorer .`	|current directory	|`~/wcci/code`	|`/c/Users/WeCanCodeIT/wcci/code`
|`explorer ..`	|parent directory	|`~/wcci/code`	|`/c/Users/WeCanCodeIT/wcci`
|`explorer code`|specified directory|`~/wcci`		|`/c/Users/WeCanCodeIT/wcci/code`

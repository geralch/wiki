---
title: Install Oh My Posh
sidebar_label: Oh My Posh
tags:
  - windows
  - terminal
  - powershell
  - oh-my-posh
---

As I worked in Linux whit [zsh](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH) and [Oh-my-zsh](https://ohmyz.sh/) I searched for some tool that allowed me to customize my PowerShell as in linux, I found [Oh My Posh](https://ohmyposh.dev/) as the alternative for PowerShell of Oh-my-zsh.

Here are the steps to follow to install Oh My Posh and customize the PowerShell.

## Install Dependencies
We need to install all the modules need it for run Oh my Posh
First we need to install posh-git
```
Install-Module posh-git
```
Then we install PSReadLine
```
Install-Module PSReadLine -AllowPrerelease -Force
```
## Install Oh My Posh
Then we can use chocolatey to install Oh My Posh with this command.
```
choco install oh-my-posh
```
This will install the tool with a default theme.

Then we will need to install the fonts used in Oh My Posh, for this you can use the next command
oh-my-posh font install

It will show you the fonts available, chose which you like.  
![powershell ohmyposh fonts](/screenshots/powershell-oh-my-posh-fonts.png)  

And the make sure to set the PowerShell with that font. [See how](change-font)

## Add to PowerShell profile
Now we will need to add the dependencies and configurations in the PowerShell profile file so all is ready when we open the terminal.
If this step you can close the Admin PowerShell and use the normal one.

First open the file with this command
```
notepad $PROFILE
```

If you don't have a profile file created yet you can created it with this command
```
New-Item -Path $profile -Type File -Force
```

First will need to add the posh-git module to the file.
```
Import-Module posh-git
```
We close and open again the terminal and now we can check all the info about Oh My Posh.

[Here](https://ohmyposh.dev/docs/themes) are all the available themes that Oh My Posh offers. 
If you want to check how the themes will look like before installing you can runt his command and it will show you all the themes.

```
Get-PoshThemes
```

Now we should open again the profile file and add the theme we want to render, it his example is will be [M365Princess](https://github.com/JanDeDobbeleer/oh-my-posh/blob/main/themes/M365Princess.omp.json)
```
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\M365Princess.omp.json" | Invoke-Expression
```
Now when you open the terminal it will look like this if you choses the M365Princess theme.  
![powershell ohmyposh final](/screenshots/powershell-oh-my-posh-final.png)

## Sources
[Oh My Posh](https://ohmyposh.dev/)  
[Oh My Posh Fonts](https://ohmyposh.dev/docs/installation/fonts)  
[PowerShell profile](https://lazyadmin.nl/powershell/powershell-profile/)
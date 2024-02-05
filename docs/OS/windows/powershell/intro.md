---
title: PowerShell
sidebar_label: PowerShell
tags:
  - windows
  - terminal
---

Here is all the info I know about Windows PowerShell.
As I always used linux to code, I tried to give a chance to Windows also, without using the WSL, I think the PowerShell has potential and can be a very powerful tool.
Some topics are bigger that others so some will be here and other will have their own page.

- [Upgrade to PowerShell 7](#upgrade-to-powershell-7)
- [Install Chocolatey](#install-chocolatey)
- [Change Font](change-font)
- [Install Oh My Posh](oh-my-posh)

## Upgrade to PowerShell 7
I was using the PowerShell 5 that comes with windows 11, and I noticed that every time my terminal opened this message appeared:

![powershell upgrade notice](/screenshots/powershell-upgrade-error.png)
So I install the new version o PowerShell with this simple code. right 

```
winget install --id Microsoft.Powershell --source winget
```

## Install Chocolatey
To install chocolatey first make sure you are using the PowerShell as and Admin.  
![powershell upgrade notice](/screenshots/powershell-run-as-admin.png)  
Then we need to make sure that the Get-ExecutionPolicy is not Restricted. We will run the next command on the terminal.
```
Get-ExecutionPolicy
```

If it returns Restricted, we should change it to RemoteSigned.

```
Set-ExecutionPolicy RemoteSigned 
```

Then we should run the next command.

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

When it finishes and if there are not error you can check if it was correctly installed using the next command to check the version installed.

```
choco -v
```
It will return the version number.

## Sources
[Install PowerShell 7](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.4)  
[Install Chocolatey](https://chocolatey.org/install)  
  
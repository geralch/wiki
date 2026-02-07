---
title: Install RVM and Ruby on Linux
sidebar_label: Install RVM and Ruby
tags:
  - ruby
  - rvm
  - linux
---

This guide explains how to install [RVM](https://rvm.io/) (Ruby Version Manager) and Ruby on Linux.

## Prerequisites

Install the packages required to build Ruby. On **Debian/Ubuntu**:

```bash
sudo apt update
sudo apt install -y curl gpg gcc g++ make libssl-dev libreadline-dev zlib1g-dev libyaml-dev libffi-dev
```

On **Fedora/RHEL**:

```bash
sudo dnf install -y curl gcc gcc-c++ make openssl-devel readline-devel zlib-devel libyaml-devel libffi-devel
```

On **Arch Linux**:

```bash
sudo pacman -S base-devel openssl readline zlib libyaml libffi
```

## Install RVM

1. **Install the RVM signing key** (recommended for security):

```bash
gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

2. **Install RVM** (stable version):

```bash
curl -sSL https://get.rvm.io | bash -s stable
```

3. **Load RVM** in your current shell:

```bash
source ~/.rvm/scripts/rvm
```

To load RVM automatically in new shells, ensure your shell config (e.g. `~/.bashrc` or `~/.zshrc`) contains:

```bash
source ~/.rvm/scripts/rvm
```

The installer usually adds this for you. If not, add it manually and run `source ~/.bashrc` (or your config file).

## Install Ruby

1. **List available Ruby versions** (optional):

```bash
rvm list known
```

2. **Install the latest stable Ruby**:

```bash
rvm install ruby
```

Or install a specific version, for example 3.3:

```bash
rvm install 3.3
```

3. **Set the default Ruby** (if you have multiple versions):

```bash
rvm use 3.3 --default
```

4. **Verify the installation**:

```bash
ruby --version
gem --version
```

## Quick reference

| Task              | Command                    |
|-------------------|----------------------------|
| Install RVM       | `curl -sSL https://get.rvm.io \| bash -s stable` |
| Load RVM          | `source ~/.rvm/scripts/rvm` |
| Install Ruby      | `rvm install ruby`         |
| Install specific  | `rvm install 3.3`         |
| Set default       | `rvm use 3.3 --default`   |
| List installed    | `rvm list`                |
| List available    | `rvm list known`          |

## Troubleshooting

- **"RVM is not a function"**  
  Run `source ~/.rvm/scripts/rvm` or open a new terminal after ensuring your shell config loads RVM.

- **Build errors when installing Ruby**  
  Install the prerequisite dev packages for your distro (see Prerequisites above) and try again.

- **Permission errors**  
  Install RVM in your user directory (as in this guide); avoid using `sudo` with RVM.

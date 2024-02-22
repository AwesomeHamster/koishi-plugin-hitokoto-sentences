# Contributing

Welcome to the contributing guide of this project. This guide will help you to contribute to this project.

## Table of Contents

<!-- AUTO-GENERATED-CONTENT:START (TOC) -->

- [Development Notes](#development-notes)
- [What Can I Contribute?](#what-can-i-contribute)
  - [Reporting Issues](#reporting-issues)
  - [Submitting Pull Requests](#submitting-pull-requests)
  - [Improving Documentation](#improving-documentation)
  - [Donating](#donating)
  <!-- AUTO-GENERATED-CONTENT:END -->

## Development Notes

Although this project is a valid Koishi Plugin, it is different from other plugins.

The repository of this project only contains the source code for the plugin. The sentence bundle is not included in this repository.
Instead, we use a [GitHub Actions](https://github.com/AwesomeHamster/koishi-plugin-hitokoto-sentences/blob/master/.github/workflows/sync.yml)
to sync the sentence bundle from [hitokoto-osc/sentences](https://github.com/hitokoto-osc/sentences).
Thus, the version in `package.json` file is set to a dummy `0.0.0` version, then it would be updated by the GitHub Actions to the latest version of the sentence bundle.

## What Can I Contribute?

It is always welcome to contribute to this project. You could contribute by:

- [Reporting issues](#reporting-issues)
- [Submitting pull requests](#submitting-pull-requests)
- [Improving documentation](#improving-documentation)
- [Donating](#donating)

### Reporting Issues

If you find any issues, please report them to [GitHub Issues](https://github.com/AwesomeHamster/koishi-plugin-hitokoto-sentences/issues). Please make sure to include the following information:

- The version of this plugin you are using.
- The version of Koishi you are using.
- The version of Koishi Desktop / Node.js you are using.
- The steps to reproduce the issue.
- The expected behavior.
- The actual behavior.

### Submitting Pull Requests

If you want to contribute code to this project, please follow these steps:

- Fork this repository.
- Create a new branch from the `master` branch.
- Make your changes.
- Commit your changes.
- Push your changes to your fork.
- Create a pull request to the `master` branch of this repository.

### Improving Documentation

If you want to improve the documentation, please follow these steps:

- Follow the steps of [Submitting Pull Requests](#submitting-pull-requests).
- Make your changes to the `README.md` file.
- Commit your changes.
- Create a pull request to the `master` branch of this repository.

### Donating

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F3Q8DNU)

If you want to donate to this project, please buy me a coffee !

Click the button above to donate via Ko-fi or [Afdian (爱发电 in Chinese)](https://afdian.net/a/ff14_hamster).

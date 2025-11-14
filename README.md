<div align="center">

[![GitHub Release][release-shield]][release]

[![Maintainer][maintainer-shield]][maintainer]
[![GitHub Activity][activity-shield]][activity]
[![License][license-shield]][license]

</div>

[release-shield]: https://img.shields.io/github/release/droans/mass-queue-types.svg?style=for-the-badge
[release]: https://github.com/droans/mass-queue-types/releases
[license-shield]: https://img.shields.io/github/license/droans/mass-queue-types?style=for-the-badge
[license]: LICENSE
[maintainer-shield]: https://img.shields.io/badge/maintainer-droans-blue.svg?style=for-the-badge
[maintainer]: https://github.com/droans
[activity-shield]: https://img.shields.io/github/last-commit/droans/mass-queue-types?style=for-the-badge
[activity]: https://github.com/droans/mass-queue-types/commits/main

# Music Assistant Queue Actions Types

Typescript types and interfaces for the [Music Assistant Queue Actions](https://github.com/droans/mass_queue)

# Table of Contents
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Usage](#usage)
  - [Service Schemas](#service-schemas)
  - [Response Schemas](#response-schemas)
  - [Websocket Commands](#websocket-commands)
- [FAQs](#faqs)
  - [I would like to sponsor you/the card and/or pay to add a new feature!](#i-would-like-to-sponsor-youthe-card-andor-pay-to-add-a-new-feature)
  - [I have other questions or issues not addressed](#i-have-other-questions-or-issues-not-addressed)
- [Contributing](#contributing)
- [Developing](#developing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

1. Add `@droans/mass-queue-actions` to your package.json file or run `npm i @droans/mass-queue-actions`

# Usage

## Service Schemas
All service schemas are available as PARTIAL (service data only) or FULL (entire service call) schemas. Full will only work when calling `hass.callWS` due to the function schemas.

**Use FULL when...**
* You are calling `hass.callWS`.
* You want complete validation, including the `type`, `domain`, `service`, and (if applicable), `return_response`.

**Use PARTIAL when...**
* You are calling `hass.callService`.
* You only want to validate the service data being passed.

### Available service schemas

All `mass_queue` services have schemas available:
* `get_group_volume`
* `get_queue_items`
* `get_recommendations`
* `move_queue_item_down`
* `move_queue_item_next`
* `move_queue_item_up`
* `play_queue_item`
* `remove_queue_item`
* `send_command`
* `set_group_volume`
* `unfavorite_current_item`

## Response Schemas
There are only a few services in Music Assistant Queue Actions which can return a service response. All of these are available.

Like with Service Schemas, these are available as PARTIAL (response data only) or FULL (data inside the `response` key).

### Available service response schemas:
* `get_group_volume`
* `get_queue_items`
* `get_recommendations`

## Websocket Commands
Music Assistant Queue Actions supports a handful of WebSocket commands which aren't available as service calls. All of them have their service and response schemas available.

### Available WebSocket schemas:
* `mass_queue/download_and_encode_image`
  * **NOTE**: No response schema is available since this only returns a string
* `mass_queue/encode_images`
* `mass_queue.get_info`

# FAQs

## I would like to sponsor you/the card and/or pay to add a new feature!

While I appreciate it, I am not going to accept any funding.

When someone funds development, there's often an implied belief that the card will keep being developed or the maintainer will provide new projects. I want to be able to drop development on this card when I feel that it is complete. I do not want people to feel misled, cheated, or that I should prioritize their wants over anything else. This card is something I created for myself

## I have other questions or issues not addressed

Check the [repository issues](https://github.com/droans/mass-queue-types/issues) to see if your question has already been asked. If not, feel free to [submit a new issue](https://github.com/droans/mass-queue-types/issues/new). 

# Contributing

I am happy to accept any new contributions to this repository. Feel free to fork and submit pull requests.

# Developing

This card uses `corepack` for development and relies on Node 22.

### Clone the repository:
```bash
git clone https://github.com/droans/mass-queue-types
```

### Set up the environment
Switch to Node 22:
```bash
nvm use 22
```

Install `corepack`:
```bash
npm install corepack
```

Install dependencies:
```bash
yarn install
```
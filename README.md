# [Game Code Extractor Website](https://heartlog.github.io/Hoyocodes/)

A web application that fetches and displays redeemable codes for various HoYoverse games from a public API, presenting them as clickable links for easy redemption.



![Screenshot](https://raw.githubusercontent.com/heartlog/Hoyocodes/refs/heads/main/assets/screenshot.jpg)

## Features

- **Multi-Game Support**: Displays codes for:
  - Genshin Impact
  - Honkai: Star Rail
  - Zenless Zone Zero
- **Automatic Updates**: Fetches the latest codes from the API on page load
- **Clickable Links**: Each code is a direct link to the game's redemption page
- **Responsive Design**: Works on both desktop and mobile devices
- **Clean UI**: GitHub-inspired interface with clear organization

## How It Works

1. The page loads and makes a request to `https://db.hashblen.com/codes`
2. The API returns JSON data containing all available codes
3. The website organizes codes by game and displays them in sections
4. Each code becomes a clickable link that opens the game's redemption page

## Installation

No installation needed! This is a static website that can be:

1. Hosted on GitHub Pages
2. Run locally by simply opening the HTML file
3. Deployed to any static web hosting service

## Usage

Simply visit the hosted website. The codes will automatically load and display. Click any code to be taken directly to its redemption page.

## API Response Structure

The website processes JSON data in this format:

```json
{
  "hsr": [
    {
      "code": "STARRAILGIFT",
      "description": "Reward description",
      "added_at": 1724055693
    }
  ],
  "zzz": [...],
  "genshin": [...],
  "retcode": 0,
  "previous_update": 1746345076,
  "latest_update": 1746348678
}
```
## Made by 

![https://enka.network/u/1813660397/](https://raw.githubusercontent.com/heartlog/Hoyocodes/refs/heads/main/assets/card.png)

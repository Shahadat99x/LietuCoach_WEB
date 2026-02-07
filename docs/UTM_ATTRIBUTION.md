# UTM Attribution Guide

We use UTM parameters to track where our Play Store installs come from.

## Base Logic

All Calls-to-Action (CTAs) that link to the Play Store must append the following parameters:

- `utm_source`: `website` (Fixed)
- `utm_medium`: `cta` (Fixed)
- `utm_campaign`: `launch` (Default, can be changed via code)
- `utm_content`: `[placement_id]` (Variable)

## Placement IDs (`utm_content`)

| Placement ID    | Location                                                                      |
| :-------------- | :---------------------------------------------------------------------------- |
| `home_hero`     | The main "Get it on Google Play" button in the Hero section.                  |
| `home_mid`      | The secondary CTA section ("Ready to start speaking?") in the middle of Home. |
| `footer`        | The Play Store badge in the global footer.                                    |
| `nav`           | The "Get App" button in the Desktop and Mobile header/navbar.                 |
| `mobile_sticky` | The persistent bottom bar shown only on mobile devices.                       |
| `start_page`    | CTAs on the `/start` (7-Day Roadmap) page.                                    |
| `resource_cta`  | The `ContentCTA` component embedded in Resource guides.                       |
| `download_page` | The main button on the `/download` landing page.                              |
| `not_found`     | The CTA on the 404 page.                                                      |

## How to Test

1. Hover over any "Get App" button.
2. Verify the URL looks like:
   `https://play.google.com/store/apps/details?id=com.lietucoach.app&utm_source=website&utm_medium=cta&utm_campaign=launch&utm_content=footer`
3. Click the link and ensure standard Google Play attribution can parse these.

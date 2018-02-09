#!/bin/bash

# ID=2 sh scripts/json/change-password.sh

curl "http://tic-tac-toe.wdibos.com/games/25030" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=BAhJIiViYTZmNTU3ZDc3YTI0MDcwZjAzOGU5NDcxMmUyZWIwNAY6BkVG--f8dc6b3509bfe132ff210fddad2bb1063eaa2711" \
  --data '{
    "game": {
      "cell": {
        "index": 2,
        "value": "o"
      },
      "over": false
    }
  }'

echo

  #
  # curl "http://tic-tac-toe.wdibos.com/games/25030" \
  #   --include \
  #   --request GET \
  #   --header "Content-Type: application/json" \
  #   --header "Authorization: Token token=BAhJIiU2ZTZiZjU1YzhkYTcyMWEyYTFjMDM4NzE2OTAxMGY5YwY6BkVG--e3e3d5e42a333a892dbce1b0dd7675bd73e50798" \

#!/bin/sh
#!/bin/bash

# sh scripts/json/sign-up.sh

curl "http://tic-tac-toe.wdibos.com/games" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo

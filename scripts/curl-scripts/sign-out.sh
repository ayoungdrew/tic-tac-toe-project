#!/bin/bash

# ID=2 sh scripts/sign-out.sh

curl "http://tic-tac-toe.wdibos.com/sign-out/{$ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo

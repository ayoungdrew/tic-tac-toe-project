# !/bin/bash

# sh scripts/json/sign-up.sh

curl "http://tic-tac-toe.wdibos.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo

#
# curl "http://tic-tac-toe.wdibos.com/sign-up" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "'"ackguy@gmail.com"'",
#       "password": "'"wdi"'",
#       "password_confirmation": "'"wdi"'"
#     }
#   }'
#
  # curl "http://tic-tac-toe.wdibos.com/sign-up" \
  #   --include \
  #   --request POST \
  #   --header "Content-Type: application/json" \
  #   --data '{
  #     "credentials": {
  #       "email": "'"adoungdrew@gmail.com"'",
  #       "password": "'"wdi"'",
  #       "password_confirmation": "'"wdi"'"
  #     }
  #   }'
#
#
#   HTTP/1.1 201 Created
#   Server: nginx/1.4.6 (Ubuntu)
#   Date: Thu, 08 Feb 2018 18:01:09 GMT
#   Content-Type: application/json; charset=utf-8
#   Transfer-Encoding: chunked
#   Connection: keep-alive
#   X-Frame-Options: SAMEORIGIN
#   X-XSS-Protection: 1; mode=block
#   X-Content-Type-Options: nosniff
#   ETag: W/"448c90553d5e6c436753ad3d1f035d75"
#   Cache-Control: max-age=0, private, must-revalidate
#   X-Request-Id: 46d651d3-62ef-4d43-9acd-36b36317db3c
#   X-Runtime: 0.214731
#   Vary: Origin
#
#   {"user":{"id":2089,"email":"ackguy@gmail.com"}}~/wdi/projects/tic-tac-toe-project

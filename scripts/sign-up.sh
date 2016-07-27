#!/bin/bash

#curl "http://localhost:3000/sign-up" \
# curl "http://httpbin.org/post" \
#   --include \
#   --request POST \
#   --data-urlencode ""
#
# # --header "Content-Type: application/x-www-form-urlencoded"
#
# # data output from curl doesn't have a trailing newline
# echo
#!/bin/bash

API="http://tic-tac-toe.wdibos.com/games/sign-up"
#API="http://httpbin.org/post"

curl ${API} \
  --include \
  --request POST \
  --data-urlencode "credentials[email]=${EMAIL}" \
  --data-urlencode "credentials[password]=${PASSWORD}" \
  --data-urlencode "credentials[password_confirmation]=${PASSWORD}"

# --header "Content-Type: application/x-www-form-urlencoded"

# data output from curl doesn't have a trailing newline
echo

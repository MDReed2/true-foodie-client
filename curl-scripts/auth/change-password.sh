# Run the sign-in script first
#  EMAIL=m@example.com PASSWORD=m sh curl-scripts/auth/sign-in.sh

# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh
# TOKEN=278d8a1405b600c8c9294c0ec487fcc4 OLD_PW=m NEW_PW=r sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords":{
      "old" : "'"${OLD_PW}"'",
      "new" : "'"${NEW_PW}"'"
    }
  }'

echo

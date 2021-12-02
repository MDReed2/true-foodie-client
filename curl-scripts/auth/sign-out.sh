#TOKEN=278d8a1405b600c8c9294c0ec487fcc4 sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo

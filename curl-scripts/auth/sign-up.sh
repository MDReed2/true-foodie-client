# EMAIL=m@example.com PASSWORD=m sh curl-scripts/auth/sign-up.sh

# if our password ocnfirmation was different
# $ EMAIL=wa@example.com PASSWORD=w PASSWORD_CONFRIMATION=w  sh curl-scripts/auth/sign-up.sh;

# https://git.generalassemb.ly/ga-wdi-boston/jquery-ajax-token-auth

# don't use a password you use for any real websites!
curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials":{
      "email" : "'"${EMAIL}"'",
      "password" : "'"${PASSWORD}"'",
      "password_confirmation" : "'"${PASSWORD}"'"

    }
  }'

echo

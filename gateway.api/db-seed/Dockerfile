FROM mongo

COPY seed.json /seed.json
CMD mongoimport --host mongo --db test --collection users --type json --file /seed.json --jsonArray
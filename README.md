## Kaiku-vimpain
Kaiuttaa aiemmin ajetut kutsut. Toimii siis mock-palveluna.


### Confit
Ks [routing.js](./routing.js)

### Ajaminen
```
# Käynnistys tallennustilassa (palauttaa vastauksen ja tallentaa tiedostoon)
node proxy.js record

# Käynnistys mock-tilassa (palauttaa tiedostosta vastauksen tai 404)
node proxy.js mock

# Käynnistys proxy-tilassa (proxyttaa kyselyn ja palauttaa ilman tallennusta)
node proxy.js

# Palvelu käynnistyy localhost:3000 porttiin.
http://localhost:3000/jsonplaceholder/todos/1
```
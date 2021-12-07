<h2 align="center">
    Mercafacil API
</h2>
<h2 align="center">
    <img src=".github/diagram.png" alt="Image of web mobile friendly landing page" width="1000">
</h2>

### :running: Como rodar

Com docker-compose:

- Execute no terminal:
```
docker-compose build
```
- Em seguida:
```
docker-compose up -d
```

### :busts_in_silhouette: Salvando um novo contato

### Cliente Macapá:

- Login: POST para http://localhost:3000/auth com o json abaixo:
```
{
	"username": "macapa",
	"password": "123456"
}
```
- Salvar contato: POST para http://localhost:3000/contacts com o token obtido no login e o json abaixo:
```
{
	"nome": "Marina Rodrigues",
	"celular": "5541996941919"
}
```
- Obter contatos salvos: GET para http://localhost:3000/contacts com o token obtido no login:
```
[
  {
    "id": 1,
    "name": "MARINA RODRIGUES",
    "cellphone": "+55 (41) 99694-1919"
  }
]
```

### Cliente Varejão:

- Login: POST para http://localhost:3000/auth com o json abaixo:
```
{
	"username": "varejao",
	"password": "123456"
}
```
- Salvar contato: POST para http://localhost:3000/contacts com o token obtido no login e o json abaixo:
```
{
	"nome": "Marina Rodrigues",
	"celular": "5541996941919"
}
```
- Obter contatos salvos: GET para http://localhost:3000/contacts com o token obtido no login:
```
[
  {
    "id": 1,
    "name": "Marina Rodrigues",
    "cellphone": "5541996941919"
  }
]
```



## Backend - Prisma

### About
This is the backend repo of my sport/volleyball manager mobile app (react native). This aims to help a volleyball coach to manage its players during the season.
[See exemple of the stack](https://github.com/prisma/prisma-examples/tree/latest/typescript/rest-express)

Possible features:
- Presences
- Players info (injuries, win rate, height, age, ...)
- Match info (team starting six and changes)
- Scouting

### Docker:
Run the DB
```shell
docker-compose up
```
### Express
Run the Express service
```shell
yarn run dev
```

### Prisma:
- Run Prisma studio
```shell
yarn prisma studio
```
- Seed the DB
```shell
yarn prisma db seed
```
- Using Prisma Migrate 
```shell
yarn prisma migrate dev
```

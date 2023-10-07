## Backend - Prisma

### About
This is the backend repo of my sport/volleyball manager mobile app (react native). This aims to help a volleyball coach to manage its players during the season.

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

### Prisma:
- Run Prisma studio
```shell
y prisma studio
```
- Seed the DB
```shell
y prisma db seed
```
- Using Prisma Migrate 
```shell
y prisma migrate dev
```

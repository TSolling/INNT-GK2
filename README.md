
# Privacy App GK2

Hej INNT & Co.

Dette repo bygger videre på den grundlæggende idé fra GK1, men er fra et teknisk perspektiv helt nyt. Følgende har ændret sig siden sidst:

- Skiftet fra Javascript til Typescript
- Lavet 3 nye sider, hvilket resultere i totalt 6 sider. (Ift. formalia som kun forventer 5, skal [onboarding]/index.tsx ignoreres.)
- Implementeret brug af native device module: 'Expo-device'
- Implementeret brug af AsyncStorage
- Lavet funktionel searchbar



## Demo

En video-gennemgang af appen kan findes i root dir.

## Områder som opfylder GK2 krav 


| Krav             | Path                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Appen skal have 5 sider | ../[onboarding]/selectedApps.tsx, ../(tabs)/home.tsx, ..(tabs)/profile.tsx, ../(tabs)/search.tsx, ../[appQuery]/guide.tsx     | 
| Appen skal have navigation | ../(tabs)/_layout.tsx |
| Appen skal have knapper |../[onboarding]/selectedApps.tsx,  ../(tabs)/profile.tsx  | 
| Async Storage (Collection) | libs/deviceInfo.ts |
| Async Storage (Fetching) | ../(tabs)/home.tsx| 
| Searchbar | ../(tabs)/home.tsx|
| Collection af device info |libs/deviceInfo.ts | 
| Database hokus-pokus | libs/appwrite.ts|


## Opsætning af miljø

Clone the project


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npx expo start
```

Jeg har denne gang ladet API-keys blive, så i burde kunne kører den uden problemer. :]

### Troubleshooting - "Error: EMFILE: too many open files" 
Under udviklingen af GK2 fremkom en EMFILE error når man prøvede at opstarte Expo serveren. Denne fejl kom i sammenhæng med en npm install af alle dependencies.

Fejlen er sidenhen blevet løst, men hvis den skulle opstå igen når i prøver at clone projeketet ned, kan dette løses ved at øge File Descriptor Limit:

Kør i terminalen
```bash
  ulimit -n 4096
```

Alternativt kan i genstarte Watchman, som burde følge med i jeres dependencies:

```bash
  watchman watch-del-all
```



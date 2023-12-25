# Build and run Docker image
```bash
docker build -t react .
```
remove scripts from package.json 
```bash
docker run -v .:./app -p 3000:3000 react tail -f /dev/null
```
inside conainer run
```bash
npm install
```
readd the scripts to package.json 
```bash
npm run start
```
http://localhost:3000/
# Issues
- if hotloading not working in react
    - change start script in package.json to 
    ```bash
    "scripts": {
        "start": "WATCHPACK_POLLING=true react-scripts start",
    ```